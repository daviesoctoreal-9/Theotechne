import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import LessonQuizGate from "@/components/LessonQuizGate";
import { getQuizPassed, setQuizPassed } from "@/lib/localProgress";
import { trpc } from "@/lib/trpc";
import { courseModules, programme } from "@shared/courseContent";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronRight, Loader2, LockKeyhole, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";

// How many paragraphs of lesson.content are shown per internal page.
// Tune this as lesson content grows -- lower it for denser topics, raise
// it for lessons with many short paragraphs.
const PARAGRAPHS_PER_PAGE = 16;

function chunk<T>(items: T[], size: number): T[][] {
  if (items.length === 0) return [[]];
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

function formatDate(value?: string | Date | null) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default function ModulePage() {
  const [, params] = useRoute("/module/:slug");
  const module = useMemo(() => courseModules.find((item) => item.id === params?.slug) ?? courseModules[0], [params?.slug]);
  const { data, isLoading } = trpc.learner.dashboard.useQuery();
  const utils = trpc.useUtils();
  const completeLesson = trpc.learner.completeLesson.useMutation({ onSuccess: () => utils.learner.dashboard.invalidate() });

  if (isLoading || !data) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
        </div>
      </DashboardLayout>
    );
  }

  const moduleStatus = data.modules.find((item) => item.id === module.id) ?? data.modules[0];
  const priorModule = data.modules.find((item) => item.number === module.number - 1);
  const priorComplete = !priorModule || priorModule.isComplete;
  const submission = data.submissions.find((item) => item.moduleId === module.number);
  // A submission row is only ever created once submitted (db.ts always writes
  // status: "submitted" on creation) -- presence + status check, not a
  // three-state field.
  const isSubmitted = submission?.status === "submitted";
  const submittedDate = formatDate(submission?.submittedAt);
  // Module 8 (graduation project) uses its own project-selection +
  // certificate flow instead of the generic Google Form exercise -- see
  // client/src/pages/FinalProjectPage.tsx.
  const isGraduationModule = module.id === "graduation-project";

  return (
    <DashboardLayout>
      <div className="dashboard-shell max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4" /> Back to dashboard
          </Link>
          <a href={programme.contactHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800">
            <MessageCircle className="h-4 w-4" /> Ask the Institute
          </a>
        </div>

        <header className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Module 0{module.number} &middot; {module.lessons.length} lessons
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                {module.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
                {module.strapline}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-extrabold text-blue-800">
              {moduleStatus.progress}% complete
            </span>
          </div>
          <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600" style={{ width: `${moduleStatus.progress}%` }} />
          </div>
        </header>

        {!priorComplete && (
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/15 p-4 text-sm font-bold text-blue-950">
            <LockKeyhole className="h-5 w-5 shrink-0 text-blue-900" />
            Complete the previous module before opening this learning path.
          </div>
        )}

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* ---------- Lessons list ---------- */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Learning path</p>
            <div className="mt-4 space-y-3">
              {module.lessons.map((lesson, index) => {
                const lessonId = module.number * 100 + index + 1;
                const isComplete = moduleStatus.completedLessons > index;
                const unlocked = priorComplete && (index === 0 || moduleStatus.completedLessons >= index);

                return (
                  <article
                    key={lesson.id}
                    className={`rounded-2xl border p-5 transition ${
                      unlocked ? "border-slate-200 bg-white shadow-sm" : "border-slate-100 bg-slate-50 opacity-70"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          isComplete
                            ? "bg-gold text-blue-950"
                            : unlocked
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {isComplete ? (
                          <Check className="h-5 w-5" />
                        ) : unlocked ? (
                          <span className="text-base font-extrabold">{index + 1}</span>
                        ) : (
                          <LockKeyhole className="h-4 w-4" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <h2 className="text-lg font-extrabold text-slate-900">{lesson.title}</h2>
                          <span className="text-sm font-bold text-slate-500">{lesson.duration}</span>
                        </div>
                        <p className="mt-2 text-base font-semibold leading-7 text-slate-600">{lesson.summary}</p>
                        {unlocked && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Link href={`/module/${module.id}/lesson/${lesson.id}`}>
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full border-blue-200 bg-white font-bold text-blue-800 hover:bg-blue-50"
                              >
                                {isComplete ? "Review lesson" : "Open lesson"}
                                <ArrowRight className="ml-2 h-3.5 w-3.5" />
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="rounded-full font-bold text-slate-600 hover:text-blue-700"
                              onClick={() => completeLesson.mutate({ lessonId, completed: !isComplete })}
                            >
                              {isComplete ? "Mark incomplete" : "Mark complete"}
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ---------- Sidebar: why it matters + exercise ---------- */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">Why this matters</p>
              <p className="mt-4 text-base font-semibold leading-7 text-slate-700">{module.whyItMatters}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-blue-800">By the end, you can</p>
              <ul className="mt-3 space-y-3 text-base font-semibold text-slate-700">
                {module.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The exercise itself (questions + Form/Doc submission) lives
               on its own page at /module/:slug/exercise -- . Module 8 instead
               links to /module/:slug/final-project */}
            <div className="rounded-2xl border border-gold/40 bg-gold/15 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-950">
                {isGraduationModule ? "Graduation project" : "End-of-module exercise"}
              </p>
              <h2 className="mt-3 text-xl font-extrabold text-blue-950">{module.exerciseTitle}</h2>
              <p className="mt-3 text-base font-semibold leading-7 text-blue-950/80">{module.exercisePrompt}</p>

              {isSubmitted && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-extrabold text-blue-950">
                  <CheckCircle2 className="h-4 w-4" />
                  {submittedDate ? `Submitted ${submittedDate}` : "Submitted"}
                </p>
              )}

              {isGraduationModule ? (
                <>
                  <Link href={`/module/${module.id}/final-project`}>
                    <Button className="mt-6 w-full rounded-xl bg-blue-700 text-base font-extrabold text-white hover:bg-blue-800">
                      {isSubmitted ? "View my certificate" : "Begin final project"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="mt-3 text-sm font-semibold leading-6 text-blue-950/70">
                    Choose one of five projects, submit your work, and download your certificate.
                  </p>
                </>
              ) : (
                <>
                  <Link href={`/module/${module.id}/exercise`}>
                    <Button className="mt-6 w-full rounded-xl bg-blue-700 text-base font-extrabold text-white hover:bg-blue-800">
                      {isSubmitted ? "Review exercise" : "Begin exercise"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="mt-3 text-sm font-semibold leading-6 text-blue-950/70">
                    {module.exerciseQuestions?.length ?? 1} question{(module.exerciseQuestions?.length ?? 1) === 1 ? "" : "s"} &middot; submit via Google Form or Doc
                  </p>
                </>
              )}
            </div>
          </aside>
        </section>
      </div>
    </DashboardLayout>
  );
}

export function LessonPage() {
  const [, params] = useRoute("/module/:slug/lesson/:lessonSlug");
  const module = courseModules.find((item) => item.id === params?.slug) ?? courseModules[0];
  const lesson = module.lessons.find((item) => item.id === params?.lessonSlug) ?? module.lessons[0];
  const lessonIndex = module.lessons.findIndex((item) => item.id === lesson.id);
  const { data, isLoading } = trpc.learner.dashboard.useQuery();
  const utils = trpc.useUtils();
  const completeLesson = trpc.learner.completeLesson.useMutation({ onSuccess: () => utils.learner.dashboard.invalidate() });

  const contentPages = useMemo(() => chunk(lesson.content, PARAGRAPHS_PER_PAGE), [lesson.id]);
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = contentPages.length;
  const isLastPage = pageIndex >= totalPages - 1;

  
  const [quizPassed, setQuizPassedState] = useState(() => (lesson.quiz?.length ? getQuizPassed(lesson.id) : true));

  
  useEffect(() => {
    setPageIndex(0);
  }, [lesson.id]);

  useEffect(() => {
    setQuizPassedState(lesson.quiz?.length ? getQuizPassed(lesson.id) : true);
  }, [lesson.id, lesson.quiz]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageIndex, lesson.id]);

  if (isLoading || !data) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
        </div>
      </DashboardLayout>
    );
  }

  const moduleStatus = data.modules.find((item) => item.id === module.id) ?? data.modules[0];
  const lessonId = module.number * 100 + lessonIndex + 1;
  const complete = moduleStatus.completedLessons > lessonIndex;
  const unlocked = lessonIndex === 0 || moduleStatus.completedLessons >= lessonIndex;

  if (!unlocked) {
    return (
      <DashboardLayout>
        <div className="dashboard-shell max-w-4xl">
          <Link href={`/module/${module.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4" /> Back to module
          </Link>
          <div className="mt-10 rounded-3xl border border-gold/40 bg-gold/15 p-10 text-center">
            <LockKeyhole className="mx-auto h-9 w-9 text-blue-950" />
            <h1 className="mt-5 text-3xl font-extrabold text-blue-950">This lesson is locked</h1>
            <p className="mx-auto mt-3 max-w-md text-base font-semibold leading-7 text-blue-950/80">
              Complete the previous lesson first, then return here to continue your learning path.
            </p>
            <Link href={`/module/${module.id}`}>
              <Button className="mt-7 rounded-full bg-blue-700 text-base font-extrabold text-white hover:bg-blue-800">
                Return to module
              </Button>
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  function handleQuizPassed() {
    setQuizPassed(lesson.id, true);
    setQuizPassedState(true);
  }

  return (
    <DashboardLayout>
      <div className="dashboard-shell max-w-4xl">
        <Link href={`/module/${module.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Back to module
        </Link>

        <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Module 0{module.number} &middot; Lesson {lessonIndex + 1}
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">{lesson.title}</h1>
              <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">{lesson.summary}</p>
            </div>
            <span className="shrink-0 text-sm font-bold text-slate-500">Approx. {lesson.duration}</span>
          </div>

          {totalPages > 1 && (
            <div className="mt-6 flex items-center gap-2" aria-hidden="true">
              {contentPages.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 flex-1 rounded-full ${index <= pageIndex ? "bg-blue-600" : "bg-slate-150 bg-slate-200"}`}
                />
              ))}
            </div>
          )}

           <div className="mt-8 space-y-6">
            {contentPages[pageIndex]?.map((paragraph, index) => {
              
              const isHeading = paragraph.startsWith("## ");
              if (isHeading) {
                return (
                  <p key={`${lesson.id}-${pageIndex}-${index}`} className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                    {paragraph.slice(3)}
                  </p>
                );
              }
              return (
                <p key={`${lesson.id}-${pageIndex}-${index}`} className="text-lg font-medium leading-9 text-slate-800">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Mini quiz gate: only shown on the last page */}
          {isLastPage && lesson.quiz?.length && !quizPassed && (
            <div className="mt-8">
              <LessonQuizGate quiz={lesson.quiz} onPassed={handleQuizPassed} />
            </div>
          )}

          <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Button
              variant="outline"
              onClick={() => setPageIndex((page) => Math.max(0, page - 1))}
              disabled={pageIndex === 0}
              className="rounded-full border-slate-200 font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {totalPages > 1 && (
              <span className="text-sm font-extrabold text-slate-500">
                Page {pageIndex + 1} of {totalPages}
              </span>
            )}

            {isLastPage ? (
              <Button
                onClick={() => completeLesson.mutate({ lessonId, completed: !complete })}
                disabled={!quizPassed && !complete}
                title={!quizPassed && !complete ? "Pass the quick check above first" : undefined}
                className={`rounded-full text-base font-extrabold disabled:opacity-40 ${
                  complete ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                {complete ? "Lesson complete" : "Mark lesson complete"}
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => setPageIndex((page) => Math.min(totalPages - 1, page + 1))}
                className="rounded-full bg-blue-700 text-base font-extrabold text-white hover:bg-blue-800"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </article>

        <div className="mt-6 flex justify-between gap-4">
          <span>
            {lessonIndex > 0 && (
              <Link
                href={`/module/${module.id}/lesson/${module.lessons[lessonIndex - 1].id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700"
              >
                <ArrowLeft className="h-4 w-4" /> Previous lesson
              </Link>
            )}
          </span>
          <span>
            {lessonIndex < module.lessons.length - 1 && (
              <Link
                href={`/module/${module.id}/lesson/${module.lessons[lessonIndex + 1].id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800"
              >
                Next lesson <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
}