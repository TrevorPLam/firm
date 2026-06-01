---
trigger: glob
globs: wrangler.jsonc, wrangler.toml, astro.config.mjs
---

# Cloudflare Deployment Rules

## Prerequisites

- Cloudflare account required for deployment
- Use Cloudflare Workers for new projects (recommended over Pages)
- Install @astrojs/cloudflare adapter
- Configure wrangler for deployment

## Adapter Configuration

- Install adapter: `npx astro add cloudflare`
- Add adapter to astro.config.mjs
- Use `adapter: cloudflare()` in config
- Set `output: 'server'` for SSR/on-demand rendering
- Use `output: 'static'` for static sites (default)

## Wrangler Configuration

- Create `wrangler.jsonc` or `wrangler.toml` in project root
- Set `compatibility_date` to current date
- Configure `main` entry point for Workers
- Set `assets.directory` to `./dist`
- Enable `observability` for monitoring
- Use `nodejs_compat` flag if needed

## Deployment Methods

### Wrangler CLI
- Use `npx wrangler deploy` for Workers
- Use `npx wrangler pages deploy` for Pages
- Authenticate with `npx wrangler login`
- Deploy from project root directory

### Cloudflare Dashboard
- Connect GitHub repository
- Configure build settings
- Set build command: `npm run build`
- Set output directory: `dist`
- Add environment variables in dashboard

### CI/CD
- Use GitHub Actions for automated deployment
- Configure wrangler authentication via secrets
- Deploy on push to main branch
- Use `wrangler pages deploy` in workflow

## Environment Variables

- Add secrets via Cloudflare dashboard
- Use `npx wrangler secret put` for CLI
- Access via `import.meta.env` in Astro
- Never commit secrets to repository
- Use `.env.example` as template

## Local Development

- Use `platformProxy: { enabled: true }` in adapter config
- Run `npm run dev` for local development
- Test Cloudflare-specific features locally
- Use `npx wrangler pages dev ./dist` for Pages preview
- Use `npx wrangler dev` for Workers preview

## Static vs Server Rendering

- **Static**: `output: 'static'` - pre-rendered at build time
- **Server**: `output: 'server'` - rendered on each request
- Use static for content-heavy sites
- Use server for dynamic content/API routes
- Hybrid: use `output: 'hybrid'` for mixed approach

## Cloudflare Bindings

- KV: key-value storage
- D1: SQLite database
- Durable Objects: stateful objects
- R2: object storage
- Configure bindings in wrangler config
- Access via `Astro.locals` in Astro

## Performance Optimization

- Enable caching headers
- Use Cloudflare CDN automatically
- Optimize images with Cloudflare Image service
- Use edge caching for static assets
- Configure `not_found_handling` in wrangler

## Troubleshooting

- Check `compatibility_date` is current
- Verify adapter is properly installed
- Ensure build output directory is correct
- Check environment variables are set
- Review wrangler logs for errors
- Test locally before deploying

## Anti-Patterns

- Do NOT use Pages for new projects (use Workers)
- Do NOT hardcode environment variables
- Do NOT commit wrangler secrets
- Do NOT use outdated compatibility_date
- Do NOT skip local testing
- Do NOT ignore build errors

## Imports/Exports

- Import adapter: `import cloudflare from '@astrojs/cloudflare'`
- Export config: `export default defineConfig({ adapter: cloudflare() })`
- No additional exports needed for deployment

## Common Commands

```bash
# Install adapter
npx astro add cloudflare

# Deploy to Workers
npx wrangler deploy

# Deploy to Pages
npx wrangler pages deploy ./dist

# Add secret
npx wrangler secret put VARIABLE_NAME

# Local development with proxy
npm run dev

# Preview Pages build
npx wrangler pages dev ./dist
```
