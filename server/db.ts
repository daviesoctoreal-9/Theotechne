import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  enrolments,
  exerciseSubmissions,
  lessonProgress,
  users,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) return;

  const values: InsertUser = { openId: user.openId };
  const updateSet: Record<string, unknown> = {};
  const textFields = ["name", "email", "loginMethod"] as const;
  for (const field of textFields) {
    if (user[field] !== undefined) {
      values[field] = user[field] ?? null;
      updateSet[field] = user[field] ?? null;
    }
  }
  values.lastSignedIn = user.lastSignedIn ?? new Date();
  updateSet.lastSignedIn = values.lastSignedIn;
  if (user.role) {
    values.role = user.role;
    updateSet.role = user.role;
  } else if (user.openId === ENV.ownerOpenId) {
    values.role = "admin";
    updateSet.role = "admin";
  }

  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function ensureEnrolment(userId: number, programmeId = 1) {
  const db = await getDb();
  if (!db) return null;
  const existing = await db.select().from(enrolments).where(and(eq(enrolments.userId, userId), eq(enrolments.programmeId, programmeId))).limit(1);
  if (existing[0]) return existing[0];
  await db.insert(enrolments).values({ userId, programmeId, status: "active" });
  const created = await db.select().from(enrolments).where(and(eq(enrolments.userId, userId), eq(enrolments.programmeId, programmeId))).limit(1);
  return created[0] ?? null;
}

export async function getLearnerProgress(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(lessonProgress).where(eq(lessonProgress.userId, userId)).orderBy(desc(lessonProgress.updatedAt));
}

export async function setLessonComplete(userId: number, lessonId: number, completed: boolean) {
  const db = await getDb();
  if (!db) return null;
  const existing = await db.select().from(lessonProgress).where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId))).limit(1);
  const completedAt = completed ? new Date() : null;
  if (existing[0]) {
    await db.update(lessonProgress).set({ completedAt, updatedAt: new Date() }).where(eq(lessonProgress.id, existing[0].id));
    const updated = await db.select().from(lessonProgress).where(eq(lessonProgress.id, existing[0].id)).limit(1);
    return updated[0] ?? null;
  }
  await db.insert(lessonProgress).values({ userId, lessonId, completedAt });
  const created = await db.select().from(lessonProgress).where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId))).limit(1);
  return created[0] ?? null;
}

export async function getExerciseSubmissions(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(exerciseSubmissions).where(eq(exerciseSubmissions.userId, userId));
}

export async function markExerciseSubmitted(
  userId: number,
  moduleId: number,
  formUrl?: string,
  docUrl?: string,
  notes?: string
) {
  const db = await getDb();
  if (!db) return null;
  const existing = await db.select().from(exerciseSubmissions).where(and(eq(exerciseSubmissions.userId, userId), eq(exerciseSubmissions.moduleId, moduleId))).limit(1);
  const values = {
    status: "submitted" as const,
    formUrl: formUrl ?? "",   
    docUrl: docUrl ?? "",     
    submittedAt: new Date(),
    notes: notes ?? null,     
    updatedAt: new Date(),
  };
  if (existing[0]) {
    await db.update(exerciseSubmissions).set(values).where(eq(exerciseSubmissions.id, existing[0].id));
    const updated = await db.select().from(exerciseSubmissions).where(eq(exerciseSubmissions.id, existing[0].id)).limit(1);
    return updated[0] ?? null;
  }
  await db.insert(exerciseSubmissions).values({ userId, moduleId, ...values });
  const created = await db.select().from(exerciseSubmissions).where(and(eq(exerciseSubmissions.userId, userId), eq(exerciseSubmissions.moduleId, moduleId))).limit(1);
  return created[0] ?? null;
}
