"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * `basePath` lets the navbar work on sub-pages: on the landing page the links
 * are plain hashes, on /privatuma-politika they need to point back to "/".
 */
export function Navbar({ basePath = "" }: { basePath?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px]",
        "transition-all duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-b border-black/5 bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-full items-center justify-between px-5 md:px-8">
        <a
          href={basePath || "#top"}
          className="rounded-btn text-xl font-bold tracking-tight text-primary md:text-2xl"
        >
          irvieta
        </a>

        <a
          href={`${basePath}#pieraksts`}
          className={cn(
            "inline-flex h-11 items-center justify-center rounded-btn px-5",
            "bg-primary text-sm font-semibold text-white shadow-neu-sm",
            "transition-all duration-200 motion-reduce:transition-none",
            "hover:bg-primary-dark hover:shadow-neu active:shadow-neu-inset",
          )}
        >
          Pievienojies
        </a>
      </div>
    </nav>
  );
}
