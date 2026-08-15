# Farza Shahzad — Portfolio

A personal portfolio site with a **brutalist-editorial** aesthetic: a light "paper" canvas, near-black ink, a single burnt-orange accent, oversized type, hard hairline rules, and numbered sections. Flat by design — no gradients, no glows.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

🔗 **Live:** [farza-shahzad.vercel.app](https://farza-shahzad.vercel.app) <!-- update if the domain differs -->

## Overview

A single-page site composed of stacked sections:

| # | Section | Notes |
|---|---------|-------|
| — | **Hero** | Oversized stacked wordmark, meta bar, statement, grayscale→color portrait, tech ticker |
| 01 | **About** | Editorial lead paragraph + hard-ruled stat grid |
| 02 | **Skills** | Capability pillars + "other tools" tag set |
| 03 | **Experience** | Career index list with hover-invert rows, plus education & leadership |
| 04 | **Projects** | Filterable index list (All / Flutter / Full Stack / Side Quests) |
| 05 | **Contact** | Direct-contact links — WhatsApp, email, LinkedIn, GitHub (pre-filled) |

The `/skills`, `/experience`, `/projects`, and `/contact` routes are thin redirects to the matching anchors on the homepage, so deep links keep working.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** (App Router) | Framework & routing |
| **React 18** | UI |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling (design tokens in `tailwind.config.js`) |
| **Framer Motion** | Scroll / reveal animations |
| **Keystatic** | Git-backed CMS for site content (`/keystatic`) |
| **Vercel Analytics** | Traffic insights |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# install
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # lint
```

## Project Structure

```
portfolioWebsite/
├── app/
│   ├── layout.tsx            # Root layout (Navbar, Footer, Analytics)
│   ├── page.tsx              # Home — reads content, composes all sections
│   ├── globals.css           # Theme tokens, display type, utilities
│   ├── keystatic/            # CMS admin UI route
│   ├── api/keystatic/        # CMS API route handler
│   ├── skills/page.tsx       # → redirect to /#skills
│   ├── experience/page.tsx   # → redirect to /#experience
│   ├── projects/page.tsx     # → redirect to /#projects
│   └── contact/page.tsx      # → redirect to /#contact
├── components/
│   ├── Navbar.tsx            # Fixed top bar with numbered nav
│   ├── Hero.tsx              # Hero / wordmark
│   ├── About.tsx             # About + stats
│   ├── Skills.tsx            # Skill pillars + tools
│   ├── Experience.tsx        # Career timeline / index
│   ├── Projects.tsx          # Filterable project index
│   ├── Contact.tsx           # Contact section — direct-contact links
│   ├── SectionHeading.tsx    # Shared numbered section header
│   └── Footer.tsx            # Footer wordmark + links
│   └── SiteChrome.tsx        # Hides navbar/footer on the /keystatic admin routes
├── content/                  # Editable content (JSON, managed by Keystatic)
│   ├── projects.json
│   ├── experience.json
│   ├── skills.json
│   ├── education.json
│   └── volunteer.json
├── lib/
│   ├── categories.ts         # Project categories, shared by schema + filter tabs
│   └── content.ts            # Build-time content reader + derived stats
├── keystatic.config.ts       # CMS schema and storage mode
├── public/                   # Static assets (portrait, CV PDF)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Editing Content

Content is managed with [Keystatic](https://keystatic.com), a git-backed CMS. Run
`npm run dev` and open **<http://localhost:3000/keystatic>** for an admin UI with forms
and drag-to-reorder over:

- **Projects** — name, description, tech, category, link
- **Experience** — role, company, date, bullets, tech
- **Skills** — the three capability pillars, plus the "Other Tools" tag set
- **Education** — degree, school, date, CGPA (also feeds the CGPA stat in About)
- **Leadership** — the volunteer cards under Experience

Saves write plain JSON to [`content/`](content/), which you commit like any other change.
The three headline numbers in About are derived automatically — project and experience
counts come from the list lengths, so they never go stale.

On the deployed site, `/keystatic` runs in GitHub mode: log in with GitHub and your edits
become commits to this repo, which triggers a Vercel redeploy. See
[CMS setup](#cms-setup) for the one-time configuration.

Other quick edits (still hardcoded in components):

- **Nav & section names:** [`components/Navbar.tsx`](components/Navbar.tsx)
- **Hero wordmark:** [`components/Hero.tsx`](components/Hero.tsx)
- **Contact details & socials:** [`components/Contact.tsx`](components/Contact.tsx), [`components/Footer.tsx`](components/Footer.tsx)
- **CV download:** replace `public/Farza_Shahzad_CV.pdf` (linked from the Navbar)

## Theming

The design is driven by three tokens in **[`tailwind.config.js`](tailwind.config.js)**:

```js
colors: {
  paper:  '#e9e5db', // background
  ink:    '#14130f', // text / borders
  accent: '#e8590c', // single accent
}
```

Change `accent` to re-skin the whole site in one line. Display type, the section rules, and shared utilities live in [`app/globals.css`](app/globals.css).

## Contact

The Contact section ([`components/Contact.tsx`](components/Contact.tsx)) is a set of
direct-contact links — no form, no backend. WhatsApp (`wa.me`) and email (`mailto:`)
open with a pre-filled message/subject; LinkedIn and GitHub link to the profiles.
Update the `PHONE`, `EMAIL`, and `contactInfo` constants at the top of the file to
change them.

## CMS setup

Local editing works out of the box — `npm run dev`, then `/keystatic` writes straight to
`content/`. **Storage defaults to `local` everywhere**, including production, so deploying
this repo as-is builds cleanly with zero configuration. Editing from the **deployed** site
needs a GitHub App, created once, locally:

1. Add `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` to `.env.local`.
2. `npm run dev`, then open <http://localhost:3000/keystatic>. Keystatic walks you through
   creating a GitHub App and granting it access to `farzask/portfolio-website`. It writes
   four variables into `.env` (already gitignored):

   ```
   KEYSTATIC_GITHUB_CLIENT_ID
   KEYSTATIC_GITHUB_CLIENT_SECRET
   KEYSTATIC_SECRET
   NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
   ```

3. Copy all four into the Vercel project's environment variables, **including**
   `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` — production won't use GitHub mode without it.
4. In the GitHub App's settings, add `https://farza-shahzad.vercel.app/api/keystatic/github/oauth/callback`
   as a callback URL alongside the localhost one.
5. Redeploy. `/keystatic` on the live site now commits edits to this repo.
6. Remove the `NEXT_PUBLIC_KEYSTATIC_STORAGE` line from `.env.local` to go back to
   local-disk editing in dev. Set it to `github` any time you want to test GitHub mode
   locally.

Storage mode is decided in [`keystatic.config.ts`](keystatic.config.ts) by a single
`NEXT_PUBLIC_KEYSTATIC_STORAGE` check — `local` unless explicitly set to `github`. Content
*rendering* on the site doesn't depend on this at all; it always reads `content/*.json`
straight off disk at build time, so the storage mode only affects what the `/keystatic`
admin UI does when you hit save.

## Deployment

Optimized for **Vercel**: push to GitHub, import the repo at [vercel.com](https://vercel.com), and deploy. Analytics is already wired via `@vercel/analytics`. The four Keystatic variables above are the only env vars needed, and only for editing from the live site.

---

Built by **Farza Shahzad** Flutter & full-stack developer, Pakistan.
