import dotenv from "dotenv";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const sql = neon(process.env.DB_URL!);
const db = drizzle(sql);

export default db;
