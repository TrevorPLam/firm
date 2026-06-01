---
name: create-astro-component
description: Guide for creating reusable Astro components with TypeScript, proper props, and styling
---

## Steps

1. **Determine component purpose and location**
   - Identify if component is UI element, layout, or feature-specific
   - Place in appropriate directory: `src/components/ui/`, `src/components/layout/`, or `src/components/features/`
   - Use kebab-case for file names: `button.astro`, `navigation.astro`

2. **Create component file with .astro extension**
   - Create file in chosen location
   - Use `.astro` extension for all Astro components

3. **Define TypeScript interface for props**
   - Add frontmatter section (---) at top of file
   - Define interface for component props
   - Use Astro.props to access props
   - Make required props mandatory, optional props with `?`

4. **Implement component template**
   - Write HTML template after frontmatter
   - Use TailwindCSS classes for styling
   - Add slots for flexible content composition
   - Use semantic HTML elements

5. **Add client directives if interactivity needed**
   - Use `client:load` for immediate hydration
   - Use `client:visible` for when element enters viewport
   - Use `client:idle` for when browser is idle
   - Use `client:media` for media query-based loading
   - Default to no client directive for static components

6. **Export component for reuse**
   - Use default export for main component
   - Ensure component can be imported in other files
   - Test component in isolation

7. **Add accessibility attributes**
   - Include ARIA labels where needed
   - Ensure keyboard navigation works
   - Add proper alt text for images
   - Use semantic HTML elements

## Example Component Structure

```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const { title, variant = 'primary', onClick } = Astro.props;
---

<button
  class={`btn btn-${variant}`}
  onClick={onClick}
>
  {title}
</button>

<style>
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
  .btn-primary {
    background: blue;
    color: white;
  }
  .btn-secondary {
    background: gray;
    color: white;
  }
</style>
```

## Best Practices

- Keep components focused on single responsibility
- Use props for configuration, not hardcoded values
- Prefer slots over props for complex content
- Use TypeScript for all props
- Test components with different prop combinations
- Document component usage with comments
