---
name: create-astro-page
description: Guide for creating Astro pages with layouts, SEO, and proper routing
---

## Steps

1. **Determine page location and route**
   - Static pages go in `src/pages/` (e.g., `about.astro` becomes `/about`)
   - Dynamic routes use `[param].astro` (e.g., `[id].astro` becomes `/123`)
   - Catch-all routes use `[...slug].astro` (e.g., `[...slug].astro` matches `/a/b/c`)
   - Nested routes use folder structure (e.g., `blog/index.astro` becomes `/blog`)

2. **Create page file with .astro extension**
   - Create file in appropriate location in `src/pages/`
   - Use `.astro` extension for all page files

3. **Import layout component**
   - Import layout at top of frontmatter
   - Use appropriate layout for page type
   - Pass page-specific props to layout

4. **Add SEO metadata**
   - Set page title in layout props
   - Add description for search engines
   - Add Open Graph tags for social sharing
   - Add canonical URL
   - Add structured data if needed

5. **Implement page content**
   - Write HTML template after frontmatter
   - Use semantic HTML elements
   - Add TailwindCSS classes for styling
   - Include accessibility attributes

6. **Add data fetching if needed**
   - Fetch data in frontmatter for SSR
   - Use `getStaticPaths()` for dynamic routes
   - Query Content Collections if using blog/content
   - Fetch from API if external data needed

7. **Test page routing**
   - Verify URL matches file structure
   - Test dynamic routes with different params
   - Check 404 handling for missing routes
   - Verify layout is applied correctly

## Example Page Structure

```astro
---
import Layout from '../layouts/Layout.astro';

const title = 'About Us';
const description = 'Learn about our company';
---

<Layout title={title} description={description}>
  <main>
    <h1>About Us</h1>
    <p>Page content here</p>
  </main>
</Layout>
```

## Dynamic Route Example

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
  <main>
    <h1>{post.data.title}</h1>
    <Content />
  </main>
</Layout>
```

## Best Practices

- Use layouts for consistent page structure
- Keep pages focused on route-specific content
- Fetch data in frontmatter, not in template
- Use semantic HTML for better SEO
- Add proper meta tags for each page
- Test pages at different URLs
