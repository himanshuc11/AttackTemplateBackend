import {
    sqliteTable,
    integer,
    text,
} from "drizzle-orm/sqlite-core";
  
export const users = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    last_name: text("username").unique().notNull(),
});