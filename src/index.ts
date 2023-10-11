import dotenv from "dotenv" 
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

dotenv.config({ path: `.env.${process.env.NODE_ENV}`});
const client = createClient({ url: process.env.DB_URL || "", authToken: process.env.DB_TOKEN || "" });
const db = drizzle(client);

export default db;