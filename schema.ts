import {
  serial,
  varchar,
  text,
  pgTable,
  jsonb,
  boolean,
  date,
  time,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  emailId: text("email_id").primaryKey(),
  name: text("name"),
  setting: jsonb("setting"),
});

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  color: varchar("color", { length: 7 }),
  userId: text("user_id").references(() => users.emailId),
});

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  isComplete: boolean("is_complete"),
  dueDate: date("due_date"),
  dueTime: time("due_time", { withTimezone: true }),
});

export const linkTagsTasks = pgTable("link_tags_tasks", {
  taskId: integer("task_id").references(() => tasks.id),
  tagId: integer("tag_id").references(() => tags.id),
});
