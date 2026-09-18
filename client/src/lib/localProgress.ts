
const QUIZ_PREFIX = "aiid:quiz-passed:";
const EXERCISE_OPENED_PREFIX = "aiid:exercise-opened:";

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    // localStorage can throw in private-browsing/embedded contexts --
    // fail closed (treat as "not passed" / "not opened") rather than crash.
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Best effort only -- if storage is unavailable, the gate just falls
    // back to requiring the quiz again next time, which is safe.
  }
}

/** Has the learner passed the mini quiz for this lesson? */
export function getQuizPassed(lessonId: string): boolean {
  return safeGet(QUIZ_PREFIX + lessonId) === "true";
}

export function setQuizPassed(lessonId: string, passed: boolean) {
  safeSet(QUIZ_PREFIX + lessonId, passed ? "true" : "false");
}

export type ExerciseOpenedState = { form: boolean; doc: boolean };

/** Has the learner clicked through to the Form and/or the Doc for this module's exercise? */
export function getExerciseOpened(moduleId: string): ExerciseOpenedState {
  const raw = safeGet(EXERCISE_OPENED_PREFIX + moduleId);
  if (!raw) return { form: false, doc: false };
  try {
    const parsed = JSON.parse(raw);
    return { form: !!parsed.form, doc: !!parsed.doc };
  } catch {
    return { form: false, doc: false };
  }
}

export function markExerciseLinkOpened(moduleId: string, which: "form" | "doc") {
  const current = getExerciseOpened(moduleId);
  const next = { ...current, [which]: true };
  safeSet(EXERCISE_OPENED_PREFIX + moduleId, JSON.stringify(next));
}