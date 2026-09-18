import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Loader2,
  LockKeyhole,
  MessageCircle,
} from "lucide-react";
import { Link } from "wouter";
import { programme } from "@shared/courseContent";
import { useAuth } from "@/_core/hooks/useAuth";
import { useMemo, useState } from "react";
import Lightfall from "@/components/ui/lightfall";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import GhostFibers from "@/components/ui/GhostFibers";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKLY_RHYTHM = [
  { day: "Mon", focus: "Watch the lesson", color: "bg-blue-600" },
  { day: "Tue", focus: "Take notes", color: "bg-blue-500" },
  { day: "Wed", focus: "Try the exercise", color: "bg-gold" },
  { day: "Thu", focus: "Ask a question", color: "bg-blue-500" },
  { day: "Fri", focus: "Practice again", color: "bg-blue-600" },
  { day: "Sat", focus: "Review the week", color: "bg-gold" },
  { day: "Sun", focus: "Rest", color: "bg-slate-300" },
];

type DashboardModule = {
  id: string;
  number: number;
  title: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  exerciseTitle: string;
  isComplete: boolean;
};

type ExerciseSubmission = {
  moduleId: number;
  status: string;
  formUrl?: string | null;
  docUrl?: string | null;
  notes?: string | null;
  submittedAt?: string | Date | null;
};

export default function Dashboard() {
  const { data, isLoading } = trpc.learner.dashboard.useQuery();
  const { user } = useAuth();

  if (isLoading || !data) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
        </div>
      </DashboardLayout>
    );
  }

  const current = data.currentModule;
  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <DashboardLayout>
      <div className="dashboard-shell space-y-6">
        {/* ---------- Top row: greeting + calendar ---------- */}
        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <WelcomeBanner name={firstName} current={current} />
          <MiniCalendar />
        </div>

        {/* ---------- Your Courses ---------- */}
        <section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Your learning
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Your Courses
              </h2>
            </div>
            <span className="text-sm font-bold text-slate-500">
              {programme.batch}
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.modules.map((module: DashboardModule) => (
              <ModuleCard key={module.id} module={module} isCurrent={module.id === current.id} />
            ))}
          </div>
        </section>

        {/* ---------- Bottom row: schedule + exercise progress ---------- */}
        <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
          <WeeklyRhythmCard />
          <ExerciseProgressCard
            submissions={data.submissions}
            modules={data.modules}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

/* ============================== Welcome banner ============================== */

