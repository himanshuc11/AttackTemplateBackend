CREATE TABLE IF NOT EXISTS "users" (
	"email_id" text PRIMARY KEY NOT NULL,
	"name" text,
	"setting" jsonb
);
