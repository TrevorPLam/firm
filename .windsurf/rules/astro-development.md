---
trigger: glob
globs: **/*.astro
---

# Astro Development Rules

## File Structure

- **Components**: Place reusable UI components in `src/components/`
- **Layouts**: Page layouts go in `src/layouts/`
- **Pages**: File-based routing in `src/pages/`
- **Styles**: Global styles in `src/styles/`
- **Lib**: Utilities and helpers in `src/lib/`
- **Content**: Content Collections in `src/content/`

## Component Development

- Use `.astro` extension for all Astro components
- Separate frontmatter (---) from template
- Define TypeScript interfaces for Props
- Use `Astro.props` to access component props
- Export components for reuse across the project

## Page Development

- Pages in `src/pages/` automatically become routes
- Use dynamic routes with `[param].astro` or `[...slug].astro`
- Import layouts at the top of page files
- Pass page-specific props to layouts
- Use `getStaticPaths()` for dynamic route generation

## Frontmatter Best Practices

- Keep frontmatter minimal and focused
- Import dependencies at the top
- Define data fetching logic in frontmatter
- Use TypeScript for type safety
- Avoid heavy computations in frontmatter

## TypeScript Usage

- Enable strict mode in tsconfig.json
- Define interfaces for all props
- Use type-safe environment variables via `src/env.d.ts`
- Leverage Astro's auto-generated types for Content Collections
- Use `zod` for runtime validation when needed

## Styling

- Use TailwindCSS v4 with `@tailwindcss/vite` plugin
- Import global CSS in layouts or root component
- Use scoped styles in components when needed
- Prefer utility classes over custom CSS
- Follow Tailwind's recommended patterns

## Performance

- Astro ships zero JavaScript by default
- Use `client:*` directives only when interactivity is needed
- Choose appropriate client directives: `load`, `visible`, `idle`, `media`
- Lazy load images with `loading="lazy"` attribute
- Use Astro's Image component for optimization

## API Routes

- Place API endpoints in `src/pages/api/`
- Use TypeScript for request/response types
- Return proper HTTP status codes
- Handle errors gracefully
- Use environment variables for sensitive data

## Environment Variables

- Define environment variables in `.env`
- Add TypeScript types in `src/env.d.ts`
- Use `import.meta.env.VARIABLE_NAME` to access
- Never commit `.env` files
- Use `.env.example` as a template

## Anti-Patterns

- Do NOT use React-specific patterns (useState, useEffect)
- Do NOT import React or React-specific libraries
- Do NOT use JSX syntax in .astro files (use HTML template syntax)
- Do NOT hardcode environment variables
- Do NOT use client-side routing libraries (Astro has built-in routing)
- Do NOT use heavy JavaScript bundles unnecessarily

## Imports/Exports

- Import components: `import Component from './Component.astro'`
- Import layouts: `import Layout from '../layouts/Layout.astro'`
- Import utilities: `import { helper } from '../lib/utils'`
- Export components: Default export for main component
- Export utilities: Named exports for helper functions
