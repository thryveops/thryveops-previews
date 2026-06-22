import Link from "next/link";
import { Logo } from "./logo";
import { ButtonLink } from "./ui/button";
import { SpeedLines } from "./speed-lines";
import { brand, ctas } from "@/lib/brand";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./icons";

const shopLinks = [
  ctas.inventory,
  ctas.preApproved,
  ctas.trade,
  { label: "Payment Calculator", href: "/financing#calculator" },
];

const companyLinks = [
  { label: "About / Why Buy", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark border-t border-ink-700">
      {/* CTA strip */}
      <div className="relative overflow-hidden border-b border-ink-700">
        <SpeedLines
          tone="red"
          className="pointer-events-none absolute -left-6 top-1/2 h-24 w-64 -translate-y-1/2 opacity-15"
        />
        <div className="shell flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-h3 font-extrabold">Ready to find your next car?</h2>
            <p className="mt-2 max-w-md text-silver">
              Get pre-approved in minutes — all credit welcome — or tell us what
              you&apos;re looking for and we&apos;ll do the hunting.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={ctas.preApproved.href}>{ctas.preApproved.label}</ButtonLink>
            <ButtonLink href={ctas.contact.href} variant="outline">
              {ctas.contact.label}
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo tone="dark" />
          <p className="eyebrow mt-5 text-red">{brand.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver">
            {brand.legalName} — an independent used-car dealership serving
            Clearwater, Largo, and greater Tampa Bay. Straightforward buying,
            no pressure, all credit types welcome.
          </p>
        </div>

        <nav aria-label="Shop">
          <h3 className="eyebrow text-silver-dim">Shop</h3>
          <ul className="mt-4 space-y-2.5">
            {shopLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-silver transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="eyebrow text-silver-dim">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-silver transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-silver-dim">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2.5 font-bold text-white hover:text-red"
              >
                <PhoneIcon className="h-4 w-4 text-red" />
                <span className="tabular">{brand.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={brand.emailHref}
                className="inline-flex items-center gap-2.5 text-silver hover:text-white"
              >
                <MailIcon className="h-4 w-4 text-red" />
                {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-silver">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
              <span>
                {brand.serviceArea.slice(0, 2).join(" · ")}
                {" & greater Tampa Bay, FL"}
                {/* TODO(client): replace with street address when build-out is complete */}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-silver">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
              <span>Opening soon — currently by appointment</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal / disclaimer bar */}
      <div className="border-t border-ink-700">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-silver-dim md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-silver">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-silver">
              Terms
            </Link>
            <Link href="/faq" className="hover:text-silver">
              FAQ
            </Link>
          </div>
        </div>
        <div className="shell pb-8">
          <p className="max-w-3xl text-[0.7rem] leading-relaxed text-silver-dim/80">
            Motion Fleet Group is not a Buy-Here-Pay-Here dealer and does not
            provide in-house financing. Financing is arranged through third-party
            lender and credit-union partners; all financing is subject to credit
            approval and lender terms. Vehicle availability, pricing, and offers
            subject to change. {/* TODO(client): confirm any specific guarantees/warranty language */}
          </p>
        </div>
      </div>
    </footer>
  );
}
