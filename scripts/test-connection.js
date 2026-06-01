import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.NEON_DATABASE_URL);

console.log('Testing database connection...');
const result = await sql`SELECT 1`;
console.log('Connection successful:', result);
