# CLAUDE.md

Guidance for working in this repository.

## Project

Personal portfolio site for **Sadat Sagar** — a full-stack developer in Sydney.
Single source of design truth is the user's **Claude Design** project "Creating a
portfolio" (`Home.dc.html`, `Work.dc.html`, `About.dc.html`); the React app is a
faithful port of those files. When the design changes there, re-read the relevant
`*.dc.html` (via the `claude_design` / DesignSync MCP, project id
`7f916b6e-ab91-40ef-8dd0-9516affa5340`) and update the matching page.

Stack: **Next.js 15** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4**.

## Commands

```bash
npm run dev      # dev server (Turbopack) at http://localhost:3000
npm run build    # production build (static export of all routes)
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite. Verify changes with `npm run build` (must exit 0) and by
loading the pages.

## Structure

```
app/
  layout.tsx            # fonts (next/font), metadata/OG, viewport themeColor, no-flash theme <script>
  globals.css           # theme tokens, @theme mapping, keyframes, base styles (in @layer base!)
  page.tsx              # Home  (/)
  work/page.tsx         # Work  (/work)
  about/page.tsx        # About (/about) — incl. profile "spec card" (no portrait photo)
  opengraph-image.tsx   # branded OG card (next/og ImageResponse, build-time)
  sitemap.ts, robots.ts # SEO routes
  lib/data.ts           # ALL site content (single source of truth)
  components/
    Nav.tsx             # sticky nav; `active?: "work" | "about"` highlights tab
    Footer.tsx          # inverted footer (links + socials + resume), every page
    Hero.tsx, Marquee.tsx, Work.tsx   # Home sections
    ProjectMedia.tsx    # (client) screenshot w/ placeholder fallback + sizes
    ThemeToggle.tsx     # (client) dark/light toggle
    LiveClock.tsx       # (client) live Sydney time
public/
  work/{opulent,nexus,commerce}.png   # project screenshots (static)
  Sadat_Sagar_Resume.pdf              # linked from About buttons + Footer
```

## Editing content

**All copy lives in `app/lib/data.ts`** — never hardcode text in components.
- `profile` — name, role, tagline, email, phone, socials, resume path.
- `featuredProjects` — the 3 cards on Home.
- `workProjects` — detailed entries on `/work` (description + ROLE/STACK/… meta).
- `capabilities`, `stackTools`, `background`, `aboutIntro`, `aboutBody` — `/about`.

Note: site content follows the Claude Design narrative (commerce/client work), which
intentionally differs from the résumé PDF. Keep them aligned to the design, not the PDF.

## Design system

Editorial / brutalist. Tokens are CSS variables in `globals.css`, mapped to Tailwind
utilities via `@theme inline` (use `bg-paper`, `text-ink`, `border-line`, `text-mut`,
`text-accent`, etc. — do not hardcode hexes in components).

- **Light (default):** paper `#f2f0e9`, ink `#16150f`, surf `#e8e5da`, line `#d8d5cb`, mut `#76736a`.
- **Dark:** paper `#131210`, ink `#efece2`, surf `#1d1b17`, line `#2c2a24`, mut `#8f8c82`.
- **Accent (both):** electric blue `#2b27ff`.
- The **footer always inverts** (bg = ink, text = paper); use `paper/60` and `paper/15`
  for its secondary text/borders so it works in both themes.
- **Fonts** (self-hosted via `next/font`): Space Grotesk = `font-sans` (body + bold display),
  Instrument Serif italic = `font-serif` (display accents, subtitles), Space Mono = `font-mono`
  (eyebrows, labels, tags).

## Conventions

- **Theme:** `data-theme` attribute on `<html>`. The inline script in `layout.tsx` sets it
  pre-paint (no flash) from `localStorage.theme` ?? system preference; default light.
  `ThemeToggle` flips it and persists.
- **Animations:** classes `sg-spin`, `sg-marquee`, `sg-pulse`, `sg-rise` (keyframes in
  `globals.css`). `@media (prefers-reduced-motion: reduce)` disables all animation — keep it
  that way for any new motion.
- **Screenshots:** `ProjectMedia` renders `<img src>`; on error (or missing file) it shows a
  styled placeholder, so dropping a file at the data's `image` path makes it appear
  automatically. Captures were made with
  `curl "https://image.thum.io/get/width/1280/wait/12/<live-url>" -o public/work/<name>.png`.
- **`"use client"`** only where needed (Nav toggle, theme, clock, media fallback). Pages and
  sections are Server Components.

## Gotchas

- **Workspace root pinning** — `next.config.ts` sets `outputFileTracingRoot: __dirname`.
  A stray `/home/sadat/pnpm-lock.yaml` + `node_modules/next@15.5.11` otherwise makes Next infer
  `/home/sadat` as the root and resolve a mismatched Next/SWC version, failing the build with
  `createClientModuleProxy`. Don't remove this.
- **Don't `rm -rf .next` while a dev server is running** — the running Turbopack process keeps
  touching `.next` and 500s; and a prior `next build` (webpack) output can confuse a subsequent
  `next dev` (Turbopack). When switching, stop dev first, then `rm -rf .next`.
- **`package.json` churn** — npm reorders keys / pins TypeScript during builds; harmless.
- **Custom CSS must stay inside `@layer base`** in `globals.css`. Tailwind v4 puts utilities in
  `@layer utilities`, and *unlayered* author CSS beats all layers — a bare `a{color:inherit}`
  once silently overrode every `text-*` utility on links (invisible button text on dark pills).
- **`npm run lint` is not configured** (interactive ESLint setup prompt). The build's type
  check is the verification gate.
- **Screenshots ARE possible** despite snap Chromium being broken: use the Playwright cache
  binary `~/.cache/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell`
  with `--headless --disable-gpu --no-sandbox --screenshot=<out> --window-size=390,3200 --hide-scrollbars <url>`.
  For dark theme, drive it over CDP (`--remote-debugging-port`) and set `localStorage.theme`.
- The OG image (`app/opengraph-image.tsx`) hardcodes the light-theme hexes (CSS vars don't
  exist there) and draws the ✶ as inline SVG — the glyph isn't in the OG renderer's font.

## Deployment

Vercel, App Router, fully static. Target domain: `sadatmd.vercel.app`.
