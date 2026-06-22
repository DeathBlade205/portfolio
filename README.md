# Sadat Sagar — Portfolio

Personal portfolio site for Sadat Sagar, a Full Stack Developer based in Sydney.
Built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Structure

```
app/
  layout.tsx            # metadata, fonts, SEO/OpenGraph
  page.tsx              # assembles the page sections
  globals.css           # theme tokens, animations, ambient background
  lib/data.ts           # single source of truth for all content
  components/
    Nav.tsx             # sticky nav + mobile menu (client)
    Hero.tsx
    About.tsx
    ExperienceSection.tsx
    Projects.tsx
    Skills.tsx          # skills + education
    Contact.tsx
    Reveal.tsx          # scroll-reveal wrapper (IntersectionObserver)
    SectionHeading.tsx
    icons.tsx
public/
  Sadat_Sagar_Resume.pdf
```

## Editing content

All copy (bio, experience, projects, skills, education, links) lives in
[`app/lib/data.ts`](app/lib/data.ts) — edit there and every section updates.
To refresh the downloadable resume, replace `public/Sadat_Sagar_Resume.pdf`.

## Deployment

Deploys to Vercel. `next.config.ts` pins the workspace root to this directory
to avoid resolving a mismatched Next version from a parent lockfile.
