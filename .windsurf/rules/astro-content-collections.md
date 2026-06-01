---
trigger: glob
globs: src/content.config.ts, src/content/**/*.md
---

# Astro Content Collections Rules

## Configuration

- Define collections in `src/content.config.ts`
- Use `defineCollection()` for each collection
- Export collections object with all collection names
- Use `zod` for schema validation (recommended but optional)
- Restart dev server or sync content layer after schema changes

## Collection Definition

- Use `glob()` loader for multiple files (Markdown, MDX, JSON, YAML, TOML)
- Use `file()` loader for single file collections
- Specify base directory for glob loaders
- Define schema with Zod for type safety
- Use `z.coerce.date()` for date fields
- Use `z.array()` for array fields like tags

## Schema Best Practices

- Define all required fields in schema
- Use optional fields with `.optional()` for non-required data
- Use `.default()` for default values
- Use `.transform()` for data transformation
- Keep schemas focused on data structure, not presentation
- Use collection references for related data

## Content File Structure

- Place content files in `src/content/<collection-name>/`
- Use YAML frontmatter for Markdown files
- Match frontmatter keys to schema field names
- Use consistent date formats (ISO 8601 recommended)
- Include required fields in every entry
- Use descriptive slugs (file names become slugs)

## Querying Collections

- Use `getCollection('collection-name')` to fetch all entries
- Use `getEntry('collection-name', 'id')` for single entry
- Sort collections manually (order is non-deterministic)
- Filter collections with array methods
- Use `render()` method for Markdown/MDX content
- Access entry data via `.data` property

## Route Generation

- Use `getStaticPaths()` for dynamic routes from collections
- Return params object with slug/id
- Pass entry as prop to page component
- Use `[slug].astro` or `[...slug].astro` for dynamic routes
- Generate routes at build time for static sites
- Use on-demand rendering for live collections

## Live Collections (Astro v6+)

- Use live loaders for real-time data from APIs/databases
- Define custom loaders for remote data sources
- Use Zod schemas for validation
- Access live data at request time
- Requires adapter for server-side rendering
- Use for dynamic content that changes frequently

## Anti-Patterns

- Do NOT create collections without a clear data structure
- Do NOT mix different data types in the same collection
- Do NOT forget to restart dev server after schema changes
- Do NOT rely on automatic sorting (sort manually)
- Do NOT use collection entries as pages directly (create routes)
- Do NOT skip schema validation for complex data

## Imports/Exports

- Import from astro:content: `import { defineCollection, z } from 'astro:content'`
- Import loaders: `import { glob, file } from 'astro/loaders'`
- Import query functions: `import { getCollection, getEntry } from 'astro:content'`
- Export collections: `export const collections = { blog, authors }`
- Export types: Astro auto-generates TypeScript interfaces

## Common Patterns

### Blog Collection
```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});
```

### Author Collection (Single File)
```typescript
const authors = defineCollection({
  loader: file('src/content/authors.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    bio: z.string(),
  }),
});
```

### Querying with Sort
```typescript
const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
```
