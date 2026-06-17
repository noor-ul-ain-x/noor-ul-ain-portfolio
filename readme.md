# Noor Ul Ain — Portfolio

A clean, editorial personal portfolio built with Next.js and Tailwind CSS. This repository contains the source for a responsive portfolio site showcasing experience in real-time systems, AI-powered products, and full-stack engineering.

---

**Quick links**
- Live preview: https://noor-ul-ain-portfolio.vercel.app/ (run `npm run dev`)

---

## Tech stack
- Next.js (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- next-themes for theme switching

---

## Development
Clone, install dependencies, and start the dev server:

```bash
git clone <repo-url>
cd noor-ul-ain-portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Use `npm run build` and `npm start` for production builds.

Available scripts (package.json)

- `npm run dev` — run the Next.js development server
- `npm run build` — build for production
- `npm run start` — start the production server
- `npm run lint` — run ESLint

---

## Project structure (key folders)
- `src/app` — Next.js App Router entry points and global layout
- `src/components` — Reusable UI components and section components
  - `components/layout` — `Navbar`, `Footer`, and navigation-related UI
  - `components/ui` — Buttons, Cards, Avatar, Container, ThemeToggle, etc.
  - `components/sections` — Page sections (Hero, About, Experience, Contact, etc.)
- `src/data` — Data files for profile, socials, projects, skills
- `public` — Static assets (images, resume PDF)
- `src/lib` — Small utilities, SEO helpers
- `src/providers` — App providers (ThemeProvider)

---

## Recent changes & design notes
This branch includes a global layout refinement to create a more "editorial" and spacious feel:
- Reduced overall typographic scale (~12%) to tone down oversized headings.
- Increased horizontal gutters and set a centered `max-width` (1500px) in the `Container` component.
- Reduced hero headline sizing, profile card dimensions, section heading scale, button heights, and card padding for improved balance.
- Standardized social/contact buttons and replaced inline font-awesome markup with `lucide-react` icons.
- Fixed theme switching: updated `.light` color variables so `next-themes` toggles produce visible changes.
- Updated metadata to use the site profile image (`/images/profile.png`) for icons and Open Graph image.

If something looks off across breakpoints, check files in `src/components/ui` and `src/components/sections` for hard pixel values (e.g., `text-[88px]`) and adjust them to relative `rem`/Tailwind sizes.

---

## Accessibility & best practices
- Buttons and interactive elements use focus-visible styles for keyboard accessibility.
- Theme toggle respects system preferences when enabled and stores the selection using `next-themes`.
- Use semantic HTML sections and landmarks for screen reader navigation.

---

## Contributing
If you want to contribute:
1. Create a branch with a descriptive name.
2. Open a pull request with a short summary of changes.

Prefer small, focused PRs that update a single component or section.

---

## License
This repository does not include a license by default. Add a `LICENSE` file if you want to publish with an explicit license.

---

## Contact
- Email: noornasim908@gmail.com
- GitHub: https://github.com/noor-ul-ain-x

---

Thanks for working on this project — open an issue or send a PR for improvements.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
