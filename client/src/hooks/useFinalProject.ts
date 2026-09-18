import { useCallback, useEffect, useMemo, useState } from "react";
import { trpc } from "@/lib/trpc";
import { getFinalProjectOption, type FinalProjectId, type FinalProjectOption } from "@/data/finalProjectContent";

const CERTIFICATE_STORAGE_KEY = "aiid:final-project-certificate";

export interface CertificateRecord {
  learnerName: string;
  projectId: FinalProjectId;
  projectTitle: string;
  completedDate: string; // ISO date
}

export interface FinalProjectFormState {
  learnerName: string;
  mainPrompt: string;
  howAiHelped: string;
  whatYouChanged: string;
  link: string; // website projects
  fileName: string; // excel / powerpoint / flyer file name (display only)
  fileDataUrl: string | null; // flyer / excel / powerpoint artifact
  secondaryFileName: string; // "before" image for picture project
  secondaryFileDataUrl: string | null; // "before" image for picture project
}

const emptyForm: FinalProjectFormState = {
  learnerName: "",
  mainPrompt: "",
  howAiHelped: "",
  whatYouChanged: "",
  link: "",
  fileName: "",
  fileDataUrl: null,
  secondaryFileName: "",
  secondaryFileDataUrl: null,
};

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function getStoredCertificate(): CertificateRecord | null {
  try {
    const raw = window.localStorage.getItem(CERTIFICATE_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CertificateRecord) : null;
  } catch {
    return null;
  }
}

function storeCertificate(record: CertificateRecord) {
  try {
    window.localStorage.setItem(CERTIFICATE_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Best effort only -- if storage is unavailable, the certificate view
    // still renders for this session from in-memory state.
  }
}

export function useFinalProject(
  moduleNumber: number,
  authUserName?: string
) {
  const utils = trpc.useUtils();
  const submitExercise = trpc.learner.submitExercise.useMutation({
    onSuccess: () => utils.learner.dashboard.invalidate(),
  });

  const [selectedId, setSelectedId] = useState<FinalProjectId | null>(null);
  const [form, setForm] = useState<FinalProjectFormState>({
    ...emptyForm,
    learnerName: authUserName ?? "",
  });
  const [fileError, setFileError] = useState<string | null>(null);
  const [certificate, setCertificate] = useState<CertificateRecord | null>(() => getStoredCertificate());

   useEffect(() => {
    if (authUserName && !form.learnerName) {
      setForm((prev) => ({ ...prev, learnerName: authUserName }));
    }
  }, [authUserName]);

  const selectedOption: FinalProjectOption | null = useMemo(
    () => (selectedId ? getFinalProjectOption(selectedId) : null),
    [selectedId],
  );

  const selectProject = useCallback((id: FinalProjectId) => {
  setSelectedId(id);
  setForm({ ...emptyForm, learnerName: authUserName ?? "" });
  setFileError(null);
}, [authUserName]);

  const clearSelection = useCallback(() => {
    setSelectedId(null);
    setForm(emptyForm);
    setFileError(null);
  }, []);

  const updateField = useCallback(<K extends keyof FinalProjectFormState>(key: K, value: FinalProjectFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB -- data-URL uploads aren't meant for huge files

  const handlePrimaryFile = useCallback(async (file: File | undefined) => {
    setFileError(null);
    if (!file) {
      setForm((prev) => ({ ...prev, fileName: "", fileDataUrl: null }));
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setFileError("That file is larger than 8MB. Please choose a smaller file or compress it first.");
      return;
    }
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setForm((prev) => ({ ...prev, fileName: file.name, fileDataUrl: dataUrl }));
    } catch {
      setFileError("That file couldn't be read. Please try a different file.");
    }
  }, []);

  const handleSecondaryFile = useCallback(async (file: File | undefined) => {
    setFileError(null);
    if (!file) {
      setForm((prev) => ({ ...prev, secondaryFileName: "", secondaryFileDataUrl: null }));
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setFileError("That file is larger than 8MB. Please choose a smaller file or compress it first.");
      return;
    }
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setForm((prev) => ({ ...prev, secondaryFileName: file.name, secondaryFileDataUrl: dataUrl }));
    } catch {
      setFileError("That file couldn't be read. Please try a different file.");
    }
  }, []);

  const isArtifactComplete = useMemo(() => {
    if (!selectedOption) return false;
    switch (selectedOption.inputKind) {
      case "link":
        return form.link.trim().length > 0;
      case "before-after-image":
        return !!form.fileDataUrl && !!form.secondaryFileDataUrl;
      case "image":
      case "file":
      default:
        return !!form.fileDataUrl;
    }
  }, [selectedOption, form]);

  const canSubmit = useMemo(() => {
    return (
      !!selectedOption &&
      form.learnerName.trim().length > 1 &&
      form.mainPrompt.trim().length > 0 &&
      form.howAiHelped.trim().length > 0 &&
      form.whatYouChanged.trim().length > 0 &&
      isArtifactComplete
    );
  }, [selectedOption, form, isArtifactComplete]);

  const submit = useCallback(() => {
    if (!selectedOption || !canSubmit) return;

    const record: CertificateRecord = {
      learnerName: form.learnerName.trim(),
      projectId: selectedOption.id,
      projectTitle: selectedOption.title,
      completedDate: new Date().toISOString(),
    };
    storeCertificate(record);
    setCertificate(record);

    // Marks module 8's progress as submitted using the existing exercise
    // infrastructure -- see the honest-scope note at the top of this file.
    submitExercise.mutate({ moduleId: moduleNumber, formUrl: "", docUrl: "" });
  }, [selectedOption, canSubmit, form, moduleNumber, submitExercise]);

  const startAnotherProject = useCallback(() => {
    setCertificate(null);
    setSelectedId(null);
    setForm({ ...emptyForm, learnerName: authUserName ?? "" });
    try {
      window.localStorage.removeItem(CERTIFICATE_STORAGE_KEY);
    } catch {
      // best effort
    }
  }, [authUserName]);

  return {
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
    isSubmitting: submitExercise.isPending,
    certificate,
    startAnotherProject,
  };
}