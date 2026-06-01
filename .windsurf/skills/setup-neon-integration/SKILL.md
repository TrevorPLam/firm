---
name: setup-neon-integration
description: Guide for integrating Neon Postgres database with Astro for server-side queries
---

## Steps

1. **Create Neon project**
   - Go to Neon Console (console.neon.tech)
   - Click "New Project"
   - Specify project settings and create
   - Save connection string (password, endpoint)

2. **Install Neon serverless driver**
   - Run: `npm install @neondatabase/serverless`
   - This package is optimized for serverless environments

3. **Enable on-demand rendering**
   - Run: `npx astro add cloudflare` (for Cloudflare deployment)
   - Or: `npx astro add node` (for Node.js deployment)
   - This enables SSR for database queries
   - Configure adapter in astro.config.mjs

4. **Store Neon credentials**
   - Create `.env` file in project root
   - Add connection string: `DATABASE_URL="postgresql://user:password@endpoint:port/dbname?sslmode=require&channel_binding=require"`
   - Add to `.env.example` as template
   - Never commit `.env` file

5. **Add TypeScript types**
   - Create or update `src/env.d.ts`
   - Add DATABASE_URL to ImportMetaEnv interface
   - This provides type safety for environment variables

6. **Create database utility**
   - Create `src/lib/neon.ts`
   - Import neon from @neondatabase/serverless
   - Export sql client: `export const sql = neon(import.meta.env.DATABASE_URL)`
   - This creates reusable database client

7. **Test database connection**
   - Create test query in page or API route
   - Run: `await sql`SELECT version()``
   - Verify connection works in development
   - Check Neon Console for query activity

8. **Create database tables**
   - Use Neon Console SQL editor
   - Or use migration tool
   - Create tables with appropriate schema
   - Add indexes for performance

## Example Database Utility

```typescript
// src/lib/neon.ts
import { neon } from '@neondatabase/serverless';

export const sql = neon(import.meta.env.DATABASE_URL);
```

## Example Query in Page

```astro
---
import { sql } from '../lib/neon';

const result = await sql`SELECT * FROM posts LIMIT 10`;
const posts = result;
---

<div>
  {posts.map(post => (
    <div key={post.id}>{post.title}</div>
  ))}
</div>
```

## Example API Route

```typescript
// src/pages/api/posts.ts
import { sql } from '../../lib/neon';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await sql`SELECT * FROM posts`;
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
};
```

## Best Practices

- Use environment variables for credentials
- Create reusable database client
- Use parameterized queries (Neon handles this)
- Handle errors with try-catch
- Test queries in Neon Console first
- Use connection pooling (Neon handles this)
- Enable SSL for security
