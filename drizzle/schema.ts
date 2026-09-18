import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const programmes = mysqlTable("programmes", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  title: text("title").notNull(),
  institute: text("institute").notNull(),
  motto: text("motto").notNull(),
  batchLabel: varchar("batchLabel", { length: 120 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const modules = mysqlTable("courseModules", {
  id: int("id").autoincrement().primaryKey(),
  programmeId: int("programmeId").notNull(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  moduleNumber: int("moduleNumber").notNull(),
  title: text("title").notNull(),
  strapline: text("strapline").notNull(),
  whyItMatters: text("whyItMatters").notNull(),
  outcomesJson: text("outcomesJson").notNull(),
  exerciseTitle: text("exerciseTitle").notNull(),
  exercisePrompt: text("exercisePrompt").notNull(),
});

export const lessons = mysqlTable("courseLessons", {
  id: int("id").autoincrement().primaryKey(),
  moduleId: int("moduleId").notNull(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  contentJson: text("contentJson").notNull(),
  duration: varchar("duration", { length: 40 }).notNull(),
  lessonOrder: int("lessonOrder").notNull(),
});

export const enrolments = mysqlTable("enrolments", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  programmeId: int("programmeId").notNull(),
  status: mysqlEnum("status", ["active", "completed", "paused"]).default("active").notNull(),
  enrolledAt: timestamp("enrolledAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const lessonProgress = mysqlTable("lessonProgress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  lessonId: int("lessonId").notNull(),
  completedAt: timestamp("completedAt"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const exerciseSubmissions = mysqlTable("exerciseSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: int("moduleId").notNull(),
  status: mysqlEnum("status", ["not_started", "submitted", "reviewed"]).default("not_started").notNull(),
  formUrl: text("formUrl").notNull(),
  docUrl: text("docUrl").notNull(),
  submittedAt: timestamp("submittedAt"),
  notes: text("notes"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Programme = typeof programmes.$inferSelect;
export type CourseModule = typeof modules.$inferSelect;
export type CourseLesson = typeof lessons.$inferSelect;
export type Enrolment = typeof enrolments.$inferSelect;
export type LessonProgress = typeof lessonProgress.$inferSelect;
export type ExerciseSubmission = typeof exerciseSubmissions.$inferSelect;
