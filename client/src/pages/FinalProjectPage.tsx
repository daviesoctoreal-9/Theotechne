import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { CertificateGenerator } from "@/components/certificate/CertificateGenerator";
import { useFinalProject } from "@/hooks/useFinalProject";
import { finalProjectOptions, type FinalProjectOption } from "@/data/finalProjectContent";
import { courseModules } from "@shared/courseContent";
import { useAuth } from "@/_core/hooks/useAuth"; 
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileImage,
  FileSpreadsheet,
  FileText,
  Link as LinkIcon,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useRoute } from "wouter";
import { Link } from "wouter";

const CARD_ICONS: Record<string, typeof FileImage> = {
  flyer: FileImage,
  website: LinkIcon,
  picture: FileImage,
  excel: FileSpreadsheet,
  powerpoint: FileText,
};

export default function FinalProjectPage() {
  const [, params] = useRoute("/module/:slug/final-project");
  const module = courseModules.find((item) => item.id === params?.slug) ?? courseModules.find((m) => m.id === "graduation-project") ?? courseModules[0];
  const { user } = useAuth();

  const {
    selectedOption,
    selectProject,
    clearSelection,
    form,
    updateField,
    handlePrimaryFile,
    handleSecondaryFile,
    fileError,
    canSubmit,
    submit,
    isSubmitting,
    certificate,
    startAnotherProject,
  } = useFinalProject(module.number, user?.name ?? undefined);

  return (
    <DashboardLayout>
      <div className="dashboard-shell max-w-4xl">
        <Link href={`/module/${module.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Back to module
        </Link>

        {certificate ? (
          <CertificateView certificate={certificate} onStartAnother={startAnotherProject} />
        ) : selectedOption ? (
          <ProjectDetailAndForm
            option={selectedOption}
            onBack={clearSelection}
            form={form}
            updateField={updateField}
            handlePrimaryFile={handlePrimaryFile}
            handleSecondaryFile={handleSecondaryFile}
            fileError={fileError}
            canSubmit={canSubmit}
            isSubmitting={isSubmitting}
            onSubmit={submit}
          />
        ) : (
          <ProjectGrid onSelect={selectProject} />
        )}
      </div>
    </DashboardLayout>
  );
}

// ---------- State 1: card grid ----------

function ProjectGrid({ onSelect }: { onSelect: (id: FinalProjectOption["id"]) => void }) {
  return (
    <>
      <header className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          <Sparkles className="h-3.5 w-3.5" /> Graduation project
        </p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          Choose one project to complete
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
          Pick the option closest to your real work. You only need to finish one, from beginning to end.
        </p>
        <div className="mt-6 rounded-2xl border border-gold/40 bg-gold/15 p-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-blue-950">The golden rule</p>
          <p className="mt-2 text-base font-semibold leading-7 text-blue-950/80">
            AI may help you create the work. You remain responsible for the work.
          </p>
        </div>
      </header>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {finalProjectOptions.map((option) => {
          const Icon = CARD_ICONS[option.id] ?? FileText;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                  <Icon className="h-5 w-5" />
                </span>
                <ChevronRight className="mt-2 h-5 w-5 shrink-0 text-slate-300" />
              </div>
              <h2 className="mt-4 text-lg font-extrabold text-slate-900">{option.title}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{option.suitableFor}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {option.examples.slice(0, 3).map((example) => (
                  <li
                    key={example}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600"
                  >
                    {example}
                  </li>
                ))}
                {option.examples.length > 3 && (
                  <li className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-400">
                    +{option.examples.length - 3} more
                  </li>
                )}
              </ul>
            </button>
          );
        })}
      </div>
    </>
  );
}

// ---------- State 2: detail panel + form ----------

interface FormProps {
  option: FinalProjectOption;
  onBack: () => void;
  form: ReturnType<typeof useFinalProject>["form"];
  updateField: ReturnType<typeof useFinalProject>["updateField"];
  handlePrimaryFile: ReturnType<typeof useFinalProject>["handlePrimaryFile"];
  handleSecondaryFile: ReturnType<typeof useFinalProject>["handleSecondaryFile"];
  fileError: string | null;
  canSubmit: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
}

function ProjectDetailAndForm({
  option,
  onBack,
  form,
  updateField,
  handlePrimaryFile,
  handleSecondaryFile,
  fileError,
  canSubmit,
  isSubmitting,
  onSubmit,
}: FormProps) {
  return (
    <div className="mt-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700"
      >
        <ArrowLeft className="h-4 w-4" /> Choose a different project
      </button>

      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{option.suitableFor}</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900">{option.title}</h1>
        <p className="mt-4 text-lg font-semibold leading-8 text-slate-600">{option.goal}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {option.examples.map((example) => (
            <span key={example} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
              {example}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">How to complete it</p>
          {option.steps.map((step, index) => (
            <div key={step.title} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-extrabold text-blue-800">
                {index + 1}
              </span>
              <div>
                <p className="text-base font-extrabold text-slate-900">{step.title}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Your final submission should contain</p>
          <ul className="mt-3 space-y-2">
            {option.finalSubmission.map((item) => (
              <li key={item} className="flex gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="rounded-3xl border border-gold/40 bg-gold/10 p-7 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-950">Submit your project</p>
        <h2 className="mt-3 text-xl font-extrabold text-blue-950">Once you're done, submit it here</h2>

        <div className="mt-6 space-y-5">
          <Field label="Your full name (for your certificate)">
            <input
              type="text"
              value={form.learnerName}
              onChange={(e) => updateField("learnerName", e.target.value)}
              placeholder="e.g. Grace Adebayo"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none focus:border-blue-400"
            />
          </Field>

          <ArtifactInput
            option={option}
            form={form}
            updateField={updateField}
            handlePrimaryFile={handlePrimaryFile}
            handleSecondaryFile={handleSecondaryFile}
          />
          {fileError && <p className="text-sm font-semibold text-red-600">{fileError}</p>}

          <Field label="The main AI prompt you used">
            <textarea
              value={form.mainPrompt}
              onChange={(e) => updateField("mainPrompt", e.target.value)}
              rows={3}
              placeholder="Paste the prompt you gave the AI assistant"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none focus:border-blue-400"
            />
          </Field>

          <Field label="How AI helped">
            <textarea
              value={form.howAiHelped}
              onChange={(e) => updateField("howAiHelped", e.target.value)}
              rows={3}
              placeholder="A short explanation of what AI helped you do"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none focus:border-blue-400"
            />
          </Field>

          <Field label="What you personally changed, corrected, or verified (at least two things)">
            <textarea
              value={form.whatYouChanged}
              onChange={(e) => updateField("whatYouChanged", e.target.value)}
              rows={3}
              placeholder="e.g. Corrected the event date, rewrote the closing line, checked the total formula"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none focus:border-blue-400"
            />
          </Field>

          <Button
            onClick={onSubmit}
            disabled={!canSubmit || isSubmitting}
            className="w-full rounded-xl bg-blue-700 text-base font-extrabold text-white hover:bg-blue-800 disabled:opacity-40"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              <>
                Submit and generate my certificate
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-center text-xs font-semibold text-blue-950/60">
            Fill in every field above to unlock your certificate.
          </p>
        </div>
      </article>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-extrabold text-blue-950">{label}</span>
      {children}
    </label>
  );
}

function ArtifactInput({
  option,
  form,
  updateField,
  handlePrimaryFile,
  handleSecondaryFile,
}: {
  option: FinalProjectOption;
  form: FormProps["form"];
  updateField: FormProps["updateField"];
  handlePrimaryFile: FormProps["handlePrimaryFile"];
  handleSecondaryFile: FormProps["handleSecondaryFile"];
}) {
  if (option.inputKind === "link") {
    return (
      <Field label={option.artifactLabel}>
        <input
          type="url"
          value={form.link}
          onChange={(e) => updateField("link", e.target.value)}
          placeholder="https://"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none focus:border-blue-400"
        />
        <span className="mt-1.5 block text-xs font-semibold text-slate-500">{option.artifactHelp}</span>
      </Field>
    );
  }

  if (option.inputKind === "before-after-image") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={option.artifactLabel}>
          <FileDropInput
            accept={option.accept}
            fileName={form.fileName}
            onChange={handlePrimaryFile}
          />
        </Field>
        <Field label={option.secondaryArtifactLabel ?? "Edited photo"}>
          <FileDropInput
            accept={option.accept}
            fileName={form.secondaryFileName}
            onChange={handleSecondaryFile}
          />
        </Field>
        <p className="sm:col-span-2 text-xs font-semibold text-slate-500">{option.artifactHelp}</p>
      </div>
    );
  }

  return (
    <Field label={option.artifactLabel}>
      <FileDropInput accept={option.accept} fileName={form.fileName} onChange={handlePrimaryFile} />
      <span className="mt-1.5 block text-xs font-semibold text-slate-500">{option.artifactHelp}</span>
    </Field>
  );
}

function FileDropInput({
  accept,
  fileName,
  onChange,
}: {
  accept?: string;
  fileName: string;
  onChange: (file: File | undefined) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-600 hover:border-blue-300 hover:bg-blue-50">
      <span className="truncate">{fileName || "Choose a file"}</span>
      <span className="ml-3 shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-600">
        Browse
      </span>
      <input
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0])}
      />
    </label>
  );
}

// ---------- State 3: certificate ----------

function CertificateView({
  certificate,
  onStartAnother,
}: {
  certificate: NonNullable<ReturnType<typeof useFinalProject>["certificate"]>;
  onStartAnother: () => void;
}) {
  return (
    <div className="mt-8 space-y-6">
      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          <CheckCircle2 className="h-3.5 w-3.5" /> Project submitted
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900">Congratulations, {certificate.learnerName.split(" ")[0]}!</h1>
        <p className="mt-3 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
          Your certificate is ready. Download it as an image or print it directly.
        </p>

        <div className="mt-8">
          <CertificateGenerator
            learnerName={certificate.learnerName}
            completedDate={certificate.completedDate}
          />
        </div>
      </article>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={onStartAnother}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700"
        >
          <RotateCcw className="h-4 w-4" /> Submit a different project
        </button>
      </div>
    </div>
  );
}