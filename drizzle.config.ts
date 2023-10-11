import dotenv from "dotenv" 
import type { Config } from "drizzle-kit";

dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

const config =  {
  schema: "./schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DB_URL || "",
    authToken: process.env.DB_TOKEN || ""
  },
  verbose: true,
  strict: true,
  driver: "turso"
} satisfies Config;

console.log(config)

export default config;