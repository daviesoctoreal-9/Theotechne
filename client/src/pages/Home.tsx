import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  ExternalLink,
  LockKeyhole,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import { programme, courseModules } from "@shared/courseContent";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Program from "../components/Program";

const blueprintLines = Array.from({ length: 12 });

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="blueprint-grid pointer-events-none fixed inset-0 opacity-15" />

      <Navbar />

      <main id="top" className="relative z-10">
        <Hero />

        <Program
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="6, 182, 212"
          disableAnimations={false}
        />

        <section
          id="curriculum"
          className="container py-16 sm:py-20 lg:py-24"
        >
          <div className="max-w-3xl">
            <p className="eyebrow">The learning path</p>

            <h2 className="section-title mt-3 sm:mt-4">
              Eight modules. One useful way forward.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500 sm:mt-5 sm:text-lg sm:leading-8">
              From meeting AI for the first time to presenting a meaningful
              graduation project, every module combines a clear lesson path
              with a practical exercise.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:mt-12">
            {courseModules.map((module) => (
              <article
                key={module.id}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50/60 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4 sm:gap-5">
                  <span className="font-display text-3xl text-cyan-500/40 sm:text-4xl">
                    0{module.number}
                  </span>

                  <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                    {module.lessons.length} lessons
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900 sm:mt-8 sm:text-xl">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {module.strapline}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-600 sm:mt-6 sm:text-xs sm:tracking-[0.14em]">
                  View module path
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certificate"
          className="relative border-t border-slate-200 bg-slate-50 py-16 sm:py-20"
        >
          <div className="container grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_.9fr] lg:gap-12">
            <div>
              <p className="eyebrow">Certification</p>

              <h2 className="section-title mt-3 sm:mt-4">
                A certificate earned through practice.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                {programme.assessment}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                <span className="pill">75% attendance</span>
                <span className="pill">Five practice exercises</span>
                <span className="pill">Final project presentation</span>
              </div>
            </div>

            <div className="rounded-3xl border border-gold/30 bg-gold/10 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {programme.batch}
              </p>

              <h3 className="mt-4 font-display text-2xl leading-tight text-slate-900 sm:text-3xl">
                Your next chapter can begin with one steady step.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:mt-5">
                Sign in to access the learner dashboard, reserve your place,
                and follow each module at your own pace.
              </p>

              <Button
                onClick={() => startLogin()}
                className="mt-6 w-full rounded-full bg-cyan-500 text-white hover:bg-cyan-600 sm:mt-7 sm:w-auto"
              >
                Continue with Google
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <a
                href={programme.contactHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700"
              >
                <MessageCircle className="h-4 w-4" />
                Ask about enrolment on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200 py-6 sm:py-8">
        <div className="container flex flex-col justify-between gap-3 text-xs text-slate-500 sm:gap-4 md:flex-row">
          <span>
            {programme.shortInstitute} · International Executive Certificate ·
            2026
          </span>

          <span>{programme.motto}</span>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}