# Balaganesh M. | Backend Architect Portfolio

This is a modern, single-page portfolio site built with **React + Vite** and styled with **Tailwind CSS**. It showcases backend architecture expertise through structured sections like Home, Experience, Projects, Skills, and a contact form.

## What’s included

- **Home** hero section with an emphasis on backend systems and core technology badges.
- **Experience** timeline with key achievements and a “deep dive” summary.
- **Projects** featured architecture cards with tags and external links.
- **Skills** grouped technical skill sets plus “Build Principles”.
- **Contact** section with contact details (email/phone/social links) and a **Web3Forms** submission form protected with **hCaptcha**.
The top navigation and sections are scroll-driven (Home/Experience/Projects/Skills/Contact), and the header includes a “Resume” link.

## Tech stack

- **Frontend:** React (TypeScript) + Vite
- **Styling:** Tailwind CSS
- **Routing / App shell:** `react-router-dom` (used for app layout)
- **Animations:** `motion/react`
- **UI Icons:** `lucide-react`
- **Contact form:** Web3Forms (`https://api.web3forms.com/submit`) + hCaptcha

## Environment variables

The contact form requires a Web3Forms access key:

- `VITE_WEB3FORMS_ACCESS_KEY`: required

The project also wires a `GEMINI_API_KEY` into the Vite build (via `vite.config.ts`), but there’s currently no Gemini client code in `src/`.

Optional:

- `DISABLE_HMR`: set to `true` to disable Vite HMR (useful in some environments to avoid flicker).

## Getting started

1. Install dependencies:
   - `npm install`
2. Create/update your `.env` file with `VITE_WEB3FORMS_ACCESS_KEY=...`
3. Run the dev server:
   - `npm run dev`

Default dev server:
- `http://localhost:3000`

## Available scripts

- `npm run dev`: start Vite dev server (port `3000`)
- `npm run build`: build for production
- `npm run preview`: preview the production build locally
- `npm run lint`: TypeScript type-check (`tsc --noEmit`)