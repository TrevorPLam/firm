# Firm - Digital Marketing Agency Website

A modern, multilingual digital marketing agency website built with Astro, featuring SEO optimization, accessibility compliance, and performance-first design.

## Features

- **Multilingual Support**: English, Spanish, French, and German with Astro i18n routing
- **SEO Optimized**: JSON-LD structured data, sitemaps, and robots.txt
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance**: Lighthouse-optimized with image optimization and code splitting
- **Contact Form**: Integrated with Neon PostgreSQL and Resend email service
- **Blog**: Content collections with 10+ marketing articles
- **Testing**: Vitest test suite with API route coverage
- **Deployment**: Automated CI/CD via GitHub Actions to Cloudflare Workers

## Tech Stack

- **Framework**: Astro 6.4.2
- **Styling**: TailwindCSS 4.3.0
- **Database**: Neon PostgreSQL (serverless)
- **Email**: Resend
- **Testing**: Vitest 4.1.7
- **Deployment**: Cloudflare Workers
- **Node.js**: >=22.12.0

## Project Structure

```text
/
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Blog content collections
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions (database client)
│   └── pages/           # Route pages (en, es, fr, de)
├── database/            # SQL schema
├── scripts/             # Database setup scripts
├── tests/               # Vitest test files
├── .env.example         # Environment variables template
├── astro.config.mjs     # Astro configuration
├── wrangler.jsonc       # Cloudflare Workers configuration
└── package.json         # Dependencies and scripts
```

## Setup

### Prerequisites

- Node.js >=22.12.0
- pnpm (recommended) or npm
- Neon account (for database)
- Resend account (for email)
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/firm.git
cd firm
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your values:
- `SITE_URL`: Your production domain
- `NEON_DATABASE_URL`: Neon PostgreSQL connection string
- `EMAIL_FROM`: Sender email address
- `EMAIL_TO`: Recipient email address
- `RESEND_API_KEY`: Resend API key
- `PUBLIC_GA_ID`: Google Analytics ID (optional)

4. Set up the database:
```bash
node scripts/setup-db.js
```

## Development

### Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Run Tests

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Type Checking

```bash
npm run astro check
```

## Deployment

### Manual Deployment to Cloudflare

1. Authenticate with Cloudflare:
```bash
npx wrangler login
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
npx wrangler deploy
```

4. Set environment variables in Cloudflare:
```bash
npx wrangler secret put NEON_DATABASE_URL
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put EMAIL_FROM
npx wrangler secret put EMAIL_TO
```

### Automated Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to Cloudflare Workers on push to the `master` branch.

Required GitHub secrets:
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | Yes | Production site URL |
| `NEON_DATABASE_URL` | Yes | Neon PostgreSQL connection string |
| `EMAIL_FROM` | Yes | Sender email for contact form |
| `EMAIL_TO` | Yes | Recipient email for contact form |
| `RESEND_API_KEY` | Yes | Resend API key for email service |
| `PUBLIC_GA_ID` | No | Google Analytics tracking ID |

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm test` | Run test suite |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run astro check` | Type check Astro files |
| `npm run generate-types` | Generate Cloudflare types |

## Documentation

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Resend Documentation](https://resend.com/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)

## License

MIT
