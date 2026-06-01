---
name: implement-i18n-astro
description: Guide for implementing internationalization (i18n) in Astro with multi-language support
---

## Steps

1. **Configure i18n in astro.config.mjs**
   - Add i18n configuration to astro.config.mjs
   - Define `locales` array with supported languages
   - Set `defaultLocale` (must be in locales)
   - Configure routing behavior
   - Use BCP 47 language tags (en, es, fr, de)

2. **Create language-specific directories**
   - Create folders for each locale: `src/pages/en/`, `src/pages/es/`
   - Create translated pages in each locale folder
   - Use same file names across locales
   - Root pages use default locale when not prefixed

3. **Create language switcher component**
   - Create component in `src/components/LanguageSwitcher.astro`
   - Import `getRelativeLocaleURL` from astro:i18n
   - Detect current locale from URL
   - Generate links for each locale
   - Preserve current path when switching

4. **Translate page content**
   - Create translated versions of each page
   - Maintain same structure across locales
   - Translate all text content
   - Keep frontmatter consistent
   - Use locale-specific images if needed

5. **Configure Content Collections for i18n**
   - Add `locale` field to collection schema
   - Filter collections by locale in queries
   - Create locale-specific content files
   - Use consistent slugs across locales

6. **Add SEO for i18n**
   - Add `lang` attribute to html element
   - Add hreflang tags for alternate pages
   - Add canonical URLs for each locale
   - Use locale-specific meta descriptions
   - Implement proper URL structure

7. **Format dates and numbers by locale**
   - Use `Intl.DateTimeFormat` for dates
   - Use `Intl.NumberFormat` for numbers
   - Use `Intl.RelativeTimeFormat` for relative time
   - Format based on current locale
   - Consider locale-specific formats

## Example astro.config.mjs

```javascript
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

## Example Language Switcher

```astro
---
import { getRelativeLocaleURL } from 'astro:i18n';

const locales = ['en', 'es', 'fr', 'de'];
const currentLocale = 'en'; // Get from URL
const currentPath = Astro.url.pathname;
---

<nav>
  {locales.map((locale) => (
    <a href={getRelativeLocaleURL(currentLocale, locale, currentPath)}>
      {locale.toUpperCase()}
    </a>
  ))}
</nav>
```

## Example Locale-Specific Page

```astro
// src/pages/es/about.astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="Sobre Nosotros" locale="es">
  <h1>Sobre Nosotros</h1>
  <p>Contenido en espanol...</p>
</Layout>
```

## Example Content Collection with Locale

```typescript
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    locale: z.string().default('en'),
  }),
});
```

## Example Filtering by Locale

```astro
---
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog'))
  .filter(post => post.data.locale === 'es');
---
```

## Best Practices

- Use BCP 47 language tags
- Keep translations in sync
- Use consistent URL structure
- Add hreflang tags for SEO
- Format dates/numbers by locale
- Test each locale
- Use language switcher for UX
- Consider translation library for complex sites
