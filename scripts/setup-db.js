import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.NEON_DATABASE_URL);

console.log('Executing database schema...');

// Create contact_submissions table
await sql`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  )
`;

console.log('Created contact_submissions table');

// Create index for email
await sql`
  CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email)
`;

console.log('Created email index');

// Create index for created_at
await sql`
  CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC)
`;

console.log('Created created_at index');
console.log('Schema executed successfully!');
