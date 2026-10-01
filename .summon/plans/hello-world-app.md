---
status: pending
title: Hello World App — Clean & Minimal
---

# Hello World App

A single-page app that displays "Hello World" — clean and minimal: simple text on a plain background, no interactions or animations.

## Steps

1. **Set up project configuration**
   - Create `package.json` with project name, ESM module type, npm scripts (dev/build/preview), and dependencies: React, ReactDOM, TanStack Router (`@tanstack/react-router`, `@tanstack/router-plugin`), Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`), Vite, and TypeScript.
   - Create `tsconfig.json` with strict TypeScript settings, bundler module resolution, JSX support, and the `@/*` → `src/*` path alias.
   - Create `vite.config.ts` registering the TanStack Router plugin, the React plugin, and the Tailwind CSS v4 Vite plugin, plus the `@` alias pointing at `src/`.
   - Expected outcome: the project can be installed with npm and started with the dev server without errors.

2. **Create the HTML entry point**
   - Create `index.html` at the project root with a `<div id="root">` mount point, a page title ("Hello World"), viewport meta tag, and a script tag loading `src/main.tsx`.
   - Expected outcome: the dev server serves a page that mounts the React app.

3. **Create the global stylesheet**
   - Create `src/styles/global.css` starting with exactly `@import "tailwindcss";`.
   - Expected outcome: Tailwind utility classes are available throughout the app.

4. **Create the app entry point**
   - Create `src/main.tsx` that imports `src/styles/global.css` once, creates the TanStack Router instance from the generated route tree, and renders it into the root element in React strict mode.
   - Expected outcome: the React app boots and hands rendering to the router.

5. **Create the root layout route**
   - Create `src/routes/__root.tsx` as the app shell: a full-viewport, plain white background container rendering the router outlet.
   - Expected outcome: every page sits inside a clean, full-height layout.

6. **Create the Hello World home page**
   - Create `src/routes/index.tsx` as the `/` route: the text "Hello World" centered both horizontally and vertically on screen, in a large, simple dark-gray sans-serif font on the plain white background — nothing else on the page.
   - Expected outcome: visiting `/` shows "Hello World" centered on a clean, minimal page.

7. **Verify the result**
   - Confirm the generated `src/routeTree.gen.ts` exists (produced automatically by the router plugin — never edited by hand) and that the app renders the centered "Hello World" text with no console errors.
   - Expected outcome: a working, clean and minimal Hello World app.
