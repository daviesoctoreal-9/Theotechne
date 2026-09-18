

import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { getExerciseOpened, markExerciseLinkOpened } from "@/lib/localProgress";
import { trpc } from "@/lib/trpc";
import { courseModules, programme } from "@shared/courseContent";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, FileText, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";

function formatDate(value?: string | Date | null) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default function ExercisePage() {
  const [, params] = useRoute("/module/:slug/exercise");
  const [, navigate] = useLocation();
  const module = courseModules.find((item) => item.id === params?.slug) ?? courseModules[0];

  const { data, isLoading } = trpc.learner.dashboard.useQuery();
  const utils = trpc.useUtils();
  const submitExercise = trpc.learner.submitExercise.useMutation({ onSuccess: () => utils.learner.dashboard.invalidate() });

  const [opened, setOpened] = useState(() => getExerciseOpened(module.id));

  // Re-sync if the learner opens links in another tab and comes back.
  useEffect(() => {
    setOpened(getExerciseOpened(module.id));
  }, [module.id]);

  if (isLoading || !data) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
        </div>
      </DashboardLayout>
    );
  }

  const submission = data.submissions.find((item) => item.moduleId === module.number);
  const isSubmitted = submission?.status === "submitted";
  const submittedDate = formatDate(submission?.submittedAt);
  const moduleFormUrl = programme.moduleFormUrls[module.id as keyof typeof programme.moduleFormUrls] ?? programme.submissionLinks.form;

  const hasOpenedEither = opened.form || opened.doc;
  // Once already submitted, don't re-lock the button behind the proxy check --
  // the learner has already been through this flow once.
  const canSubmit = isSubmitted || hasOpenedEither;

  function handleOpenLink(which: "form" | "doc") {
    markExerciseLinkOpened(module.id, which);
    setOpened(getExerciseOpened(module.id));
  }

  const questions = module.exerciseQuestions?.length
    ? module.exerciseQuestions
    : [{ id: "fallback", prompt: module.exercisePrompt }];

  return (
    <DashboardLayout>
      <div className="dashboard-shell max-w-3xl">
        <Link href={`/module/${module.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Back to module
        </Link>

        <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Module 0{module.number} &middot; End-of-module exercise
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">{module.exerciseTitle}</h1>
          <p className="mt-4 text-lg font-semibold leading-8 text-slate-600">{module.exercisePrompt}</p>

          {isSubmitted && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-extrabold text-blue-800">
              <CheckCircle2 className="h-4 w-4" />
              {submittedDate ? `Submitted ${submittedDate}` : "Submitted"}
            </p>
          )}

          <ol className="mt-8 space-y-5">
            {questions.map((question, index) => (
              <li key={question.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base font-extrabold text-slate-900">
                  {index + 1}. {question.prompt}
                </p>
                {"helperText" in question && question.helperText && (
                  <p className="mt-2 text-sm font-semibold text-slate-500">{question.helperText}</p>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/15 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-950">Write your answers here</p>
            <div className="mt-4 space-y-3">
              <a
                href={moduleFormUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleOpenLink("form")}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-blue-700" /> Open Google Form
                  {opened.form && <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href={programme.submissionLinks.doc}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleOpenLink("doc")}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-700" /> Copy Google Docs template
                  {opened.doc && <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>

              <Button
                onClick={() =>
                  submitExercise.mutate(
                    { moduleId: module.number, formUrl: moduleFormUrl, docUrl: programme.submissionLinks.doc },
                    { onSuccess: () => navigate(`/module/${module.id}`) },
                  )
                }
                disabled={!canSubmit || submitExercise.isPending}
                className="w-full rounded-xl bg-blue-700 text-base font-extrabold text-white hover:bg-blue-800 disabled:opacity-40"
              >
                {isSubmitted ? "Update my submission" : "Mark exercise submitted"}
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>

              {!canSubmit && (
                <p className="text-sm font-semibold leading-6 text-blue-950/70">
                  Open the Form or the Doc above first, complete your answers there, then come back and mark it submitted.
                </p>
              )}
              <p className="text-xs font-semibold leading-5 text-blue-950/60">
                We can't yet confirm the Form or Doc itself was filled in -- this just checks that you opened one of them. Your own honesty is what keeps this record meaningful.
              </p>
            </div>
          </div>
        </article>
      </div>
    </DashboardLayout>
  );
}