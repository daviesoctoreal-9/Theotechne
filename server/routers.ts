import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { courseModules, programme, totalLessons } from "@shared/courseContent";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { ensureEnrolment, getExerciseSubmissions, getLearnerProgress, markExerciseSubmitted, setLessonComplete } from "./db";

function stableLessonId(moduleNumber: number, lessonOrder: number) {
  return moduleNumber * 100 + lessonOrder;
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  programme: router({
    overview: publicProcedure.query(() => ({ programme, modules: courseModules, totalLessons })),
  }),
  learner: router({
    enrol: protectedProcedure.mutation(async ({ ctx }) => {
      return ensureEnrolment(ctx.user.id);
    }),
    dashboard: protectedProcedure.query(async ({ ctx }) => {
      await ensureEnrolment(ctx.user.id);
      const progressRows = await getLearnerProgress(ctx.user.id);
      const submissions = await getExerciseSubmissions(ctx.user.id);
      const completedLessonIds = progressRows.filter(row => Boolean(row.completedAt)).map(row => row.lessonId);
      const modules = courseModules.map(module => {
        const completed = module.lessons.filter((_, index) => completedLessonIds.includes(stableLessonId(module.number, index + 1))).length;
        const total = module.lessons.length;
        return { ...module, completedLessons: completed, totalLessons: total, isComplete: completed === total, progress: Math.round((completed / total) * 100) };
      });
      const completedLessons = modules.reduce((sum, module) => sum + module.completedLessons, 0);
      const currentModule = modules.find(module => !module.isComplete) ?? modules[modules.length - 1];
      return { programme, modules, completedLessons, totalLessons, overallProgress: Math.round((completedLessons / totalLessons) * 100), currentModule, submissions };
    }),
    completeLesson: protectedProcedure.input(z.object({ lessonId: z.number().int().positive(), completed: z.boolean().default(true) })).mutation(async ({ ctx, input }) => {
      return setLessonComplete(ctx.user.id, input.lessonId, input.completed);
    }),
    submitExercise: protectedProcedure
  .input(z.object({
    moduleId: z.number().int().positive(),
    formUrl: z.string().url().optional(),
    docUrl: z.string().url().optional(),
    notes: z.string().max(2000).optional(),
  }))
  .mutation(async ({ ctx, input }) => {
    return markExerciseSubmitted(ctx.user.id, input.moduleId, input.formUrl, input.docUrl, input.notes);
  }),
  }),
});

export type AppRouter = typeof appRouter;
