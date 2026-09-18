
export type FinalProjectId = "flyer" | "website" | "picture" | "excel" | "powerpoint";

/** What kind of artifact input this project needs. */
export type FinalProjectInputKind = "image" | "before-after-image" | "link" | "file";

export interface FinalProjectStep {
  title: string;
  body: string;
}

export interface FinalProjectOption {
  id: FinalProjectId;
  title: string;
  suitableFor: string;
  examples: string[];
  goal: string;
  steps: FinalProjectStep[];
  /** "Your final submission should contain..." checklist from the doc. */
  finalSubmission: string[];
  inputKind: FinalProjectInputKind;

  artifactLabel: string;
  secondaryArtifactLabel?: string; 
  accept?: string;
 
  artifactHelp: string;
}

export const finalProjectOptions: FinalProjectOption[] = [
  {
    id: "flyer",
    title: "Design a Professional Flyer",
    suitableFor: "Pastors, churches, teachers, administrators, community leaders, small businesses, event organisers.",
    examples: [
      "Church programme flyer",
      "One-day AI training workshop flyer",
      "Community meeting announcement",
      "School programme flyer",
      "Church conference flyer",
      "Business promotion flyer",
      "Fundraising/event flyer",
    ],
    goal: "Create a complete, professional flyer for a real event, programme, service or organisation — something you could actually use.",
    steps: [
      {
        title: "Choose your subject",
        body: "Decide what the flyer is about, then write down the event name, date, time, location, organiser, contact information, main purpose, target audience, and any important instructions. Don't give AI private information it doesn't need.",
      },
      {
        title: "Ask AI to organise the information",
        body: "Give AI your facts and ask it to suggest a headline, short description, three key benefits, and a clear call to action. AI may suggest wording — you decide whether it's accurate and appropriate.",
      },
      {
        title: "Create the visual design",
        body: "Ask an AI image/design tool for a design concept: audience, visual style, what must appear, and a clear hierarchy. Remember: AI-generated images can misspell text — check names, dates, and numbers manually.",
      },
      {
        title: "Review the flyer",
        body: "Check the facts (date, time, location, organiser, phone number), the design (readable text, contrast, not overcrowded, logical order), and the language (spelling, clarity, appropriate tone).",
      },
      {
        title: "Make your final correction",
        body: "Don't accept the first result. Ask AI to review for spelling, clarity, missing information, and consistency without changing any names, dates, times, or numbers — then make the corrections yourself.",
      },
    ],
    finalSubmission: [
      "The completed flyer",
      "The prompt you used",
      "A short explanation of what AI helped you do",
      "At least two things you personally changed or corrected",
    ],
    inputKind: "image",
    artifactLabel: "Upload your completed flyer",
    accept: "image/*,.pdf",
    artifactHelp: "PNG, JPG, or PDF of the finished flyer.",
  },
  {
    id: "website",
    title: "Create a Simple Website",
    suitableFor: "Learners who want to demonstrate a practical digital project.",
    examples: [
      "Church information website",
      "Small business website",
      "Personal ministry/teacher profile",
      "Community organisation website",
      "Training programme website",
      "Event landing page",
    ],
    goal: "Create a small, one-page website with AI assistance. You don't need to build anything large.",
    steps: [
      {
        title: "Decide what the website should accomplish",
        body: "Write down the website's purpose, its audience, and the main information visitors must know.",
      },
      {
        title: "Ask AI to create the structure",
        body: "Give AI the sections you need (e.g. welcome, about, services, contact, a clear invitation) and ask for simple, respectful wording organised top to bottom. Don't let AI invent facts.",
      },
      {
        title: "Ask AI to help create the website",
        body: "If using an AI coding assistant, ask for clean, simple, responsive HTML/CSS with large readable text. If you're not comfortable coding, an AI-assisted website builder is fine too.",
      },
      {
        title: "Review the website",
        body: "Check every section: are the names, times, and contact information correct? Does it work on a phone? Can an older visitor read it? Are the buttons understandable?",
      },
      {
        title: "Ask AI to review it",
        body: "Ask AI to review it as a beginner visitor and flag unclear wording, missing information, accessibility problems, and facts you should verify — then make the changes yourself.",
      },
    ],
    finalSubmission: [
      "Working website link, or screenshots of the completed website",
      "Your main AI prompt",
      "A short explanation of how AI helped",
      "At least two changes you personally made after reviewing AI's work",
    ],
    inputKind: "link",
    artifactLabel: "Link to your website",
    artifactHelp: "Paste the live URL. No live site yet? Paste a link to your screenshots or shared document instead.",
  },
  {
    id: "picture",
    title: "Enhance and Edit a Picture",
    suitableFor: "Learners who want to demonstrate AI-assisted image editing.",
    examples: [
      "Improve an old photograph",
      "Clean up a poor-quality picture",
      "Remove an unwanted background",
      "Improve lighting",
      "Crop and prepare an image for a flyer",
      "Create a professional profile image",
      "Restore a meaningful non-sensitive photograph",
    ],
    goal: "Take an appropriate photograph you're permitted to use and improve it with AI-assisted editing. Never upload confidential documents, ID documents, private records, or another person's photo without permission.",
    steps: [
      {
        title: "Choose your photograph",
        body: "A landscape, church building, event photo, a family photo you have permission to use, a classroom or product photo — anything appropriate and non-sensitive.",
      },
      {
        title: "Identify what needs improvement",
        body: "Write down the actual problems first — e.g. \"the photograph is dark,\" \"the background is distracting\" — so you know exactly what you're asking AI to accomplish.",
      },
      {
        title: "Ask AI for an editing plan",
        body: "Describe the problem and ask for a simple editing plan that keeps the subject natural and recognisable, without changing identity or adding unrealistic features.",
      },
      {
        title: "Perform the editing",
        body: "Brightness, contrast, cropping, background cleanup, sharpness, resizing — whatever the plan calls for. Don't make a change simply because AI suggested it.",
      },
      {
        title: "Compare before and after",
        body: "Keep both images. Ask yourself: what problem did the original have, what did AI help change, what did you personally decide not to change, and is the final image still an honest representation of the subject?",
      },
    ],
    finalSubmission: [
      "Original image",
      "Enhanced/edited image",
      "The AI prompt you used",
      "A short explanation of the changes",
      "Two decisions you personally made",
    ],
    inputKind: "before-after-image",
    artifactLabel: "Original photo",
    secondaryArtifactLabel: "Edited photo",
    accept: "image/*",
    artifactHelp: "Upload both the original and the edited version so the before/after is clear.",
  },
  {
    id: "excel",
    title: "Create an Excel Spreadsheet",
    suitableFor: "Administrators, teachers, pastors, business owners, office workers, and anyone who works with records.",
    examples: [
      "Church attendance tracker",
      "Monthly income and expenditure",
      "Small-shop sales record",
      "Inventory spreadsheet",
      "Student results sheet",
      "Event registration list",
      "Staff attendance record",
      "Monthly budget",
    ],
    goal: "Create a useful spreadsheet with realistic data, formulas, calculations, and a summary section.",
    steps: [
      {
        title: "Ask AI to design the spreadsheet",
        body: "Describe the columns you need and ask AI for a simple beginner-friendly structure, an explanation of each column, and fictional sample records. Never use real people's private information.",
      },
      {
        title: "Enter the data",
        body: "Open Excel or another spreadsheet app, create your headings, and enter the sample data.",
      },
      {
        title: "Ask AI for the formulas",
        body: "Tell AI which columns hold which values and ask for the exact formula needed (e.g. quantity × unit price) plus how to copy it down the column.",
      },
      {
        title: "Add calculations",
        body: "Include several useful calculations: total, average, highest, lowest, and total quantity — ask AI for beginner-friendly formulas for each.",
      },
      {
        title: "Create a summary",
        body: "Add a small summary section with the key totals so the spreadsheet answers a question at a glance.",
      },
      {
        title: "Check the calculations",
        body: "Don't assume a formula is correct just because AI supplied it. Check several calculations manually, and ask AI to explain what each formula calculates.",
      },
    ],
    finalSubmission: [
      "Completed Excel spreadsheet",
      "Data table",
      "At least three working calculations/formulas",
      "A summary section",
      "The main AI prompt(s) used",
      "A short explanation of what AI helped you accomplish",
      "At least one calculation you personally checked",
    ],
    inputKind: "file",
    artifactLabel: "Upload your spreadsheet",
    accept: ".xlsx,.xls,.csv",
    artifactHelp: "XLSX, XLS, or CSV file.",
  },
  {
    id: "powerpoint",
    title: "Create a PowerPoint Presentation",
    suitableFor: "Pastors, teachers, administrators, trainers, and public speakers.",
    examples: [
      "Bible study presentation",
      "AI training presentation",
      "Church programme presentation",
      "School lesson",
      "Business presentation",
      "Community awareness presentation",
      "Staff training",
    ],
    goal: "Create a useful, focused presentation of approximately 6–10 slides on a topic you understand or can research and verify.",
    steps: [
      {
        title: "Decide the purpose",
        body: "Write down what your presentation is about, who your audience is, what you want them to learn, and what you want them to do afterward.",
      },
      {
        title: "Ask AI for an outline",
        body: "Give AI the audience and goal and ask for a slide-by-slide outline — each slide with a title and a few short points, in simple language, without unsupported claims.",
      },
      {
        title: "Review the outline",
        body: "Before creating slides, check the order, completeness, amount of information, language, and facts. Refine the outline first.",
      },
      {
        title: "Create the slides",
        body: "Build the slides manually or with an AI-assisted presentation tool, following your reviewed outline.",
      },
      {
        title: "Improve the visual design",
        body: "Ask AI to review the design for your audience — font size, amount of text, contrast, spacing, and clarity — without changing the factual content. Remember: a presentation isn't a document pasted onto slides.",
      },
      {
        title: "Verify important information",
        body: "Statistics, dates, quotations, historical or scientific claims, financial figures, references — verify these with reliable sources. AI's answer is not automatically proof.",
      },
    ],
    finalSubmission: [
      "Completed PowerPoint presentation",
      "Main AI prompt",
      "A short explanation of AI's role",
      "At least two changes you personally made",
      "A short statement on how you verified important information",
    ],
    inputKind: "file",
    artifactLabel: "Upload your presentation",
    accept: ".pptx,.ppt,.pdf",
    artifactHelp: "PPTX, PPT, or an exported PDF.",
  },
];

export function getFinalProjectOption(id: FinalProjectId): FinalProjectOption {
  return finalProjectOptions.find((option) => option.id === id) ?? finalProjectOptions[0];
}