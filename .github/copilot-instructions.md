# Project Guidelines

## Stack And Scope
- This project is a React 18 + Vite + TypeScript marketing site with React Router, Tailwind CSS, shadcn-style UI primitives, and TanStack Query.
- Treat this as a small SPA with one homepage and data-driven service detail pages, not a large app with heavy client state.
- Use the `@/` alias for imports from `src`.
- Use `npm` commands unless the user explicitly asks for Bun. The documented workflow in [README.md](../README.md) is npm-based.

## Architecture
- The homepage is composed in [src/pages/Index.tsx](../src/pages/Index.tsx) from ordered section components in `src/components`. Preserve that section-based composition unless the task requires changing the landing-page flow.
- Routes are declared in [src/App.tsx](../src/App.tsx). Add any new custom routes above the catch-all `*` route.
- Service detail pages at `/storitve/:slug` are driven by typed data in [src/data/services.ts](../src/data/services.ts). When changing service content, pricing, slugs, or package structure, update the shared data source instead of duplicating content in components.
- [src/pages/ServiceDetail.tsx](../src/pages/ServiceDetail.tsx) depends on service slugs and fields for page rendering plus title, description, and canonical tag updates.

## Conventions
- Prefer existing components in `src/components` and UI primitives in `src/components/ui` before introducing new component patterns or dependencies.
- Keep styling in the existing Tailwind utility style and use shared helpers such as `cn()` from `src/lib/utils.ts` when class composition gets conditional.
- Preserve section `id` values that support anchor navigation when editing landing-page sections.
- UI copy is currently in Slovenian. Preserve that language and tone unless the user asks for translation or new copy in another language.
- The repository uses loose TypeScript and ESLint settings. Do not tighten global config or refactor for strictness as part of unrelated tasks, but still prefer explicit prop and data types when touching shared structures.

## Build And Test
- Install dependencies: `npm install`
- Start local development: `npm run dev`
- Build production output: `npm run build`
- Lint the codebase: `npm run lint`
- Run unit or component tests: `npm test`
- Preview the production build locally: `npm run preview`
- Vitest uses `jsdom` and looks for tests under `src/**/*.{test,spec}.{ts,tsx}`.
- Playwright is configured in [playwright.config.ts](../playwright.config.ts) with `src/test` as the test directory and `http://localhost:4173` as the base URL, so preview must be running for end-to-end work.

## Pitfalls
- Changing a service `slug` in [src/data/services.ts](../src/data/services.ts) affects routing, internal links, and canonical metadata. Verify the matching detail page still resolves.
- [src/pages/ServiceDetail.tsx](../src/pages/ServiceDetail.tsx) manually updates document metadata. Keep that logic aligned with any service data changes.
- If local networking behaves unexpectedly during development, check [vite.config.ts](../vite.config.ts); the dev server is configured with `host: "::"` and the HMR overlay is disabled.

## Documentation
- Start with [README.md](../README.md) for the basic local workflow.
- There is no broader architecture or contributor documentation in the repo right now, so keep agent guidance here concise and project-specific instead of repeating general React or Vite advice.