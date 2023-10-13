CREATE TABLE IF NOT EXISTS "link_tags_tasks" (
	"task_id" integer,
	"tag_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "link_tags_tasks" ADD CONSTRAINT "link_tags_tasks_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "link_tags_tasks" ADD CONSTRAINT "link_tags_tasks_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
