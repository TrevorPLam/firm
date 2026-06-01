---
name: create-blog-content
description: Guide for creating blog content using Astro Content Collections with Markdown
---

## Steps

1. **Configure Content Collections**
   - Create or update `src/content.config.ts`
   - Import `defineCollection` and `z` from astro:content
   - Define blog collection with schema
   - Use `glob()` loader for Markdown files
   - Export collections object

2. **Define blog schema**
   - Use Zod for type-safe frontmatter
   - Define required fields: title, description, pubDate
   - Define optional fields: updatedDate, heroImage, tags, category
   - Use `z.coerce.date()` for date fields
   - Use `z.array(z.string())` for tags

3. **Create content directory**
   - Create `src/content/blog/` directory
   - This matches the base path in glob loader
   - All blog posts go in this directory

4. **Create blog post file**
   - Create `.md` file in `src/content/blog/`
   - Use kebab-case for filename (becomes slug)
   - Add YAML frontmatter at top of file
   - Match frontmatter to schema fields

5. **Write blog content**
   - Add frontmatter with metadata
   - Write Markdown content after frontmatter
   - Use standard Markdown syntax
   - Add images, links, code blocks as needed
   - Use proper heading hierarchy

6. **Create blog listing page**
   - Create `src/pages/blog/index.astro`
   - Import `getCollection` from astro:content
   - Query blog collection in frontmatter
   - Sort posts by date
   - Render list of posts with links

7. **Create individual post page**
   - Create `src/pages/blog/[slug].astro`
   - Use `getStaticPaths()` to generate routes
   - Import and render post content
   - Add SEO metadata from post data
   - Render Markdown body with `<Content />`

## Example content.config.ts

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    locale: z.string().default('en'),
  }),
});

export const collections = { blog };
```

## Example Blog Post

```markdown
---
title: "Getting Started with Astro"
description: "Learn the basics of Astro framework"
pubDate: 2025-01-15
category: "Tutorial"
tags: ["astro", "tutorial", "beginner"]
locale: "en"
---

# Getting Started with Astro

Astro is a modern web framework...

## Installation

Run `npm create astro@latest` to get started.
```

## Example Blog Listing Page

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<Layout title="Blog">
  {posts.map((post) => (
    <article>
      <h2><a href={`/blog/${post.slug}`}>{post.data.title}</a></h2>
      <p>{post.data.description}</p>
    </article>
  ))}
</Layout>
```

## Example Individual Post Page

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title}>
  <article>
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</Layout>
```

## Best Practices

- Use Content Collections for type safety
- Define schemas for all collections
- Use consistent date formats
- Add descriptions for SEO
- Use tags for categorization
- Sort posts by date
- Filter by locale for i18n
- Restart dev server after schema changes
