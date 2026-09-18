CREATE TABLE `enrolments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`programmeId` int NOT NULL,
	`status` enum('active','completed','paused') NOT NULL DEFAULT 'active',
	`enrolledAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `enrolments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `exerciseSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` int NOT NULL,
	`status` enum('not_started','submitted','reviewed') NOT NULL DEFAULT 'not_started',
	`formUrl` text NOT NULL,
	`docUrl` text NOT NULL,
	`submittedAt` timestamp,
	`notes` text,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `exerciseSubmissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `lessonProgress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`lessonId` int NOT NULL,
	`completedAt` timestamp,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lessonProgress_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `courseLessons` (
	`id` int AUTO_INCREMENT NOT NULL,
	`moduleId` int NOT NULL,
	`slug` varchar(120) NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`contentJson` text NOT NULL,
	`duration` varchar(40) NOT NULL,
	`lessonOrder` int NOT NULL,
	CONSTRAINT `courseLessons_id` PRIMARY KEY(`id`),
	CONSTRAINT `courseLessons_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `courseModules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`programmeId` int NOT NULL,
	`slug` varchar(120) NOT NULL,
	`moduleNumber` int NOT NULL,
	`title` text NOT NULL,
	`strapline` text NOT NULL,
	`whyItMatters` text NOT NULL,
	`outcomesJson` text NOT NULL,
	`exerciseTitle` text NOT NULL,
	`exercisePrompt` text NOT NULL,
	CONSTRAINT `courseModules_id` PRIMARY KEY(`id`),
	CONSTRAINT `courseModules_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `programmes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(120) NOT NULL,
	`title` text NOT NULL,
	`institute` text NOT NULL,
	`motto` text NOT NULL,
	`batchLabel` varchar(120) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `programmes_id` PRIMARY KEY(`id`),
	CONSTRAINT `programmes_slug_unique` UNIQUE(`slug`)
);
