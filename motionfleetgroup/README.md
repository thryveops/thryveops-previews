# Motion Fleet Group — Website

Launch-ready marketing + lead-generation site for **Motion Fleet Group LLC**, an
independent used-car dealership serving Clearwater, Largo, and greater Tampa Bay, FL.

Built per `CLAUDE.md` (the project brief / source of truth).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (brand tokens in `src/app/globals.css`)
- React 19 Server Actions for form handling
- Self-hosted Google fonts (Archivo + DM Sans)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also typechecks)
```

## Design system

- **Dark, chrome-accented brand shell** (home, about, financing, trade, contact, FAQ,
  legal). **Light inventory + vehicle-detail pages** so photos read clean — per brief §4.
- Brand tokens (`--color-red`, `--color-ink`, `--color-silver`, etc.) live in
  `globals.css`. Surfaces: `.surface-dark` / `.surface-light`.
- Recurring motifs: speedometer arc + speed-lines (`src/components/speed-lines.tsx`),
  spec-sheet tabular numerals.

## Where to change things (swap points)

| Need | File |
| --- | --- |
| Business facts (phone, email, address, hours, social) | `src/lib/brand.ts` |
| Logo (currently a CSS/SVG wordmark) | `src/components/logo.tsx` · drop real assets per `public/logos/README.md` |
| **Lead delivery (email + SMS)** | `src/lib/leads.ts` → `deliverLead()` (TODO blocks for Resend + Twilio). Recipients via env (`.env.example`). |
| **Inventory source** (mock → DealerCenter / manual) | `src/lib/inventory/source.ts` → `getInventorySource()`. UI never changes. |
| Sample inventory data | `src/lib/inventory/mock-data.ts` |
| FAQ content (also feeds FAQ schema) | `src/lib/faq.ts` |
| SEO / JSON-LD (AutoDealer + FAQ) | `src/components/structured-data.tsx` |

## Status / v1 scope

- **Inventory** is in "coming soon" mode with a notify form + a clearly-labeled *preview*
  of the listing/filter experience driven by sample data. Flip `MockSource.live` to `true`
  (or return a real source) to switch to live inventory; the UI, sitemap, and detail pages
  light up automatically.
- **Lead forms** (pre-approval, trade, vehicle inquiry, test drive, contact, inventory
  notify) all post to one validated Server Action and currently log the lead server-side.
  Wire Resend + Twilio in `deliverLead()` to send real email/SMS.
- **Address, hours, map** show an "opening soon / by appointment" state until confirmed.

## Outstanding (search the code for `TODO(client)`)

Logo transparent/SVG assets · physical address + hours · DealerCenter feed method ·
pre-approval flow type · social handles · lender partner logos · price-display prefs ·
analytics (GA4/Meta Pixel) · instant trade valuation · attorney review of Privacy/Terms.
See `CLAUDE.md` §14 Open Questions.
