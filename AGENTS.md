# Agent Guidelines - Enroth Archive

## Commands

- **Dev**: `npm run dev` (runs on port 9002)
- **Build**: `npm run build` (Primary verification tool)
- **Lint**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **Tests**: No test suite configured. Use `npm run build` for full verification.

## Code Style & Conventions

- **Framework**: Next.js 15 (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS with `class-variance-authority`. Use `cn()` utility from `@/lib/utils`.
- **Components**: Functional components in `.tsx`. Use Lucide React for icons.
- **Naming**:
  - Components/Interfaces: `PascalCase` (e.g., `AreaCard`, `GameLocation`)
  - Variables/Functions: `camelCase` (e.g., `getAreaBySlug`)
  - Routes: `[slug]/page.tsx`
- **Imports**: Use `@/` alias for absolute imports from `src/`.
- **Data**: Static data resides in `src/lib/data/`. Access via `src/lib/data.ts` functions.
- **Error Handling**: Use `notFound()` from `next/navigation` for missing records.
- **Types**: Define shared types in `src/lib/types.ts`. Favor interfaces for data models.
- **UI**: Utilize Shadcn UI components located in `src/components/ui/`.

## Documentation

- Data will be provided statically in `src/lib/data/` as JSON or TS files.
- Follow existing patterns in `src/app/` for new pages or features.
- Make sure when referencing areas, enemies or items, to link to their respective pages using Next.js `<Link>` component.
