CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial NOT NULL,
	"is_complete" boolean,
	"due_date" date,
	"due_time" time with time zone
);
