import { integer, text, pgTable, jsonb } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  emailId: text("email_id").primaryKey(),
  name: text("name"),
  setting: jsonb("setting"),
});
