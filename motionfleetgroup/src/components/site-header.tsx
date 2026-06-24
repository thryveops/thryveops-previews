"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ButtonLink } from "./ui/button";
import { brand, nav, ctas } from "@/lib/brand";
import { PhoneIcon, ChatIcon, MenuIcon, CloseIcon } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`surface-dark sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-700 bg-ink/95 backdrop-blur-md"
          : "border-transparent bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <div className="shell flex h-[var(--header-h,4.5rem)] items-center justify-between gap-4">
        <Logo tone="dark" />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-[0.82rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-white" : "text-silver hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <a
            href={brand.phoneHref}
            className="hidden items-center gap-2 font-display text-sm font-bold tracking-tight text-white hover:text-red md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4 text-red" />
            <span className="tabular">{brand.phone}</span>
          </a>
          <a
            href={`sms:+17275196068`}
            className="hidden h-10 w-10 items-center justify-center rounded-sm border border-silver/30 text-silver transition-colors hover:border-white hover:text-white sm:inline-flex"
            aria-label="Text us"
            title="Text us"
          >
            <ChatIcon className="h-[18px] w-[18px]" />
          </a>
          <ButtonLink
            href={ctas.preApproved.href}
            size="sm"
            className="whitespace-nowrap max-sm:px-2 max-sm:text-xs"
          >
            {ctas.preApproved.label}
          </ButtonLink>

          {/* Mobile call + menu */}
          <a
            href={brand.phoneHref}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-red text-white md:hidden"
            aria-label={`Call ${brand.phone}`}
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-silver/30 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-ink-700 bg-ink transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="shell flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink-700/60 py-3.5 font-display text-base font-semibold uppercase tracking-[0.1em] text-silver hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href={ctas.preApproved.href} size="md" className="w-full">
                {ctas.preApproved.label}
              </ButtonLink>
              <ButtonLink
                href={ctas.trade.href}
                variant="outline"
                size="md"
                className="w-full"
              >
                {ctas.trade.label}
              </ButtonLink>
              <a
                href={brand.phoneHref}
                className="mt-1 inline-flex items-center justify-center gap-2 font-display text-base font-bold text-white"
              >
                <PhoneIcon className="h-4 w-4 text-red" />
                <span className="tabular">{brand.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
