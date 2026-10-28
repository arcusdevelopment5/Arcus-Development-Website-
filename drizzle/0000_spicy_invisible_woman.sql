CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`idempotency` text NOT NULL,
	`kind` text NOT NULL,
	`intent` text NOT NULL,
	`name` text NOT NULL,
	`phone` text,
	`email` text,
	`area` text NOT NULL,
	`sqm` integer,
	`timeline` text,
	`description` text,
	`source` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`assigned_to` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`crm_status` text DEFAULT 'pending' NOT NULL,
	`admin_notes` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `inquiries_idempotency_unique` ON `inquiries` (`idempotency`);--> statement-breakpoint
CREATE TABLE `inquiry_files` (
	`id` text PRIMARY KEY NOT NULL,
	`inquiry_id` text NOT NULL,
	`object_key` text NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`size` integer NOT NULL,
	FOREIGN KEY (`inquiry_id`) REFERENCES `inquiries`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `submission_rates` (
	`key` text PRIMARY KEY NOT NULL,
	`window` text NOT NULL,
	`count` integer DEFAULT 1 NOT NULL
);
