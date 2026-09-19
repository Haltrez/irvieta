import type { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/**
 * Shared chrome for the legal pages. They live outside the landing page's
 * section flow, so the navbar and footer get basePath="/" to point their
 * anchors back home.
 */
export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  /** Human-readable date, e.g. "2026. gada 19. septembris". */
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar basePath="/" />
      <main className="px-5 pb-20 pt-[120px] md:px-8 md:pb-28 md:pt-[152px]">
        <article className="mx-auto w-full max-w-3xl">
          <a
            href="/"
            className="rounded text-sm font-medium text-primary transition-colors hover:text-primary-dark motion-reduce:transition-none"
          >
            ← Atpakaļ uz sākumu
          </a>

          <h1 className="mt-6 text-[2rem] font-bold leading-tight tracking-tight text-ink md:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">Spēkā no {updatedAt}</p>

          <div className="legal-prose mt-10">{children}</div>
        </article>
      </main>
      <Footer basePath="/" />
    </>
  );
}
