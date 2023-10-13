CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial NOT NULL,
	"color" varchar(7),
	"user_id" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags" ADD CONSTRAINT "tags_user_id_users_email_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("email_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
