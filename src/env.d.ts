interface ImportMetaEnv {
  readonly NEON_DATABASE_URL: string;
  readonly SITE_URL?: string;
  readonly PUBLIC_GA_ID?: string;
  readonly EMAIL_FROM?: string;
  readonly EMAIL_TO?: string;
  readonly RESEND_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
