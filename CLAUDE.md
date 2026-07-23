# thryveops-previews

Private client preview mockups built by Thryve Operations. Every route under
`src/app/<client-slug>/` is one prospect's preview, served at
`preview.thryveops.com/<client-slug>`. All previews are `noindex` (set in the
root layout).

Stack: Next 16 (App Router) · React 19 · Tailwind v4 · framer-motion 12.
Deploys via the Vercel GitHub App on push to `main` — never `vercel deploy --prod`.

## Motion conventions

Animation in this repo comes from `@/components/motion`. Never write a raw
`framer-motion` call inside a page file — import a primitive, or add a new
primitive to the kit.

### Non-negotiables

- Import durations and easing from `@/components/motion/tokens`. Never hardcode.
- Entrance duration 600–800ms. Never exceed 1000ms.
- Entrance travel 26px. Never exceed 40px. Large travel reads as templated.
- Every animated component needs a `useReducedMotion()` branch. No exceptions.
- Stagger between siblings: 60–90ms. Above 120ms the group feels broken.
- Scroll reveals fire once (`viewport={{ once: true }}`). Never replay.

These numbers are not aspirational — they are transcribed from the motion set
already shipping on the four tattoo previews. They exist to stop drift, not to
introduce a new style.

### What is installed

Only the framer-motion primitives. **`gsap`, `@gsap/react`, and `lenis` are
deliberately NOT dependencies of this repo.**

Available from `@/components/motion`:

    Reveal · HeroMedia · Marquee · ParallaxBand

### What is deliberately not installed

- **Lenis smooth scroll / a `(motion)` route group.** Evaluated and declined.
  It is desktop-wheel-only (`syncTouch: false`), and wiring it drags gsap core
  *and* ScrollTrigger onto every page in the group — the per-component
  tree-shaking commonly claimed for this pattern does not hold once a shared
  layout imports the scroll provider. Scroll-hijacking is also a conversion
  gamble on client previews. Do not add it without an explicit decision.
- **PinnedSection (gsap ScrollTrigger).** The one effect framer-motion has no
  equivalent for. If a build genuinely needs a pinned scroll-through section,
  add `gsap @gsap/react` **for that build only** and run it against native
  scroll. Do not introduce Lenis to get it.

If you add an animation dependency, you are doing something wrong unless it was
discussed first.

### Route conventions

Every preview is a plain route at `src/app/<client-slug>/page.tsx`. There are no
route groups. Pages that do not import from `@/components/motion` ship no
animation runtime at all.

Bias toward the plain, fast build. The current book is overwhelmingly local
service businesses — barbershops, tattoo, cafes, detailing, lawn care, roofing,
charters, nail spas — whose buyers need a phone number in under two seconds on a
bad connection. Motion is the exception, not the default.

Never put a trades or emergency-service client behind heavy motion.

### Tattoo builds — Editorial Ink standard

Tattoo previews follow the Editorial Ink standard (bangbangforever.com is the
permanent reference): restrained type scale, uniform grids, centered section
composition, generous whitespace.

**No video heroes.** `HeroMedia` takes a `still` only. This overrides any
general guidance that vibe-driven verticals should get video — it is a
deliberate standard, not an oversight.

Live examples: `tampa-tattoo-co`, `ironblood-tattoos`, `las-vegas-tattoo-co`,
`angry-raven-tattoo`.

### Hero video (when a build does use it)

- Never serve hero video from `/public`. Use a CDN URL (Bunny/Cloudflare/Mux).
- Always pass a `still` — it is both the poster and the mobile fallback.
- Under 4 MB, H.264, 1080p max, no audio track.

      ffmpeg -i in.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 \
        -preset slow -movflags +faststart out.mp4

### Adding to the kit

If an effect is needed twice, it belongs in `src/components/motion/`, not copied
between page folders. Add it to the barrel export in `index.ts`.

### Do not

- Do not refactor shipped previews. Existing pages are delivered work.
- Do not add animation libraries beyond framer-motion.
- Do not animate above the fold on page load — it delays LCP. Reveal on scroll.

## Before pushing

- Run `npm run build` locally. A TypeScript error fails the whole Vercel
  deploy, not just one route. Next 16 typed routes will also fail the build on a
  `<Link>` to a route that does not exist.
- Stage `public/images/<client-slug>/` in the same commit as the route that
  references it. Shipping a route without its images has happened twice.
- After deploy, `curl -I` the production image URLs to confirm they resolve.

## Contact

The only Thryve contact address is **contact@thryveops.com**. `hello@` does not
exist — never use it.
