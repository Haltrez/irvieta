"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { getServiceClient } from "@/lib/supabase";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

const ROLES = ["sender", "driver", "both"] as const;

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Lūdzu, ievadi e-pastu.")
    .max(254, "Šis e-pasts ir par garu.")
    .email("Šķiet, šis e-pasts nav pareizs. Pārbaudi vēlreiz?"),
  role: z.enum(ROLES).catch("both"),
  source: z.string().trim().max(64).optional(),
});

/*
 * Best-effort in-memory rate limit. It resets whenever a serverless instance
 * recycles and isn't shared between instances, so treat it as a speed bump for
 * naive scripts, not a real defence. If signup spam ever becomes a problem,
 * move this to Upstash or a Postgres-side counter.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    // Opportunistic cleanup so the map can't grow without bound.
    if (hits.size > 5_000) {
      hits.forEach((v, k) => {
        if (now > v.resetAt) hits.delete(k);
      });
    }
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function joinWaitlist(formData: FormData): Promise<WaitlistState> {
  // Honeypot: a real person never sees or fills this field.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Pierakstīts!" };
  }

  const parsed = schema.safeParse({
    email: formData.get("email") ?? "",
    role: formData.get("role") ?? "both",
    source: formData.get("source") ?? undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Kaut kas nesanāca. Pamēģini vēlreiz.",
    };
  }

  const { email, role, source } = parsed.data;
  const headerList = headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return {
      status: "error",
      message: "Mazliet par ātru. Uzgaidi brīdi un pamēģini vēlreiz.",
    };
  }

  const supabase = getServiceClient();

  if (!supabase) {
    // Keys aren't wired up yet — say so plainly instead of throwing.
    console.warn(
      "[waitlist] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set — signup was not stored.",
    );
    return {
      status: "error",
      message: "Pieraksts vēl nav pieslēgts. Pamēģini, lūdzu, nedaudz vēlāk.",
    };
  }

  const { error } = await supabase.from("waitlist").insert({
    email: email.toLowerCase(),
    role,
    source: source ?? "landing",
    // Vercel sets this header at the edge; empty locally.
    ip_country: headerList.get("x-vercel-ip-country"),
  });

  if (error) {
    // 23505 = unique_violation. Already on the list is good news, not an error.
    if (error.code === "23505") {
      return {
        status: "success",
        message: "Tu jau esi sarakstā! Sazināsimies, kad būsim gatavi.",
      };
    }

    console.error("[waitlist] insert failed:", error.message);
    return {
      status: "error",
      message: "Kaut kas nesanāca no mūsu puses. Pamēģini, lūdzu, vēlreiz.",
    };
  }

  return {
    status: "success",
    message: "Pierakstīts! Sazināsimies ar tevi, kad būsim gatavi.",
  };
}
