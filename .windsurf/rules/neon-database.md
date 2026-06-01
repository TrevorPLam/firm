---
trigger: glob
globs: src/lib/neon.ts, src/pages/api/**/*.ts
---

# Neon Database Rules

## Setup

- Create Neon project in Neon Console
- Install @neondatabase/serverless package
- Enable on-demand rendering with adapter (Cloudflare or Node)
- Store connection string in environment variable
- Create reusable database client in src/lib/neon.ts

## Database Client

- Create singleton client in src/lib/neon.ts
- Export sql client for use throughout application
- Use environment variable for connection string
- Use `import.meta.env.DATABASE_URL` or `import.meta.env.NEON_DATABASE_URL`
- Never hardcode credentials

## Connection String Format

- Use PostgreSQL connection string format
- Include sslmode=require for security
- Include channel_binding=require for additional security
- Format: `postgresql://user:password@endpoint:port/dbname?sslmode=require&channel_binding=require`
- Get connection string from Neon Console

## Querying in Astro Components

- Import sql client: `import { sql } from '../lib/neon'`
- Use template literals for SQL queries
- Use backticks: `sql`SELECT * FROM table``
- Query in frontmatter for SSR
- Results available as array of objects
- Handle errors with try-catch

## Querying in API Routes

- Import sql client in API route
- Use same template literal syntax
- Return appropriate HTTP status codes
- Handle errors gracefully
- Return JSON responses
- Validate request data before querying

## Best Practices

- Use parameterized queries (Neon handles this automatically)
- Never concatenate user input into SQL
- Use transactions for multiple related operations
- Close connections when done (Neon handles this automatically)
- Use connection pooling (Neon serverless handles this)
- Test queries in Neon Console before using in code

## Environment Variables

- Add DATABASE_URL or NEON_DATABASE_URL to .env
- Add TypeScript type in src/env.d.ts
- Use .env.example as template
- Never commit .env file
- Use different connection strings for dev/staging/prod

## Branching

- Use Neon branching for development/testing
- Create branch for each feature
- Merge branch when ready
- Delete unused branches
- Use branching for safe schema changes

## Schema Management

- Use SQL migrations for schema changes
- Document schema changes
- Test migrations on branch first
- Use Neon's schema editor for visual changes
- Keep migration files in version control

## Performance

- Use indexes for frequently queried columns
- Avoid SELECT * (specify columns)
- Use LIMIT for large result sets
- Consider caching for read-heavy queries
- Monitor query performance in Neon Console
- Use connection pooling for high traffic

## Anti-Patterns

- Do NOT hardcode connection strings
- Do NOT use client-side queries (only server-side)
- Do NOT use SQL injection-prone code
- Do NOT forget to enable adapter for SSR
- Do NOT use development database in production
- Do NOT ignore query errors

## Imports/Exports

- Import neon: `import { neon } from '@neondatabase/serverless'`
- Export sql client: `export const sql = neon(import.meta.env.DATABASE_URL)`
- Import in components: `import { sql } from '../lib/neon'`
- No additional exports needed

## Common Patterns

### Simple Query
```typescript
const result = await sql`SELECT * FROM users WHERE id = ${userId}`;
```

### Insert with Values
```typescript
await sql`INSERT INTO contacts (name, email) VALUES (${name}, ${email})`;
```

### Error Handling
```typescript
try {
  const result = await sql`SELECT * FROM posts`;
  return result;
} catch (error) {
  console.error('Database error:', error);
  return [];
}
```

### API Route with Validation
```typescript
export async function POST({ request }) {
  const data = await request.json();
  if (!data.email) {
    return new Response('Email required', { status: 400 });
  }
  await sql`INSERT INTO subscribers (email) VALUES (${data.email})`;
  return new Response('Success', { status: 200 });
}
```
