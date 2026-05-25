# Farza Shahzad — Portfolio

A personal portfolio site with a **brutalist-editorial** aesthetic: a light "paper" canvas, near-black ink, a single burnt-orange accent, oversized type, hard hairline rules, and numbered sections. Flat by design — no gradients, no glows.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

🔗 **Live:** [farzashahzad.vercel.app](https://farzashahzad.vercel.app) <!-- update if the domain differs -->

## Overview

A single-page site composed of stacked sections:

| # | Section | Notes |
|---|---------|-------|
| — | **Hero** | Oversized stacked wordmark, meta bar, statement, grayscale→color portrait, tech ticker |
| 01 | **About** | Editorial lead paragraph + hard-ruled stat grid |
| 02 | **Skills** | Capability pillars + "other tools" tag set |
| 03 | **Experience** | Career index list with hover-invert rows, plus education & leadership |
| 04 | **Projects** | Filterable index list (All / Flutter / Side Projects) |
| 05 | **Contact** | Contact details + form posting to `/api/contact` |

The `/skills`, `/experience`, `/projects`, and `/contact` routes are thin redirects to the matching anchors on the homepage, so deep links keep working.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** (App Router) | Framework & routing |
| **React 18** | UI |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling (design tokens in `tailwind.config.js`) |
| **Framer Motion** | Scroll / reveal animations |
| **Vercel Analytics** | Traffic insights |
| **Resend** | Email delivery (ready to wire into the contact API) |

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
│   ├── page.tsx              # Home — composes all sections
│   ├── globals.css           # Theme tokens, display type, utilities
│   ├── api/contact/route.ts  # Contact form endpoint (stub, ready for email provider)
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
│   ├── Contact.tsx           # Contact section + form
│   ├── SectionHeading.tsx    # Shared numbered section header
│   └── Footer.tsx            # Footer wordmark + links
├── data/
│   └── portfolio.ts          # All content: stats, skills, experience, projects
├── public/                   # Static assets (portrait, CV PDF)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Editing Content

All copy lives in **[`data/portfolio.ts`](data/portfolio.ts)** — edit it in one place:

- `stats` — the headline numbers in About
- `skillPillars` — the three capability columns in Skills
- `otherTools` — the tag set under Skills
- `experiences` — work history (role, company, date, bullets, tech)
- `education` / `volunteer` — the cards under Experience
- `projects` — project list (name, description, tech, `category`, optional `github`)

Other quick edits:

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

## Contact Form

The form in the Contact section POSTs to [`app/api/contact/route.ts`](app/api/contact/route.ts), which currently validates input and logs the submission. To actually deliver email, wire in [Resend](https://resend.com) (already a dependency):

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
// inside POST, after validation:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'shahzad.farza@gmail.com',
  subject: `New message from ${name}`,
  html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
})
```

Add `RESEND_API_KEY` to `.env.local` (never commit it).

## Deployment

Optimized for **Vercel**: push to GitHub, import the repo at [vercel.com](https://vercel.com), add any env vars, and deploy. Analytics is already wired via `@vercel/analytics`.

---

Built by **Farza Shahzad** — Flutter developer & hardware integrator, Peshawar, PK.
