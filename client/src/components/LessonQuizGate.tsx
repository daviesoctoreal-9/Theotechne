// client/src/components/LessonQuizGate.tsx
//
// A small mini-quiz shown at the end of a lesson's pages. Nothing here
// touches the backend -- pass/fail lives in localStorage only
// (client/src/lib/localProgress.ts), so it's just a soft on-device gate
// in front of the real "Mark lesson complete" action, not a graded
// assessment.

import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@shared/courseContent";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";

export default function LessonQuizGate({
  quiz,
  onPassed,
}: {
  quiz: QuizQuestion[];
  onPassed: () => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [graded, setGraded] = useState(false);

  const allAnswered = quiz.every((q) => answers[q.id]);
  const correctCount = quiz.filter((q) => answers[q.id] === q.correctOptionId).length;
  const passed = graded && correctCount === quiz.length;



  function handleCheck() {
    setGraded(true);
  }

  function handleRetry() {
    setAnswers({});
    setGraded(false);
  }

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">Quick check</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-blue-950/80">
        Answer these before marking the lesson complete.  confirms the lesson made sense.
      </p>

      <div className="mt-5 space-y-6">
        {quiz.map((question, qIndex) => {
          const selected = answers[question.id];
          const isCorrect = selected === question.correctOptionId;

          return (
            <div key={question.id}>
              <p className="text-base font-extrabold text-slate-900">
                {qIndex + 1}. {question.prompt}
              </p>
              <div className="mt-3 space-y-2">
                {question.options.map((option) => {
                  const isSelected = selected === option.id;
                  const isCorrectOption = option.id === question.correctOptionId;
                  // Once graded: always reveal the correct option in green
                  // (whether or not the learner picked it), and mark their
                  // own wrong pick in red. Before grading, just show the
                  // in-progress selection.
                  const showCorrect = graded && isCorrectOption;
                  const showWrongPick = graded && isSelected && !isCorrectOption;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={graded}
                      onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option.id }))}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${
                        showCorrect
                          ? "border-green-400 bg-green-50 text-green-900"
                          : showWrongPick
                            ? "border-red-300 bg-red-50 text-red-900"
                            : isSelected
                              ? "border-blue-400 bg-white text-blue-900"
                              : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
                      } ${graded ? "cursor-default" : ""}`}
                    >
                      <span>{option.text}</span>
                      {showCorrect && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                      {showWrongPick && <XCircle className="h-4 w-4 text-red-500" />}
                    </button>
                  );
                })}
              </div>
              {graded && !isCorrect && question.explanation && (
                <p className="mt-2 text-sm font-semibold text-blue-950/70">{question.explanation}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {!graded && (
          <Button
            onClick={handleCheck}
            disabled={!allAnswered}
            className="rounded-full bg-blue-700 text-sm font-extrabold text-white hover:bg-blue-800 disabled:opacity-40"
          >
            Check answers
          </Button>
        )}

        {passed && (
          <>
            <p className="inline-flex items-center gap-2 text-sm font-extrabold text-green-700">
              <CheckCircle2 className="h-4 w-4" /> All correct -- nice work.
            </p>
            <Button
              onClick={onPassed}
              className="rounded-full bg-blue-700 text-sm font-extrabold text-white hover:bg-blue-800"
            >
              Continue
            </Button>
          </>
        )}

        {graded && !passed && (
          <Button
            variant="ghost"
            onClick={handleRetry}
            className="rounded-full text-sm font-bold text-slate-600 hover:text-blue-700"
          >
            <RotateCcw className="mr-2 h-3.5 w-3.5" /> Try again
          </Button>
        )}
      </div>
    </div>
  );
}