function WelcomeBanner({
  name,
  current,
}: {
  name: string;
  current: DashboardModule;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-7 text-white shadow-lg sm:p-9">
  <div
    aria-hidden="true"
    className="absolute inset-0"
  >
    <Lightfall
      className="absolute inset-0"
      colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
      backgroundColor="#0A29FF"
      speed={0.5}
      streakCount={2}
      streakWidth={1}
      streakLength={1}
      glow={1}
      density={0.6}
      twinkle={1}
      zoom={3}
      backgroundGlow={0.5}
      opacity={1}
      mouseInteraction
      mouseStrength={0.5}
      mouseRadius={1}
    />
  </div>

      <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
            Learner workspace
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Welcome back, {name}!
          </h1>
          <p className="mt-3 text-base font-semibold leading-7 text-blue-100">
            You are {current.progress}% through Module {current.number}: {current.title}.
            Keep up your steady progress.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={`/module/${current.id}`}>
              <Button className="rounded-full bg-gold px-6 py-6 text-base font-extrabold text-blue-950 shadow-md hover:bg-[#f7d78c]">
                Go back to the lessons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href={programme.contactHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-blue-300 underline-offset-4 hover:text-blue-100"
            >
              <MessageCircle className="h-4 w-4" /> Need help? WhatsApp us
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hidden shrink-0 items-center justify-center lg:flex"
        >
          <div className="grid h-28 w-28 place-items-center rounded-3xl bg-gold/90 shadow-xl">
  <img
    src="/images/img8.png"
    alt=""
    aria-hidden="true"
    className="h-full w-full object-contain"
  />
</div>
        </div>
      </div>
    </div>
  );
}

/* ============================== Mini calendar ============================== */

function MiniCalendar() {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const monthLabel = viewDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstWeekday = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isToday = (day: number | null) =>
    !!day &&
    viewDate.getFullYear() === today.getFullYear() &&
    viewDate.getMonth() === today.getMonth() &&
    day === today.getDate();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-extrabold text-slate-900">{monthLabel}</h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
            className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
            className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-y-2 text-center">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label} className="text-xs font-extrabold uppercase text-slate-400">
            {label}
          </span>
        ))}
        {cells.map((day, index) => (
          <div key={index} className="flex items-center justify-center py-1">
            {day ? (
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-sm font-bold ${
                  isToday(day)
                    ? "bg-blue-700 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {day}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================== Module card ============================== */

function ModuleCard({
  module,
  isCurrent,
}: {
  module: DashboardModule;
  isCurrent: boolean;
}) {
  return (
    <Link href={`/module/${module.id}`}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div
          className={`flex items-center justify-between px-5 py-4 ${
            module.isComplete ? "bg-gold/20" : isCurrent ? "bg-blue-900" : "bg-blue-50"
          }`}
        >
          <span
            className={`grid h-11 w-11 place-items-center rounded-xl text-base font-extrabold ${
              module.isComplete
                ? "bg-gold text-blue-950"
                : isCurrent
                  ? "bg-white text-blue-900"
                  : "bg-white text-blue-700"
            }`}
          >
            {module.isComplete ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : isCurrent ? (
              <BookOpen className="h-5 w-5" />
            ) : (
              <LockKeyhole className="h-4 w-4" />
            )}
          </span>
          <span
            className={`text-sm font-extrabold ${
              isCurrent && !module.isComplete ? "text-white" : "text-blue-900"
            }`}
          >
            0{module.number}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-extrabold text-slate-900">{module.title}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {module.completedLessons}/{module.totalLessons} lessons &middot; {module.exerciseTitle}
          </p>

          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${module.progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-extrabold text-blue-700">{module.progress}% complete</span>
            <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ============================== Weekly rhythm (illustrative) ============================== */

function WeeklyRhythmCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Your learning roadmap
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
          Suggested weekly plan
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Move through the week step by step. Each stage builds on the one before it.
        </p>
      </div>

      <div className="relative h-[800px] overflow-hidden rounded-3xl bg-slate-950">
        {/* Animated background — sits behind the scroll stack */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GhostFibers
            lineColor="#140E35"
            glowColor="#3437A0"
            speed={0.2}
            scale={2}
            rotation={0}
            rotationSpeed={0.25}
            layers={4}
            waveAmplitude={0.015}
            waveFrequency={3}
            waveSpeed={0.15}
            layerSpeed={0.08}
            twist={0.1}
            twistFrequency={5}
            twistSpeed={1.2}
            lineFrequency={5}
            lineSpacing={2}
            lineSharpness={16}
            glowFalloff={10}
            glowIntensity={1.6}
            brightness={2}
            blueBoost={1.25}
            vignette={0.8}
            grain={0.05}
            dpr={1}
            lightMode={false}
            fps={60}
            paused={false}
          />
        </div>

        {/* Scroll stack — sits on top of the background */}
        <div className="relative z-10 h-full">
          <ScrollStack
            itemDistance={70}
            itemScale={0.035}
            itemStackDistance={28}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={0.86}
            rotationAmount={0}
            blurAmount={0}
          >
            <ScrollStackItem itemClassName="roadmap-card roadmap-card-blue">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="roadmap-step">01</span>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Day 1
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Understand
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-blue-50/80">
                    Start the week's lessons and build a clear understanding of
                    the fundamental concepts.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm font-medium text-blue-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                  Begin your learning journey
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="roadmap-card roadmap-card-indigo">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="roadmap-step">02</span>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-200">
                    Day 2
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Explore
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-indigo-50/80">
                    Continue through the lessons and discover how the ideas
                    you've learned appear in real-world situations.
                  </p>
                </div>

                <div className="mt-8 text-sm font-medium text-indigo-100">
                  Discover the bigger picture
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="roadmap-card roadmap-card-jade">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="roadmap-step">03</span>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
                    Day 3
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Practice
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-emerald-50/80">
                    Put the knowledge into practice with exercises designed to
                    reinforce what you've learned.
                  </p>
                </div>

                <div className="mt-8 text-sm font-medium text-emerald-100">
                  Learn by doing
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="roadmap-card roadmap-card-gold">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="roadmap-step">04</span>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                    Day 4
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Review
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-amber-50/80">
                    Revisit the key ideas from the week and strengthen anything
                    that still feels unclear.
                  </p>
                </div>

                <div className="mt-8 text-sm font-medium text-amber-100">
                  Strengthen your understanding
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="roadmap-card roadmap-card-purple">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="roadmap-step">05</span>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-purple-200">
                    Day 5
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Assess
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-purple-50/80">
                    Complete your assessment and use the results to identify
                    where you are confident and where you need more practice.
                  </p>
                </div>

                <div className="mt-8 text-sm font-medium text-purple-100">
                  Check your progress
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="roadmap-card roadmap-card-dark">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="roadmap-step">06</span>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Weekend
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Reflect & Continue
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                    Reflect on what you've learned, celebrate your progress, and
                    prepare for the next stage of your course.
                  </p>
                </div>

                <div className="mt-8 text-sm font-medium text-slate-200">
                  Ready for the next module
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </div>
  );
}

/* ============================== Exercise progress ============================== */
/*
 * A row in exerciseSubmissions only ever exists once a learner submits, and
 * db.ts always writes status: "submitted" on creation. There is no
 * "not_started" / "in_progress" status stored anywhere. So the real signal
 * is presence, not a status field: a module either has a submission row
 * (submitted) or it doesn't (not yet started). We iterate every module so
 * learners can see the full picture, not just what they've already done.
 */

function formatSubmittedDate(value?: string | Date | null) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function ExerciseProgressCard({
  submissions,
  modules,
}: {
  submissions: ExerciseSubmission[];
  modules: DashboardModule[];
}) {
  const submissionByModuleNumber = new Map(
    submissions.map((submission) => [submission.moduleId, submission])
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Practice work
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
            Exercise progress
          </h2>
        </div>
        <ClipboardCheck className="h-6 w-6 text-blue-700" />
      </div>

      <div className="mt-5 space-y-4">
        {modules.map((module) => {
          const submission = submissionByModuleNumber.get(module.number);
          const isSubmitted = submission?.status === "submitted";
          const percent = isSubmitted ? 100 : 0;
          const submittedDate = formatSubmittedDate(submission?.submittedAt);

          return (
            <Link key={module.id} href={`/module/${module.id}`}>
              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-slate-800">
                      {module.exerciseTitle}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      {isSubmitted
                        ? submittedDate
                          ? `Submitted ${submittedDate}`
                          : "Submitted"
                        : "Not submitted yet"}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-extrabold text-blue-700">{percent}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${percent === 100 ? "bg-gold" : "bg-slate-200"}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}