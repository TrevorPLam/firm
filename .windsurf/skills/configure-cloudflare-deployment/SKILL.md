---
name: configure-cloudflare-deployment
description: Guide for deploying Astro site to Cloudflare Workers with proper configuration
---

## Steps

1. **Install Cloudflare adapter**
   - Run: `npx astro add cloudflare`
   - This installs @astrojs/cloudflare and wrangler
   - Accept all prompts for automatic configuration
   - Adapter is added to astro.config.mjs

2. **Configure adapter in astro.config.mjs**
   - Verify adapter is imported and configured
   - Set output mode: `output: 'server'` for SSR, `output: 'static'` for static
   - Enable platformProxy for local development
   - Configure any additional Cloudflare-specific options

3. **Create wrangler configuration**
   - Create `wrangler.jsonc` or `wrangler.toml` in project root
   - Set `compatibility_date` to current date
   - Configure `main` entry point for Workers
   - Set `assets.directory` to `./dist`
   - Enable `observability` for monitoring

4. **Authenticate with Cloudflare**
   - Run: `npx wrangler login`
   - Follow browser authentication flow
   - This saves authentication token locally

5. **Add environment variables**
   - Add secrets via Cloudflare dashboard
   - Or use: `npx wrangler secret put VARIABLE_NAME`
   - Access via `import.meta.env` in Astro
   - Never commit secrets to repository

6. **Build project**
   - Run: `npm run build`
   - Verify build completes successfully
   - Check `dist/` directory is created
   - Review build output for errors

7. **Deploy to Cloudflare**
   - Run: `npx wrangler deploy`
   - This deploys to Cloudflare Workers
   - Or use: `npx wrangler pages deploy ./dist` for Pages
   - Wait for deployment to complete
   - Note the deployment URL

8. **Configure custom domain (optional)**
   - Go to Cloudflare dashboard
   - Add custom domain to Workers/Pages project
   - Configure DNS records
   - Enable SSL/TLS

9. **Set up CI/CD (optional)**
   - Create GitHub Actions workflow
   - Add Cloudflare authentication as secret
   - Configure build and deploy steps
   - Deploy on push to main branch

## Example wrangler.jsonc

```json
{
  "compatibility_date": "2026-06-01",
  "compatibility_flags": ["global_fetch_strictly_public"],
  "name": "your-project-name",
  "main": "@astrojs/cloudflare/entrypoints/server",
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS"
  },
  "observability": {
    "enabled": true
  }
}
```

## Example astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  output: 'server',
});
```

## Common Commands

```bash
# Install adapter
npx astro add cloudflare

# Login to Cloudflare
npx wrangler login

# Deploy to Workers
npx wrangler deploy

# Deploy to Pages
npx wrangler pages deploy ./dist

# Add secret
npx wrangler secret put DATABASE_URL

# Local development
npm run dev
```

## Best Practices

- Use Workers for new projects (recommended over Pages)
- Keep compatibility_date current
- Use environment variables for secrets
- Test locally before deploying
- Use observability for monitoring
- Configure proper build output directory
- Enable platformProxy for local development
