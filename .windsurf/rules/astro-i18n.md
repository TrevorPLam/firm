---
trigger: glob
globs: astro.config.mjs, src/pages/**/[locale]/**/*.astro
---

# Astro i18n Rules

## Configuration

- Configure i18n in astro.config.mjs
- Define `locales` array with all supported languages
- Set `defaultLocale` (must be in locales array)
- Use BCP 47 language tags (e.g., 'en', 'es', 'fr', 'de')
- Configure routing behavior with additional options

## Routing Options

- **prefixDefaultLocale**: false (default) - / for default locale
- **prefixDefaultLocale**: true - /en for default locale
- **fallback**: fallback locale for missing translations
- **routing**: manual, prefix-other-locales, or prefix-always
- Use `prefix-other-locales` for typical SEO-friendly setup

## Directory Structure

- Create language-specific folders: `src/pages/en/`, `src/pages/es/`
- Place translated pages in corresponding locale folders
- Root pages use default locale when not prefixed
- Use same file names across locales for consistency
- Keep content structure identical across locales

## Content Organization

- Use Content Collections with locale field
- Filter collections by locale in queries
- Use locale-aware slugs for URLs
- Maintain consistent frontmatter across translations
- Use locale-specific images if needed

## Language Switcher

- Create language switcher component
- Use `Astro.getRelativeLocaleURL()` for links
- Detect current locale from URL
- Preserve current path when switching languages
- Use accessible button or select element

## SEO Best Practices

- Add `lang` attribute to html element
- Use hreflang tags for alternate language pages
- Add canonical URLs for each locale
- Use locale-specific meta descriptions
- Implement proper URL structure for SEO

## Translation Management

- Keep translations in sync across locales
- Use translation keys for repeated strings
- Consider using translation library for complex sites
- Document translation workflow
- Use consistent terminology across languages

## Date/Number Formatting

- Use `Intl.DateTimeFormat` for dates
- Use `Intl.NumberFormat` for numbers
- Use `Intl.RelativeTimeFormat` for relative time
- Format based on current locale
- Consider locale-specific formats

## Anti-Patterns

- Do NOT mix languages in the same file
- Do NOT use client-side only translation
- Do NOT forget to add lang attribute
- Do NOT use inconsistent URL structures
- Do NOT ignore hreflang tags for SEO
- Do NOT hardcode locale strings

## Imports/Exports

- Import from astro:i18n: `import { getRelativeLocaleURL } from 'astro:i18n'`
- Import from astro:content: `import { getCollection } from 'astro:content'`
- Export locale-aware components normally
- No special exports needed for i18n

## Common Patterns

### Basic Config
```typescript
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

### Language Switcher
```typescript
const { locale, currentPath } = Astro.props;
const locales = ['en', 'es', 'fr', 'de'];
```

### Filter Content by Locale
```typescript
const posts = (await getCollection('blog'))
  .filter(post => post.data.locale === locale);
```

### Locale-Aware URL
```typescript
const url = getRelativeLocaleURL(currentLocale, targetLocale, currentPath);
```

### Date Formatting
```typescript
const date = new Date();
const formatted = new Intl.DateTimeFormat(locale, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(date);
```
