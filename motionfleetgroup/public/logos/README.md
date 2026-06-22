# Logo assets — Motion Fleet Group

Drop the client logo files in this folder using these **exact filenames**. The
`<Logo />` component (`src/components/logo.tsx`) references them by these names,
so naming them correctly is all that's needed — no code changes.

| Filename | What it is | Where it's used |
| --- | --- | --- |
| `logo-chrome-dark.png` | Chrome/metallic MFG on black (Image 1) | Hero / feature areas on dark |
| `logo-flat-dark.png` | Flat red + light-silver on black (Image 2) | Header & footer on dark |
| `logo-glow-dark.png` | Red "glow" version on black (Image 3) | Optional accent / social cards |
| `logo-chrome-light.png` | **MISSING** — chrome version on white/transparent | Light sections |
| `logo-mark.svg` | **REQUESTED** — vector/transparent mark | Crisp scaling, favicon, OG |

## ⚠️ Still needed from the client

All three provided files sit on a **solid black background** (not transparent).
That works on dark sections but boxes awkwardly on light ones. Request:

1. A **transparent PNG** of the chrome lockup, and/or
2. An **SVG** of the logo (ideal — scales perfectly, small file, used for favicon + OG image).

Until those arrive, light sections use a clean CSS wordmark fallback built into
`<Logo />`, and the dark logo is used on dark panels.

## Image sizing note

The provided lockups include the phone number and BUY•SELL•TRADE baked in, which
is too detailed for a small header. The `<Logo />` component is built to also work
with a **compact mark-only** version if the client can supply just the "MFG" badge
without the phone/tagline — save it as `logo-mark-dark.png` / `logo-mark-light.png`.
