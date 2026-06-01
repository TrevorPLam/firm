interface ImportMetaEnv {
  readonly NEON_DATABASE_URL: string;
  readonly SITE_URL?: string;
  readonly PUBLIC_GA_ID?: string;
  readonly EMAIL_FROM?: string;
  readonly EMAIL_TO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
