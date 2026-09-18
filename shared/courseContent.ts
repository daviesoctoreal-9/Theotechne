export type CourseLesson = {
  id: string;
  title: string;
  summary: string;
  content: string[];
  duration: string;
};


export type QuizOption = {
  id: string;
  text: string;
};
 
export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
};
 
export type ExerciseQuestion = {
  id: string;
  prompt: string;
  helperText?: string;
};
 
export type Lesson = {
  id: string;
  title: string;
  summary: string;
  duration: string;
  content: string[];
  
  quiz?: QuizQuestion[];
};
 
export type CourseModule = {
  id: string;
  number: number;
  title: string;
  strapline: string;
  whyItMatters: string;
  outcomes: string[];
  exerciseTitle: string;
  exercisePrompt: string;
  
  exerciseQuestions?: ExerciseQuestion[];
  lessons: Lesson[];
};

export const programme = {
  institute: "Theotechne Institute for Faith and Technology",
  shortInstitute: "Theotechne Institute",
  title: "The International Executive Certificate in Practical Artificial Intelligence for Everyday Life, Ministry, Teaching and Work",
  motto: "A small steady light is enough to find your way to self improvement.",
  contactPhone: "+2349033462784",
  contactHref: "https://wa.me/2349033462784",
  batch: "2026 batch starts soon",
  certificate: "International Executive Certificate in Practical Artificial Intelligence",
  assessment: "Attend at least six of eight sessions, complete practice work in at least five sessions, and present a final graduation project.",
  submissionLinks: {
    form: "https://docs.google.com/forms/d/e/1FAIpQLSeY2dErUluBIdauEKERGvc97N8SQJnouummoNKC2z3NTLOrwQ/viewform?usp=publish-editor",
    doc: "https://docs.google.com/document/d/14oXXyuMKvp7XFQgeb7YHQqLRf3DKg-rx3olhZAfAXLw/edit?usp=sharing",
  },
  // Replace each value below with the corresponding module-specific Google Form URL when ready.
  moduleFormUrls: {
    "meeting-ai": "https://docs.google.com/forms/d/e/1FAIpQLSenviURRJ8ZFHJbmLyjJcEXC8QOmN5jMfRszAXsCByoh_IwfA/viewform",
    "getting-comfortable": "https://docs.google.com/forms/d/e/1FAIpQLSc--BliTM1PC8eW7afkAscvcpEghL4W3IO1-Orx42YnHsb5bw/viewform",
    "prompt-engineering": "https://docs.google.com/forms/d/e/1FAIpQLSdi6pPuVNBEKtxv2Pnqcg5D8DxuYBuofUOTxPYhcjnIc0y-hQ/viewform",
    "ethical-ai": "https://docs.google.com/forms/d/e/1FAIpQLSc2IEbXf7eflsLpt2o-sjKyC278fRxB_Tymg-1zob4WkeUsqQ/viewform",
    "ministry-teaching-writing": "https://docs.google.com/forms/d/e/1FAIpQLSduK2DwBOkSpkt-ZoQxeOcy4UvaB3qrus4v3xa8-D700wmzYQ/viewform",
    "office-work-records": "https://docs.google.com/forms/d/e/1FAIpQLScLUbFgBh3hTSiDW0YVmY0qgRL7tg9Q9WH7SPPqvN9cKl0iFw/viewform",
    "safety-and-misinformation": "https://docs.google.com/forms/d/e/1FAIpQLSeAMxBk3wTHJ_bJcaGzEkzsHgTZw-Nz3jDpC92dqjUDBjkiNA/viewform",
    "graduation-project": "https://docs.google.com/forms/d/e/1FAIpQLSeY2dErUluBIdauEKERGvc97N8SQJnouummoNKC2z3NTLOrwQ/viewform?usp=publish-editor",
  },
};

export const courseModules: CourseModule[] = [
  {
    id: "meeting-ai",
    number: 1,
    title: "Meeting AI for the First Time",
    strapline: "A calm, practical welcome to the world of artificial intelligence.",
    whyItMatters: "AI is already part of daily life. Understanding the basic idea without fear or hype helps learners make wise, confident choices.",
    outcomes: ["Explain artificial intelligence in simple words.", "Recognise familiar AI-powered tools in everyday life.", "Separate realistic AI capabilities from exaggerated claims."],
    exerciseTitle: "Spot the AI around you {module 01 exercise}",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
      {
  id: "what-is-ai",
  title: "What artificial intelligence means",
  summary: "A plain-language introduction to AI, models, data, and patterns.",
  duration: "12 min",
  content: [
    "You have probably heard people talking about Artificial Intelligence, or AI. You may have heard statements such as:",
    "\"AI can write letters.\" \"AI can answer questions.\" \"AI can create pictures.\" \"AI can translate languages.\" \"AI can help doctors.\" \"AI can help businesses.\" \"AI is changing the way people work.\"",
    "But what exactly is AI? You do not need to be a computer expert to understand it.",
    "At its simplest: Artificial Intelligence is technology that allows computers to perform tasks that normally require some form of human intelligence.",
    "These tasks can include understanding language, recognizing images, finding patterns, making predictions, and generating new content.",
    "For example, when you ask an AI assistant: \"Explain diabetes in simple language.\" the computer can understand your request and produce an explanation.",
    "That does not mean the computer is a human being. It means the computer has been designed and trained to perform a particular type of intelligent-looking task.",
 
    " What Does \"Artificial\" Mean?",
    "The word artificial simply means something made by humans rather than occurring naturally.",
    "For example: Artificial flowers are made by people. Artificial light is produced by technology. Artificial intelligence is intelligence-like behavior produced by technology.",
    "So: Artificial + Intelligence = Artificial Intelligence. AI is therefore a human-made technology designed to perform tasks associated with intelligence.",
 
    " What Does \"Intelligence\" Mean?",
    "When we describe a person as intelligent, we may mean that the person can: learn from experience, understand information, recognize patterns, solve problems, make decisions, communicate, adapt to new situations.",
    "AI systems can perform some of these activities. However, it is important to understand this distinction: AI is not a human brain.",
    "An AI system does not have a human childhood, personal experiences, family relationships, or human understanding of the world. It processes information using mathematical and computational methods.",
    "This is one of the most important ideas in this entire course: AI can produce intelligent-looking results without being a human being.",
 
    " A Simple Example: The Grandchild Analogy",
    "Imagine you have a grandchild who is learning to recognize different fruits. You show the child: an orange, another orange, another orange, several photographs of oranges.",
    "Eventually, the child begins to notice things that oranges commonly have: a certain shape, a certain color, a certain texture, a certain appearance.",
    "Later, you show the child an orange they have never seen before. The child may say: \"That's an orange.\" Why? Because the child has learned patterns from previous examples.",
    "AI systems can also learn from examples. The process is much more mathematical and complicated inside a computer, but the basic idea is similar: Examples → Patterns → Predictions or responses",
 
    " What Is Data?",
    "You will hear the word data frequently when learning about AI. Data simply means information that can be collected and processed.",
    "Examples include: words, sentences, photographs, videos, numbers, sounds, documents, measurements, records.",
    "For example, suppose we want an AI system to recognize cats. We could provide it with many examples of cat photographs. Those photographs are data.",
    "If we wanted an AI system to understand written language, it could be trained using large amounts of text. That text is also data.",
    "Simple definition: Data is information that a computer can use.",
 
    " What Are Patterns?",
    "A pattern is something that appears repeatedly or follows a recognizable relationship. Consider these numbers: 2, 4, 6, 8, 10. You can recognize a pattern: The numbers increase by 2.",
    "Or consider: Monday, Tuesday, Wednesday, Thursday... You recognize the pattern of days in a week.",
    "Humans are very good at recognizing patterns. AI systems are also designed to identify patterns in data.",
    "For example, an AI system trained with many examples of handwritten numbers may learn patterns associated with: the shape of a \"1\", the shape of a \"5\", the shape of an \"8\". It can then use those patterns when looking at a new handwritten number.",
 
    " What Is an AI Model?",
    "This is another important term: Model. An AI model is a computer system that has learned patterns from data and can use those patterns to perform particular tasks. Think of a model as a trained digital tool.",
    "For example: A model trained to recognize images may help identify objects in photographs. A language model may help generate and understand text. A speech model may help convert spoken words into written words.",
    "A model does not simply \"know everything.\" Its abilities depend on: how it was designed, what it was trained on, how it was trained, what information it receives, what task it is being used for.",
 
    " An Easy Way to Understand a Model",
    "Think about learning to cook. At first, you may not know how to prepare a particular meal. You study recipes. You watch someone cook. You practice. You make mistakes. You learn what works. After enough practice, you become much better at preparing the meal.",
    "An AI model goes through a very different technical process, but the general idea of learning from many examples can help you understand it. You can think of it this way: Training examples → Learning patterns → Model → New input → Output",
    "For example: Many examples of English sentences ↓ AI learns patterns in language ↓ Language model ↓ You ask a question ↓ The model generates a response",
 
    " How Does AI Learn?",
    "The word learn can sometimes be confusing. When we say that an AI model \"learns,\" we do not mean that it learns exactly like a human student.",
    "Instead, during training, mathematical systems adjust internal parameters so that the model becomes better at performing its task. For this beginner course, you do not need to understand the mathematics.",
    "Remember the simple idea: AI training involves exposing a model to examples and adjusting it so that it becomes better at recognizing useful patterns.",
    "For example, imagine training an AI to identify whether an image contains a dog. It may be shown many examples: Dog → Yes. Dog → Yes. Cat → No. Dog → Yes. Car → No. Over time, the model learns patterns that help it make predictions about new images.",
 
    " AI Does Not Simply Copy Every Example",
    "This is an important point. A well-trained AI model is not supposed to simply memorize one photograph and reproduce it whenever it sees another photograph. Instead, training allows the model to identify patterns across many examples.",
    "For instance, if it has seen many different photographs of dogs, it may learn that dogs can have: different colors, different sizes, different breeds, different backgrounds, different positions. The model is therefore learning patterns rather than relying on one exact example.",
 
    " What Happens When You Ask AI a Question?",
    "Suppose you type: \"Give me five ideas for a birthday celebration.\" Your request is called an input. The AI processes that input. The model uses patterns it learned during training to generate a response. The response is called the output.",
    "So we can simplify the process: INPUT — Your question or instruction ↓ AI MODEL — Processes the input using learned patterns ↓ OUTPUT — The response generated for you",
    "For example: Input: \"Write a polite message thanking my doctor.\" Output: A suggested thank-you message.",
 
    " AI Can Generate, Not Just Answer",
    "Modern AI systems can do more than answer questions. Depending on the system, AI can help generate: text, images, audio, computer code, summaries, translations, ideas, tables, plans. This is often called generative AI.",
    "What is Generative AI? Generative AI is AI that can create new content in response to instructions. For example, you could ask: \"Write a short birthday message for my daughter.\" The AI can generate a new message based on your instruction.",
 
    " AI Is a Tool, Not an Authority",
    "This is one of the most important lessons for this course. An AI response can sound very confident and still be incorrect.",
    "AI systems can sometimes: misunderstand your question, make incorrect statements, use outdated information, misunderstand names or dates, make calculations incorrectly, invent information. This is sometimes referred to as an AI hallucination.",
    "Therefore: Do not assume that something is true simply because an AI system said it confidently. For everyday, low-risk tasks, AI can be extremely useful.",
    "For important matters such as: medical decisions, financial decisions, legal matters, official government requirements — you should verify important information with a qualified professional or reliable official source.",
 
    " A Very Important Difference: Search vs AI",
    "A traditional search engine primarily helps you find information on the internet. An AI assistant can often process information and generate a response for you.",
    "For example, instead of searching for: \"How to write a formal invitation\" you might ask an AI: \"Write a formal invitation for my church's 50th anniversary celebration. Make it respectful and easy to understand.\" The AI can generate a draft for you.",
    "However, this does not mean AI replaces the need to verify important facts.",
 
    " AI in Everyday Life",
    "You may already be using AI without realizing it. AI can appear in: Mobile phones — voice assistants, camera features, spam detection, predictive text. Banking — fraud detection, unusual transaction detection, customer support.",
    "Social media — recommendations, content ranking, spam detection. Healthcare — medical image analysis, administrative assistance, research. Transportation — route suggestions, traffic prediction. Shopping — product recommendations, personalized search.",
    "So AI is not something that exists only in science-fiction movies. It is already part of many everyday technologies.",
 
    " The Four Words You Must Remember",
    "At the end of this lesson, remember these four words: 1. DATA — Information given to or collected by a computer. 2. PATTERNS — Relationships or repeated features found in information. 3. MODEL — A trained AI system that uses learned patterns to perform tasks. 4. OUTPUT — The result produced after the AI processes an input.",
    "A simple picture to remember is: DATA ↓ PATTERNS ↓ MODEL ↓ YOUR INPUT ↓ AI PROCESSING ↓ OUTPUT",
 
    " A Real-Life Example",
    "Imagine you are preparing a speech for a family celebration. You tell an AI: \"Help me prepare a five-minute speech for my brother's 60th birthday. Make it warm, respectful, and humorous.\" Let's break this down.",
    "Your instruction — this is the input. The AI model — the model processes your request using patterns learned during training. The generated speech — this is the output.",
    "Your judgment: You read the speech and decide: What should stay? What should be removed? What needs correction? What sounds like you? What does not sound like you? This last step is extremely important. You remain in control. AI should assist you, not replace your judgment.",
 
    " What AI Does NOT Mean",
    "AI does not automatically mean: a robot, a machine that thinks exactly like a human, a machine that is always correct, a machine that knows everything, a machine that can predict the future perfectly, a machine that should make every decision for you.",
    "Robots can use AI, but AI does not have to be a robot. An AI system can exist entirely as software on a phone or computer.",
  ],
  quiz: [
    {
      id: "what-is-ai-q1",
      prompt: "Which of these best completes the sentence: \"Artificial Intelligence is...\"?",
      options: [
        { id: "a", text: "technology that allows computers to perform certain tasks that normally require human intelligence" },
        { id: "b", text: "a machine that thinks exactly like a human being" },
        { id: "c", text: "a machine that always knows everything and is never wrong" },
      ],
      correctOptionId: "a",
      explanation: "That's the lesson's own plain-language definition -- AI performs intelligence-like tasks, it isn't a human mind.",
    },
    {
      id: "what-is-ai-q2",
      prompt: "Which of the following can be data?",
      options: [
        { id: "a", text: "A photograph" },
        { id: "b", text: "A voice recording" },
        { id: "c", text: "A document or a list of numbers" },
        { id: "d", text: "All of the above" },
      ],
      correctOptionId: "d",
      explanation: "Data is any information a computer can use -- photos, recordings, documents, and numbers all count.",
    },
    {
      id: "what-is-ai-q3",
      prompt: "You ask an AI: \"Give me three healthy dinner ideas.\" What is your question called?",
      options: [
        { id: "a", text: "The input" },
        { id: "b", text: "The output" },
        { id: "c", text: "The model" },
      ],
      correctOptionId: "a",
      explanation: "Your question or instruction is the input; what the AI generates back is the output.",
    },
    {
      id: "what-is-ai-q4",
      prompt: "If an AI is shown thousands of photographs of different cars, what does it actually learn?",
      options: [
        { id: "a", text: "It memorizes each individual photograph exactly, word for word and pixel for pixel" },
        { id: "b", text: "Patterns across the examples, such as shapes, colors, and body designs" },
        { id: "c", text: "Nothing -- it just repeats one photo it was shown first" },
      ],
      correctOptionId: "b",
      explanation: "A well-trained model learns patterns across many varied examples rather than memorizing any single one.",
    },
  ],
},
      {
  id: "ai-in-everyday-life",
  title: "Where AI already appears",
  summary: "Discover everyday examples from phones, search, banking, transport, and communication.",
  duration: "15 min",
  content: [
    "## Welcome Back",
    "In the previous lesson, we learned what Artificial Intelligence (AI) means. We learned that AI is technology that allows computers to perform tasks that can require human-like abilities such as recognizing patterns, understanding language, making predictions, and generating content.",
    "Now you may be thinking: \"But where exactly do I find AI?\" The answer may surprise you. AI is already around you. You do not necessarily need to buy a special robot or install a complicated computer program.",
    "AI can already be working quietly inside: your mobile phone, your internet search, your banking app, your navigation app, your email, your messaging applications, social media, online shopping, video applications.",
    "In many cases, you have probably used AI without knowing that you were using it.",
 
    "## AI in Your Mobile Phone",
    "Your smartphone is one of the easiest places to see AI in everyday life. Many modern phones use AI to help with different tasks.",
    "For example, your phone may use AI for: recognizing faces, improving photographs, understanding your voice, predicting words as you type, identifying unwanted calls or messages, organizing photographs, translating languages, improving battery management. Let's look at some examples.",
 
    "## Your Phone Camera",
    "Have you ever taken a photograph with your phone and noticed that the camera automatically makes the picture look better? Your phone may automatically adjust things such as: brightness, contrast, sharpness, exposure, focus, color, portrait effects.",
    "Some phones can also recognize what is in a photograph. For example, the camera may recognize: \"This is a person.\" or: \"This is food.\" or: \"This is a landscape.\"",
    "AI can help the phone decide how to process the image. You did not have to become a photographer. The phone used software to assist you.",
 
    "## Face Recognition",
    "Some phones allow you to unlock the device by looking at it. The phone's camera examines features of your face and compares them with information previously registered on the device. This is an example of AI-assisted image recognition.",
    "The important lesson is: AI can help computers recognize patterns in images. The same general idea can be used in other systems that identify objects, people, documents, or visual features.",
 
    "## Predictive Text",
    "Now think about what happens when you type a message. You may type: \"I will see you...\" and your phone may suggest: \"tomorrow\" Why? Your phone can use language patterns to predict words that may come next. This is another example of AI-related technology.",
    "Try this yourself: Open your messaging application and begin typing a sentence. Look at the words your keyboard suggests. Ask yourself: \"How did the phone know that this might be the next word?\" It is using patterns in language.",
 
    "## Voice Assistants",
    "You may have used a voice assistant by saying something such as: \"Set an alarm for 6:00 AM.\" or: \"What is the weather today?\" The system first has to understand your spoken words. This involves speech recognition.",
    "Speech recognition is technology that converts spoken language into information a computer can process. AI can then help interpret what you said and determine what response or action is appropriate.",
    "The basic process is: You speak ↓ Computer recognizes your speech ↓ System interprets your request ↓ Computer performs an action or gives an answer. This is one reason AI can make technology easier to use. You do not always have to type.",
 
    "## AI in Internet Search",
    "Most people use search engines to find information. For example, you might search: \"How to grow tomatoes\" or: \"Best way to clean a refrigerator\"",
    "Modern search systems use sophisticated algorithms, including AI and machine-learning techniques, to understand what people are looking for and help provide relevant results. They can consider things such as: the words you typed, the meaning of your question, related concepts, previous interactions, the relevance of available information.",
    "The important point is: Search technology has become much more intelligent than simply matching exact words.",
 
    "## Search Suggestions",
    "Have you ever started typing something into a search box and received suggestions before finishing? For example, you type: \"How to...\" and the system may suggest possible searches.",
    "These suggestions are generated from patterns in searches and language. This is another example of computers using data and patterns to predict what may be useful.",
 
    "## AI in Banking",
    "AI is also used in banking. You may never see the AI directly, but it can work behind the scenes. Banks and financial institutions can use AI and machine-learning systems for tasks such as: detecting unusual transactions, identifying potential fraud, monitoring account activity, helping answer customer questions, analyzing large amounts of financial information, assisting with risk assessment.",
    "Imagine that you normally use your bank account in a particular way. Then suddenly, there is activity that looks very different from your usual pattern. A banking system may flag that activity for further investigation.",
    "Pattern recognition is the key idea. The system can compare activity with patterns and identify something that appears unusual.",
 
    "## Important Banking Safety Lesson",
    "Because AI is used in banking, you should still be careful when receiving messages or calls claiming to be from your bank. AI itself does not mean every message you receive is genuine. Scammers can use modern technology too.",
    "Remember: Never give your password, PIN, verification code, or other security information to someone simply because they claim to be from your bank. If something seems suspicious, contact the bank through an official channel.",
 
    "## AI in Transportation",
    "AI can also help people get from one place to another. Consider a navigation application. You enter: \"Take me to the city center.\"",
    "The application may consider: your current location, your destination, available roads, distance, traffic conditions, estimated travel times. It can then suggest a route. Some systems can update the route when traffic conditions change.",
    "For example: You are travelling on Route A. Traffic becomes heavy. The navigation system detects that another route may be faster. It may suggest: \"Faster route available.\" This is an example of technology using information and patterns to make a prediction or recommendation.",
 
    "## AI Does Not Always \"Know\" the Future",
    "Suppose a navigation application says: \"You will arrive in 35 minutes.\" It is making an estimate. It cannot guarantee that the journey will take exactly 35 minutes. Traffic could suddenly become worse.",
    "There could be: an accident, road construction, flooding, a road closure, unexpected delays.",
    "This is an important AI lesson: A prediction is not the same as a guarantee. AI often works with probabilities and estimates.",
 
    "## AI in Communication",
    "AI is becoming increasingly common in communication. It can help with: translation, spelling, grammar, writing, speech-to-text, text-to-speech, email organization, message suggestions, summarization.",
    "For example, imagine that someone sends you a message in a language you do not understand. A translation system can help convert the message into a language you understand.",
 
    "## AI Can Help You Write",
    "Suppose you want to send a respectful message to your community leader. You could ask an AI assistant: \"Help me write a short and respectful message thanking our community leader for attending our meeting.\" The AI can produce a draft.",
    "You can then: Read it. Correct anything that is wrong. Add your personal words. Remove anything you do not like. Send it when you are satisfied. AI becomes an assistant. You remain the person making the final decision.",
 
    "## AI in Email",
    "Email systems can use AI to help organize your inbox. For example, they may help identify: spam, unwanted messages, important messages, promotional messages.",
    "Some systems can also summarize long messages or suggest responses. Think about how much email a busy person might receive. Instead of manually examining every message, AI can help organize the information.",
 
    "## AI in Social Media",
    "If you use social media, AI is likely involved in what you see. Imagine that you follow: cooking pages, football pages, news pages, music pages. The application has a huge amount of content available. It cannot necessarily show you everything.",
    "So recommendation systems can help determine which content appears in your feed. They may consider patterns such as: what you watch, what you click, what you search for, what you follow, what you interact with. This can influence what appears on your screen.",
 
    "## Why Does Social Media Recommend Things?",
    "Suppose you repeatedly watch cooking videos. The system may notice: \"This person appears interested in cooking content.\" It may then recommend more cooking videos. This is an example of a recommendation system.",
    "The system is making a prediction: \"This person may be interested in this.\" Notice the wording. It is a prediction, not certainty. The system can be wrong.",
 
    "## AI in Online Shopping",
    "AI is also used when people shop online. Imagine you search for: \"Men's shoes.\" You may later see recommendations for: similar shoes, related products, different brands, accessories.",
    "Online stores can use AI and other algorithms to make recommendations based on patterns. For example: You look at Product A ↓ Other customers who looked at Product A also viewed Products B and C ↓ The system recommends B and C. The goal is to help customers discover products they may find useful.",
 
    "## AI in Healthcare",
    "AI is increasingly used in healthcare and medical research. Examples include systems that can assist with: analyzing medical images, organizing medical information, research, administrative tasks, identifying patterns in large datasets.",
    "However, this does not mean that you should ask an AI system to replace your doctor. Healthcare decisions can be complicated. AI can assist healthcare professionals, but important medical decisions should involve qualified healthcare professionals.",
    "Remember: AI can assist a professional. It does not automatically become the professional.",
 
    "## AI in Everyday Communication With People",
    "AI can also help older adults stay connected. For example, AI tools can assist with: Reading — a long document can be summarized. Writing — a message can be drafted. Translation — a message can be translated into another language. Accessibility — speech can be converted into text, or text can be read aloud. Learning — a difficult topic can be explained in simpler language.",
    "This is particularly useful because AI can adjust its explanation to your level. You can say: \"Explain this in very simple language.\" or: \"Explain it step by step.\"",
 
    "## You May Already Be Using AI",
    "Let's stop for a moment. Think about the technology you used yesterday. Perhaps you: unlocked your phone with your face, used a navigation application, searched Google or another search engine, watched YouTube, received an email, used a banking application, typed a message, took a photograph, translated something.",
    "There is a good chance that AI or machine-learning technology was involved in at least one of those activities. This is important. You are not starting from zero. You have probably already been interacting with AI. This course is simply going to help you understand it and use it intentionally.",
 
    "## AI Is Often Invisible",
    "One reason people think AI is something completely new is that AI often works behind the scenes. You may see: \"Suggested route\" but not see the complicated systems making the recommendation.",
    "You may see: \"Suggested reply\" without seeing the AI technology behind it. You may see: \"Spam\" without thinking about how the system decided that the message was suspicious.",
    "This means AI can be present without announcing: \"I am Artificial Intelligence.\"",
 
    "## The Difference Between AI and Automation",
    "This is an important distinction. Automation means a computer follows predefined instructions to perform a task automatically. For example: \"Every morning at 7:00 AM, turn on the alarm.\" That can be simple automation.",
    "AI is different because AI systems can often analyze information, recognize patterns, make predictions, or generate responses.",
    "Simple comparison — Automation: \"Do this task at this time.\" AI: \"Analyze this information and determine what is likely to be useful.\" Some modern systems combine both automation and AI.",
 
    "## The Five Everyday Areas to Remember",
    "For this lesson, remember these five major areas. 1. PHONES — AI can assist with cameras, voice recognition, predictive text, security, and other features. 2. SEARCH — AI and related algorithms help understand searches and provide relevant results. 3. BANKING — AI can help identify unusual activity and potential fraud. 4. TRANSPORT — AI can help predict traffic and recommend routes. 5. COMMUNICATION — AI can help with writing, translation, speech recognition, email, and accessibility.",
 
    "## A Simple Everyday AI Map",
    "Think about AI like this: YOUR PHONE — Camera • Voice • Keyboard • Security ↓ THE INTERNET — Search • Recommendations • Translation ↓ SERVICES — Banking • Shopping • Email ↓ TRAVEL — Maps • Traffic • Routes ↓ COMMUNICATION — Messages • Writing • Speech • Translation. AI can appear throughout all of these areas.",
  ],
  // quiz left exactly as it was -- unchanged from the previous version of this lesson.
  quiz: [
    {
      id: "ai-everyday-q1",
      prompt: "Which of these is given as an everyday example of AI in this lesson?",
      options: [
        { id: "a", text: "A spam filter" },
        { id: "b", text: "A paper calendar" },
        { id: "c", text: "A landline telephone" },
      ],
      correctOptionId: "a",
      explanation: "Spam filters, recommendation lists, voice assistants, maps, translation, and search are all mentioned as everyday AI.",
    },
    {
      id: "ai-everyday-q2",
      prompt: "Why does the lesson say it's helpful to notice these everyday examples?",
      options: [
        { id: "a", text: "It makes AI less mysterious and helps you evaluate new tools calmly" },
        { id: "b", text: "It proves AI has no limitations" },
        { id: "c", text: "It is required before you can use a smartphone" },
      ],
      correctOptionId: "a",
      explanation: "Familiarity with existing examples helps you approach new AI tools with a steadier, more informed mind.",
    },
  ],
},
 
     {
  id: "human-in-the-loop",
  title: "What AI can and cannot do",
  summary: "Build a healthy mental model of AI as an assistant, not a replacement for wisdom.",
  duration: "15 min",
  content: [
    "## Welcome to the Lesson",
    "By now, you understand: what AI means, what data is, what patterns are, what an AI model is, where AI already appears in everyday life.",
    "Now we need to answer a very important question: What can AI actually do—and what can it not do? This question matters because people sometimes make two opposite mistakes.",
    "Mistake 1: Underestimating AI — Someone might think: \"AI is just a computer program. It cannot really help me.\" That is not true. Modern AI can be extremely useful.",
    "Mistake 2: Overestimating AI — Someone might think: \"The computer said it, so it must be correct.\" That is also not true.",
    "The healthy approach is somewhere in the middle: AI is a powerful assistant, but it is not a replacement for human judgment, wisdom, experience, or responsibility. This idea will guide you throughout the entire course.",
 
    "## Think of AI as an Assistant",
    "Imagine that you have a very fast assistant. You can ask this assistant to: explain something, summarize a document, write a first draft, generate ideas, translate text, organize information, help you learn, compare options, brainstorm solutions. The assistant can work quickly.",
    "But you would not necessarily allow that assistant to make every important decision in your life. Why? Because you have something the assistant does not have in the same way: Human judgment.",
    "You know your: family, values, experiences, circumstances, responsibilities, relationships, priorities. AI does not live your life. That distinction is essential.",
 
    "## The Human-in-the-Loop",
    "You will hear an important term in this course: Human-in-the-loop. It simply means: A human remains involved in the process and reviews, guides, or approves what the AI does.",
    "Think about it like this: Human ↓ Gives AI an instruction ↓ AI produces a result ↓ Human reviews the result ↓ Human corrects or improves it ↓ Human makes the final decision. This is called a human-in-the-loop approach.",
 
    "## Why Does the Human Need to Stay Involved?",
    "Because AI can make mistakes. Imagine asking an AI: \"Write a letter inviting people to my birthday celebration.\" The AI might produce a useful letter.",
    "But perhaps it gets your: date wrong, location wrong, person's name wrong, relationship wrong. You can easily correct those things. That is why you should not simply copy everything AI gives you without reading it.",
    "The rule is: AI generates. You evaluate.",
 
    "## What AI Is Good At",
    "AI can be very useful for tasks involving information, language, patterns, and content generation. Let's look at some of its strengths.",
 
    "## AI Can Explain Things",
    "Suppose you encounter a difficult word or concept. You could ask: \"What does inflation mean? Explain it in simple language.\" AI can provide an explanation.",
    "If you do not understand it, you can ask: \"Explain it using an example from everyday life.\" You can continue asking questions until the explanation makes sense. This makes AI useful as a learning assistant.",
 
    "## AI Can Summarize Information",
    "Imagine someone sends you a long document. Instead of reading the entire document immediately, you could ask an AI system to summarize it. For example: \"Summarize this document and give me the five most important points.\" AI can help reduce a large amount of text into a shorter explanation.",
    "However, remember: A summary can leave out details. For important documents, you should still read the original information before making important decisions.",
 
    "## AI Can Help You Write",
    "AI can help with many forms of writing. For example: letters, emails, invitations, announcements, speeches, reports, messages, outlines, questions.",
    "You might say: \"Help me write a respectful letter thanking the members of my community.\" AI can create a first draft. You then make it personal.",
    "Think of AI as a writing assistant—not the owner of your voice. Your final message should reflect what you actually want to say.",
 
    "## AI Can Generate Ideas",
    "Sometimes the hardest part of a task is knowing where to begin. You could ask: \"Give me ten ideas for activities for a family gathering.\" Or: \"Give me five ways to organize my small business records.\"",
    "AI can provide possibilities. You can then decide which ideas make sense for your situation. This is called brainstorming.",
 
    "## AI Can Translate",
    "AI can help translate text between languages. For example: \"Translate this message into French.\" This can be very useful when communicating with people who speak another language.",
    "But translations can sometimes lose: cultural meaning, tone, local expressions, context. For important legal or official documents, professional translation may still be appropriate.",
 
    "## AI Can Help Organize Information",
    "Suppose you have a list of household expenses: electricity, food, transportation, school expenses, rent, repairs. You could ask AI to help organize the information into categories.",
    "AI can also help turn messy notes into: lists, tables, summaries, action points, schedules. This is particularly useful when information is difficult to organize manually.",
 
    "## AI Can Help With Repetitive Tasks",
    "AI can assist with tasks that involve processing large amounts of information. For example: \"Take these notes and organize them into three categories.\" Or: \"Turn these meeting notes into a list of action items.\" This can save time.",
    "But again: Faster does not automatically mean correct. You still need to check the result.",
 
    "## AI Can Analyze Patterns",
    "AI is particularly useful when there is a lot of data. For example, a business might have thousands of sales records. An AI system could help identify patterns such as: products that sell frequently, periods when sales increase, unusual activity, common customer behavior.",
    "This is one of the areas where computers can be extremely powerful. Humans can recognize patterns too, but computers can process enormous amounts of information very quickly.",
 
    "## AI Can Generate Images and Other Content",
    "Modern generative AI can create content based on instructions. Depending on the tool, this may include: images, text, audio, presentations, computer code.",
    "For example, you might ask: \"Create an illustration of a peaceful African village at sunrise.\" An image-generation system may produce an image based on that description.",
    "Again, the AI is responding to your instructions. You remain responsible for deciding whether the result is appropriate and useful.",
 
    "## AI Can Help You Practice",
    "AI can also act as a practice partner. For example: \"Teach me five basic French phrases.\" Then: \"Test me on them.\" Then: \"Correct my mistakes.\" This can make learning interactive.",
    "You can also ask AI to: quiz you, give examples, explain mistakes, create exercises, adjust the difficulty.",
 
    "## AI Can Adapt Its Explanation",
    "One of the most useful things about AI is that you can tell it how you want information explained. For example: \"Explain this like I am a beginner.\" Or: \"Use very simple English.\" Or: \"Give me an everyday example.\" Or: \"Explain it step by step.\" Or: \"Explain it as if you were teaching someone who has never used a computer.\"",
    "You are not limited to the first answer. You can have a conversation.",
 
    "## Now Let's Talk About What AI Cannot Do",
    "AI has impressive capabilities. But it also has important limitations. Understanding these limitations is just as important as learning what AI can do.",
 
    "## AI Does Not Automatically Know Everything",
    "AI is not an all-knowing machine. Its knowledge and capabilities depend on factors such as: the model, its training, the information available to it, the tools it has access to, the date of its information, the quality of its inputs.",
    "Therefore, never assume: \"AI knows everything.\" It does not.",
 
    "## AI Can Be Wrong",
    "This is perhaps the most important limitation. AI can produce an answer that sounds very convincing while being incorrect.",
    "For example, it might: give the wrong date, miscalculate something, misunderstand a question, confuse two people, invent a source, state an incorrect fact.",
    "This can happen because AI generates responses based on learned patterns. It does not have a magical truth detector. Remember: Confident language does not guarantee correct information.",
 
    "## AI Can \"Hallucinate\"",
    "There is a term used in AI: Hallucination. An AI hallucination occurs when an AI system generates information that is false, unsupported, or does not correspond to reality.",
    "For example, imagine asking: \"Who wrote a book that does not actually exist?\" An AI might incorrectly provide: an author, a publication date, a publisher, a description. The answer may sound believable. But the book may not exist at all.",
    "This is why important information should be verified.",
 
    "## AI Does Not Have Your Life Experience",
    "Suppose you ask: \"Should I move to another city?\" AI can help you think through the decision. It might help you create a list of: advantages, disadvantages, costs, questions to consider, possible risks.",
    "But it does not personally know what it feels like to: leave your home, care for your family, manage your responsibilities, live in your community, experience your particular circumstances. It can help you think. It should not automatically decide for you.",
 
    "## AI Does Not Replace Wisdom",
    "This is the central idea of today's lesson. Information is not the same as wisdom. AI can provide information.",
    "Wisdom involves things such as: experience, judgment, values, context, understanding consequences, knowing when something is appropriate. A computer can tell you many possible options. But you must decide what is right for your circumstances.",
 
    "## AI Does Not Understand Your Situation Automatically",
    "Consider two people asking: \"Should I start a business?\" Person A: has savings, has business experience, has available time. Person B: has significant financial responsibilities, has no business experience, cannot afford a major financial loss.",
    "The same generic answer would not necessarily be appropriate for both. This is why context matters. Give AI relevant context when appropriate.",
    "Instead of: \"Should I start a business?\" you might ask: \"I am considering starting a small food business. I have limited capital and want to start part-time. Help me identify the questions I should consider before making a decision.\" Now the AI has more context.",
 
    "## AI Cannot Take Responsibility for Your Decisions",
    "Suppose AI gives you three choices. You choose one. The consequences belong to you, not the AI.",
    "This is especially important when decisions involve: money, health, legal matters, employment, family, safety.",
    "AI can help you gather information and organize your thinking. But you should not treat AI as the person responsible for your final decision.",
 
    "## AI Does Not Automatically Know What Is True",
    "This is a subtle but important distinction. AI can produce: \"The answer is...\" But it may not actually know that the statement is true in the way a human expert verifies a fact.",
    "Depending on the system, AI may be generating a likely response based on patterns. Therefore, ask yourself: \"How important is it that this answer is correct?\" If the answer is very important, verify it.",
 
    "## The Traffic-Light Method",
    "Here is a simple method you can use whenever AI gives you an answer.",
    "🟢 GREEN — Low Risk: You can usually use AI directly after a quick review. Examples: birthday messages, brainstorming ideas, simple explanations, rewriting a casual message, creating a shopping checklist.",
    "🟡 YELLOW — Check Carefully: Review the information before relying on it. Examples: travel information, product comparisons, business suggestions, educational information, financial planning ideas.",
    "🔴 RED — Get Human/Professional Verification: Do not rely on AI alone. Examples: medical decisions, legal decisions, major financial decisions, safety-critical decisions, official requirements.",
    "The higher the consequences of being wrong, the more important human verification becomes.",
 
    "## Human-in-the-Loop in Practice",
    "Let's use a simple example. You want to organize a community meeting.",
    "Step 1 — Human: You decide what the meeting is about. Step 2 — AI: You ask AI: \"Create a simple agenda for a one-hour community meeting about neighborhood cleanliness.\" Step 3 — AI: AI produces an agenda.",
    "Step 4 — Human: You read it. You notice that one topic does not apply to your community. You remove it. Step 5 — Human: You add the topics that matter to your community. Step 6 — Human: You approve the final agenda.",
    "That is human-in-the-loop.",
 
    "## Another Example: Writing a Letter",
    "Imagine you want to write a complaint about a service. You ask AI: \"Write a polite but firm complaint about a delayed service.\" AI creates a draft.",
    "But you check: Is the date correct? Is the company name correct? Is the problem described accurately? Is the tone appropriate? Did the AI invent anything? Does the letter actually represent what happened?",
    "Then you edit it. AI helped write it. You verified it. You approved it. That is the correct relationship.",
 
    "## Another Example: Learning",
    "Suppose you are learning about electricity. You ask: \"Explain electricity to me like I am a beginner.\" AI explains it.",
    "You don't understand one part. You ask: \"Explain that part using an example from water flowing through pipes.\" AI gives another explanation.",
    "You then ask: \"Give me five questions to test whether I understand it.\" AI creates questions. You answer them. AI helps you check your answers. Here, AI is functioning as a tutor or learning assistant. You are still the learner.",
 
    "## A Useful Rule: Ask, Check, Decide",
    "Remember these three words: ASK — Give AI a clear question or instruction. ↓ CHECK — Review the answer and verify important information. ↓ DECIDE — Use your own judgment to determine what to do. This simple process can protect you from many common mistakes.",
 
    "## What AI Is Best Used For",
    "AI is particularly useful when you need help with: Understanding — \"Explain this.\" Creating — \"Draft this.\" Organizing — \"Put these notes into categories.\" Brainstorming — \"Give me ideas.\" Summarizing — \"Give me the key points.\" Practicing — \"Quiz me.\" Transforming — \"Rewrite this in simpler language.\" Exploring — \"Give me different options to consider.\"",
    "These are excellent starting points for beginners.",
 
    "## What AI Should Not Replace",
    "AI should not replace: Your judgment — you know your circumstances. Professional expertise — qualified professionals have specialized training and responsibility. Human relationships — AI can help you communicate, but it does not replace meaningful relationships.",
    "Personal values — AI cannot decide what matters most to you. Verification — important information should still be checked. Responsibility — you remain responsible for decisions you make.",
 
    "## The \"Assistant, Not Boss\" Rule",
    "Imagine AI sitting beside you. Not above you. Not instead of you. Beside you.",
    "You can say: \"Help me understand this.\" \"Give me some ideas.\" \"Help me organize this.\" \"Show me the options.\" \"Explain this another way.\"",
    "But you should not automatically think: \"The AI has spoken, so I must do what it says.\" Instead: \"AI, help me think. I will make the decision.\" That is a healthy mental model.",
 
    // Practical Exercise sections ("AI or Human?" and "The Three Questions")
    // are intentionally left out here, same as the other lessons -- but the
    // three practice prompts below ARE kept, as the ending of the lesson.
    "## Practice With an AI Assistant",
    "Try this prompt: \"I want to make an important decision. Do not make the decision for me. Instead, help me identify the questions I should ask myself before deciding.\"",
    "Notice what you are doing. You are not asking AI to become the decision-maker. You are asking AI to help you think more clearly. This is an excellent example of human-in-the-loop AI use.",
 
    "## A Second Practice Prompt",
    "Try: \"Explain this topic to me simply. After explaining it, list the parts of your answer that I should verify from a reliable source.\"",
    "This teaches you another important habit: AI can help you identify what needs checking.",
 
    "## A Third Practice Prompt",
    "Try: \"Give me three possible approaches to this problem. For each one, explain the advantages, disadvantages, and questions I should consider. Do not choose for me.\"",
    "This turns AI into a thinking partner rather than a decision-maker.",
  ],
  quiz: [
    {
      id: "human-in-loop-q1",
      prompt: "What does the lesson warn AI can sometimes be?",
      options: [
        { id: "a", text: "Confidently wrong, incomplete, biased, or unaware of your real context" },
        { id: "b", text: "Always perfectly accurate" },
        { id: "c", text: "Incapable of making any mistakes once trained" },
      ],
      correctOptionId: "a",
      explanation: "AI can sound confident while still being wrong, incomplete, biased, or missing important context.",
    },
    {
      id: "human-in-loop-q2",
      prompt: "Who stays responsible for decisions, relationships, truth, and safety?",
      options: [
        { id: "a", text: "The learner" },
        { id: "b", text: "The AI system" },
        { id: "c", text: "No one in particular" },
      ],
      correctOptionId: "a",
      explanation: "The lesson is explicit that the learner remains responsible for these things, not the tool.",
    },
    // New: added from the fuller lesson content.
    {
      id: "human-in-loop-q3",
      prompt: "What does \"human-in-the-loop\" mean in this lesson?",
      options: [
        { id: "a", text: "A human remains involved -- reviewing, guiding, or approving what the AI does" },
        { id: "b", text: "AI makes the final decision without any human review" },
        { id: "c", text: "A human must personally write every word instead of using AI" },
      ],
      correctOptionId: "a",
      explanation: "Human-in-the-loop means a person stays involved throughout the process -- the AI produces a result, but a human reviews, corrects, and makes the final call.",
    },
  ],
},
 
    ],
  },
  {
    id: "getting-comfortable",
    number: 2,
    title: "Setting Up and Getting Comfortable",
    strapline: "Build confidence through small, repeatable first steps.",
    whyItMatters: "Confidence grows when the first experience is safe and practical. This session removes friction and helps beginners form useful habits.",
    outcomes: ["Open and use an AI chat tool with confidence.", "Write a clear request and refine the response.", "Save, copy, and review AI-assisted work responsibly."],
    exerciseTitle: "Your first useful conversation",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
     {
  id: "first-login",
  title: "Starting safely",
  summary: "Understand accounts, sign-in, and the basic layout of an AI assistant.",
  duration: "10 min",
  content: [
    "## Welcome",
    "In the previous lessons, we learned what AI means, where we already encounter it, and what AI can and cannot do.",
    "Now it is time to take the next step: Actually opening and using an AI assistant. For many first-time users, the hardest part is not asking AI a question. It is simply knowing: Which website or app should I open? Do I need an account? What does \"sign in\" mean? What is a password? Where do I type my question? What do all these buttons mean? How do I know I am using the real service? What information should I keep private? This lesson will answer those questions step by step.",
    "The goal is not to become an expert today. The goal is to become comfortable enough to open an AI assistant, sign in safely, recognize the main parts of the screen, and ask your first question.",
 
    "## What Is an AI Assistant?",
    "An AI assistant is a computer service that allows you to communicate with an AI model using ordinary language. Instead of learning complicated computer commands, you can simply type or speak what you want.",
    "For example: \"Explain what inflation means in simple English.\" Or: \"Help me write a shopping list for a family of four.\" Or: \"What questions should I ask before buying a used car?\" The AI processes your request and produces a response. You can then continue the conversation.",
    "You might say: \"Explain that again using a simple example.\" The assistant can respond to your follow-up question based on the conversation.",
    "Think of it like a conversation: You do not need to know computer programming to use an AI assistant. You communicate with it using normal language. You → Ask a question → AI responds → You clarify or ask another question. This is called a conversation or chat.",
 
    "## What Is an Account?",
    "Before using many AI services, you may be asked to create an account. An account is your personal access record for a service.",
    "You can think of it like having a membership card for a library. The library needs to know that you are a registered member. Similarly, an online service may need an account so it can provide you with access to its features.",
    "An account may contain information such as: Your name, Your email address, Your chosen settings, Your conversation history, Your subscription information, if applicable, Security information. Not every AI service requires exactly the same information.",
 
    "## What Does \"Sign Up\" Mean?",
    "You will often see two important options: Sign up and Sign in. They are not the same.",
    "Sign up means creating a new account. For example: \"I have never used this service before, so I need to sign up.\"",
    "Sign in means entering an account you already have. For example: \"I already have an account, so I need to sign in.\"",
    "A simple way to remember this is: Sign up = join. Sign in = enter. You may also see the words: Log in, Log out, Login, Create account. \"Log in\" generally means the same thing as \"sign in.\"",
 
    "## What Is an Email Address?",
    "Many online accounts use an email address as part of the sign-in process. An email address looks something like: name@example.com. It has: A name or username, The @ symbol, The email provider or organization. Your email address can act as an identifier for your account.",
    "Important safety rule: Your email address is not the same thing as your password. It is usually okay to provide your email address when you are deliberately creating an account with a trusted service. Your password, however, should be kept private.",
 
    "## What Is a Password?",
    "A password is a secret used to help protect an account. For example, when you sign in, a service may ask for: Email: your email address, Password: your secret password. The password should be known only to you or handled through a trusted password-management system.",
    "Never share your password with someone simply because they ask for it. Be particularly careful if someone sends you a message saying: \"Give me your password so I can help you fix your account.\" That is a warning sign.",
    "A legitimate support process should not require you to casually send your password to another person.",
 
    "## Passwords and Verification Codes Are Different",
    "A service may also send you a verification code. For example, after attempting to sign in, you may receive a temporary code by email or another approved method. The service may ask you to enter that code. This helps verify that you are the person attempting to access the account.",
    "Important rule: Treat verification codes as private too. Do not give a verification code to a stranger who contacts you unexpectedly. If someone says: \"I need the code you just received. Send it to me.\" Stop and verify what is happening before doing anything.",
 
    "## How to Recognize the Correct AI Service",
    "One of the most important parts of starting safely is making sure you are using the real website or official app. Scammers can create websites or messages designed to look like popular services.",
    "Before entering account information, check the source. If you are using a website: Make sure you intentionally navigated to the correct website. Check the website address carefully. Be cautious with links received through unexpected messages. Look for obvious spelling mistakes or unusual website addresses.",
    "If you are using a phone: Prefer the official app store. Check the publisher/developer information. Be cautious of applications with suspicious names or unusual descriptions.",
    "A simple rule: Do not enter your password just because a page looks familiar. Take a moment to confirm that you are on the service you intended to use.",
 
    "## What Does \"Remember Me\" Mean?",
    "Some sign-in pages have an option such as: Remember me or Stay signed in. This generally means the device may remember your login so you do not have to enter your details every time. This can be convenient on a device that you personally control.",
    "However, be more careful on: Public computers, School computers, Library computers, Someone else's phone or computer, Shared computers. You do not want the next person using the device to automatically gain access to your account.",
    "Good habit: On a shared or public device, do not leave your account signed in. When finished, sign out.",
 
    "## What Does \"Sign Out\" Mean?",
    "Sign out means ending your current account session on that device. You might see: Sign out, Log out, Log off. These usually mean the same basic thing.",
    "For your personal device, you may remain signed in for convenience. For a shared device, signing out is an important safety habit.",
 
    "## Opening the AI Assistant",
    "Once you have safely reached your AI assistant, you will usually see a main conversation screen. Although different services have different designs, many AI assistants contain similar elements.",
    "You may see: A conversation area, A message box, A send button, A new conversation button, A menu or sidebar, Settings, Your account/profile, Sometimes buttons for voice, images, files, or other features.",
    "Do not worry if your screen looks slightly different. AI services change their interfaces from time to time. The important thing is understanding the purpose of the major parts.",
 
    "## The Conversation Area",
    "The largest part of the screen is usually where the conversation appears. This is where you see: Your questions, The AI's responses, Previous messages in the conversation. Think of it as the page where your conversation is written down.",
    "For example: You: \"What is artificial intelligence?\" AI: \"Artificial intelligence is…\" Then you might ask: You: \"Explain that using an example.\" The conversation area will show both messages.",
 
    "## The Message Box",
    "Near the bottom of many AI assistants is a box where you can type. It might say something like: \"Message…\" or \"Ask anything…\" This is where you enter your instruction or question.",
    "For example: \"Explain compound interest in simple language.\" You then press the send button or press the appropriate key on your keyboard.",
    "This is where prompting begins: The instruction you give an AI assistant is commonly called a prompt. You will learn much more about prompting in later lessons. For now, remember: A prompt is simply the instruction or question you give the AI.",
 
    "## The Send Button",
    "After entering your question, you usually need to send it. The send button may look like: An arrow, A paper airplane, A button labelled \"Send\".",
    "On a computer, pressing Enter may also send your message, depending on the service. Some systems use: Enter = send, while others may use: Enter = new line. So if something behaves differently from what you expect, look at the buttons and instructions on the screen.",
 
    "## The New Chat Button",
    "You may also see something such as: New chat or New conversation. This starts a separate conversation.",
    "Why would you use it? Suppose you are currently discussing: Planning a garden. Later, you want to work on: Writing a birthday invitation. Starting a new conversation can help keep the topics separate.",
    "You do not have to create a new conversation for every question, but it can be useful when changing to a completely different subject.",
 
    "## The Sidebar or Menu",
    "Many AI assistants have a sidebar. The sidebar may contain: Previous conversations, New chat, Search, Settings, Account information, Help, Other available features. Do not feel that you need to understand every button immediately.",
    "A beginner's approach: Learn only the buttons you need first. Start with: New chat → Message box → Send. Later, explore the other features. You do not need to understand the entire application before you can use it.",
 
    "## Settings",
    "The Settings area is where you may find options for changing how the service works. Depending on the AI assistant, settings might include: Language, Appearance, Notifications, Privacy controls, Conversation history, Voice settings, Account information, Security options.",
    "Settings can be useful, but beginners should avoid changing things randomly. If you do not know what a setting does: Read the explanation before changing it. And if you are unsure, ask someone you trust or ask the AI assistant to explain what the setting means—without sharing private account information.",
 
    "## Your First AI Question",
    "Once you are signed in and can see the message box, you are ready to ask your first question. Start with something simple. For example: \"Explain what artificial intelligence is in simple language.\"",
    "Then try: \"Give me three examples of AI that I may already use.\" Then: \"Explain one of those examples in more detail.\" Notice what is happening. You are beginning a conversation with the AI.",
 
    "## Learning to Read the AI's Response",
    "Do not assume that everything the AI writes is automatically correct. This connects directly to our previous lesson. AI can produce useful answers, but it can also make mistakes.",
    "For low-risk learning questions, you can use the answer as a starting point. For important subjects, verify the information.",
    "For example, if you ask: \"What is a recipe for rice?\" A mistake may be inconvenient. But if you ask: \"What medicine should I take for this serious health problem?\" you should not simply follow an AI response. You need appropriate guidance from a qualified adult or professional.",
    "The principle is: The more important the decision, the more carefully you should check the answer.",
 
    "## Never Put Secrets Into an AI Chat",
    "An AI assistant is not a private diary for sensitive information. Before sending something, stop and ask: \"Does the AI really need to know this?\"",
    "Avoid unnecessarily entering information such as: Passwords, Banking PINs, Verification codes, Full payment-card details, Private security answers, Other people's confidential information, Sensitive documents that you do not have permission to share. You can often remove private information and still get useful help.",
    "Example: Instead of: \"My bank account number is 1234567890. Please help me…\" You could say: \"I am having trouble understanding a bank statement. Can you explain what these types of charges usually mean?\" You can ask for help without exposing unnecessary private information.",
 
    "## A Safe First-Login Routine",
    "Whenever you begin using a new AI service, follow this simple routine.",
    "STEP 1 — Find the official service: Make sure you are using the correct website or official application. STEP 2 — Create an account or sign in: Use your own account information. STEP 3 — Protect your password: Do not share it with other people.",
    "STEP 4 — Complete verification carefully: If the service asks you to verify your account, follow the official process. STEP 5 — Look around: Find the: Conversation area, Message box, Send button, New chat button, Menu/settings.",
    "STEP 6 — Ask a simple question: Start with something that is easy to understand. STEP 7 — Read the response: Do not rush. STEP 8 — Ask a follow-up: For example: \"Can you explain that more simply?\" STEP 9 — Sign out when appropriate: Especially when using a shared device.",
 
    "## Phone vs Computer",
    "You may use an AI assistant on either a smartphone or a computer. The layout may look different, but the basic process is usually similar.",
    "Phone: Tap the app, Tap the message box, Type or use voice, Tap Send, Swipe/tap menus. Computer: Open the website/app, Click the message box, Type using keyboard, Click Send or use the appropriate key, Click menus/sidebar.",
    "Do not worry if the buttons are in different places. The underlying ideas remain the same.",
 
    "## Common Beginner Mistakes",
    "Mistake 1: Thinking \"Sign up\" and \"Sign in\" mean the same thing. Remember: Sign up = create an account. Sign in = access an existing account.",
    "Mistake 2: Entering a password on a suspicious page. Always make sure you are using the correct service before entering account information.",
    "Mistake 3: Sharing a verification code. Treat verification codes as private.",
    "Mistake 4: Being afraid to click anything. It is normal to feel nervous when learning. You do not need to click every button. Start with the basic ones.",
    "Mistake 5: Thinking you must know everything before starting. You don't. You can learn the interface gradually.",
    "Mistake 6: Putting private information into the chat. Ask yourself: \"Can I remove this information and still get the help I need?\" If yes, remove it.",
    "Mistake 7: Believing the AI is always correct. Remember the rule from Lesson 3: AI is an assistant, not the final authority.",
 
    "## The \"Pause Before You Send\" Habit",
    "Before pressing Send, develop one simple habit: PAUSE → READ → SEND.",
    "PAUSE: Take a moment. READ: Look at what you typed. Ask: Am I asking what I actually want? Did I accidentally include private information? Is the question clear? SEND: Then submit the message.",
    "This small habit can prevent many avoidable mistakes.",
 
    "## Mini Scenario",
    "Imagine that Mrs. Ada is using an AI assistant for the first time. She sees: Sign up, Sign in. She already has an account. She chooses: Sign in.",
    "After signing in, she sees a large empty conversation area and a box at the bottom. She types: \"Explain how to organize my weekly shopping list.\" The AI responds.",
    "Mrs. Ada does not fully understand the answer. Instead of giving up, she asks: \"Make the instructions simpler and put them into a checklist.\" The AI produces a simpler response.",
    "Mrs. Ada has now learned several important skills: How to sign in, Where to type, How to send a prompt, How to read a response, How to ask a follow-up question. That is already meaningful progress.",
 
    "## What You Should Know Before Moving On",
    "By the end of this lesson, you should be able to explain: Account — a record that allows you to access an online service. Sign up — creating a new account. Sign in — entering an existing account.",
    "Password — a secret used to protect an account. Verification code — a temporary code used to confirm access or identity during certain sign-in processes.",
    "AI assistant — a service that allows you to communicate with an AI model through questions and instructions. Prompt — the question or instruction you give the AI. Conversation — the ongoing exchange between you and the AI. Settings — options that control aspects of the service.",
 
    // Sections 23-25 combined, kept together as regular trailing content
    // entries so they naturally land at the end of the lesson.
    "## Guided Practice",
    "Open your chosen AI assistant. Do not worry about asking difficult questions. Find these five things: Where the conversation appears, Where you type, Where you send, Where you start a new conversation, Where you find settings or your account. Exercise: Write down what each button or area does. For example: Message box — Where I type my question. Send — Sends my question to the AI. New chat — Starts another conversation. Settings — Allows me to change certain options. This exercise is about becoming comfortable with the interface.",
    "Try these prompts one at a time: \"Introduce yourself and explain what you can help me with.\" Then: \"Explain artificial intelligence as if I am completely new to the subject.\" Then: \"Give me five practical ways I could use an AI assistant in everyday life.\" Finally: \"Explain your second example in more detail.\" Notice that you do not need to start a completely new question every time. You can continue the conversation.",
    "One of the most useful things about AI assistants is that you can improve an answer by asking another question. Suppose the AI gives you a complicated explanation. You can say: \"That is too technical. Explain it using simpler words.\" Or: \"Give me an everyday example.\" Or: \"Break that into three simple steps.\" Or: \"Explain the most important point first.\" This is an important skill. You do not have to get the perfect answer with your first prompt. You can guide the conversation.",
  ],
  // New quiz, built from the doc's own "Knowledge Check" section (29) --
  // turned into multiple choice using the lesson's own answers.
  quiz: [
    {
      id: "first-login-q1",
      prompt: "What is the difference between \"sign up\" and \"sign in\"?",
      options: [
        { id: "a", text: "Sign up creates a new account; sign in accesses an account you already have" },
        { id: "b", text: "They mean exactly the same thing" },
        { id: "c", text: "Sign in creates a new account; sign up accesses an existing one" },
      ],
      correctOptionId: "a",
      explanation: "Sign up = join (create a new account). Sign in = enter (access an account you already have).",
    },
    {
      id: "first-login-q2",
      prompt: "Why should you protect your password?",
      options: [
        { id: "a", text: "It's a secret that protects your account -- legitimate support will not ask you to casually send it" },
        { id: "b", text: "Because it must be shared with anyone who offers to help fix your account" },
        { id: "c", text: "Passwords don't actually matter as long as you have an email address" },
      ],
      correctOptionId: "a",
      explanation: "A message asking you to hand over your password \"so I can help you fix your account\" is a warning sign, not a legitimate request.",
    },
    {
      id: "first-login-q3",
      prompt: "Why should you be careful with verification codes?",
      options: [
        { id: "a", text: "They should be treated as private, just like a password -- never given to an unexpected stranger" },
        { id: "b", text: "They are safe to share with anyone since they expire quickly" },
        { id: "c", text: "They are the same thing as your email address" },
      ],
      correctOptionId: "a",
      explanation: "A verification code confirms it's really you signing in -- handing it to someone else can let them into your account.",
    },
    {
      id: "first-login-q4",
      prompt: "Is an AI assistant automatically correct just because it gives a confident-sounding answer?",
      options: [
        { id: "a", text: "No -- confident language does not guarantee correct information" },
        { id: "b", text: "Yes -- if it sounds confident, it is always right" },
        { id: "c", text: "Only on a computer, not on a phone" },
      ],
      correctOptionId: "a",
      explanation: "The more important the decision, the more carefully you should check the answer -- AI is an assistant, not the final authority.",
    },
  ],
},
 
      {
  id: "clear-requests",
  title: "Writing a useful request",
  summary: "Use context, role, task, audience, and format to get a stronger first response.",
  duration: "18 min",
  content: [
    "## Why Your Request Matters",
    "In the previous lessons, you learned that AI is an assistant. But an assistant can only work with the information you give it.",
    "Imagine telling someone: \"Help me with a letter.\" They might ask: What kind of letter? Who is it for? What is the purpose? Should it be formal or friendly? How long should it be? The same thing happens with AI.",
    "If your request is too short or unclear, the AI has to guess what you want. Sometimes it will guess correctly. Sometimes it will not.",
    "Compare these two requests. Weak request: \"Write a letter.\" Better request: \"Write a polite letter to my landlord explaining that the bathroom tap is leaking and asking for it to be repaired. Keep it short and respectful.\"",
    "The second request gives the AI much more information. Therefore, it has a better chance of producing something useful on the first attempt.",
 
    "## What Is a Prompt?",
    "A prompt is the instruction, question, or request you give to an AI assistant. For example: \"Explain how to use WhatsApp.\" That is a prompt.",
    "Another example: \"Write a short birthday message for my daughter.\" That is also a prompt. Another: \"Create a flyer for a church conference.\" Again, that is a prompt.",
    "A prompt does not have to be complicated. The important thing is that it tells the AI what you want it to do.",
 
    "## The Golden Rule of Prompting",
    "A simple rule to remember is: The clearer your request, the easier it is for the AI to give you the kind of answer you want.",
    "You do not need special computer language. You can speak to AI naturally. Instead of trying to sound technical, explain what you need as if you were giving instructions to a helpful person.",
 
    "## The Five Parts of a Useful Request",
    "A strong request can contain five simple parts: 1. Context 2. Role 3. Task 4. Audience 5. Format.",
    "You do not always need all five. For a simple question, one or two may be enough. For an important task, adding more information usually gives you more control. Let's understand each one.",
 
    "## Part One — Context",
    "Context tells the AI what is happening or gives background information. Think of context as answering: \"What does the AI need to know before doing the task?\"",
    "Example — Instead of: \"Write an announcement.\" Give some context: \"Our community association is holding a meeting next Saturday to discuss neighborhood security.\" Now the AI understands the situation. You can continue: \"Write an announcement inviting residents to attend.\"",
    "Another example — Weak: \"Help me plan food.\" Better: \"I am planning a small family gathering for 10 people on Saturday.\" The second request gives the AI useful background.",
 
    "## Part Two — Role",
    "A role tells the AI what type of assistant you want it to act as for the task. For example: \"Act as a patient English teacher.\" Or: \"Act as a professional event planner.\" Or: \"Act as a friendly customer-service assistant.\" Or: \"Act as a graphic designer who specializes in event flyers.\"",
    "This can help the AI approach the task from the perspective you want.",
    "Example — Instead of: \"Explain budgeting.\" Try: \"Act as a patient financial education teacher. Explain budgeting to someone who has never studied finance.\" The role gives the AI direction.",
    "Important: The role does not mean the AI has actually become that person. It simply tells the AI what style or perspective would be useful.",
 
    "## Part Three — Task",
    "The task is the actual job you want the AI to perform. This is usually the most important part. Ask: \"What exactly do I want the AI to do?\"",
    "Examples: Explain, Write, Summarize, Compare, Translate, Organize, Create, Rewrite, Brainstorm, Make a checklist, Generate an image.",
    "Example — Instead of: \"Church meeting.\" Try: \"Write an announcement inviting church members to a meeting.\" The task is now clear: Write an announcement.",
 
    "## Part Four — Audience",
    "The audience is the person or group who will receive or use the result. Ask: \"Who is this for?\"",
    "For example: Elderly people, Children, Students, Customers, Church members, Business owners, Employees, Parents, Beginners, Professionals. This matters because different audiences need different language.",
    "Example — Compare: \"Explain artificial intelligence.\" with: \"Explain artificial intelligence to elderly people who are using AI for the first time. Use simple language and everyday examples.\" The second request tells the AI who the explanation is for.",
 
    "## Part Five — Format",
    "Format tells the AI what shape you want the answer to take. You can ask for: A paragraph, A list, A table, A checklist, An email, A letter, A speech, A lesson, Step-by-step instructions, A social-media caption, A flyer, A presentation outline.",
    "Example — Instead of: \"Give me information about healthy eating.\" Try: \"Give me 7 simple healthy eating tips in a numbered list.\" Now the AI knows what the answer should look like.",
 
    "## Put the Five Parts Together",
    "Let's combine everything. Example: Community Meeting — Context: Our community is holding a meeting about neighborhood safety. Role: Act as a professional community communications assistant. Task: Write an announcement inviting residents to attend. Audience: Local residents, including elderly people. Format: A short, clear WhatsApp message.",
    "Put together: \"Our community is holding a meeting next Saturday to discuss neighborhood safety. Act as a professional community communications assistant. Write a friendly announcement inviting local residents, including elderly people, to attend. Keep it short and clear and format it as a WhatsApp message.\" That is a strong prompt.",
 
    "## You Do Not Always Need Five Parts",
    "Do not think: \"Every question must contain five paragraphs.\" No. The five parts are a guide, not a strict law.",
    "For a simple question: \"What does inflation mean?\" is perfectly fine.",
    "If you want a more specific answer: \"Explain inflation to someone who has never studied economics. Use a simple everyday example.\" Now you have added: Audience, Task, Format/style. The result will probably be more suitable.",
 
    "## The Difference Between a Weak and Strong Prompt",
    "Weak: \"Write about my business.\" The AI does not know: What type of business? Who are the customers? What should it write? What is the purpose? How long should it be?",
    "Stronger: \"I run a small grocery shop in Abuja. Write a short promotional message announcing that we now offer home delivery. The audience is local customers. Make it friendly and suitable for WhatsApp.\" Now the AI knows much more.",
 
    "## Tell AI What You Are Trying to Accomplish",
    "One of the best habits you can develop is to explain the goal. Don't only tell AI the subject. Tell it what you are trying to achieve.",
    "Instead of: \"Marketing.\" Try: \"I want to attract more customers to my small clothing business. Give me five simple marketing ideas that I can promote on WhatsApp.\" The AI now understands your objective.",
    "Remember: Subject = what you are talking about. Goal = what you want to accomplish. The goal is often more useful than simply naming the subject.",
 
    "## Tell AI Who Will Read or See the Result",
    "This is particularly important for writing. For example: \"Write an explanation of AI.\" could produce a technical explanation.",
    "But: \"Write an explanation of AI for elderly beginners. Avoid technical words and use everyday examples.\" will produce something very different. The audience changes the language.",
    "Another example — For children: \"Explain saving money to a 10-year-old using a simple example.\" For business owners: \"Explain saving money to a small-business owner using a business example.\" Same subject. Different audience. Different answer.",
 
    "## Tell AI How You Want the Answer Presented",
    "If you want a particular structure, say so. For example: \"Give me five points.\" Or: \"Put the information into a table.\" Or: \"Give me step-by-step instructions.\" Or: \"Keep it under 200 words.\" Or: \"Start with the most important point.\" Or: \"Use simple English.\" This reduces the amount of guessing the AI has to do.",
 
    "## Useful Instructions You Can Add",
    "Here are some simple instructions beginners can use.",
    "For simpler answers: \"Use simple English.\" \"Explain it as if I am a beginner.\" \"Avoid technical words.\"",
    "For more detail: \"Explain this step by step.\" \"Give me examples.\" \"Explain each point.\"",
    "For shorter answers: \"Keep it short.\" \"Give me the five most important points.\"",
    "For organization: \"Use numbered steps.\" \"Put the information into a table.\" \"Create a checklist.\"",
    "For tone: \"Make it friendly.\" \"Make it professional.\" \"Make it respectful.\" \"Make it encouraging.\"",
 
    "## Improving a Prompt After the First Answer",
    "You do not have to write the perfect prompt the first time. This is one of the most important things to learn.",
    "Suppose you ask: \"Write a speech about technology.\" The answer may be too long. You can simply say: \"Make it shorter and easier to understand.\"",
    "If it is too technical: \"Remove the technical language.\" If it is too serious: \"Make it warmer and more conversational.\" If it lacks examples: \"Add two everyday examples.\"",
    "This is called refining your prompt. Prompting is often a conversation, not a one-time command.",
 
    "## A Simple Prompt Formula",
    "For beginners, remember this formula: CONTEXT + TASK + AUDIENCE + FORMAT. Add ROLE when it is useful.",
    "For example: \"I run a small bakery. Act as a marketing assistant. Write a short advertisement for my new bread. The audience is local families. Format it as a WhatsApp message.\"",
    "You can mentally ask: What is happening? → Context. What do I want? → Task. Who is it for? → Audience. What should it look like? → Format. What kind of helper should AI be? → Role.",
 
    "## Prompting for Images",
    "The same principle applies when creating images. An image prompt should tell the AI what you want to see.",
    "For example, this is very simple: \"Create a picture of an elderly man reading a book.\" The AI has basic information. But you can make the request much more specific.",
    "For example: \"Create a realistic image of an elderly African man sitting comfortably in a bright home office, reading a book. He is smiling gently and wearing a light-blue traditional shirt. Warm natural window lighting, clean modern interior, medium shot, professional photography style.\"",
    "Now the AI has information about: Subject, Age, Appearance, Setting, Action, Clothing, Expression, Lighting, Camera framing, Visual style. That gives you much greater control.",
 
    "## Useful Image Prompt Words",
    "When creating images, you may encounter words such as: /upscale. This generally means: Improve the image's resolution or visual detail. For example: /upscale this image and improve fine details. The exact behavior depends on the AI image tool you are using.",
    "/cinematic — This generally asks for a more cinematic visual treatment. For example: /cinematic, dramatic lighting, professional film composition. It can influence things such as: Lighting, Composition, Contrast, Camera feeling, Atmosphere, Visual storytelling.",
    "Remember that these commands are tool-dependent. Not every AI image generator recognizes slash commands such as /cinematic or /upscale as actual commands. If the tool does not support them, simply describe the desired effect in normal language. For example: \"Use a cinematic look with dramatic lighting and professional film composition.\"",
 
    "## Other Useful Image Instructions",
    "You can describe the: Subject — \"A middle-aged Nigerian woman working in an office.\" Action — \"She is reviewing documents at her desk.\" Environment — \"A modern government office with large windows.\"",
    "Expression — \"She has a calm, confident expression.\" Lighting — \"Soft natural daylight.\" Camera angle — \"Eye-level camera angle.\"",
    "Composition — \"Place the woman on the right side of the frame with open space on the left.\" Style — \"Photorealistic professional photography.\" Image quality — \"Highly detailed, sharp, clean image.\"",
 
    "## Creating a Flyer With AI",
    "Flyers require more information than a simple photograph. You need to describe both the visual design and the information that must appear.",
    "For example, a weak flyer prompt would be: \"Create a church flyer.\" That gives the AI very little direction.",
    "A stronger flyer prompt could be: \"Create a professional Christian conference flyer for a church event. The title should read 'WALKING IN PURPOSE'. Include the date 'September 20, 2026', time '10:00 AM', and location 'Grace Chapel Auditorium'. Use an elegant, welcoming design with a middle-aged African pastor as the main subject. Show the pastor standing confidently with a warm expression. Use a clean modern layout, strong readable typography, balanced spacing, and a premium church-event aesthetic. Make the event title large and prominent, with the date, time, and location clearly readable.\"",
    "This is much stronger because it tells the AI: What the flyer is about, The exact text, Who the subject is, What the subject should look like, The layout, The style, What information must be easy to read.",
 
    "## Be Careful With Text in AI-Generated Flyers",
    "Image-generation systems can sometimes make mistakes when creating written text. They may: Misspell words, Change numbers, Add unwanted words, Distort letters, Make small text difficult to read.",
    "Therefore, if the flyer contains important information such as: Dates, Phone numbers, Addresses, Prices, Names, Event times — you should carefully check the final image.",
    "For important designs, you may generate the visual first and then add the exact text using a design application. Never assume that text inside an AI-generated image is correct just because it looks professional.",
 
    "## A Complete Flyer Prompt",
    "Here is an example of a more detailed flyer request. Create a premium professional event flyer for a one-day AI training workshop for elderly beginners.",
    "Event title: \"AI MADE SIMPLE\". Subtitle: \"A Practical Introduction to Artificial Intelligence\". Date: \"September 20, 2026\". Time: \"10:00 AM – 2:00 PM\". Location: \"Community Learning Centre\".",
    "Main subject: An elderly African man and an elderly African woman learning how to use a smartphone together. They should appear confident, comfortable, and happy to learn. Environment: A bright modern classroom with desks and smartphones.",
    "Visual style: Professional, warm, trustworthy, modern, realistic photography. Lighting: Soft natural lighting. Composition: Place the people prominently in the center/right portion of the flyer and leave clean space for the event text.",
    "Typography: Large, bold, highly readable heading with clear supporting text and strong visual hierarchy. Layout: Clean spacing, balanced composition, premium educational-event design. Important: Keep all supplied event information exactly as written and make the date, time, and location easy to read.",
    "Notice how much information the AI now has.",
 
    "## Image Prompt Formula",
    "For images, you can remember another simple formula: SUBJECT + ACTION + ENVIRONMENT + APPEARANCE + LIGHTING + CAMERA + COMPOSITION + STYLE.",
    "For example: Subject: Elderly African woman. Action: Teaching another person how to use a smartphone. Environment: Bright community classroom. Appearance: Smart casual clothing, friendly expression.",
    "Lighting: Soft natural daylight. Camera: Eye-level medium shot. Composition: Subjects centered with space around them. Style: Realistic professional photography. Put these together and you have a much stronger image prompt.",
 
    "## Weak Prompt vs Strong Prompt",
    "Weak: \"Make a picture of a pastor.\"",
    "Strong: \"Create a realistic professional portrait of a middle-aged African pastor standing inside a modern church. He is wearing a dark suit and has a warm, confident expression. Eye-level medium shot, soft natural lighting, clean background, realistic photography, professional composition.\"",
    "The second prompt gives the image generator much more direction.",
 
    "## Another Flyer Example — Business",
    "Basic request: \"Make a flyer for my business.\"",
    "Better request: \"Create a professional promotional flyer for a small Nigerian grocery store. The purpose is to announce same-day home delivery. Use the headline 'GROCERIES DELIVERED TO YOUR DOOR'. The audience is families and busy workers. Use a realistic image of a friendly delivery worker carrying a grocery bag. Use a clean, modern, trustworthy design. Make the headline large and easy to read, with clear space for the store's phone number and address. Use a professional commercial photography style.\"",
    "Notice that the second version explains the purpose and audience, not just the subject.",
 
    "## A Very Important Lesson: Specific Does Not Mean Complicated",
    "A common beginner mistake is thinking: \"A good prompt must be very long.\" Not necessarily. A good prompt is clear, not simply long.",
    "Compare: \"Make something nice and professional and beautiful and modern and attractive.\" This is long but vague.",
    "With: \"Create a professional flyer for a community computer-training class. Use a clean modern layout, large readable text, and a friendly image of elderly people learning on computers.\" The second is shorter but more useful. Good prompting is about useful information, not unnecessary words.",
 
    "## The \"Who, What, Why, How\" Method",
    "If remembering five categories feels difficult, use this simpler method. WHO? Who is involved or who is the audience? WHAT? What do you want AI to do? WHY? What are you trying to accomplish? HOW? How should the result look or be presented?",
    "Example: Who: Elderly beginners. What: Create a lesson about using AI. Why: Help them become comfortable using AI. How: Use simple English, everyday examples, pictures, and short exercises.",
    "This alone can dramatically improve a beginner's prompts.",
 
    "## Practical Exercise 1 — Improve a Simple Prompt",
    "Start with: \"Write something about my business.\" Improve it by adding: What business? What do you want written? Who will read it? Where will it be used?",
    "Example answer: \"I run a small phone-accessories shop. Write a short promotional message for customers announcing our new phone cases. The audience is local customers. Make it friendly and suitable for WhatsApp.\"",
 
    "## Practical Exercise 2 — Improve an Explanation Prompt",
    "Start with: \"Explain banking.\" Improve it.",
    "A good version might be: \"Explain basic banking to an elderly person who has never used online banking. Use simple English and three everyday examples. Present the information as five short points.\"",
    "Now the AI knows: Who it is explaining to, What it should explain, How simple it should be, How many examples, What format to use.",
 
    "## Practical Exercise 3 — Create an Image Prompt",
    "Start with: \"Create a picture of an elderly woman.\" Improve it by describing: What she is doing, Where she is, Her clothing, Her expression, Lighting, Camera angle, Visual style.",
    "Example: \"Create a realistic professional photograph of an elderly African woman sitting at a desk in a bright home office, learning how to use a smartphone. She is smiling and looking at the screen. She is wearing a simple elegant blue blouse. Soft natural window lighting, eye-level medium shot, clean modern environment, realistic photography.\"",
 
    "## Practical Exercise 4 — Create a Flyer Prompt",
    "Imagine you are organizing a community event. Your flyer needs: Title: AI FOR EVERYONE. Date: October 10, 2026. Time: 11:00 AM. Location: Community Hall.",
    "Write a prompt that tells the AI: What the event is, Who should attend, What image to use, What text must appear, What style to use, How the information should be arranged.",
    "The objective is not to write the perfect prompt. The objective is to practice giving clear instructions.",
 
    "## A Prompt You Can Reuse",
    "When you do not know how to begin, use this template: Context: [Tell the AI what is happening.] Role: [Tell the AI what kind of assistant would be useful.] Task: [Tell it exactly what you want done.] Audience: [Tell it who the result is for.] Format: [Tell it how you want the answer presented.]",
    "For an image: Subject: [What should appear?] Action: [What is happening?] Environment: [Where is it?] Appearance: [What should the subject look like?] Lighting: [What kind of lighting?] Camera: [What camera angle/framing?] Composition: [Where should things appear?] Style: [Photorealistic, illustration, cinematic, etc.]",
 
    "## Remember This",
    "You do not need to memorize complicated prompt-engineering terminology. Remember five questions: 1. What is happening? 2. What do I want AI to do? 3. Who is it for? 4. What should the result look like? 5. What important details must AI know?",
    "If you can answer those questions, you can already write useful prompts.",
  ],
},
 
      {
  id: "review-and-save",
  title: "Reviewing and saving your work",
  summary: "Turn a generated response into work you can stand behind.",
  duration: "12 min",
  content: [
    "## Welcome to the Lesson",
    "In the previous lesson, you learned how to write a useful request or prompt. You learned that giving AI the right: Context, Role, Task, Audience, Format — can help you get a better first response.",
    "But there is one more important step. You should not automatically use everything AI gives you.",
    "AI may produce an answer that looks professional and sounds confident but still contains: A wrong name, An incorrect date, A made-up fact, The wrong location, An inappropriate tone, A quotation that is not accurate, Information that does not apply to your situation, Details that you never asked for.",
    "That is why today's lesson is about reviewing and saving your work.",
 
    "## AI Gives You a Draft, Not a Final Answer",
    "Think of AI as an assistant helping you prepare something. For example, suppose you ask: \"Write an announcement for our church meeting.\" AI might produce a very good announcement.",
    "But it does not necessarily know: The actual meeting date, The correct meeting time, The correct church name, The correct location, Whether the meeting is for everyone or a particular group, Whether the tone is appropriate for your audience. So you need to read the response before using it.",
    "Think of the process this way: ASK → REVIEW → CORRECT → SAVE → USE. This is an important habit to develop.",
 
    "## Why Reviewing AI Work Matters",
    "AI systems are designed to generate useful responses, but they can sometimes produce incorrect information. An answer can sound convincing and still be wrong.",
    "For example, you might ask: \"Write a short announcement for our community meeting on Saturday.\" AI could write: \"The community meeting will take place on Saturday, September 12, at 10:00 AM.\"",
    "But what if your meeting is actually: Saturday, September 19, at 9:00 AM? The AI has no automatic way of knowing your real schedule unless you provide the correct information. Therefore: Never assume that something is correct simply because AI said it confidently.",
 
    "## What Should You Check?",
    "There are several things you should look for whenever you review AI-generated work.",
    "A. Names — Check every important name. For example: Person's name, Business name, Organization name, Church name, School name, Product name, Place name.",
    "Example — AI writes: \"Thank you to Mr. Johnson for organizing the event.\" You know the person's name is actually Mr. James. Change it before using the message.",
 
    "## Check Dates and Times",
    "Dates and times are especially important. AI may accidentally provide a date that you did not give it.",
    "Always check: Day, Date, Month, Year, Time, AM/PM, Time zone when relevant.",
    "Example — You ask: \"Create an invitation for our meeting.\" Before sharing it, check: Date: September 15. Time: 2:00 PM. Location: Community Hall. If any of these are wrong, correct them.",
 
    "## Check the Facts",
    "AI can sometimes provide incorrect facts. For example, you might ask: \"Explain the history of this organization.\" The response may contain information that sounds reasonable but needs verification.",
    "For important information, ask yourself: \"Do I know this is true?\" If the answer is no, verify it using a reliable source.",
    "For example: \"AI says the meeting starts at 8:00 AM.\" If the official notice says 9:00 AM, the official notice wins.",
 
    "## Check the Tone",
    "Tone means the feeling or style of the message. A message can be: Friendly, Formal, Respectful, Professional, Serious, Encouraging, Casual. The tone should match the person receiving the message.",
    "Example — You ask AI: \"Write a message to my church pastor.\" AI might produce something that sounds too casual. You could ask: \"Rewrite it in a respectful and warm tone.\" Then review it again.",
 
    "## Check Quotations Carefully",
    "This is particularly important. If AI provides a quotation, do not automatically assume that the quotation is exact.",
    "AI may: Misquote someone, Combine words from different sources, Give an incorrect quotation, Present a paraphrase as if it were an exact quotation. If the exact wording matters, verify the quotation from the original or a reliable source.",
    "Remember: A quotation mark means the exact words matter. If you only need the general idea, you can ask AI for a summary or paraphrase instead.",
 
    "## Check Whether It Fits Your Situation",
    "An AI response may be generally correct but still be unsuitable for your particular situation. For example, you ask: \"Give me advice for running a small shop.\"",
    "AI may give advice that assumes: A large business, Many employees, Expensive software, Online payments, A large advertising budget. But perhaps your shop is small and operates mainly with cash and WhatsApp. The information may not be completely wrong. It simply may not fit your situation.",
    "You can tell AI: \"Rewrite this for a small shop with three employees and a limited budget.\" This is another example of improving a prompt.",
 
    "## A Simple Review Checklist",
    "Before using AI-generated work, ask these questions. The 7-Point Check: 1. Names — Are all names correct? 2. Dates — Are the dates correct? 3. Times — Are the times correct? 4. Facts — Are important facts accurate? 5. Tone — Does the message sound appropriate? 6. Quotations — Are quoted words accurate? 7. Fit — Does this information actually apply to my situation?",
    "You can remember this as: NAME → DATE → TIME → FACT → TONE → QUOTE → FIT",
 
    "## Example: Reviewing an AI Announcement",
    "Imagine you asked: \"Write an announcement for our church meeting.\" AI produces: Church Announcement — Our monthly meeting will take place on Saturday, September 12, at 10:00 AM at Grace Community Church. Everyone is invited to attend.",
    "Before sharing it, you check your actual information. You discover: The church is called Grace Fellowship Church, The meeting is on September 19, The meeting starts at 9:00 AM. The AI response is not ready to send. You correct it.",
    "The important lesson: AI did not necessarily \"fail.\" It produced a draft. You performed the human review needed to turn that draft into useful work.",
 
    "## Ask AI to Help You Review",
    "You can also use AI as a second pair of eyes. For example, you can paste your draft and say: \"Review this announcement for spelling, grammar, unclear sentences, names, dates, and times. Do not change the facts.\" This can help you find mistakes.",
    "But remember: AI reviewing AI is not the same as independent verification. If a date or important fact matters, compare it with the actual source.",
 
    "## Saving Your Work",
    "After reviewing your work, you may want to keep it. There are several ways to save AI-generated work.",
    "On a phone, you might: Copy the text into your Notes app, Save it in a document, Send it to yourself, Save it in cloud storage, Take a screenshot for temporary reference.",
    "On a computer, you might: Copy it into Microsoft Word, Save it as a document, Save it as a PDF, Put it into a folder, Save it to cloud storage. The exact steps depend on the device and application you are using.",
 
    "## Give Your Files Clear Names",
    "A useful habit is to give your saved work a name that tells you what it is. Instead of: Document1, Use: Church_Meeting_Announcement_September_2026.",
    "Instead of: New Document, Use: Business_Flyer_Text_September_2026. Instead of: AI stuff, Use: AI_Course_Lesson_Notes. A good filename helps you find your work later.",
 
    "## Keep Different Versions When Necessary",
    "Sometimes you will edit a document several times. For example: Version 1: AI-generated draft. Version 2: Corrected draft. Version 3: Final version.",
    "You might save them as: Meeting_Announcement_Draft, Meeting_Announcement_Reviewed, Meeting_Announcement_Final. This can be useful when working on important documents.",
    "Important: Do not call something Final until you have actually reviewed it.",
 
    "## Saving Is Not the Same as Backing Up",
    "Saving your work means keeping it somewhere. Backing up means keeping another copy in case the first copy is lost.",
    "For example, you might keep an important document: On your computer, And in cloud storage. Or: On your phone, And on your computer. This gives you another copy if your device is lost, damaged, or stops working.",
 
    "## Be Careful With Sensitive Information",
    "Before saving or sharing AI-generated work, check whether it contains private information. Be careful with: Passwords, Bank information, PINs, Private identification numbers, Private addresses, Confidential business information, Other people's personal information.",
    "Do not use AI as a place to store secrets. And do not share a document simply because AI helped create it. Review the document first.",
 
    "## The \"Read Before You Share\" Rule",
    "One of the most important habits in this course is: READ BEFORE YOU SHARE. Before you send an AI-generated message, post it online, print it, or give it to someone:",
    "STOP — Read it carefully. CHECK — Look for mistakes. CORRECT — Fix anything that is wrong or unsuitable. SAVE — Keep a copy if you need one. SHARE — Only then send or publish it.",
    "Remember: AI can generate the words. You provide the judgment.",
 
    "## Improving a Response After Reviewing It",
    "You do not always need to start again. If the first response is almost correct, tell AI what needs changing.",
    "First request: \"Write an invitation for our community meeting.\" After reviewing: \"The invitation is good, but change the date to September 20, change the time to 3:00 PM, and make the tone warmer.\"",
    "This is called iterating. Iterating means: Create → Review → Improve → Review again. This connects directly to what you learned in Lesson 5 about writing useful prompts.",
 
    "## A Practical Example",
    "Imagine you own a small clothing business. You ask AI: \"Write a WhatsApp message telling customers about our new clothes.\" AI gives you a message.",
    "Before sending it, you check: Product — Did AI mention the correct products? Price — Are the prices correct? Location — Is the shop location correct? Contact — Is the phone number correct? Promotion — Is the discount actually available? Tone — Does the message sound appropriate for your customers?",
    "After checking everything, you save the corrected version. Now you have something you can confidently send.",
 
    "## Three Levels of Checking",
    "Not every AI response needs the same level of checking.",
    "Level 1 — Simple Information: Asking for recipe ideas, Brainstorming names, Asking for writing suggestions. You can usually perform a quick review.",
    "Level 2 — Important Information: Business information, Dates and schedules, Financial information, Educational information. Check the important facts carefully.",
    "Level 3 — High-Stakes Information: Medical decisions, Legal matters, Major financial decisions, Safety-related decisions. Do not rely on AI alone. Use appropriate trusted sources and qualified professionals when necessary. The more important the decision, the more carefully you should verify the information.",
 
    // Exercises + reusable prompt + closing habit summary, folded in as
    // the ending of the lesson content itself, as requested.
    "## Practical Exercise 1 — Spot the Mistakes",
    "Read this AI-generated announcement: Community Meeting — Our meeting will be held on Monday, October 5, at 7:00 PM. Everyone is invited to attend at the community hall.",
    "Now imagine that your actual information is: The meeting is on Tuesday, The date is October 6, The time is 5:00 PM. Your task: Identify the three things that need to be corrected.",
    "Answer: Monday → Tuesday. October 5 → October 6. 7:00 PM → 5:00 PM.",
 
    "## Practical Exercise 2 — Review a Message",
    "Ask AI: \"Write a short birthday message for my friend.\" Read the response carefully.",
    "Ask yourself: Is the person's name correct? Is the message appropriate? Is the tone friendly? Is anything strange or unnecessary? Would I be comfortable sending this message?",
    "If something does not feel right, ask AI to change it. For example: \"Make it shorter and warmer.\"",
 
    "## Practical Exercise 3 — Save Your Work",
    "Create a simple AI-generated message. Then: Review it. Correct any mistakes. Copy it into your Notes app or a document. Give the file a clear name.",
    "For example: Birthday_Message_James. This teaches you the complete process: CREATE → REVIEW → CORRECT → SAVE.",
 
    "## A Reusable Review Prompt",
    "You can use this prompt whenever you want AI to help check your writing: \"Review the text below for spelling, grammar, clarity, names, dates, times, tone, and anything that does not fit the situation. List anything that may need correction. Do not invent new facts.\"",
    "You can then paste your text underneath it. Remember that AI can help identify possible problems, but important facts should still be checked against reliable sources.",
 
    "## Your New AI Habit",
    "You have now learned an important difference. Beginner approach: AI says it → I use it. Better approach: AI says it → I read it → I check it → I correct it → I use it.",
    "The second approach is safer and more reliable.",
  ],
  quiz: [
    {
      id: "review-and-save-q1",
      prompt: "Should you automatically trust everything AI writes?",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" },
      ],
      correctOptionId: "b",
      explanation: "AI can sound convincing and still be wrong -- always review before you use or share its work.",
    },
    {
      id: "review-and-save-q2",
      prompt: "Which information should you check carefully?",
      options: [
        { id: "a", text: "Names and dates" },
        { id: "b", text: "Important facts" },
        { id: "c", text: "Times" },
        { id: "d", text: "All of the above" },
      ],
      correctOptionId: "d",
      explanation: "The lesson's 7-point check covers names, dates, times, facts, tone, quotations, and fit -- all of it matters.",
    },
    {
      id: "review-and-save-q3",
      prompt: "What should you do before sharing an AI-generated announcement?",
      options: [
        { id: "a", text: "Share it immediately" },
        { id: "b", text: "Read and review it" },
        { id: "c", text: "Delete it" },
        { id: "d", text: "Ask someone else to use it" },
      ],
      correctOptionId: "b",
      explanation: "\"Read before you share\" is the core habit this lesson teaches.",
    },
    {
      id: "review-and-save-q4",
      prompt: "What does it mean to iterate?",
      options: [
        { id: "a", text: "Stop using AI" },
        { id: "b", text: "Create something once and never change it" },
        { id: "c", text: "Review and improve the result" },
        { id: "d", text: "Delete your work" },
      ],
      correctOptionId: "c",
      explanation: "Iterating means Create → Review → Improve → Review again, not settling for the first draft.",
    },
    {
      id: "review-and-save-q5",
      prompt: "Why should important information be verified?",
      options: [
        { id: "a", text: "AI can sometimes make mistakes" },
        { id: "b", text: "AI never understands words" },
        { id: "c", text: "AI cannot write" },
        { id: "d", text: "AI only works on phones" },
      ],
      correctOptionId: "a",
      explanation: "AI can produce an answer that sounds convincing while still being incorrect -- verification protects you from that.",
    },
  ],
},
 
    ],
  },
  {
    id: "prompt-engineering",
    number: 3,
    title: "The Art of Asking — Prompt Engineering",
    strapline: "Better questions create better starting points.",
    whyItMatters: "The quality of an AI response is shaped by the quality of the brief. Prompting gives learners a repeatable way to ask for useful, focused help.",
    outcomes: ["Use a reusable prompt structure.", "Improve a vague prompt through iteration.", "Ask for alternatives, checks, and audience-appropriate language."],
    exerciseTitle: "Rewrite one ordinary request",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
      {
  id: "prompt-anatomy",
  title: "Anatomy of a strong prompt",
  summary: "Learn the role, context, task, audience, tone, format, and constraints pattern.",
  duration: "18 min",
  content: [
    "## Welcome to Module 03",
    "In Module 01, you learned the basics of AI. You learned: What AI is, Where AI appears in everyday life, What AI can and cannot do, How to start using an AI assistant safely, How to write a useful request, How to review and save AI-generated work.",
    "You are now ready to go one step further. This module is about engineering better prompts. That does not mean you need to become a computer programmer. You do not need to understand complicated mathematics or computer code.",
    "Prompt engineering simply means learning how to give an AI system better instructions so that it can produce a more useful result.",
 
    "## What Is a Prompt?",
    "A prompt is the instruction, question, or information you give to an AI system. For example: \"Write a birthday message for my daughter.\" That is a prompt.",
    "You could also say: \"Explain how to use online banking.\" That is also a prompt. Or: \"Create a flyer for a one-day beginner AI workshop.\" Again, that is a prompt.",
    "The important question is: Why do some prompts produce better results than others? Because the AI has more information about what you actually want.",
 
    "## Think of a Prompt as Giving Someone a Job",
    "Imagine you ask a person: \"Help me with my business.\" They might ask: What kind of business? What do you need help with? Who are your customers? What problem are you trying to solve? What kind of answer do you want?",
    "AI works similarly. If your instruction is too general, the system has to make assumptions. Some of those assumptions may be wrong.",
    "Now compare: \"I run a small clothing shop in Nigeria. I want to attract more customers through WhatsApp. Give me five simple marketing ideas that require little money. Present the ideas as a numbered list.\"",
    "The second prompt gives much more direction. It tells the AI: The situation, The task, The audience or target, The limitation, The desired format. That is the beginning of prompt engineering.",
 
    "## The Seven Parts of a Strong Prompt",
    "A strong prompt can be built using seven useful components: Role — Who should the AI act as? Context — What does the AI need to know? Task — What exactly should it do? Audience — Who is the result for? Tone — How should it sound? Format — What should the answer look like? Constraints — What rules or limits should it follow?",
    "You can remember the pattern as: ROLE → CONTEXT → TASK → AUDIENCE → TONE → FORMAT → CONSTRAINTS",
    "Not every prompt needs all seven. But learning all seven gives you a powerful framework for building precise instructions.",
 
    "## Part One — Role",
    "A role tells the AI what perspective or type of expertise you want it to use. For example: \"Act as a primary school teacher.\" Or: \"Act as a small-business marketing adviser.\" Or: \"Act as a professional copywriter.\" Or: \"Act as a patient computer instructor teaching a beginner.\" The role gives the AI a direction for how to approach the task.",
    "Why does role matter? Consider these two prompts. Prompt A: \"Explain budgeting.\" Prompt B: \"Act as a patient financial educator. Explain basic budgeting to someone who has never created a budget before.\"",
    "Prompt B gives the AI a clearer perspective. It tells the system: Who are you supposed to be? and How should you approach the explanation?",
 
    "## Role Does Not Give AI Real-World Credentials",
    "This is important. If you say: \"Act as a doctor.\" you are not turning the AI into an actual doctor. You are simply asking the system to respond from a particular professional perspective.",
    "The role is an instruction about style and approach, not proof of qualifications. For important matters, especially medical, legal, financial, or safety-related decisions, professional verification may still be necessary.",
 
    "## When Should You Use a Role?",
    "A role is particularly useful when you want a specific type of response. For example: Teaching — \"Act as a patient teacher...\" Business — \"Act as a small-business adviser...\" Writing — \"Act as a professional editor...\" Marketing — \"Act as a marketing consultant...\" Design — \"Act as a professional flyer designer...\" Technology — \"Act as a beginner-friendly computer instructor...\"",
 
    "## Part Two — Context",
    "Context is the background information the AI needs to understand your situation. Context answers: \"What does the AI need to know before doing the task?\"",
    "For example: \"I run a small grocery shop with three employees.\" That is context. Another example: \"The audience is made up of elderly people who are new to smartphones.\" That is context. Another: \"I am preparing a short announcement for a community meeting.\" Again, context.",
 
    "## Why Context Matters",
    "Look at this prompt: \"Write a marketing message.\" The AI does not know: What is being marketed? Who are the customers? Where will the message appear? What makes the product useful? Is it a formal or casual message?",
    "Now add context: \"I run a small clothing shop. Most of my customers are adults in my local community. I want to promote new arrivals through WhatsApp.\" Now the AI has a much better understanding of the situation.",
 
    "## Context Is Not Your Entire Life Story",
    "A common beginner mistake is providing too much unnecessary information. Good context is: Relevant + useful + concise. You do not need to tell the AI everything about yourself.",
    "For example, if you want help writing a restaurant advertisement, the AI probably does not need to know what your favorite football team is. Give it information that affects the task. Good context answers: \"What information would change the answer?\"",
 
    "## Part Three — Task",
    "The task is what you want the AI to do. This is often the most important part of the prompt.",
    "Examples: Write, Explain, Summarize, Compare, Rewrite, Translate, Organize, Brainstorm, Create, Analyze, Extract, Plan.",
 
    "## Weak Task vs Clear Task",
    "Weak: \"Help me with my business.\" Better: \"Give me five ways to attract new customers.\" Even better: \"Give me five low-cost ways to attract new customers to my clothing shop through WhatsApp.\"",
    "The final version tells the AI exactly what action to perform.",
 
    "## Use Action Words",
    "When engineering prompts, strong action words are useful. Instead of: \"Business ideas.\" Try: \"Generate five business ideas.\"",
    "Instead of: \"My letter.\" Try: \"Rewrite this letter in a professional and respectful tone.\" Instead of: \"About budgeting.\" Try: \"Explain basic budgeting using three simple examples.\" Instead of: \"This document.\" Try: \"Summarize this document into five key points.\"",
 
    "## Part Four — Audience",
    "The audience is the person or group who will receive, read, watch, or use the result. This is extremely important. The same information may need to be presented differently to different people.",
    "For example: Audience: Children — \"Explain computers using very simple language and examples.\" Audience: University students — \"Explain the concept using academic terminology and practical examples.\" Audience: Elderly beginners — \"Use simple English, explain unfamiliar terms, and provide step-by-step instructions.\"",
    "Same subject. Different audience. Different answer.",
 
    "## Always Ask: \"Who Is This For?\"",
    "When creating a prompt, think: Who will use or read the result? It could be: Me, My customers, My students, My employees, Elderly learners, Children, Business owners, Church members, A manager, The general public.",
    "The clearer the audience, the easier it is for AI to adjust the response.",
 
    "## Part Five — Tone",
    "Tone is how the communication should feel. For example: Friendly, Warm, Respectful, Professional, Formal, Encouraging, Simple, Serious, Persuasive, Conversational.",
 
    "## Same Message, Different Tone",
    "Imagine you need to tell customers about a new product. Professional tone: \"We are pleased to announce the arrival of our latest collection.\" Friendly tone: \"Our new collection has arrived, and we can't wait for you to see it!\" Formal tone: \"We are pleased to inform our valued customers that the new collection is now available.\"",
    "The basic information is similar. The tone changes the feeling.",
 
    "## Tone Is Especially Important for Messages",
    "Suppose you want to apologize to someone. Instead of: \"Write an apology.\" Try: \"Write a short, sincere apology to a friend. Keep the tone warm and respectful. Do not make excuses.\" Now the AI knows what emotional style you want.",
 
    "## Part Six — Format",
    "Format tells AI how you want the answer organized or presented. This is one of the easiest ways to improve a prompt.",
    "You can ask for: Numbered steps, Bullet points, A table, A checklist, A short paragraph, An email, A script, A lesson, A summary, Frequently asked questions, A comparison.",
 
    "## Why Format Matters",
    "Suppose you ask: \"Give me tips for using WhatsApp.\" AI might give you several paragraphs. But perhaps you want something easier to read.",
    "Try: \"Give me 10 WhatsApp tips as a numbered list. Keep each tip to one or two sentences.\" Now the output has a clear structure.",
 
    "## You Can Specify Length",
    "Format can also include length. For example: \"Write a 100-word introduction.\" Or: \"Give me five short bullet points.\" Or: \"Explain this in three simple paragraphs.\" Or: \"Create a one-minute speech.\" This helps prevent an answer from becoming unnecessarily long.",
 
    "## Part Seven — Constraints",
    "A constraint is a rule or limit the AI should follow. Think of constraints as: \"Here are the boundaries.\"",
    "Examples: Use simple English, Keep it under 200 words, Do not use technical terms, Use only five points, Do not change the meaning, Do not invent information, Use a respectful tone, Write for beginners, Include examples, Do not use emojis, Use Nigerian English where appropriate, Keep the instructions suitable for a smartphone user.",
 
    "## Why Constraints Matter",
    "Without constraints: \"Explain artificial intelligence.\" The answer could be extremely technical.",
    "With constraints: \"Explain artificial intelligence to an elderly beginner. Use simple English, avoid technical jargon, and give three everyday examples.\" Now the AI has boundaries.",
 
    "## Constraints Are Not Only About Length",
    "Many people think a constraint simply means: \"Make it short.\" But constraints can control many things.",
    "Content constraint: \"Use only the information I provide.\" Style constraint: \"Use simple, friendly language.\" Accuracy constraint: \"Do not invent names, dates, or statistics.\"",
    "Structure constraint: \"Use five numbered points.\" Audience constraint: \"Write for someone who has never used AI.\" Design constraint: \"Keep the main title highly visible.\"",
 
    "## Putting the Seven Parts Together",
    "Now let's build a complete prompt. Situation: You want AI to create a lesson for elderly beginners.",
    "Role: \"Act as a patient adult-learning instructor.\" Context: \"The learners are elderly beginners who have little experience using AI.\" Task: \"Create a lesson explaining how to write useful prompts.\"",
    "Audience: \"Write directly for elderly learners.\" Tone: \"Use a friendly, respectful, encouraging tone.\" Format: \"Use headings, simple examples, exercises, and a short knowledge check.\" Constraints: \"Use simple English, explain technical terms, avoid unnecessary jargon, and keep each example practical.\"",
    "Now combine everything.",
 
    "## The Complete Strong Prompt",
    "\"Act as a patient adult-learning instructor. I am creating an AI course for elderly beginners who have little experience using AI. Create a lesson explaining how to write useful prompts. Write directly for elderly learners using a friendly, respectful, encouraging tone. Organize the lesson with clear headings, simple examples, practical exercises, and a short knowledge check. Use simple English, explain technical terms when they appear, avoid unnecessary jargon, and make the examples relevant to everyday life.\"",
    "Notice how much direction the AI now has. This is no longer just a question. It is a work brief.",
 
    "## The Work Brief Mental Model",
    "This is one of the most important ideas in prompt engineering. Instead of thinking: \"What question should I ask AI?\" start thinking: \"What brief would I give a person if I hired them to do this job?\"",
    "Imagine you hired someone to design a flyer. You probably would not say: \"Make a flyer.\" You would explain: What the flyer is for, Who it is for, What information must appear, What style you want, Where it will be used, What size or format you need, What information must not be changed.",
    "Your AI prompt should work the same way.",
 
    "## Prompt Engineering Is About Reducing Guesswork",
    "AI has to interpret your request. Every time you leave something important unstated, the system may have to make an assumption.",
    "For example: \"Create a flyer.\" Many possibilities exist. A flyer for: A church, A school, A business, A birthday, A conference, A restaurant, A charity event.",
    "The more relevant information you provide, the less guessing is required. Good prompt engineering reduces unnecessary guesswork.",
 
    "## Weak Prompt → Strong Prompt: Business",
    "Weak: \"Help my business.\" Better: \"Give me five ways to get more customers.\" Strong: \"Act as a small-business marketing adviser. I run a small clothing shop and want to attract more local customers through WhatsApp. Give me five low-cost marketing ideas. Use simple language and present them as numbered steps.\"",
 
    "## Example: Learning",
    "Weak: \"Explain Excel.\" Better: \"Explain how to use Excel.\" Strong: \"Act as a patient computer teacher. Explain how to create a simple sales table in Microsoft Excel for a beginner who has never used spreadsheets. Give step-by-step instructions and use a small shop as the example. Avoid technical jargon.\"",
 
    "## Example: Writing a Message",
    "Weak: \"Write a message.\" Strong: \"Write a short WhatsApp message inviting customers to our new product launch. The audience is existing customers. Use a friendly and professional tone. Keep it under 80 words and include a clear call to action.\"",
    "Notice what happened. The prompt answered: What? Write a message. For whom? Existing customers. Why? Product launch. How should it sound? Friendly and professional. How long? Under 80 words. What format? WhatsApp message.",
 
    "## Example: Summarizing a Document",
    "Weak: \"Summarize this.\" Strong: \"Summarize this document for a busy business owner. Identify the five most important points, explain any difficult terms in simple English, and present the result as a numbered list. Do not add information that is not in the document.\" This is a much stronger instruction.",
 
    "## Example: Planning",
    "Weak: \"Plan my week.\" Strong: \"Help me organize my work week. I need to manage customer calls, shop inventory, accounting, and staff meetings. Create a simple Monday-to-Friday schedule. Put the most important tasks first and leave some flexible time for unexpected work.\"",
 
    "## Prompt Engineering for Images",
    "The same principles apply when creating images. An image prompt is also an instruction. Instead of: \"Create a church flyer.\" you can describe the desired visual result.",
    "A strong image prompt can specify: Subject, People, Clothing, Action, Environment, Background, Lighting, Composition, Camera angle, Visual style, Colors, Text, Layout, Aspect ratio, Quality instructions.",
 
    "## Example: Simple Image Prompt",
    "Weak: \"Create an image of an elderly teacher.\" Better: \"Create a realistic image of an elderly male teacher standing in a classroom.\"",
    "Stronger: \"Create a realistic promotional image of an elderly male teacher standing confidently in a bright modern classroom, explaining something to adult learners. Show a warm and welcoming expression, natural classroom lighting, medium camera shot, professional educational photography, clean composition, realistic skin texture, and a premium trustworthy appearance.\"",
    "The additional information gives the image generator more direction.",
 
    "## Using Image Instructions Such as /cinematic",
    "Some AI image tools support special commands or prompt modifiers. For example: /cinematic — may be used to request a more cinematic visual treatment. You may also encounter: /upscale — which generally refers to increasing image resolution or improving visible detail.",
    "However, these commands are tool-dependent. One AI image generator may recognize a command while another may ignore it. Therefore, do not assume that every AI tool understands every slash command.",
 
    "## Building a Strong Image Prompt",
    "For image generation, you can think: SUBJECT + ACTION + ENVIRONMENT + APPEARANCE + LIGHTING + CAMERA + COMPOSITION + STYLE",
    "For example: \"A middle-aged female civil servant standing confidently in a modern government office, wearing professional office clothing, reviewing documents at a desk, warm natural window lighting, medium camera shot, clean balanced composition, realistic professional photography, premium corporate visual style, high detail.\" Each part contributes information.",
 
    "## Engineering a Flyer Prompt",
    "Flyers require even more planning because they combine visual design and written information. A strong flyer prompt should tell the image generator: Event — What is happening? Audience — Who is it for? Main message — What should people notice first?",
    "Details — What date, time, location, or contact information must appear? Visual subject — What person, object, or scene should be shown? Composition — Where should the hero image and text areas appear?",
    "Style — Modern? Professional? Elegant? Educational? Corporate? Colors — What color direction should the design follow? Typography — Large readable headline? Bold supporting text?",
 
    "## Example Flyer Prompt",
    "Weak: \"Make a flyer for an AI course.\"",
    "Strong: \"Create a premium educational flyer for a beginner AI training workshop designed for elderly learners. Main headline: 'AI MADE SIMPLE'. Include the supporting message: 'A practical introduction to using AI with confidence'. Show an elderly African teacher explaining AI to a small group of older adult learners in a bright modern classroom. Use a warm, trustworthy, professional visual style, clear hierarchy, large highly readable typography, balanced spacing, realistic photography, and a clean modern layout. Include clearly separated areas for the date, time, venue, and registration information. Make the main headline the strongest visual element. Use a professional educational design suitable for printing and social media.\"",
    "This is much closer to a design brief.",
 
    "## An Important Warning About Text in AI Images",
    "Image generators can sometimes produce incorrect or misspelled text. For example, you may request: \"AI MADE SIMPLE\" and receive something slightly different.",
    "Therefore, if a flyer contains important information such as: Names, Dates, Prices, Phone numbers, Addresses, Event titles — always inspect the generated image carefully.",
    "For professional work, you may generate the visual design first and add the final text using a design application. This is especially important for: Phone numbers + dates + prices + names. One wrong character can make a flyer unusable.",
 
    "## You Do Not Need All Seven Parts Every Time",
    "This is important for beginners. Do not think: \"Every prompt must contain seven paragraphs.\" No. The seven parts are a framework, not a rigid form.",
    "For a simple question: \"What is photosynthesis?\" You probably do not need a role, audience, tone, format, and constraints.",
    "But if you ask: \"Explain photosynthesis to my 10-year-old grandson using simple language and two everyday examples.\" Now audience and format/style become useful.",
 
    "## Match Prompt Detail to Task Complexity",
    "A simple task needs less instruction. A complicated task needs more instruction.",
    "Simple task: \"Translate this sentence into French.\" Medium task: \"Rewrite this customer message in a polite and professional tone.\"",
    "Complex task: \"Create a three-week marketing plan for my small clothing business, targeting local customers through WhatsApp and Facebook, using a limited budget. Present it as a weekly table with daily activities and example messages.\"",
    "The more complicated the task, the more useful a detailed prompt becomes.",
 
    "## Do Not Make the Prompt Complicated Just to Sound Smart",
    "A strong prompt is not necessarily a long prompt. Compare: \"I hereby request that you formulate a comprehensive strategic framework...\" with: \"Create a simple three-month marketing plan for my small shop.\"",
    "The second is clearer. Good prompt engineering is not about using impressive words. It is about providing useful information. Clear beats complicated.",
 
    "## Use Specific Information Instead of Vague Words",
    "Be careful with words such as: Good, Nice, Professional, Better, Interesting, Beautiful, Simple. These words can mean different things to different people.",
    "Instead of: \"Make it professional.\" Try: \"Use a clean business tone, short paragraphs, clear headings, and no slang.\" Instead of: \"Make the image beautiful.\" Try: \"Use balanced composition, natural lighting, realistic photography, and a clean premium visual style.\"",
    "Specific instructions are easier for AI to follow.",
 
    "## One Prompt Can Contain Several Instructions",
    "You can give multiple instructions in one prompt. For example: \"Explain online banking to a beginner. Use simple English. Give five numbered steps. Include one everyday example. End with three safety tips.\"",
    "That is perfectly acceptable. You are essentially giving AI a small task list.",
 
    "## Separate Important Instructions Clearly",
    "When a prompt becomes longer, organize it. For example: Role: Act as a patient computer instructor. Context: The learner is an elderly beginner. Task: Explain how to send an email attachment.",
    "Audience: Someone with little computer experience. Tone: Friendly and encouraging. Format: Numbered steps. Constraints: Use simple English and explain unfamiliar terms.",
    "This structure makes your instructions easier to create, review, and modify.",
 
    "## A Reusable Prompt Engineering Template",
    "You can use this template whenever you have a more complicated task: ROLE: Act as a __________________________. CONTEXT: Here is the situation: __________________________. TASK: I want you to __________________________.",
    "AUDIENCE: The result is for __________________________. TONE: Make it __________________________. FORMAT: Present it as __________________________. CONSTRAINTS: Please __________________________. Do not __________________________.",
    "You do not have to fill every section. Use the sections that actually matter.",
 
    "## The Short Version",
    "When you are in a hurry, remember: WHO + WHAT + WHY + FOR WHOM + HOW + RULES.",
    "WHO — What role should AI take? WHAT — What should it do? WHY — Why do you need it? FOR WHOM — Who will use or read it? HOW — What tone and format do you want? RULES — What limits or requirements must it follow?",
    "This is an easier way to remember the seven-part framework.",
 
    "## Prompt Engineering Is a Conversation",
    "You do not always have to create the perfect prompt on your first attempt. You can improve the result through follow-up instructions.",
    "First prompt: \"Write a product description for my clothing shop.\" AI responds. You review it. Then: \"Make it shorter.\" Then: \"Make it more persuasive.\" Then: \"Write it for WhatsApp customers.\" Then: \"Add a clear call to action.\"",
    "This is prompt engineering too.",
 
    "## The Improve Loop",
    "Think of prompting as a cycle: PROMPT ↓ AI RESPONSE ↓ REVIEW ↓ IDENTIFY WHAT IS MISSING ↓ REFINE PROMPT ↓ NEW RESPONSE ↓ REVIEW AGAIN.",
    "This is often better than trying to write a huge perfect prompt from the beginning.",
 
    "## A Powerful Question to Ask Yourself",
    "Whenever AI gives you a result that is not quite right, do not immediately think: \"AI is bad.\" Instead ask: \"What information did I fail to give it?\"",
    "Maybe you did not specify: The audience, The desired tone, The length, The format, The location, The purpose, The important facts, The restrictions.",
    "Finding the missing information helps you write a better second prompt.",
 
    "## Common Prompt Engineering Mistakes",
    "Mistake 1 — Being Too Vague: \"Write something good.\" Better: \"Write a short professional introduction for my small business.\"",
    "Mistake 2 — Giving No Audience: \"Explain investing.\" Better: \"Explain basic investing to someone who has never studied finance.\"",
    "Mistake 3 — Giving No Format: \"Give me marketing ideas.\" Better: \"Give me 10 marketing ideas as a numbered list.\"",
    "Mistake 4 — Giving Conflicting Instructions: For example: \"Make it extremely detailed but keep it under 20 words.\" The instructions conflict. Be realistic about what you are asking for.",
    "Mistake 5 — Giving Too Many Unnecessary Details: Longer does not automatically mean better. Only include information that helps the AI complete the task.",
    "Mistake 6 — Forgetting Important Constraints: If you need simple English, say so. If you need five points, say so. If the AI must not invent facts, say so. If you need a specific format, say so.",
 
    "## A Simple Prompt Quality Test",
    "Before pressing Send, ask yourself five questions: 1. Is my task clear? Does AI know exactly what I want it to do? 2. Does it have enough context? Have I provided the important background?",
    "3. Does it know who the result is for? Have I identified the audience? 4. Have I explained what the result should look or sound like? Have I specified tone and format? 5. Have I included important limits? Have I stated any rules or restrictions?",
    "If the answer is yes to most of these questions, you probably have a strong starting prompt.",
  ],
  quiz: [
    {
      id: "prompt-anatomy-q1",
      prompt: "What is a prompt?",
      options: [
        { id: "a", text: "A computer password" },
        { id: "b", text: "An instruction or request given to an AI system" },
        { id: "c", text: "A type of smartphone" },
        { id: "d", text: "An internet connection" },
      ],
      correctOptionId: "b",
      explanation: "A prompt is simply the instruction, question, or information you give an AI system.",
    },
    {
      id: "prompt-anatomy-q2",
      prompt: "What does context provide?",
      options: [
        { id: "a", text: "Background information about the situation" },
        { id: "b", text: "Your password" },
        { id: "c", text: "The AI's electricity" },
        { id: "d", text: "A computer screen" },
      ],
      correctOptionId: "a",
      explanation: "Context answers \"what does the AI need to know before doing the task?\" -- it's background, not credentials or hardware.",
    },
    {
      id: "prompt-anatomy-q3",
      prompt: "What does the task tell AI?",
      options: [
        { id: "a", text: "Who owns the computer" },
        { id: "b", text: "What you want it to do" },
        { id: "c", text: "What your password is" },
        { id: "d", text: "Where the AI was created" },
      ],
      correctOptionId: "b",
      explanation: "The task is the actual job you want the AI to perform -- often the most important part of the prompt.",
    },
    {
      id: "prompt-anatomy-q4",
      prompt: "Why is audience important?",
      options: [
        { id: "a", text: "It tells AI who the result is intended for" },
        { id: "b", text: "It makes your internet faster" },
        { id: "c", text: "It changes your password" },
        { id: "d", text: "It turns AI off" },
      ],
      correctOptionId: "a",
      explanation: "The same information may need to be presented very differently depending on who will read or use it.",
    },
    {
      id: "prompt-anatomy-q5",
      prompt: "What does format describe?",
      options: [
        { id: "a", text: "How the answer should be organized or presented" },
        { id: "b", text: "The AI's age" },
        { id: "c", text: "Your internet provider" },
        { id: "d", text: "The computer's brand" },
      ],
      correctOptionId: "a",
      explanation: "Format tells AI the shape you want the answer to take -- a list, a table, an email, and so on.",
    },
    {
      id: "prompt-anatomy-q6",
      prompt: "What is a constraint?",
      options: [
        { id: "a", text: "A rule or limit the AI should follow" },
        { id: "b", text: "A type of computer virus" },
        { id: "c", text: "A password" },
        { id: "d", text: "A search engine" },
      ],
      correctOptionId: "a",
      explanation: "Constraints are the boundaries you set -- length, tone, accuracy, structure, and so on.",
    },
  ],
},
 
      {
  id: "iterate",
  title: "Prompt, review, refine",
  summary: "Treat prompting as a conversation and improve responses in small steps.",
  duration: "14 min",
  content: [
    "## Welcome to the Lesson",
    "In the previous lesson, you learned the anatomy of a strong prompt. You learned how to use: Role, Context, Task, Audience, Tone, Format, Constraints — to give AI a clear work brief.",
    "Now you will learn something equally important: Your first prompt does not have to be perfect. Even a carefully written prompt may produce a response that is: Too long, Too short, Too complicated, Too formal, Missing important information, Organized incorrectly, Not suitable for the intended audience, Different from what you imagined.",
    "This does not mean you have to throw everything away. Instead, you can refine the response.",
 
    "## What Does \"Iterate\" Mean?",
    "Iterate simply means: Do something, review the result, make an improvement, and try again. You already do this in everyday life.",
    "Imagine cooking a meal. You taste it and think: \"It needs a little more salt.\" You adjust it. You taste it again. Maybe you decide: \"Now it needs more spice.\" You adjust it again. You are iterating.",
    "Prompting works in a similar way. With AI: Prompt ↓ AI response ↓ Review ↓ Identify what needs improvement ↓ Refine your instruction ↓ AI produces an improved response ↓ Review again. That is iteration.",
 
    "## Prompting Is a Conversation",
    "A common beginner expectation is: \"I must write one perfect prompt and get the perfect answer.\" That is not necessary. Instead, think of AI prompting as a conversation.",
    "You can start with a reasonable request. Then look at what AI gives you. Then tell it what to change.",
    "For example: You: \"Write a message inviting customers to my shop.\" AI: Produces a long message. You: \"Make it shorter.\" AI produces a shorter version. You: \"Make the tone friendlier.\" AI adjusts the tone. You: \"Add that we have a weekend discount.\" AI adds the information.",
    "You have just engineered the result through several small steps.",
 
    "## The Three-Step Method",
    "The easiest way to remember this lesson is: PROMPT → REVIEW → REFINE.",
    "Step 1 — PROMPT: Tell AI what you want. Step 2 — REVIEW: Read the response carefully. Ask: \"What is good?\" and: \"What needs to change?\" Step 3 — REFINE: Give AI a clear follow-up instruction. Then review the new response. Repeat when necessary.",
 
    "## Step One — Prompt",
    "Start with a clear request. For example: \"Write a short announcement for our community meeting.\" This gives AI a task.",
    "But perhaps it does not provide enough detail. AI may make assumptions about: The audience, The tone, The length, The purpose, The information to include. That is okay. You now have a first response to evaluate.",
 
    "## Step Two — Review",
    "When AI responds, do not immediately press send, copy, or share. Read the response. Look for:",
    "Accuracy — Are the facts correct? Relevance — Did AI answer your actual request? Completeness — Is anything important missing? Tone — Does it sound the way you want?",
    "Length — Is it too long or too short? Format — Is it organized in a useful way? Audience — Does it sound appropriate for the intended reader?",
    "This connects directly to what you learned in Module 01 about reviewing AI work.",
 
    "## Step Three — Refine",
    "After reviewing the response, tell AI exactly what needs to change. For example: \"Make it shorter.\" Or: \"Use simpler English.\" Or: \"Make the tone more respectful.\" Or: \"Add the meeting location.\" Or: \"Turn the paragraphs into a numbered list.\" Or: \"Keep the same information but make it suitable for WhatsApp.\"",
    "These are refinement instructions.",
 
    "## Do Not Start From Zero Every Time",
    "Suppose AI gives you a response that is 80% correct. You do not need to write the entire prompt again.",
    "You can simply say: \"Keep the same message, but make it shorter.\" Then: \"Now make it more friendly.\" Then: \"Add a clear call to action.\"",
    "This saves time. It also allows you to gradually shape the response.",
 
    "## Example: Writing a Business Message",
    "Let's follow the entire process. First Prompt: \"Write a promotional message for my clothing shop.\" AI creates a message. You review it. You notice that it is too formal.",
    "Refinement 1: \"Make the message friendly and conversational.\" AI produces another version. You review it again. Now you notice that it is too long.",
    "Refinement 2: \"Shorten it to about 60 words.\" AI produces another version. You review it. Now you want customers to know what to do next.",
    "Refinement 3: \"Add a simple call to action asking customers to message us on WhatsApp.\" Now the message is much closer to what you wanted.",
 
    "## Notice What Happened",
    "You did not create one enormous prompt. You used several small instructions. The process was: Write → Review → Shorten → Review → Change tone → Review → Add information → Review. This is prompt iteration.",
 
    "## Refinement Is More Than \"Make It Better\"",
    "One of the weakest follow-up prompts is: \"Make it better.\" Why? Because AI does not know exactly what \"better\" means to you.",
    "Better could mean: Shorter, More detailed, More professional, Friendlier, Simpler, More persuasive, More emotional, More formal, Better organized.",
    "Instead of: \"Make it better.\" say what you want improved. For example: \"Make it easier for an elderly beginner to understand.\" or: \"Make it more professional but keep it friendly.\" or: \"Make the first paragraph shorter and put the three main benefits into bullet points.\"",
    "Specific refinement produces more predictable results.",
 
    "## Identify the Problem Before Refining",
    "Before giving a follow-up instruction, ask: \"What exactly is wrong with this response?\"",
    "Problem: The answer is too technical. Refinement: \"Rewrite it using simple English and explain technical terms.\"",
    "Problem: The answer is too long. Refinement: \"Reduce this to five key points.\"",
    "Problem: The tone is too formal. Refinement: \"Make it warm and conversational.\"",
    "Problem: The response does not include examples. Refinement: \"Add two simple everyday examples.\"",
    "Problem: The answer is not organized. Refinement: \"Turn this into a numbered step-by-step guide.\"",
 
    "## The \"What Is Missing?\" Method",
    "Sometimes the response is not wrong. It is simply incomplete. Ask yourself: \"What information or instruction is missing?\"",
    "For example, you ask: \"Explain online banking.\" AI gives a general explanation. You realize you need practical instructions.",
    "Instead of starting again, say: \"Add a simple example showing how someone might check their account balance.\" Now the response becomes more useful.",
 
    "## The \"What Should Change?\" Method",
    "Another useful question is: \"What specifically should change?\" Maybe everything is good except one thing.",
    "For example: \"Keep the explanation exactly as it is, but replace the technical terms with simpler words.\" This is a precise refinement. You do not need to change everything just because one part is wrong.",
 
    "## You Can Refine One Part at a Time",
    "Suppose AI creates a lesson. You might want to change: The introduction, The examples, The tone, The length, The format. Do not necessarily change all five at once. You can work through them.",
    "Step 1: \"Make the introduction shorter.\" Step 2: \"Add two everyday examples.\" Step 3: \"Use a more encouraging tone.\" Step 4: \"Reduce the lesson to approximately 1,000 words.\" Step 5: \"Turn the key points into a numbered list.\"",
    "This makes the process easier to control.",
 
    "## Refining Does Not Mean Repeating Yourself",
    "A refinement should add useful direction. Weak: \"Again.\" Better: \"Try again using simpler English.\" Even better: \"Rewrite the explanation for an elderly beginner. Use simple English, short sentences, and two everyday examples.\"",
    "The more specific your refinement, the easier it is for AI to understand what you want changed.",
 
    "## A Useful Refinement Formula",
    "When correcting an AI response, use: KEEP + CHANGE + ADD + REMOVE. You can use one or several of these.",
    "KEEP — Tell AI what should remain. \"Keep the same basic message.\" CHANGE — Tell AI what should be different. \"Change the tone to friendly and respectful.\"",
    "ADD — Tell AI what is missing. \"Add three practical examples.\" REMOVE — Tell AI what should disappear. \"Remove unnecessary technical terms.\"",
 
    "## Example Using KEEP + CHANGE + ADD + REMOVE",
    "Suppose AI writes a business announcement. You could say: \"Keep the main information. Change the tone to friendly and professional. Add our WhatsApp contact instruction. Remove the long introduction.\"",
    "That is an excellent refinement prompt. It tells AI exactly what to preserve and what to modify.",
 
    "## Refining a Lesson",
    "Imagine you ask: \"Explain artificial intelligence to beginners.\" AI gives you a technical answer. You can refine it: \"Keep the main explanation, but rewrite it for elderly beginners. Use simple English, explain difficult terms, and include three everyday examples.\"",
    "Notice that you did not need to start over. You simply improved the instruction.",
 
    "## Refining an Image Prompt",
    "Iteration is also useful for image generation. Suppose your first prompt is: \"Create a realistic image of an elderly teacher in a classroom.\" The generated image may be good, but you want: A wider camera shot, More students, Brighter lighting, A more professional environment.",
    "You can refine the image instruction: \"Keep the teacher and classroom concept, but use a wider camera shot, show six adult learners, add brighter natural window lighting, and make the classroom look modern and professional.\" This is still iteration.",
 
    "## Refining a Flyer Prompt",
    "Suppose you generate a flyer. You review it and notice: The title is too small. The date is difficult to read. The hero image takes too much space. The design is too crowded.",
    "You can refine the prompt: \"Keep the overall design and hero image. Make the main headline significantly larger and easier to read. Increase the date and time text slightly. Reduce the size of the hero image and create more whitespace around the event details. Keep the overall professional educational style.\"",
    "This is much better than: \"Make the flyer better.\"",
 
    "## Refining for Elderly Learners",
    "When creating material for elderly beginners, you may need to refine AI responses for readability. Useful instructions include: \"Use short sentences.\" \"Avoid technical jargon.\" \"Explain each new term.\" \"Use familiar everyday examples.\"",
    "\"Give one instruction at a time.\" \"Use numbered steps.\" \"Make the instructions suitable for someone using a smartphone.\" \"Do not assume previous computer knowledge.\" These are excellent refinement instructions.",
 
    "## Refining the Level of Detail",
    "Sometimes AI gives too little information. You can say: \"Explain this in more detail and include three examples.\" Sometimes AI gives too much information. You can say: \"Reduce this to the five most important points.\"",
    "The goal is not always to make an answer longer. The goal is to make it fit the purpose.",
 
    "## Refining the Tone",
    "You can also adjust tone gradually. Too formal: \"Make it warmer and more conversational.\" Too casual: \"Make it more professional while keeping it friendly.\" Too serious: \"Make the tone encouraging and approachable.\" Too emotional: \"Make the tone calm and respectful.\"",
 
    "## Refining the Format",
    "You can change how the information is presented. Paragraph → List: \"Turn the main points into a numbered list.\" Paragraph → Table: \"Put the comparison into a simple table.\"",
    "Long explanation → Checklist: \"Turn this into a checklist I can follow.\" Information → Lesson: \"Turn this information into a beginner-friendly lesson with examples and exercises.\" Lesson → Summary: \"Reduce this lesson to a one-page revision summary.\"",
 
    "## Refining the Audience",
    "You may discover that the original response was written for the wrong audience. For example: \"Rewrite this for a small business owner who is not technically experienced.\" Or: \"Rewrite this for elderly beginners who are using a smartphone.\" Or: \"Rewrite this for children aged 10–12 using simple examples.\"",
    "Changing the audience can completely change how the answer should be presented.",
 
    "## Refining With Examples",
    "Examples are one of the most useful refinement tools. If AI gives you a definition that is difficult to understand, say: \"Explain this using an everyday example.\"",
    "If the first example is not relevant, say: \"Use a small shop as the example instead.\" Or: \"Give me an example involving WhatsApp.\" You can guide AI toward examples that make sense to you.",
 
    "## Refining Through Comparison",
    "Sometimes you can tell AI exactly what you prefer by comparing two approaches. For example: \"Give me two versions: one formal and one friendly.\" Then choose the version you prefer.",
    "You can continue: \"Use the friendly version, but make it slightly more professional.\" This is another form of iteration.",
 
    "## Don't Change Everything at Once",
    "Imagine a response has five problems. You could tell AI: \"Change everything.\" But that may create a completely different response and introduce new problems.",
    "Instead, make controlled changes. For example: \"First, simplify the language.\" Review. Then: \"Now improve the structure.\" Review. Then: \"Now add two examples.\" Review again. This gives you more control.",
 
    "## When to Start a New Prompt",
    "Iteration is useful, but you do not have to continue forever. Sometimes the conversation becomes confusing.",
    "For example, after many changes, you might have given instructions such as: \"Make it shorter.\" then: \"Actually, make it longer.\" then: \"Make it shorter again.\" then: \"Add more details.\"",
    "At this point, starting a fresh prompt may be easier. You can summarize what you now want: \"Create a fresh version using these final requirements: simple English, 500 words, five sections, three examples, and a friendly tone.\"",
 
    "## Know When the Conversation Has Become Confusing",
    "Start fresh when: There are too many conflicting instructions, You have changed the goal, The response has become messy, AI keeps misunderstanding the task, You want a completely different approach.",
    "Remember: Iteration is a tool, not a rule. Use it when it helps. Start again when starting again is simpler.",
 
    "## A Real-Life Example",
    "Imagine you want to create an announcement for a community event. Prompt 1: \"Write an announcement for our community meeting.\" AI gives you a draft. Review: You notice it is too formal. Refine: \"Make it warm and friendly.\" AI responds.",
    "Review: You notice it is too long. Refine: \"Reduce it to 80 words.\" AI responds. Review: You notice the location is missing. Refine: \"Add the meeting location: Community Centre.\" AI responds.",
    "Review: Everything looks good. Final step: You verify the actual: Date, Time, Location, Names. Then save and use the message. This is the complete workflow.",
 
    "## Prompting Is a Skill That Improves With Practice",
    "You will become better at prompting by noticing patterns. At first, you may write: \"Write a business message.\"",
    "Later, you may naturally think: \"I need a short WhatsApp message for existing customers, using a friendly professional tone, promoting a weekend discount, with a clear call to action.\"",
    "Eventually, you will begin to recognize what information AI needs before you even send the prompt. That is the development of prompt-engineering skill.",
 
    "## The Prompting Conversation",
    "Think of your interaction with AI like this: You provide direction. \"Create this.\" AI provides a draft. \"Here is a first version.\"",
    "You provide feedback. \"Change this.\" AI revises. \"Here is the revised version.\" You provide more feedback. \"Add this and remove that.\" AI revises again.",
    "This is a normal and productive way to use AI.",
 
    "## A Useful Set of Refinement Commands",
    "You can keep these phrases as a personal toolkit. Make it simpler: \"Explain this using simpler language.\" Make it shorter: \"Reduce this to the five most important points.\" Make it longer: \"Expand this explanation with practical examples.\"",
    "Change the tone: \"Make the tone friendly and professional.\" Change the audience: \"Rewrite this for a complete beginner.\" Improve the structure: \"Organize this into clear numbered steps.\"",
    "Add examples: \"Add two everyday examples.\" Remove something: \"Remove unnecessary technical information.\" Preserve information: \"Keep all the facts but improve the wording.\"",
    "Correct a specific part: \"Keep everything else the same, but correct the date.\" Make it clearer: \"Rewrite this so that someone with no technical background can understand it.\"",
 
    "## The \"Keep Everything Else the Same\" Instruction",
    "This is particularly useful. Suppose you like the response but one detail is wrong. Instead of asking AI to rewrite everything, say: \"Keep everything else the same, but change the meeting time from 2:00 PM to 3:00 PM.\"",
    "This tells AI that you want a targeted change. You can use this for: Names, Dates, Prices, Locations, Headings, Tone, Individual sentences, Image details.",
 
    "## Prompting and Human Judgment",
    "Iteration does not remove the need for human judgment. You still need to decide: Is the information correct? Is the answer appropriate? Does it fit my situation? Is anything important missing? Should I verify this independently? Am I comfortable sharing it?",
    "AI can help you refine a response. You decide when the response is actually good enough to use.",
    "This connects directly to Lesson 6: CREATE → REVIEW → CORRECT → SAVE → USE. Now add iteration: PROMPT → REVIEW → REFINE → REVIEW → FINALIZE.",
 
    // Lesson Summary, added as requested -- sits as the last content
    // entry, right before the quiz.
    "## Lesson Summary",
    "In this lesson, you learned that prompting is not necessarily a one-time activity. You can develop a result through several small improvements. The core process is: PROMPT → REVIEW → REFINE.",
    "You learned how to: Review an AI response, Identify what is missing, Identify what needs to change, Give precise follow-up instructions, Improve length, Adjust tone, Change the audience, Change the format, Add examples, Remove unnecessary information, Preserve information you like, Make targeted corrections, Know when to start a fresh prompt.",
    "You also learned the powerful: KEEP + CHANGE + ADD + REMOVE method.",
  ],
  quiz: [
    {
      id: "iterate-q1",
      prompt: "What does \"iterate\" mean?",
      options: [
        { id: "a", text: "Delete your work" },
        { id: "b", text: "Improve something through repeated review and changes" },
        { id: "c", text: "Never change your prompt" },
        { id: "d", text: "Stop using AI" },
      ],
      correctOptionId: "b",
      explanation: "Iterating means doing something, reviewing the result, making an improvement, and trying again.",
    },
    {
      id: "iterate-q2",
      prompt: "What should you do after AI gives you a response?",
      options: [
        { id: "a", text: "Share it immediately" },
        { id: "b", text: "Review it" },
        { id: "c", text: "Delete it" },
        { id: "d", text: "Ignore it" },
      ],
      correctOptionId: "b",
      explanation: "PROMPT → REVIEW → REFINE -- reviewing the response is the step right after AI answers.",
    },
    {
      id: "iterate-q3",
      prompt: "Which is a better refinement?",
      options: [
        { id: "a", text: "\"Make it better.\"" },
        { id: "b", text: "\"Do it again.\"" },
        { id: "c", text: "\"Make it shorter and use simpler English.\"" },
        { id: "d", text: "\"Fix everything.\"" },
      ],
      correctOptionId: "c",
      explanation: "Specific refinements produce more predictable results -- AI doesn't know what \"better\" means to you unless you say.",
    },
    {
      id: "iterate-q4",
      prompt: "If a response is mostly correct but one date is wrong, what is usually the best approach?",
      options: [
        { id: "a", text: "Start completely over" },
        { id: "b", text: "Delete the conversation" },
        { id: "c", text: "Give a targeted instruction to correct the date" },
        { id: "d", text: "Ignore the date" },
      ],
      correctOptionId: "c",
      explanation: "\"Keep everything else the same, but correct the date\" is a precise, targeted refinement -- no need to start over.",
    },
    {
      id: "iterate-q5",
      prompt: "When might you start a new prompt instead of continuing to refine?",
      options: [
        { id: "a", text: "When the task has become confusing or the goal has completely changed" },
        { id: "b", text: "Every time AI responds" },
        { id: "c", text: "When the response is useful" },
        { id: "d", text: "Never" },
      ],
      correctOptionId: "a",
      explanation: "Iteration is a tool, not a rule -- starting fresh is fine once instructions conflict or the goal has shifted.",
    },
  ],
},
 
      {
  id: "formats-and-voices",
  title: "Format and voice",
  summary: "Ask for the right level, structure, and tone for real audiences.",
  duration: "14 min",
  content: [
    "## Welcome to Lesson 3",
    "In the previous lessons, you learned that a good prompt gives an AI assistant a clear role, context, task, audience, tone, format, and constraints. You also learned that prompting is not a one-time activity. You can ask, review the response, and refine your instructions.",
    "Now we will focus on two very important parts of prompt engineering: Format — how the answer should be organized. Voice — how the answer should sound. These two ideas can completely change the usefulness of an AI response.",
    "For example, imagine asking: \"Explain artificial intelligence.\" The AI might give you several paragraphs of technical information.",
    "But perhaps you actually need: \"Explain artificial intelligence to elderly beginners using simple English, five short points, and one everyday example for each point.\" The subject is the same. The difference is format and voice.",
 
    "## What Does \"Format\" Mean?",
    "Format means the structure or shape you want the answer to have. Think about the difference between: a letter, a shopping list, a table, a speech, a checklist, a report, a lesson, a text message, a step-by-step guide. They can contain similar information, but they are presented differently.",
    "Example — Suppose you ask: \"Give me ideas for improving my small shop.\" A general answer might contain several paragraphs. But you could ask: \"Give me 10 ideas in a numbered list. For each idea, include one short explanation.\" Now the AI knows exactly how to organize the information.",
    "The important lesson: Format tells the AI what the answer should look like.",
 
    "## Common Formats You Can Request",
    "You do not need to know complicated computer terminology to control format. You can simply tell the AI what shape you want.",
    "Numbered list — Useful when you want instructions or ordered steps. \"Give me 7 steps for starting a small vegetable garden.\" Bullet points — Useful when you want quick information. \"Give me the main benefits of using online banking in bullet points.\"",
    "Table — Useful when comparing things. \"Compare buying a new phone and repairing my current phone in a simple table.\" Checklist — Useful when you need to remember tasks. \"Create a checklist for preparing for a family meeting.\"",
    "Step-by-step guide — Useful when learning how to do something. \"Explain how to create an email account step by step.\" Short paragraphs — Useful for announcements and messages. \"Write this as three short paragraphs that I can send to our community group.\"",
    "Frequently Asked Questions — Useful for teaching or explaining a service. \"Create five frequently asked questions and answers about our computer training program.\" Script — Useful when preparing something to say aloud. \"Write a short script for welcoming visitors to our community meeting.\"",
    "Speech — Useful when preparing for an event. \"Write a five-minute welcome speech for a community education program.\" Summary — Useful when information is too long. \"Summarize this report in five important points.\"",
 
    "## Format Should Match the Job",
    "One of the most useful prompting skills is knowing which format fits the task. Consider these examples: Instructions → Numbered steps. Quick information → Bullet points. Comparison → Table. Tasks to complete → Checklist.",
    "Public announcement → Short paragraphs. Presentation → Slide outline. Speaking → Speech or script. Learning → Lesson with examples. Decision-making → Pros and cons table. Long document → Summary. Questions from customers → FAQ. Social media content → Short caption/post.",
    "The same information can be transformed into different formats depending on how you intend to use it.",
 
    "## The \"Where Will I Use This?\" Question",
    "Before asking AI for an answer, ask yourself: Where am I going to use this? This simple question can help you choose the right format.",
    "You need to send information through WhatsApp — Ask for: \"Write a short WhatsApp message.\" You need to print information — Ask for: \"Format this as a clear one-page notice.\" You need to speak to a group — Ask for: \"Turn this into a three-minute speech.\"",
    "You need to teach someone — Ask for: \"Explain this as a beginner-friendly lesson with examples.\" You need to compare two products — Ask for: \"Create a simple comparison table.\" You need to remember what to do — Ask for: \"Create a checklist.\"",
    "This is prompt engineering in practice.",
 
    "## What Does \"Voice\" Mean?",
    "Voice is the way the writing sounds. It includes things such as: formal or informal, friendly or serious, professional or conversational, warm or direct, respectful or energetic, encouraging or neutral, simple or technical.",
    "You can think of voice as the personality of the writing, without assuming the AI itself has a personality.",
 
    "## Tone and Voice Are Closely Related",
    "You may hear the words tone and voice used together. For this course, you can use this simple distinction: Voice = the overall way the writing sounds. Tone = the emotional or situational attitude used for a particular message.",
    "For example, a company's communication may generally have a: professional, helpful voice. But its tone may change depending on the situation. A celebration may sound: warm and joyful. A serious notice may sound: respectful and direct. A customer apology may sound: polite and understanding.",
 
    "## The Same Message Can Have Different Voices",
    "Imagine the basic message: \"The meeting has been moved to Friday.\" Now look at how the voice can change.",
    "Formal: \"Please be informed that the meeting has been rescheduled to Friday.\" Friendly: \"Just a quick update: our meeting has been moved to Friday.\"",
    "Warm: \"We wanted to let everyone know that our meeting has been moved to Friday. We look forward to seeing you there.\" Direct: \"The meeting is now on Friday. Please update your calendar.\"",
    "The information is almost the same. The voice and tone are different.",
 
    "## Why Voice Matters",
    "Imagine writing to these four people: your close friend, your church group, a government office, a business customer. You probably would not speak to all four in exactly the same way. AI needs the same instruction.",
    "Instead of: \"Write an email.\" Try: \"Write a polite and professional email to a government office. Keep it respectful and clear.\" Or: \"Write a warm and friendly message to members of our community group.\"",
    "The audience determines the appropriate voice.",
 
    "## Audience + Voice",
    "This is one of the most powerful combinations in prompting. Compare: \"Explain diabetes.\" with: \"Explain diabetes to an elderly beginner using simple, respectful language. Avoid unnecessary medical terminology and give three everyday examples.\"",
    "The second prompt gives the AI more information about who is reading. That helps determine: vocabulary, sentence length, amount of explanation, examples, tone, complexity.",
 
    "## Controlling the Level of Difficulty",
    "Format and voice are not only about appearance. You can also control the level of an answer.",
    "Beginner level: \"Explain artificial intelligence to someone who has never used AI before. Use very simple English and everyday examples.\" Intermediate level: \"Explain artificial intelligence to someone who understands basic computers. Introduce the concepts of models, data, and machine learning.\"",
    "Advanced level: \"Explain artificial intelligence for a software engineering audience and include technical terminology and examples.\" The topic has not changed. The level of explanation has changed.",
 
    "## Ask for the Right Amount of Detail",
    "Sometimes an AI response is too short. Sometimes it is far too long. You can control this.",
    "If the answer is too short, try: \"Explain this in more detail and give three practical examples.\" If it is too long, try: \"Summarize this in five short points.\"",
    "If it is too technical, try: \"Rewrite this using simple English and explain technical terms.\" If it is too simple, try: \"Give me a more detailed explanation and include the important technical concepts.\"",
    "If you want a specific length, try: \"Give me a 200-word explanation.\" Or: \"Write a three-minute speech.\" Or: \"Give me 10 short bullet points.\"",
 
    "## Be Careful With \"Simple\"",
    "The word simple is useful, but it can mean different things. For example: \"Make it simple.\" Could mean: fewer words, easier vocabulary, shorter sentences, fewer technical terms, fewer examples, simpler structure.",
    "So a stronger prompt explains what you mean. Instead of: \"Make this simple.\" Try: \"Rewrite this using everyday English, short sentences, and no unnecessary technical terms. Keep the important information.\" That is much more precise.",
 
    "## \"Simple\" Does Not Mean \"Incomplete\"",
    "This is particularly important when creating educational material. You might ask: \"Explain AI simply.\" The goal should not be to remove important information.",
    "A better instruction is: \"Explain AI in simple English while keeping the important ideas. Define difficult terms and give everyday examples.\" This tells the AI: Make the language easier, but do not remove the useful knowledge.",
 
    "## Controlling Reading Level",
    "You can also ask for writing suitable for a particular audience. Examples: \"Use language suitable for beginners.\" \"Use language that a 12-year-old could understand.\" \"Explain this for elderly learners who are new to computers.\" \"Use plain English and avoid unnecessary jargon.\" \"Explain every technical term the first time you use it.\"",
    "These instructions are especially useful when teaching.",
 
    "## Controlling Professionalism",
    "You can ask AI to change the level of professionalism. Casual: \"Write a casual message to my friend.\" Friendly professional: \"Write a friendly but professional message to a customer.\"",
    "Formal: \"Write a formal letter to an organization.\" Very formal: \"Write this in a highly professional and respectful style suitable for official correspondence.\" Again, the subject may remain exactly the same. Only the voice changes.",
 
    "## Useful Voice Instructions",
    "Here are some useful phrases you can add to prompts. Friendly: \"Use a warm and friendly tone.\" Professional: \"Use a professional and confident tone.\" Respectful: \"Use respectful language.\" Encouraging: \"Use an encouraging and supportive tone.\"",
    "Neutral: \"Keep the tone neutral and factual.\" Conversational: \"Write as if you are explaining this to someone in a normal conversation.\" Formal: \"Use formal and respectful language.\" Simple: \"Use plain English and avoid unnecessary jargon.\"",
    "Direct: \"Be direct and get to the point.\" Persuasive: \"Use a persuasive but honest tone.\" Educational: \"Use a patient teaching style and explain unfamiliar terms.\"",
 
    "## Do Not Confuse Voice With Facts",
    "Changing the voice should not change important facts. Suppose the correct information is: \"The training begins at 10:00 AM on Saturday.\" You could ask for: a friendly version, a formal version, a short WhatsApp version, a professional email version. But the time should remain 10:00 AM.",
    "This is why Lesson 6 taught you to review AI-generated work. Changing the style should not accidentally change the information.",
 
    "## The Format + Voice Formula",
    "A very useful prompt pattern is: Task + Audience + Format + Voice + Constraints. For example: \"Write an announcement for elderly members of our community. Use a warm and respectful tone. Format it as a short WhatsApp message. Keep it under 120 words.\"",
    "Let's break it down. Task: Write an announcement. Audience: Elderly members of our community. Format: Short WhatsApp message. Voice: Warm and respectful. Constraint: Under 120 words. This is a strong practical prompt.",
 
    "## Example: Turning One Idea Into Different Formats",
    "Suppose your subject is: \"AI training begins next Monday.\" You can ask AI to turn this into different forms.",
    "WhatsApp message: \"Write a short WhatsApp announcement about an AI training program beginning next Monday. Use a friendly and encouraging tone.\" Formal letter: \"Write a formal invitation letter announcing an AI training program beginning next Monday.\"",
    "Poster content: \"Create concise poster copy for an AI training program beginning next Monday. Include a strong headline, short description, date, time, and call to action.\" Speech: \"Write a two-minute speech introducing an AI training program that begins next Monday. Use an encouraging tone.\"",
    "Social media caption: \"Write a short social media caption promoting an AI training program beginning next Monday. Make it welcoming and easy to understand.\" One subject. Five formats. Five slightly different communication needs.",
 
    "## Example: One Message, Five Voices",
    "Suppose you need to ask people to attend a meeting. Professional: \"Please attend the scheduled meeting on Friday at 10:00 AM.\" Friendly: \"Just a reminder that we are meeting this Friday at 10:00 AM. We hope to see you there.\"",
    "Encouraging: \"We encourage everyone to join us this Friday at 10:00 AM. Your participation will be valuable.\" Formal: \"You are respectfully requested to attend the meeting scheduled for Friday at 10:00 AM.\" Direct: \"Meeting: Friday, 10:00 AM. Please be present on time.\"",
    "The information can remain the same while the communication style changes.",
 
    "## Combining Format, Voice, and Level",
    "Now we can create more powerful prompts. Instead of: \"Explain how to use email.\" Try: \"Explain how to use email to an elderly beginner. Use very simple English, a patient and encouraging tone, and a numbered step-by-step format. Explain unfamiliar terms and give one practical example.\"",
    "This prompt controls: Audience, Level, Voice, Format, Task. That gives the AI much less room to guess.",
 
    "## A Real Business Example",
    "Imagine you own a small shop. You want to tell customers about a new product. A weak prompt: \"Write an advert for my product.\"",
    "A stronger prompt: \"Write a short promotional message for a new rechargeable fan sold by my small electronics shop. The audience is families and small-business owners. Use a friendly but professional voice. Format it as a WhatsApp advertisement. Highlight three practical benefits and end with a simple call to action.\" This is much more useful.",
 
    "## A Learning Example",
    "Weak: \"Teach me Excel.\" Better: \"Teach me the basics of Microsoft Excel as a complete beginner. Use simple English, a patient teaching voice, and short lessons. Explain one concept at a time and give me a small exercise after each concept.\"",
    "Even better: \"Teach me Microsoft Excel as a complete beginner who has never used a spreadsheet before. Use simple English and avoid unexplained technical terms. Organize the lesson into numbered sections. Explain each concept with a practical example and give me one easy exercise before moving to the next concept.\" Notice how the prompt becomes a teaching brief.",
 
    "## Format for Different Audiences",
    "The same subject may need different formats depending on the audience. For children: \"Explain photosynthesis using a simple story and three everyday examples.\" For elderly beginners: \"Explain photosynthesis using simple English, short paragraphs, and familiar everyday examples.\"",
    "For university students: \"Explain photosynthesis using appropriate scientific terminology and include the major biochemical stages.\" For professionals: \"Provide a concise technical overview of photosynthesis, emphasizing the processes relevant to agricultural productivity.\"",
    "The best prompt is not necessarily the longest one. It is the one that gives the AI the information it needs.",
 
    "## Format Is Also Useful for AI Images",
    "The same principle applies when generating images. You can tell an image-generation system what kind of visual composition you want.",
    "For example: \"Create a professional portrait of an elderly African teacher standing in a classroom, smiling and explaining something to students. Warm natural lighting, realistic photography, medium shot, clean educational environment, professional composition.\"",
    "You can add visual-style instructions such as: \"cinematic lighting\", \"cinematic composition\", \"high-detail realistic photography\", \"portrait orientation\", \"wide composition\", \"close-up\", \"full-body composition\".",
    "Some image-generation tools may support commands such as /cinematic or /upscale; however, these are tool-dependent. They should not be treated as universal commands that work identically everywhere. The important skill is understanding what you want the image system to produce.",
 
    "## Format for Flyers",
    "When creating a flyer, tell the AI what information needs to appear and how it should be arranged.",
    "For example: \"Create a professional AI training flyer for elderly beginners. Use a clean, welcoming educational design. Include the headline 'AI Made Simple', a short subtitle, training date, time, location, registration information, and a clear call to action. Use large readable typography, strong visual hierarchy, high contrast, and enough spacing so elderly readers can easily read the information.\"",
    "You can also specify: portrait orientation, headline placement, image position, text hierarchy, logo position, color direction, background, visual style, audience, important information.",
    "Important reminder: AI image generators can sometimes produce incorrect spelling or distorted text. Always check: names, dates, times, phone numbers, prices, addresses, website addresses, event titles. For important flyers, it is often better to generate the visual design first and add critical text later in a design tool.",
 
    "## \"Make It Better\" Is Usually Too Vague",
    "You learned about refinement in Lesson 2. Now apply that lesson here. Instead of: \"Make it better.\" Tell the AI what needs improvement.",
    "For example: \"Keep the information the same, but make the language more professional.\" Or: \"Keep the wording friendly, but make the message shorter.\" Or: \"Keep all the dates and names unchanged. Convert the paragraphs into five bullet points.\" Or: \"Keep the content, but make it easier for elderly beginners to understand.\"",
    "Specific instructions produce more predictable results.",
 
    "## Preserve What Is Already Correct",
    "This is an advanced but very useful prompting habit. Sometimes you like most of an AI response but want to change only one thing. Tell the AI what to preserve.",
    "For example: \"Keep the message, facts, names, dates, and structure unchanged. Only make the tone more formal.\" Or: \"Keep the meaning and examples. Rewrite the language using simpler English.\" Or: \"Keep everything else the same. Change only the format from paragraphs to bullet points.\"",
    "This reduces unwanted changes.",
 
    "## Format Conversion",
    "AI is particularly useful for changing information from one format into another.",
    "Paragraph → Bullet points: \"Convert this paragraph into six clear bullet points.\" Paragraph → Table: \"Turn this information into a comparison table.\" Report → Summary: \"Summarize this report into five key points.\"",
    "Notes → Lesson: \"Turn these notes into a beginner-friendly lesson.\" Information → Speech: \"Turn this information into a three-minute speech.\" Long explanation → WhatsApp: \"Turn this explanation into a short WhatsApp message while keeping the important information.\"",
    "This is called format transformation. It is one of the most practical uses of AI.",
 
    "## The \"Same Information, Different Audience\" Idea",
    "Imagine you have this information: \"Our computer training class will take place on Saturday at 10:00 AM.\" You could ask AI to create:",
    "A message for friends: \"Write a friendly message to my friends about the training.\" A community announcement: \"Write a respectful community announcement about the training.\" A formal letter: \"Write a formal invitation letter about the training.\"",
    "A poster: \"Create concise poster text for the training.\" A speech: \"Write a short speech inviting people to the training.\" The information stays consistent. The format and voice change according to the audience.",
 
    "## A Simple Method: F-V-L",
    "To make this easy to remember, use: F — Format. Ask: \"What shape should the answer have?\" Examples: list, table, checklist, message, speech, lesson, report.",
    "V — Voice. Ask: \"How should it sound?\" Examples: friendly, formal, professional, respectful, encouraging, conversational.",
    "L — Level. Ask: \"How difficult should it be?\" Examples: beginner, intermediate, advanced, simple English, technical. So before sending a prompt, think: FORMAT → VOICE → LEVEL",
 
    "## The Full Prompt Pattern",
    "You can now combine what you have learned from Lessons 1–3. A strong prompt can follow: ROLE + CONTEXT + TASK + AUDIENCE + VOICE + FORMAT + LEVEL + CONSTRAINTS",
    "For example: \"Act as a patient computer instructor. I am preparing a beginner lesson for elderly learners who have very little computer experience. Explain how to create an email account. Use simple English, a warm and encouraging voice, and a numbered step-by-step format. Explain unfamiliar terms and include a short practice exercise at the end. Keep the lesson under 800 words.\"",
    "Let's identify the parts: Role: patient computer instructor. Context: beginner lesson for elderly learners. Task: explain how to create an email account. Audience: elderly learners with little computer experience.",
    "Voice: warm and encouraging. Format: numbered steps. Level: beginner/simple English. Constraints: explain terms, include exercise, under 800 words. This is a complete work brief.",
 
    "## Do You Always Need Every Part?",
    "No. This is important. Prompt engineering is not about making every prompt extremely long. If you ask: \"Give me five ideas for a birthday gift.\" You may not need eight separate instructions.",
    "But if you ask: \"Create a training lesson for elderly beginners.\" More detail becomes useful.",
    "Simple task: \"Give me five breakfast ideas.\" More complex task: \"Create a one-week breakfast plan for elderly beginners learning healthy meal preparation. Use simple language, a table format, and include preparation time for each meal.\" The second task requires more control.",
    "Simple task → simple prompt. Complex task → more detailed prompt.",
 
    "## Common Mistakes",
    "Mistake 1: Giving no format — \"Explain budgeting.\" Better: \"Explain budgeting in seven numbered points with one example for each.\"",
    "Mistake 2: Giving no audience — \"Write a message about our training.\" Better: \"Write a message for elderly community members who are new to computers.\"",
    "Mistake 3: Giving no voice — \"Write an announcement.\" Better: \"Write a warm, respectful announcement.\"",
    "Mistake 4: Asking for \"simple\" without explaining what simple means. Better: \"Use short sentences, everyday words, and explain technical terms.\"",
    "Mistake 5: Asking for everything at once. Sometimes beginners put too many unrelated instructions into one prompt. For example: \"Write a business plan, make a flyer, create a speech, write a website, and give me 50 marketing ideas.\" This can produce an unfocused response. Break large tasks into smaller steps.",
    "Mistake 6: Forgetting the purpose. Instead of: \"Make a table.\" Say: \"Create a simple table comparing these three phones so I can decide which one is best for basic business use.\" Now the AI understands the purpose.",
 
    "## A Powerful Prompt Pattern: \"For + As + In\"",
    "When you are stuck, use this simple structure: FOR whom + AS what + IN what format",
    "For example: \"Explain online banking for elderly beginners, as a patient teacher, in a step-by-step guide.\" Or: \"Write this announcement for customers, as a professional business representative, in a short WhatsApp message.\"",
    "This is not a replacement for the full prompt framework, but it is an easy starting point.",
  ],
  quiz: [
    {
      id: "formats-and-voices-q1",
      prompt: "What does format control?",
      options: [
        { id: "a", text: "How the answer is organized" },
        { id: "b", text: "The computer's password" },
        { id: "c", text: "The user's internet connection" },
      ],
      correctOptionId: "a",
      explanation: "Format tells AI the shape you want the answer to take -- a list, table, message, and so on.",
    },
    {
      id: "formats-and-voices-q2",
      prompt: "What does voice describe?",
      options: [
        { id: "a", text: "The physical sound of your computer" },
        { id: "b", text: "How the writing sounds and communicates" },
        { id: "c", text: "The size of the screen" },
      ],
      correctOptionId: "b",
      explanation: "Voice is the overall personality of the writing -- formal, friendly, warm, direct, and so on.",
    },
    {
      id: "formats-and-voices-q3",
      prompt: "Which prompt gives better control?",
      options: [
        { id: "a", text: "\"Write something about my business.\"" },
        { id: "b", text: "\"Write a short, friendly WhatsApp message for customers explaining the benefits of my new product.\"" },
      ],
      correctOptionId: "b",
      explanation: "The second prompt specifies format, voice, audience, and purpose -- much less for AI to guess.",
    },
    {
      id: "formats-and-voices-q4",
      prompt: "What should you consider when choosing a format?",
      options: [
        { id: "a", text: "Where and how you will use the information" },
        { id: "b", text: "The color of your phone" },
        { id: "c", text: "Your internet speed" },
      ],
      correctOptionId: "a",
      explanation: "Asking \"Where am I going to use this?\" is the simple question that points you to the right format.",
    },
    {
      id: "formats-and-voices-q5",
      prompt: "If an answer is too technical, what can you ask?",
      options: [
        { id: "a", text: "\"Make it impossible to understand.\"" },
        { id: "b", text: "\"Rewrite it using simple English and explain technical terms.\"" },
      ],
      correctOptionId: "b",
      explanation: "A specific refinement -- simple English plus explaining terms -- is far more useful than a vague request.",
    },
    {
      id: "formats-and-voices-q6",
      prompt: "Does every prompt need every possible instruction?",
      options: [
        { id: "a", text: "Yes, every prompt must be very long." },
        { id: "b", text: "No. The amount of detail should match the complexity of the task." },
      ],
      correctOptionId: "b",
      explanation: "Simple task → simple prompt. Complex task → more detailed prompt.",
    },
  ],
},
 
    ],
  },
  {
    id: "ethical-ai",
    number: 4,
    title: "Ethical & Responsible AI Use",
    strapline: "Use powerful tools with truth, dignity, and discernment.",
    whyItMatters: "AI can save time, but it can also produce errors, expose private information, and repeat unfair assumptions. Responsible use protects people and trust.",
    outcomes: ["Check AI-generated facts and references.", "Recognise bias and question unfair outputs.", "Disclose AI assistance and keep human judgement central."],
    exerciseTitle: "Practise the verification pause",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
      {
  id: "hallucinations",
  title: "Accuracy and hallucination",
  summary: "Understand why AI can sound confident while being wrong.",
  duration: "15 min",
  content: [
    "## Welcome to Module 04",
    "In the previous modules, you learned how to: understand what AI is; recognize where AI appears in everyday life; understand what AI can and cannot do; use an AI assistant safely; write clearer prompts; review and improve AI responses; choose the right format, voice, and level for different audiences.",
    "Now we move to an even more important skill: How do I know whether what AI has given me is actually correct? An AI response can look polished, intelligent, and convincing while containing incorrect information. This is one of the most important things an AI user must understand.",
    "AI is useful. AI is powerful. But AI is not automatically truthful. Responsible AI use means learning to benefit from AI without blindly trusting it.",
 
    "## What Does \"Accuracy\" Mean?",
    "Accuracy means that information is correct and matches the facts. For example: If someone asks: \"What day comes after Monday?\" An accurate answer is: Tuesday. If an AI assistant tells you that Wednesday comes after Monday, the answer is inaccurate.",
    "Some errors are very obvious. Others are much harder to notice. For example, an AI system might write: \"The meeting will take place on Thursday, September 17.\" The sentence looks perfectly normal. But perhaps your actual meeting is on Friday, September 18.",
    "The grammar may be excellent. The sentence may sound professional. The information is still wrong. This is why good writing does not automatically mean good information.",
 
    "## What Is an AI Hallucination?",
    "An AI hallucination is when an AI system generates information that is false, invented, unsupported, or presented as fact when it does not have reliable evidence for it. The word \"hallucination\" does not mean the AI is seeing things like a human would. It is a technical term commonly used to describe certain types of incorrect AI-generated content.",
    "For example, an AI might invent: a person who does not exist; a book that was never published; a quotation nobody actually said; a historical event that did not happen; a website that does not exist; a research paper with an incorrect title; a statistic; a date; a name; a location; a citation; or an explanation that sounds reasonable but is incorrect.",
    "The dangerous part is that the response may be written very confidently.",
 
    "## Why Can AI Sound Confident When It Is Wrong?",
    "This is one of the most important concepts in this lesson. AI systems are designed to generate useful responses based on patterns learned from data and the instructions they receive. They are not automatically performing a fact-check on every sentence they produce. Therefore: Confidence in the wording is not proof of accuracy.",
    "Think about two people speaking. Person A says: \"I think the meeting might be tomorrow.\" Person B says: \"The meeting is definitely tomorrow.\" The second person sounds more confident. But confidence does not prove that the second person is correct. AI works similarly.",
    "A response can contain: excellent grammar; professional vocabulary; detailed explanations; headings; bullet points; references; numbers; and a confident tone — while still containing an error.",
    "Remember: Fluent does not mean factual. Detailed does not mean correct. Confident does not mean verified.",
 
    "## A Simple Example of Hallucination",
    "Imagine you ask: \"Tell me about the history of a local organization.\" The AI gives you: the organization's founding year; the name of its founder; its original location; the number of members it had; several historical events; and a quotation from its founder. It sounds impressive.",
    "But suppose the AI invented some of those details because it did not have reliable information. You could accidentally put the false information into: a church publication; a school lesson; a business report; a presentation; a speech; a social media post; or an official announcement. The mistake would then spread from the AI to other people.",
    "This is why the human user remains responsible for what they choose to publish or communicate.",
 
    "## Common Things AI Can Get Wrong",
    "AI errors can occur in many areas. Names — AI may confuse two people with similar names. Dates — It may give the wrong year, day, or date. Numbers — It may provide an incorrect statistic, calculation, price, percentage, or population figure.",
    "Historical information — It may mix together different people, places, or events. Quotations — AI may produce quotation-like text and incorrectly attribute it to a real person. References — AI may give a citation that looks genuine but does not actually support the statement.",
    "Current information — Information about current events, laws, prices, office holders, products, or organizations can become outdated or require a current source. Specialized information — Medical, legal, financial, scientific, technical, and other specialist subjects require particular care. Local information — AI may not know the correct details about a small local organization, church, school, business, community, or event.",
 
    "## Why Hallucinations Happen",
    "There is no single reason for every AI error. Several factors can contribute.",
    "1. The AI may not have enough information — If you ask: \"What did our church decide at yesterday's meeting?\" the AI cannot know unless you provide the meeting information or have connected it to a source containing that information.",
    "2. The information may be missing or unclear — If your prompt does not provide enough context, the AI may make assumptions.",
    "3. The model may have learned conflicting information — Information available to an AI system can contain contradictions, errors, or different versions of facts.",
    "4. The information may have changed — An answer that was once correct may no longer be correct. For example: an office holder may have changed; a business may have moved; a product may have been discontinued; a policy may have been updated.",
    "5. The question itself may be ambiguous — Consider: \"When did the organization start?\" Which organization? Which branch? Does \"start\" mean when it was founded, registered, opened, or officially launched? An unclear question can produce an unreliable answer.",
 
    "## The Most Dangerous Hallucinations Are Often Plausible",
    "A completely ridiculous answer is easy to reject. The more dangerous answer is one that is almost believable.",
    "For example: \"The organization was established in 1987 by Professor James Adeyemi.\" That sounds like a normal historical statement. A reader might accept it immediately. But if the organization was actually established in 1992 by someone else, the statement is false.",
    "This gives us an important rule: The more important the information, the more carefully you should verify it.",
 
    "## AI Can Also Make Small Errors",
    "Accuracy is not only about major mistakes. AI can make small errors that still cause problems.",
    "Original information: Training begins at 10:00 AM on Tuesday. AI-generated announcement: Training begins at 11:00 AM on Tuesday. One hour changed. That might cause someone to arrive late.",
    "Another example: Correct phone number: 0800 123 4567. AI-generated version: 0800 123 4657. Only two digits changed. But now the reader may contact the wrong number.",
    "This is why names, dates, times, addresses, prices, and contact details deserve special attention.",
 
    "## The \"Looks Right\" Trap",
    "One of the easiest mistakes for beginners is assuming: \"It looks professional, so it must be correct.\" That is not a safe assumption. AI is very good at producing polished language.",
    "Therefore, when reviewing an answer, separate two questions: Question 1: Does this look well written? Question 2: Is this actually true? These are different questions. A response can pass the first test and fail the second.",
 
    "## A Simple Accuracy Check",
    "Use this five-step process: STOP → CHECK → VERIFY → CORRECT → USE",
    "STEP 1 — STOP: Do not immediately copy or share the response. Pause. STEP 2 — CHECK: Look through the response carefully. Ask: What facts are being stated? Are there names? Are there dates? Are there numbers? Are there quotations? Are there claims that seem surprising?",
    "STEP 3 — VERIFY: For important information, check a trustworthy source. Depending on the subject, that might be: an official website; an official document; your organization's records; a textbook; a trusted news source; a government publication; a primary source; or a qualified professional.",
    "STEP 4 — CORRECT: If something is wrong, fix it. You can also tell the AI: \"The meeting is Friday, not Thursday. Rewrite the announcement using the correct date.\" STEP 5 — USE: Only after reviewing the information should you use or share the result.",
 
    "## The Two-Source Habit",
    "For important facts, develop a simple habit: Do not let AI be the only source of truth.",
    "For example, suppose AI gives you a date for an important event. Instead of immediately publishing it: AI says: September 21. Official event document says: September 23. You now know there is a conflict.",
    "The correct response is not to choose whichever answer sounds better. Investigate the difference.",
 
    "## Ask AI to Show Its Uncertainty",
    "You can also improve your prompts. Instead of simply asking: \"Tell me about this topic.\" Try: \"Explain this topic and clearly identify any information you are uncertain about. Do not present guesses as established facts.\" Or: \"Separate confirmed information from information that should be verified.\"",
    "This does not guarantee that every answer will be correct. However, it encourages a more careful interaction. Remember: Asking AI to be careful is helpful, but it does not replace independent verification.",
 
    "## Do Not Confuse a Citation With Proof",
    "Sometimes AI provides something that looks like a source. For example: \"According to a 2024 study...\" That statement should not automatically be trusted.",
    "A responsible user asks: Does the study actually exist? Is the title correct? Are the authors correct? Is the date correct? Does the source actually say what the AI claims? Is the information being interpreted correctly?",
    "A citation is useful only if it points to a genuine and relevant source. A reference-looking sentence is not the same thing as verified evidence.",
 
    "## High-Risk Information Needs More Checking",
    "Not every AI response requires the same level of verification.",
    "Low-risk — Examples: brainstorming names; writing a friendly greeting; generating ideas; creating a fictional story. An incorrect suggestion may be inconvenient but usually causes little harm.",
    "Medium-risk — Examples: business announcements; teaching materials; historical explanations; public communications; organizational information. These should be reviewed carefully.",
    "High-risk — Examples: medical information; legal matters; financial decisions; safety instructions; official documents; sensitive personal information. These require stronger verification and, where appropriate, guidance from a qualified professional.",
 
    "## The Human Is Still Responsible",
    "This connects directly to Module 01. AI is an assistant. It does not become responsible for your decision simply because it generated the information.",
    "Suppose AI writes a false statement and you publish it. You cannot reasonably tell the reader: \"The AI wrote it, so I am not responsible.\" You chose to use and share the information. That is why responsible AI use requires human judgment.",
    "The principle is: AI can help create the work. The human remains responsible for deciding whether the work is trustworthy enough to use.",
 
    "## Accuracy and Different Types of Work",
    "The same principle applies across the situations our learners may encounter.",
    "Ministry — If AI helps prepare a sermon outline, verify biblical references and quotations. Teaching — If AI prepares a lesson, check facts, examples, dates, definitions, and explanations.",
    "Administration — If AI drafts a memo, carefully check names, dates, times, amounts, and instructions. Business — If AI produces information about prices, customers, products, regulations, or competitors, verify important claims. Communication — If AI writes a WhatsApp announcement, check every practical detail before sending it.",
 
    "## A Practical Review Example",
    "Suppose you ask AI: \"Write a WhatsApp announcement for our community meeting.\" AI produces: Community Meeting — Our monthly meeting will hold on Thursday, September 18 at 4:00 PM at the Community Hall. All members are encouraged to attend.",
    "Before sending it, check each detail against your records: the event type matched (monthly meeting), but the day was wrong (AI said Thursday, records say Friday) and the date was wrong (AI said Sept. 18, records say Sept. 19), while the time (4:00 PM) and location (Community Hall) were both correct.",
    "The AI did not necessarily produce a bad piece of writing. The problem is that some of its factual details were wrong. You can now ask: \"Correct the day and date to Friday, September 19. Keep the time, location, and wording style the same.\" This is responsible AI use.",
 
    "## A Better Mental Model",
    "Do not think: AI gives answers. Think: AI gives a draft that I must evaluate. This small change in thinking can dramatically improve how you use AI.",
    "Instead of: AI → TRUST → USE. Use: AI → REVIEW → VERIFY → DECIDE → USE. This is the responsible workflow.",
 
    "## Warning Signs That Deserve Extra Attention",
    "Slow down when an AI response contains: an exact quotation you have never heard before; a very precise statistic; an unfamiliar person; an unfamiliar organization; a surprising historical claim; a detailed reference; a legal or medical claim; a current event; a specific date you did not provide; information about your local organization that you never gave the AI; confident language around something uncertain.",
    "These are not proof that the answer is wrong. They are signals to check more carefully.",
 
    "## What To Do When You Discover an Error",
    "Do not simply continue the conversation as if nothing happened. Tell the AI exactly what you found.",
    "For example: \"You gave the wrong date. The official notice says September 25. Rewrite the announcement using September 25.\" Or: \"You attributed this quotation to the wrong person. Remove the quotation and rewrite the paragraph without it.\" Or: \"This statistic needs verification. Do not state it as fact unless there is a reliable source.\"",
    "Specific corrections are much more useful than simply saying: \"Make it better.\"",
 
    "## Three Levels of Trust",
    "A useful way to think about AI information is:",
    "Level 1 — Probably safe to use as a draft. Examples: brainstorming; creative writing; simple formatting; rewriting text you already supplied. Still review the output, but independent fact-checking may be less important.",
    "Level 2 — Check before using. Examples: educational facts; historical information; business information; public announcements; statistics. Verify important claims.",
    "Level 3 — Verify carefully. Examples: medical; legal; financial; safety; official; high-consequence decisions. Do not rely on AI alone.",
 
    "## A Simple Question to Remember",
    "Whenever AI gives you information, ask: \"How do I know this is true?\" If you cannot answer that question, pause before sharing it. You can then ask: \"What source can I use to verify this?\"",
    "This is discernment. Discernment means carefully judging what is reliable, appropriate, true, or trustworthy rather than accepting information automatically.",
 
    "## Accuracy Does Not Mean Distrusting Everything",
    "There is an important balance. This lesson is not saying: \"Never trust AI.\" It is saying: Use AI confidently for appropriate tasks, but use judgment when accuracy matters.",
    "AI can save enormous amounts of time. It can explain difficult ideas. It can help organize information. It can draft communications. It can help generate teaching materials. It can help you think through problems.",
    "The goal is not fear. The goal is responsible confidence.",
 
    "## The Responsible AI Habit",
    "Build these habits into your normal workflow. Before prompting, ask: What am I trying to accomplish? After receiving the response, ask: What information here matters?",
    "Before sharing, ask: What needs to be checked? Before using important facts, ask: What is my source? Before making an important decision, ask: Am I relying on AI alone?",
    "These questions take very little time but can prevent significant mistakes.",
  ],
  quiz: [
    {
      id: "hallucinations-q1",
      prompt: "What is an AI hallucination?",
      options: [
        { id: "a", text: "When an AI system becomes tired" },
        { id: "b", text: "When AI generates false or unsupported information as though it were true" },
        { id: "c", text: "When an AI system refuses a question" },
        { id: "d", text: "When a computer loses its internet connection" },
      ],
      correctOptionId: "b",
      explanation: "\"Hallucination\" is a technical term for AI confidently presenting false, invented, or unsupported information as fact.",
    },
    {
      id: "hallucinations-q2",
      prompt: "Does confident language prove that an AI answer is correct?",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" },
      ],
      correctOptionId: "b",
      explanation: "Fluent does not mean factual. Detailed does not mean correct. Confident does not mean verified.",
    },
    {
      id: "hallucinations-q3",
      prompt: "Which information deserves careful checking?",
      options: [
        { id: "a", text: "Names" },
        { id: "b", text: "Dates" },
        { id: "c", text: "Statistics" },
        { id: "d", text: "Quotations" },
        { id: "e", text: "All of the above" },
      ],
      correctOptionId: "e",
      explanation: "Names, dates, statistics, and quotations are all common places where AI can introduce small but consequential errors.",
    },
    {
      id: "hallucinations-q4",
      prompt: "Who remains responsible for deciding whether AI-generated information should be used?",
      options: [
        { id: "a", text: "The AI system" },
        { id: "b", text: "The internet" },
        { id: "c", text: "The human user" },
        { id: "d", text: "The computer manufacturer" },
      ],
      correctOptionId: "c",
      explanation: "AI can help create the work, but the human remains responsible for deciding whether it's trustworthy enough to use.",
    },
    {
      id: "hallucinations-q5",
      prompt: "Which workflow is safer?",
      options: [
        { id: "a", text: "AI → Trust → Share" },
        { id: "b", text: "AI → Review → Verify → Decide → Use" },
        { id: "c", text: "AI → Copy → Publish" },
        { id: "d", text: "AI → Assume → Send" },
      ],
      correctOptionId: "b",
      explanation: "Treating AI output as a draft to review and verify -- not an answer to trust outright -- is the responsible workflow.",
    },
  ],
},
 
      {
  id: "bias-and-dignity",
  title: "Fairness, bias, and dignity",
  summary: "Notice patterns that may be unfair, one-sided, or disrespectful.",
  duration: "16 min",
  content: [
    "## Introduction",
    "In the previous lesson, we learned that AI can sometimes give an answer that sounds confident but is incorrect. There is another important problem to watch for: AI can sometimes produce answers that are unfair, one-sided, stereotypical, or disrespectful. This is called bias.",
    "For example, an AI-generated response might make an assumption about: older people, younger people, men or women, a particular profession, a community, a culture, a country, a religious group, people from a particular background, people with disabilities.",
    "The important lesson is: AI-generated text is not automatically fair simply because a computer produced it. A responsible AI user reads carefully and asks: \"Is this fair? Is this respectful? Is this based on evidence, or is it making an unfair assumption?\"",
 
    "## What Is Bias?",
    "Simple definition: Bias is a tendency to favor, assume, judge, or describe something in a way that is unfair or one-sided. Bias does not always look like an obvious insult. Sometimes it appears as a simple assumption.",
    "For example: \"Older people cannot learn modern technology.\" That is an unfair generalization. Some older people may need more time or different teaching methods, but that does not mean they cannot learn technology.",
    "Another example: \"Young employees are irresponsible.\" That is also a generalization. Individual people should be judged by their behavior and circumstances—not simply by their age.",
 
    "## Where Can AI Bias Come From?",
    "AI learns patterns from large amounts of information. That information comes from human-created material. Human information can contain: stereotypes, historical inequalities, one-sided opinions, incomplete representation, cultural assumptions, outdated ideas, unfair descriptions.",
    "Therefore, AI can sometimes reproduce patterns that already exist in its training information. This does not mean that AI deliberately hates or dislikes people. It means that the patterns it learned can sometimes produce an unfair result.",
    "Remember: AI learns from patterns. Human information contains both good and bad patterns. Therefore, AI output must still be evaluated by humans.",
 
    "## Bias Does Not Always Mean an Obvious Insult",
    "This is important. Bias can be subtle. Consider these statements: \"Women are naturally better suited to caring jobs.\" \"Men are better at technical work.\" \"Older people struggle with technology.\" \"Young people are not responsible.\"",
    "These statements may sound ordinary to some people because such ideas have been repeated in society. But they make a broad assumption about an entire group. A better approach is to describe individual people and actual circumstances.",
    "Instead of: \"Older people cannot use technology.\" A respectful statement would be: \"Some beginners may need additional guidance when learning a new technology.\" That statement focuses on the learning situation rather than judging an entire group.",
 
    "## What Is a Stereotype?",
    "A stereotype is a simplified belief or assumption about a whole group of people. Examples include assumptions about: age, gender, occupation, nationality, culture, education, income, disability, religion, community.",
    "The problem with stereotypes is that they treat many different people as though they are all the same.",
    "Example — Suppose someone asks AI: \"Why are elderly people bad with computers?\" The question itself contains an assumption. A better question would be: \"What difficulties might some older beginners experience when learning computers, and what teaching methods can help them?\" Notice the difference. The second question does not assume that every older person has the same ability.",
 
    "## Bias Can Enter Through the Prompt",
    "Bias does not only come from AI. The user can also put bias into the prompt. Consider: \"Why are young workers lazy?\" The question assumes that young workers are lazy. AI may simply follow the assumption contained in the question.",
    "Instead, ask: \"What are some common reasons an employee may struggle with motivation, and how can a manager respond fairly?\" Now the question focuses on the actual problem rather than blaming an entire group.",
    "Important lesson: Before asking AI a question, ask yourself: \"Have I already made an assumption in my question?\"",
 
    "## Fairness Means Looking at People Carefully",
    "Fairness does not necessarily mean treating every situation identically. It means avoiding unfair assumptions and considering people appropriately.",
    "For example, imagine a computer class containing: an elderly beginner, an experienced office worker, a person who has never used email, someone who is already comfortable with technology. Giving everyone exactly the same explanation may not be helpful. A fair teaching approach might provide different levels of support according to people's needs.",
    "Fairness asks: Is anyone being unfairly excluded? Am I making assumptions about this person? Am I judging a whole group based on a few examples? Does the information apply to everyone, or only some people? Is there another reasonable perspective?",
 
    "## What Does Dignity Mean?",
    "Dignity means recognizing that every person deserves basic respect and should not be treated as inferior, worthless, or less human. When using AI, this matters because AI can generate descriptions of people.",
    "We should not blindly copy language that: humiliates people, degrades people, mocks people, treats people as inferior, reduces people to stereotypes, unfairly labels an entire community.",
    "A simple test: Before sharing AI-generated language, ask: \"Would I be comfortable saying this respectfully to the person or group being described?\" If the answer is no, stop and revise it.",
 
    "## Respectful Language Matters",
    "Compare these examples. Example 1 — Unfair: \"Old people don't understand technology.\" Better: \"Some older beginners may need patient, step-by-step guidance when learning new technology.\"",
    "Example 2 — Unfair: \"Young people are unreliable workers.\" Better: \"Employees of any age may have different levels of experience and reliability.\"",
    "Example 3 — Unfair: \"People from that community are difficult to work with.\" Better: \"Workplace difficulties can arise from differences in communication, expectations, experience, or circumstances.\" The improved versions avoid judging an entire group.",
 
    "## Watch for One-Sided Answers",
    "Bias can also appear when AI presents only one side of an issue. For example, you might ask: \"What are the advantages of working from home?\" AI might give you several advantages.",
    "But if you are making an important decision, you should also ask: \"What are the disadvantages?\" Then: \"What circumstances make working from home more or less suitable?\" This gives you a broader view.",
    "A useful habit: ASK → CHECK → CONSIDER ANOTHER VIEW. Do not assume that the first answer represents the complete picture.",
 
    "## Ask AI to Look for Bias",
    "AI can also help you identify possible bias in a piece of writing. For example: \"Review this announcement for language that could be unfair, stereotypical, or disrespectful. Suggest respectful alternatives while keeping the original meaning.\"",
    "This can be useful when reviewing: announcements, training materials, advertisements, workplace documents, educational content, community messages, AI-generated descriptions.",
    "However, remember: AI itself can make mistakes when judging fairness. Human judgment is still required.",
 
    "## A Simple Bias-Checking Method",
    "Teach yourself these five questions: 1. WHO? Who is being described? 2. WHAT? What is being said about them? 3. ASSUMPTION? Is the statement assuming that everyone in the group is the same? 4. EVIDENCE? Is there evidence supporting the statement? 5. RESPECT? Does the language preserve people's dignity?",
 
    "## The \"WHO–WHAT–WHY\" Test",
    "For elderly learners, an even simpler memory tool can be used. WHO? Who is being described? WHAT? What is AI saying about them? WHY? Why should I believe this statement? If the answer is unclear, pause before sharing it.",
 
    "## Example: A Church Announcement",
    "Imagine AI produces: \"The older members should leave technology matters to the younger members because they cannot understand modern systems.\" Do not simply copy and share this message. Look at it carefully.",
    "Problem 1: Generalization — It assumes older members cannot understand technology. Problem 2: Unfair exclusion — It suggests older members should not participate. Problem 3: Dignity — It describes people in a way that may make them feel inferior.",
    "Better version: \"Members who are experienced with technology can support those who are still learning. Everyone is encouraged to participate and learn at their own pace.\" This version promotes cooperation rather than exclusion.",
 
    "## Example: AI in the Workplace",
    "Suppose AI writes: \"Older employees usually resist new technology.\" A responsible user should not automatically accept this. Ask: Is this talking about individuals or making a generalization?",
    "A better statement would be: \"Employees may respond differently to new technology depending on their experience, training, confidence, and access to support.\" This is more careful because it identifies several possible factors instead of blaming age.",
 
    "## Bias Can Affect Recommendations",
    "Bias is not limited to descriptions of people. It can affect recommendations. For example, if AI is asked: \"Who should lead this project?\" A poor answer might make assumptions based on someone's age, gender, background, or other irrelevant characteristics.",
    "A better approach is to ask AI to evaluate relevant factors such as: experience, skills, availability, responsibilities, knowledge, performance, suitability for the specific task.",
    "Key principle: Use relevant evidence—not stereotypes—to make decisions.",
 
    "## Don't Confuse Preference With Fact",
    "People can have preferences. For example: \"I prefer face-to-face meetings.\" That is a personal preference. But: \"Face-to-face meetings are always better for everyone.\" That is a broad claim.",
    "When using AI, learn to distinguish between: FACT → supported information. OPINION → someone's view. PREFERENCE → someone's personal choice. ASSUMPTION → something believed without sufficient evidence. This helps you recognize one-sided or unfair answers.",
 
    "## How to Correct AI",
    "If AI produces something biased or disrespectful, you do not have to throw away the entire conversation. You can correct it.",
    "Try: \"That statement makes a generalization about older people. Rewrite it without assuming that all older people have the same abilities.\" Or: \"Rewrite this using respectful, inclusive language. Keep the factual meaning but remove stereotypes.\" Or: \"Present this issue fairly and explain different perspectives without judging an entire group.\"",
    "This is another example of: PROMPT → REVIEW → REFINE. The skills from Module 03 still apply.",
 
    "## A Responsible AI User Does Not Pass Everything Along",
    "One of the most important habits in this course is: Just because AI generated it does not mean you should share it. Before forwarding an AI-generated message, ask:",
    "Is it accurate? Could the information be wrong? Is it relevant? Does it actually apply to this situation? Is it fair? Does it make an unfair assumption? Is it respectful? Does it preserve people's dignity? Is it appropriate? Would sharing it cause unnecessary harm or embarrassment?",
    "If something fails these checks: Stop → Correct → Review → Then share.",
 
    "## Practical Responsible-AI Checklist",
    "Before using AI-generated content about people or communities: Check for unfair generalizations. Check for stereotypes. Check whether the statement is one-sided. Separate facts from opinions. Consider another perspective.",
    "Remove disrespectful language. Avoid judging an entire group. Protect people's dignity. Correct the AI when necessary. Review before sharing.",
 
    "## Common Mistakes to Avoid",
    "Mistake 1: \"AI said it, so it must be neutral.\" Correction: AI can reproduce patterns from human information.",
    "Mistake 2: \"Bias always looks like an insult.\" Correction: Bias can be subtle assumptions or generalizations.",
    "Mistake 3: \"If something sounds normal, it must be fair.\" Correction: Repeated stereotypes can sound normal while still being unfair.",
    "Mistake 4: \"My prompt cannot contain bias.\" Correction: The assumptions in your question can influence the response.",
    "Mistake 5: \"AI can decide whether something is fair for me.\" Correction: AI can help identify possible problems, but humans must exercise judgment.",
    "Mistake 6: \"Being fair means treating everybody exactly the same.\" Correction: Fairness can require considering different needs and circumstances.",
 
    "## Everyday Situations Where This Matters",
    "In ministry — When preparing messages, avoid describing an entire group negatively. In teaching — Do not assume that age determines someone's ability to learn. In business — Do not allow AI to make unsupported assumptions about customers or employees.",
    "In administration — Check whether policies or announcements unintentionally exclude certain people. In communication — Remove language that humiliates, stereotypes, or unnecessarily labels people. On social media — Do not forward AI-generated content simply because it sounds convincing.",
 
    "## A Strong Prompt for Fairness",
    "Instead of simply asking: \"Write a description of elderly people learning AI.\" You can ask: \"Write a respectful description of elderly beginners learning artificial intelligence. Avoid stereotypes about age or ability. Present the learners as capable adults who may benefit from patient, practical instruction. Use simple, encouraging language.\"",
    "Notice how the prompt gives AI guidance about: audience, context, tone, fairness, dignity, constraints. This connects directly to Module 03: Anatomy of a Strong Prompt.",
  ],
  quiz: [
    {
      id: "bias-and-dignity-q1",
      prompt: "Which statement shows a possible stereotype?",
      options: [
        { id: "a", text: "Some learners need more time to understand a new computer program." },
        { id: "b", text: "People learn technology at different speeds." },
        { id: "c", text: "Older people cannot learn modern technology." },
        { id: "d", text: "Beginners may benefit from step-by-step instructions." },
      ],
      correctOptionId: "c",
      explanation: "This statement treats an entire age group as identical and incapable -- a classic stereotype, unlike the other options which describe individuals or varied experiences.",
    },
    {
      id: "bias-and-dignity-q2",
      prompt: "Why can AI sometimes produce biased information?",
      options: [
        { id: "a", text: "AI has personal feelings about people." },
        { id: "b", text: "AI learns patterns from human-created information that can contain biases." },
        { id: "c", text: "AI deliberately tries to offend people." },
        { id: "d", text: "AI always knows what is fair." },
      ],
      correctOptionId: "b",
      explanation: "AI reproduces patterns in the material it learned from -- it has no feelings or intent, but the human information it learned from can carry biases.",
    },
    {
      id: "bias-and-dignity-q3",
      prompt: "True or False: Bias always appears as an obvious insult.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "Bias can appear as a subtle assumption, stereotype, generalization, or one-sided description -- not just an obvious insult.",
    },
    {
      id: "bias-and-dignity-q4",
      prompt: "AI gives you this statement: \"Young employees are naturally irresponsible.\" What should you do?",
      options: [
        { id: "a", text: "Share it because AI generated it." },
        { id: "b", text: "Treat it as a proven fact." },
        { id: "c", text: "Question the generalization and ask AI to rewrite it more fairly." },
        { id: "d", text: "Add the statement to your official document." },
      ],
      correctOptionId: "c",
      explanation: "A responsible AI user questions unfair generalizations and asks for a fairer rewrite rather than passing them along.",
    },
    {
      id: "bias-and-dignity-q5",
      prompt: "Which question is the best example of a fair AI prompt?",
      options: [
        { id: "a", text: "\"Why are young people lazy?\"" },
        { id: "b", text: "\"Why are older people unable to use technology?\"" },
        { id: "c", text: "\"What factors can affect an employee's motivation, regardless of age?\"" },
        { id: "d", text: "\"Which group of people is the least reliable?\"" },
      ],
      correctOptionId: "c",
      explanation: "This question asks about actual factors instead of assuming an entire group shares a negative trait.",
    },
    {
      id: "bias-and-dignity-q6",
      prompt: "What does dignity mean in responsible AI use?",
      options: [
        { id: "a", text: "Making every AI response as long as possible." },
        { id: "b", text: "Treating people with basic respect and avoiding language that degrades or dehumanizes them." },
        { id: "c", text: "Agreeing with everyone." },
        { id: "d", text: "Allowing AI to make decisions for people." },
      ],
      correctOptionId: "b",
      explanation: "Dignity means every person deserves basic respect and should never be treated as inferior or less human.",
    },
    {
      id: "bias-and-dignity-q7",
      prompt: "Before sharing AI-generated content about a group of people, which question is MOST important?",
      options: [
        { id: "a", text: "\"Does it sound impressive?\"" },
        { id: "b", text: "\"Is it very long?\"" },
        { id: "c", text: "\"Does it contain difficult words?\"" },
        { id: "d", text: "\"Is it fair, respectful, and supported by appropriate evidence?\"" },
      ],
      correctOptionId: "d",
      explanation: "Length and vocabulary don't determine whether content is safe to share -- fairness, respect, and evidence do.",
    },
    {
      id: "bias-and-dignity-q8",
      prompt: "Bias means:",
      options: [
        { id: "a", text: "A computer error involving electricity" },
        { id: "b", text: "An unfair or one-sided tendency or assumption" },
        { id: "c", text: "A type of password" },
        { id: "d", text: "A formatting problem" },
      ],
      correctOptionId: "b",
      explanation: "Bias is a tendency to favor, assume, judge, or describe something in a way that is unfair or one-sided.",
    },
    {
      id: "bias-and-dignity-q9",
      prompt: "AI can reproduce bias because:",
      options: [
        { id: "a", text: "It has personal emotions" },
        { id: "b", text: "It learns patterns from human-created information" },
        { id: "c", text: "It is always trying to discriminate" },
        { id: "d", text: "It makes decisions randomly" },
      ],
      correctOptionId: "b",
      explanation: "AI learns from human-created material, which can contain stereotypes, historical inequalities, and one-sided opinions.",
    },
    {
      id: "bias-and-dignity-q10",
      prompt: "A stereotype is:",
      options: [
        { id: "a", text: "A detailed fact about one individual" },
        { id: "b", text: "A simplified assumption about a whole group" },
        { id: "c", text: "A computer setting" },
        { id: "d", text: "A type of AI model" },
      ],
      correctOptionId: "b",
      explanation: "A stereotype treats many different people as though they are all the same.",
    },
    {
      id: "bias-and-dignity-q11",
      prompt: "If an AI response contains an unfair generalization, you should:",
      options: [
        { id: "a", text: "Share it immediately" },
        { id: "b", text: "Ignore the problem" },
        { id: "c", text: "Question it and ask AI to revise it" },
        { id: "d", text: "Assume it is correct" },
      ],
      correctOptionId: "c",
      explanation: "PROMPT → REVIEW → REFINE applies here too -- correct unfair generalizations instead of passing them along.",
    },
    {
      id: "bias-and-dignity-q12",
      prompt: "Which three ideas are central to this lesson?",
      options: [
        { id: "a", text: "Speed, cost, and storage" },
        { id: "b", text: "Fairness, critical reading, and dignity" },
        { id: "c", text: "Passwords, accounts, and settings" },
        { id: "d", text: "Search, email, and banking" },
      ],
      correctOptionId: "b",
      explanation: "This lesson centers on reading AI output critically and protecting fairness and dignity.",
    },
  ],
},
 
      {
  id: "disclosure",
  title: "Disclosure and human responsibility",
  summary: "Keep AI as a servant tool beneath prayer, counsel, teaching, and judgement.",
  duration: "12 min",
  content: [
    "## Introduction",
    "AI can write a letter. AI can prepare a lesson outline. AI can summarize a document. AI can suggest ideas for a sermon. AI can help prepare an announcement.",
    "But there is an important question: Who is responsible for the final result? The answer is: The human who uses it. AI is a tool. It can assist your work, but it should not become the person responsible for your decisions.",
    "For this reason, responsible AI use involves two important ideas: Disclosure. Human responsibility.",
 
    "## What Is Disclosure?",
    "Simple definition: Disclosure means being open that AI helped prepare or produce something when that information is relevant to the people receiving it.",
    "For example, you might say: \"AI was used to help prepare the first draft of this document. It was reviewed and edited before use.\" This tells people that AI assisted with the preparation.",
    "Disclosure supports trust and transparency. It also reminds people that the material should have human review.",
 
    "## Why Does Disclosure Matter?",
    "Imagine a church publishes a teaching document. People may reasonably assume that the document was written entirely by the person whose name appears on it. If AI substantially helped prepare it, being transparent can be appropriate.",
    "Disclosure helps people understand: how the material was produced, that AI may have contributed to the wording, that a human should have reviewed it, who remains responsible for the final content.",
    "Remember: Disclosure is about honesty, not shame. Using AI is not automatically something to hide. The important question is whether you are using it responsibly.",
 
    "## Does Every AI-Assisted Sentence Require Disclosure?",
    "Not necessarily. The appropriate level of disclosure can depend on: the type of work, the organization, the audience, the purpose, institutional policies, how much AI contributed.",
    "For example, using AI to correct a spelling mistake is different from asking AI to produce an entire report. Similarly, using AI to brainstorm ideas is different from presenting an AI-generated document as entirely your own work.",
    "Good habit: When AI makes a meaningful contribution, ask: \"Would the people receiving this reasonably benefit from knowing that AI helped prepare it?\" If yes, disclosure may be appropriate.",
 
    "## Disclosure in Ministry",
    "Ministry involves more than producing words. A pastor or church leader may use AI to help: organize sermon ideas, create discussion questions, prepare announcements, summarize background information, develop teaching activities, draft administrative communication. These can be useful applications.",
    "But AI does not replace: prayer, spiritual discernment, pastoral relationships, visiting people, listening to people's concerns, personal counsel, understanding a congregation, lived experience, responsibility before God and people.",
    "AI can help prepare a draft. It cannot become the pastor.",
 
    "## AI Cannot Perform Pastoral Care",
    "Imagine someone in a congregation is going through a difficult personal situation. AI may be able to provide general information or suggest questions. But it cannot replace a trusted human relationship.",
    "A pastor may need to: listen carefully, understand the person's circumstances, show compassion, pray with the person, seek appropriate counsel, exercise discernment, recognize when professional help may be needed. AI cannot personally carry these responsibilities.",
    "Important principle: Information is not the same as relationship. AI can provide information. Human beings provide relationship, presence, accountability, and responsibility.",
 
    "## AI Cannot Replace Prayer",
    "For users working within a Christian ministry context, this distinction is especially important. AI can help organize information about a biblical topic. It can help create a sermon outline. It can suggest discussion questions.",
    "But asking AI for information is not the same thing as prayer, spiritual reflection, or discernment. A responsible approach is: PRAY → THINK → CONSULT → USE TOOLS → REVIEW → DECIDE.",
    "The tool serves the work. It does not become the source of spiritual authority.",
 
    "## AI Cannot Replace Wisdom",
    "Information and wisdom are different. AI can provide information very quickly. Wisdom involves knowing: what is appropriate, when something should be said, how something should be said, when to remain silent, what consequences may follow, how a decision affects real people, when another person should be consulted.",
    "An AI system can help you consider options. But the human user must still exercise judgment.",
 
    "## AI as a Servant Tool",
    "A useful mental model is: AI = SERVANT TOOL. Not: AI = BOSS.",
    "AI should help you accomplish a task. You should remain the person who: gives the instructions, evaluates the result, checks important information, applies judgment, accepts responsibility, makes the final decision.",
    "This connects directly to Module 01: AI is an assistant, not a replacement for human wisdom.",
 
    "## Human-in-the-Loop",
    "Earlier in the course, learners encountered the idea of a human-in-the-loop. This means a person remains actively involved in the process.",
    "For example: H: \"Help me prepare a church announcement.\" ↓ AI: Produces a draft. ↓ H: Reviews the names, dates, tone, and message. ↓ AI: Revises the draft. ↓ H: Makes the final decision.",
    "This is responsible AI use. The human has not surrendered responsibility to the machine.",
 
    "## Human Responsibility",
    "When you use AI, you remain responsible for what you choose to do with the output. If AI produces an incorrect date and you publish it, you cannot simply say: \"The AI made the mistake.\" You should have reviewed the information.",
    "If AI produces disrespectful language and you send it to a group, you remain responsible for sending it. If AI produces a misleading statement and you present it as fact, you are responsible for that decision.",
    "Remember: AI can produce the draft. The human owns the decision.",
 
    "## AI Does Not Become Responsible Because It Wrote It",
    "A common mistake is to think: \"The computer wrote it, so the computer is responsible.\" It is not. AI does not carry human responsibility in the way a person or organization does.",
    "The user decides: whether to accept the answer, whether to edit it, whether to verify it, whether to publish it, whether to send it, whether to act on it.",
    "Therefore: GENERATE ≠ APPROVE. AI generating something does not mean a human has approved it.",
 
    "## Disclosure and Ownership",
    "Suppose you ask AI: \"Write a three-page report about our community outreach program.\" AI produces the entire first draft. You then check the facts, change the structure, add your own information, and approve the final version.",
    "You should not pretend that AI did not assist if disclosure is relevant under your setting or policy. A simple statement could be: \"AI was used to assist with drafting. The final document was reviewed and edited by the author.\" This is clear and honest.",
 
    "## Disclosure Does Not Mean AI Made the Final Decision",
    "Consider this example: \"AI helped draft this announcement. The final wording and information were reviewed and approved by the organizing team.\"",
    "This communicates two things: AI contributed to the drafting. Humans remained responsible for the final content. That is an excellent model of responsible AI use.",
 
    "## Different Levels of AI Assistance",
    "AI may contribute at different levels.",
    "Level 1 — Minor Assistance: AI helps with spelling, grammar, wording, formatting. Example: \"Please correct the grammar in this paragraph.\"",
    "Level 2 — Significant Assistance: AI helps organize ideas, summarize information, produce an outline, restructure a document.",
    "Level 3 — Major Assistance: AI produces a substantial portion of the first draft. Example: \"Write a complete five-page training guide.\" The greater the AI contribution, the more important it becomes to consider appropriate disclosure and careful human review.",
 
    "## Disclosure Is Not the Same as Fear",
    "Some people may think: \"If I disclose that AI helped me, people will think I cannot do the work myself.\" That should not be the goal.",
    "AI is increasingly being used as a productivity tool. Responsible use is not about pretending AI does not exist. It is about using it honestly. The goal is: Transparency + Review + Responsibility.",
 
    "## When Human Judgment Is Especially Important",
    "Human judgment becomes particularly important when AI output involves: spiritual guidance, pastoral care, personal problems, education, employment, financial decisions, legal matters, medical information, organizational decisions, sensitive personal information, people's reputation, decisions affecting someone's opportunities.",
    "In these situations, AI should support the process—not become the final authority.",
 
    "## AI and Personal Counsel",
    "Suppose someone asks: \"My friend is going through a difficult situation. What should I tell them?\" AI may suggest general communication approaches.",
    "But a wise person should consider: What is actually happening? What does the person need? What do I know about their circumstances? Should I speak with a pastor, counselor, parent, teacher, or another trusted person? Is there a situation that requires professional support?",
    "AI does not automatically know the answers to these questions.",
 
    "## AI and Teaching",
    "A teacher may ask AI: \"Create a lesson about honesty.\" That can be useful.",
    "But the teacher still needs to determine: Is the material appropriate for the learners? Is it accurate? Does it fit the curriculum? Does it suit the learners' level? Does it reflect the learning objectives? Are the examples appropriate? What needs to be changed?",
    "AI can prepare a draft. The teacher remains the teacher.",
 
    "## AI and Administration",
    "An administrator might ask: \"Write an announcement about our staff meeting.\" AI can quickly create a draft.",
    "But the administrator must verify: date, time, location, names, instructions, organizational details. Then the administrator decides whether the message is ready to send.",
    "Workflow: AI drafts → Human checks → Human approves → Human sends",
 
    "## AI and Sermon Preparation",
    "AI can assist with: brainstorming, outlining, organizing ideas, creating discussion questions, simplifying explanations, suggesting examples.",
    "But a responsible minister should not simply copy an AI-generated sermon and deliver it without review. The minister should consider: the biblical text, theological interpretation, the congregation, the pastoral situation, the intended message, accuracy, context, spiritual discernment.",
    "AI can assist with preparation. It should not replace the minister's responsibility.",
 
    "## A Practical Example",
    "Imagine a pastor asks: \"Prepare a sermon outline about forgiveness for Sunday.\" AI produces: introduction, three main points, examples, conclusion, suggested prayer. The pastor should not immediately copy and preach it.",
    "Instead: Step 1 — Review: Check the content. Step 2 — Verify: Check important claims and references. Step 3 — Discern: Consider whether the message fits the congregation and situation.",
    "Step 4 — Personalize: Add appropriate pastoral experience and teaching. Step 5 — Decide: The pastor determines what should actually be taught. The AI helped with preparation. The human remained responsible.",
 
    "## A Simple Rule for Elderly Learners",
    "Remember: AI CAN HELP ME PREPARE. AI CANNOT REPLACE MY RESPONSIBILITY. This applies whether you are: a pastor, teacher, administrator, business owner, parent, community leader, student.",
    "Use AI to assist your work. Do not hand over your judgment.",
 
    "## Practical Disclosure Examples",
    "Example 1 — Report: \"AI was used to assist with the initial drafting of this report. The final version was reviewed and edited by the author.\"",
    "Example 2 — Church communication: \"AI assisted with preparing the first draft. The final message was reviewed and approved by the church leadership.\"",
    "Example 3 — Teaching material: \"AI was used as a drafting and brainstorming tool. The instructor reviewed the material before using it.\" These statements are short, honest, and clear.",
 
    "## What Good Disclosure Should Do",
    "Good disclosure should be: Honest — Do not claim you wrote everything yourself if AI made a substantial contribution. Clear — People should understand that AI was involved.",
    "Appropriate — The amount of explanation should fit the situation. Responsible — Make clear that the final material was reviewed by a human when that is true.",
 
    "## What Not to Do",
    "Do not hide significant AI assistance when disclosure is expected. Do not claim AI-generated information is personally verified when it has not been checked. Do not let AI make important personal decisions for you.",
    "Do not use AI as a replacement for appropriate human counsel. Do not assume a polished AI response has spiritual, professional, or moral authority. Do not blame AI for a decision you chose to make.",
 
    "## The Responsibility Chain",
    "A useful way to remember the process is: AI ASSISTS → HUMAN REVIEWS → HUMAN DISCERNS → HUMAN DECIDES",
    "AI: generates, summarizes, organizes, suggests. Human: checks, understands, evaluates, discerns, decides, takes responsibility.",
 
    "## Connection to Previous Lessons",
    "This lesson brings together several ideas from the course. Lesson 1 — Accuracy and Hallucination: AI can be wrong. Therefore: CHECK. Lesson 2 — Fairness, Bias, and Dignity: AI can reproduce unfair assumptions. Therefore: READ CRITICALLY.",
    "Lesson 3 — Disclosure and Human Responsibility: AI can assist but cannot take human responsibility. Therefore: REVIEW, DISCERN, AND DECIDE. Together: CHECK → RESPECT → TAKE RESPONSIBILITY",
  ],
  quiz: [
    {
      id: "disclosure-q1",
      prompt: "What does disclosure mean in responsible AI use?",
      options: [
        { id: "a", text: "Keeping AI use secret" },
        { id: "b", text: "Being open when AI helped prepare content where that disclosure is relevant" },
        { id: "c", text: "Giving AI complete control" },
        { id: "d", text: "Refusing to use AI" },
      ],
      correctOptionId: "b",
      explanation: "Disclosure is about honesty and transparency, not hiding AI use or handing over control to it.",
    },
    {
      id: "disclosure-q2",
      prompt: "Who is responsible for the final decision when a person uses AI to prepare a document?",
      options: [
        { id: "a", text: "The AI system" },
        { id: "b", text: "The internet" },
        { id: "c", text: "The human user" },
        { id: "d", text: "The computer manufacturer" },
      ],
      correctOptionId: "c",
      explanation: "AI can produce the draft, but the human owns the decision.",
    },
    {
      id: "disclosure-q3",
      prompt: "True or False: If AI produces a piece of writing, the human user is no longer responsible for the content.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "GENERATE ≠ APPROVE -- AI generating something does not remove the human's responsibility for it.",
    },
    {
      id: "disclosure-q4",
      prompt: "Which is the best description of AI's role in ministry?",
      options: [
        { id: "a", text: "AI should replace pastoral wisdom." },
        { id: "b", text: "AI should make spiritual decisions." },
        { id: "c", text: "AI can assist with preparation, but prayer, pastoral care, counsel, discernment, and human judgment remain important." },
        { id: "d", text: "AI should decide what a congregation needs." },
      ],
      correctOptionId: "c",
      explanation: "AI can help prepare a draft, but it cannot become the pastor -- prayer and discernment stay with the human.",
    },
    {
      id: "disclosure-q5",
      prompt: "A pastor asks AI to create a sermon outline. What should happen before using it?",
      options: [
        { id: "a", text: "Read it without checking anything." },
        { id: "b", text: "Use it exactly as AI produced it." },
        { id: "c", text: "Review, verify, adapt, and exercise personal judgment." },
        { id: "d", text: "Tell the congregation that AI is responsible for the sermon." },
      ],
      correctOptionId: "c",
      explanation: "Review → Verify → Discern → Personalize → Decide -- the pastor remains responsible for what's actually taught.",
    },
    {
      id: "disclosure-q6",
      prompt: "Which statement best describes the relationship between AI and human responsibility?",
      options: [
        { id: "a", text: "AI decides; humans follow." },
        { id: "b", text: "AI assists; humans review and decide." },
        { id: "c", text: "AI replaces professional judgment." },
        { id: "d", text: "AI becomes responsible for its output." },
      ],
      correctOptionId: "b",
      explanation: "AI assists → human reviews → human discerns → human decides is the responsibility chain this lesson teaches.",
    },
    {
      id: "disclosure-q7",
      prompt: "True or False: Using AI does not automatically mean that a person has acted irresponsibly.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "a",
      explanation: "Responsible use depends on how the tool is used, reviewed, disclosed when appropriate, and governed by human judgment -- not on whether AI was used at all.",
    },
    {
      id: "disclosure-q8",
      prompt: "Which situation requires especially careful human judgment?",
      options: [
        { id: "a", text: "Asking AI to suggest five file names" },
        { id: "b", text: "Asking AI to suggest colors for a presentation" },
        { id: "c", text: "Using AI to help make an important decision affecting a person's welfare" },
        { id: "d", text: "Asking AI to rearrange bullet points" },
      ],
      correctOptionId: "c",
      explanation: "The higher the stakes for a real person, the more important careful human review and judgment become.",
    },
    {
      id: "disclosure-q9",
      prompt: "Which sequence best represents responsible AI use?",
      options: [
        { id: "a", text: "AI decides → Human accepts" },
        { id: "b", text: "Human asks → AI decides → Human shares" },
        { id: "c", text: "AI assists → Human reviews → Human discerns → Human decides" },
        { id: "d", text: "AI writes → Human publishes immediately" },
      ],
      correctOptionId: "c",
      explanation: "This is the responsibility chain from the lesson -- AI contributes, but every subsequent step belongs to the human.",
    },
    {
      id: "disclosure-q10",
      prompt: "Which statement is the BEST example of responsible disclosure?",
      options: [
        { id: "a", text: "\"I wrote everything myself,\" when AI produced most of the draft." },
        { id: "b", text: "\"AI helped prepare the first draft, and the final version was reviewed and edited by the author.\"" },
        { id: "c", text: "\"The AI approved this document.\"" },
        { id: "d", text: "\"The computer is responsible for any mistakes.\"" },
      ],
      correctOptionId: "b",
      explanation: "This statement is honest about AI's contribution while making clear a human reviewed and takes responsibility for the final version.",
    },
  ],
},
 
    ],
  },
  {
    id: "ministry-teaching-writing",
    number: 5,
    title: "AI for Ministry, Teaching & Everyday Writing",
    strapline: "Let the tool serve the message — never the other way around.",
    whyItMatters: "This module turns theory into practical output for pastors, teachers, curriculum developers, and everyday writers.",
    outcomes: ["Draft sermon outlines, study questions, and teaching materials.", "Create warm announcements, newsletters, and correspondence.", "Adapt language for different audiences while preserving human voice."],
    exerciseTitle: "Create one real first draft",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
      {
  id: "sermons-and-study",
  title: "Sermon and Bible study preparation",
  summary: "Use AI to organise ideas while keeping personal study and prayer foundational.",
  duration: "18 min",
  content: [
    "## Lesson Overview",
    "Artificial intelligence can be useful during sermon and Bible study preparation. It can help a minister: organize ideas, create an initial sermon structure, suggest discussion questions, simplify explanations, generate examples, create lesson activities, suggest possible cross-references, turn notes into a clearer outline, adapt material for different audiences, review the structure of a teaching session, create a first draft of supporting material.",
    "But there is an important boundary: AI can assist preparation. It must not become the source of spiritual authority or replace personal study, prayer, interpretation, pastoral understanding, or human judgment. The minister remains responsible for what is taught.",
    "The goal is therefore not: \"Let AI prepare my sermon.\" The better approach is: \"Let AI help me prepare my sermon more efficiently while I remain responsible for the message.\"",
 
    "## Learning Objectives",
    "By the end of this lesson, the learner should be able to: Explain how AI can assist sermon preparation. Use AI to organize sermon ideas into a useful outline. Ask AI for Bible study discussion questions. Use AI to suggest possible cross-references for personal checking.",
    "Recognize why AI-generated biblical information must be verified. Distinguish AI assistance from personal spiritual preparation. Keep prayer, study, interpretation, context, and pastoral purpose foundational. Review and correct AI-generated teaching material before using it. Write practical prompts for sermon and Bible study preparation.",
 
    "## Why This Matters",
    "Preparing a sermon or Bible study can involve many different tasks. A minister may need to: review a passage, identify major ideas, organize notes, prepare an introduction, create discussion questions, explain difficult concepts, prepare illustrations, adapt the material for young people or older adults, create a handout, prepare a short announcement, create follow-up questions, summarize the teaching.",
    "AI can reduce the amount of time spent on some of these organizational tasks. However, saving time is not the same as transferring responsibility.",
    "A minister may use AI to organize notes, but the minister must still determine: Is this interpretation faithful to the passage? Is the context correct? Is this appropriate for this congregation? Is this actually what I believe should be taught? Have I personally studied and prayed about the message? Those questions belong to the human minister.",
 
    "## AI as a Preparation Assistant",
    "Think of AI as a study assistant, not a spiritual authority. For example, suppose a minister has already studied a biblical passage and has several handwritten notes.",
    "The minister could ask AI: \"Organize these notes into a three-part teaching outline. Keep my main ideas and do not introduce new theological claims.\" AI can help organize the material. The minister then reviews the result.",
    "The process is: PERSONAL STUDY → AI ASSISTANCE → HUMAN REVIEW → FINAL TEACHING. Not: AI → COPY → PREACH. That distinction is central to responsible AI use in ministry.",
 
    "## Personal Study Comes First",
    "AI should not become a shortcut around personal study. Before using AI, the minister should have a clear understanding of what they are trying to teach.",
    "Depending on the purpose, this may involve: reading the passage personally, considering the surrounding context, studying relevant resources, reflecting on the meaning of the text, praying, considering the needs of the audience, identifying the central teaching point, determining the pastoral purpose of the message.",
    "AI can then assist with organization and preparation. A useful principle: Use AI after you have a purpose, not instead of having a purpose.",
 
    "## What AI Can Help With",
    "AI is particularly useful for organization and first-draft tasks.",
    "A. Creating an Outline — You can provide your main ideas and ask AI to organize them. Example: \"I am preparing a Bible study for adults. My three main ideas are faith, patience, and obedience. Organize these ideas into a clear Bible study outline with an introduction, three sections, discussion questions, and a conclusion. Do not change the central ideas.\" The AI can provide a starting structure. You review it before using it.",
    "B. Creating Discussion Questions — AI can help generate questions that encourage learners to think about a lesson. For example: \"Create eight Bible study discussion questions based on these teaching points. Make the questions open-ended and suitable for an adult discussion group.\" The minister should then review the questions. Some may be excellent. Some may be too obvious. Some may not fit the group. Some may assume information that has not been established. The minister decides which questions to keep.",
    "C. Suggesting Cross-References — AI can also suggest passages that may be related to a particular theme. For example: \"Suggest biblical passages that may relate to the theme of forgiveness. List the references separately and explain briefly why each might be relevant. I will personally verify every reference before teaching.\" Notice the final sentence. \"I will personally verify every reference.\" That is responsible prompting.",
    "AI may suggest a useful reference, but the minister should check: Does the passage actually exist? Is the reference correct? Does the passage actually support the point? What is its surrounding context? Am I using the passage fairly? A suggested cross-reference is a lead to investigate, not automatic proof.",
 
    "## AI Can Help Explain Difficult Ideas",
    "A minister may understand a theological concept but struggle to explain it simply to beginners. AI can help create different explanations.",
    "For example: \"Explain this concept in simple English for adults who have little background in theology. Use one everyday example and avoid unnecessary technical terms.\" Or: \"Explain this idea for teenagers using clear language and one practical example.\" The minister can then evaluate the explanation. This is especially useful when teaching mixed-age groups.",
 
    "## Adapt the Same Teaching for Different Audiences",
    "One important strength of AI is adaptation. The same central teaching may need different forms.",
    "For example: Adult Bible Study — A structured study with questions and discussion. Children's Class — Simple language, short explanations, examples, and activities. Youth Meeting — Conversational language and practical situations. Church Newsletter — A short summary. WhatsApp Announcement — A concise message containing only the important information.",
    "AI can help transform the presentation. But the minister must ensure that the central meaning has not been distorted. Important rule: Change the presentation without losing the message.",
 
    "## Preserving the Minister's Voice",
    "AI-generated writing can sound generic. A minister may have a particular way of communicating: warm, encouraging, direct, conversational, formal, reflective, pastoral, simple.",
    "You can tell AI what kind of voice you want. For example: \"Rewrite this introduction in a warm and encouraging pastoral voice. Keep my main meaning and do not make it sound overly formal.\" This does not mean the AI becomes the minister. It means the minister is using AI to help shape a draft.",
    "Remember: AI can imitate a requested style. It does not possess your personal pastoral experience. Your experiences, relationships, observations, convictions, and understanding of your congregation remain yours.",
 
    "## AI and Biblical Accuracy",
    "This is one of the most important areas of the lesson. AI can produce: incorrect references, inaccurate quotations, incorrect historical information, misleading interpretations, statements presented without sufficient context, explanations that sound convincing but need correction.",
    "Therefore, do not assume that an AI-generated biblical statement is correct simply because it sounds scholarly. Use the Module 04 principle: GENERATE → READ → CHECK → VERIFY → CORRECT → DECIDE. The minister remains responsible for the final material.",
 
    "## Do Not Ask AI to Decide Your Theology for You",
    "AI can help compare explanations or organize information. But a responsible minister should be cautious about treating AI as the final authority on theological questions.",
    "For example, instead of: \"Tell me what Christians must believe about this issue.\" A better approach might be: \"Explain several major interpretations of this theological question. Present the reasoning behind each position clearly and identify which parts I should investigate further using trusted sources.\"",
    "This keeps the minister in the position of evaluator. AI provides information. The human studies, evaluates, discerns, and decides.",
 
    "## AI and Prayer",
    "AI can help organize prayer-related materials or prepare a structure for a devotional exercise. But AI does not replace the minister's personal prayer.",
    "For example, AI can help with: \"Create a simple structure for a 10-minute devotional reflection.\" But the minister remains responsible for personal spiritual preparation. Remember: AI can organize words. It cannot replace personal spiritual life.",
 
    "## AI and Pastoral Understanding",
    "A sermon is not simply information. A minister may know: what the congregation is experiencing, what encouragement they need, what difficulties people are facing, what language will be helpful, what examples are appropriate, what should be emphasized, what should be handled carefully.",
    "AI does not automatically know these things. Therefore, a generic AI-generated sermon may be structurally impressive but pastorally unsuitable.",
    "Example — AI may produce a technically organized sermon about grief. But the minister knows that someone in the congregation has recently experienced a difficult loss. That human knowledge matters. The minister must decide how the subject should actually be presented.",
 
    "## A Practical Sermon Preparation Workflow",
    "Here is a simple workflow learners can remember. STEP 1 — STUDY: Read and study the passage yourself. STEP 2 — PRAY: Give attention to personal prayer and spiritual preparation. STEP 3 — IDENTIFY: Determine the main message and purpose.",
    "STEP 4 — PROMPT: Ask AI to assist with a specific preparation task. STEP 5 — REVIEW: Read the entire response carefully. STEP 6 — VERIFY: Check references, facts, quotations, interpretations, and important claims.",
    "STEP 7 — REFINE: Ask AI to improve organization, clarity, or audience fit. STEP 8 — PERSONALIZE: Add your own understanding, examples, experiences, and pastoral application. STEP 9 — DECIDE: Choose what belongs in the final message.",
    "Memory formula: STUDY → PRAY → PROMPT → REVIEW → VERIFY → REFINE → PERSONALIZE → DECIDE",
 
    "## Building a Strong Sermon Prompt",
    "A weak prompt might be: \"Write me a sermon about faith.\" The problem is that AI does not know: the audience, the purpose, the passage, the length, the desired structure, the tone, what the minister has already studied.",
    "A stronger prompt provides a work brief. Example: \"Act as a sermon-preparation assistant. I am preparing a 25-minute teaching session for an adult church congregation. The central theme is perseverance in difficult times. Organize my notes into a three-point sermon outline with an introduction, three main points, practical application, and conclusion. Keep my central ideas. Do not invent biblical quotations or references. Clearly identify any suggested references that I should verify personally.\"",
    "This prompt contains: Role: sermon-preparation assistant. Context: adult church congregation. Task: organize notes. Audience: adults. Format: three-point sermon outline. Constraints: preserve ideas and verify references.",
 
    "## Prompt for Bible Study Questions",
    "A useful prompt could be: \"I am preparing a Bible study for an adult group. Based on the teaching notes below, create 10 discussion questions. Include a mixture of observation, understanding, application, and reflection questions. Keep the questions connected to the material provided and avoid introducing unrelated theological claims.\"",
    "This is much better than: \"Give me Bible study questions.\" The more clearly you explain the task, the less guesswork the AI has to do.",
 
    "## Prompt for Simplifying a Teaching",
    "Suppose you already have a difficult explanation. You could write: \"Rewrite this explanation in simple English for older adults who are new to the subject. Keep the meaning accurate, use short paragraphs, explain unfamiliar terms, and give one everyday example.\"",
    "Notice that simple does not mean shallow. The goal is: clearer language + preserved meaning — not: less information + less accuracy.",
 
    "## Prompt for Reviewing Your Sermon",
    "AI can also be used after creating a draft. For example: \"Review this sermon outline for clarity and organization. Identify repeated ideas, unclear sections, and places where the application could be more practical. Do not rewrite the sermon yet. First give me a list of improvements for me to review.\"",
    "This is a good example of using AI as a reviewing assistant rather than simply asking it to produce everything.",
 
    "## A Very Important Boundary",
    "Do not allow convenience to remove your responsibility. If AI produces a complete sermon, that does not mean the sermon is ready to preach.",
    "The responsible process is: AI DRAFT ↓ MINISTER READS ↓ MINISTER CHECKS ↓ MINISTER CORRECTS ↓ MINISTER ADDS PERSONAL UNDERSTANDING ↓ MINISTER DISCERNS ↓ MINISTER APPROVES ↓ FINAL MESSAGE",
    "The final message belongs to the person who is responsible for delivering it.",
 
    "## Common Beginner Mistakes",
    "Mistake 1: \"AI wrote it, so it must be correct.\" Correction: Verify important information.",
    "Mistake 2: Giving AI only the topic. Correction: Explain the audience, purpose, format, and requirements.",
    "Mistake 3: Copying an entire AI sermon without reviewing it. Correction: Treat AI output as a draft.",
    "Mistake 4: Allowing AI to replace personal study. Correction: Study and understand the material yourself.",
    "Mistake 5: Accepting suggested Bible references automatically. Correction: Personally verify references and context.",
    "Mistake 6: Removing your own voice. Correction: Add your experiences, pastoral understanding, examples, and conclusions.",
    "Mistake 7: Asking AI to make theological decisions for you. Correction: Use AI to organize and explore information while retaining human discernment and responsibility.",
 
    "## Practical Exercise — Prepare With AI",
    "Choose a familiar biblical theme such as: forgiveness, patience, service, faith, wisdom, love, perseverance. First, write three ideas of your own about the topic.",
    "Then ask AI: \"Organize these three ideas into a simple Bible study outline for adults. Include an introduction, three sections, five discussion questions, and a conclusion. Preserve my main ideas and clearly identify any biblical references that should be verified.\"",
    "After receiving the response: Read it. Identify anything that needs checking. Check the references. Remove anything inappropriate. Add your own examples. Rewrite parts that do not sound like you. Decide what belongs in the final teaching. This exercise teaches the complete workflow rather than simply teaching learners how to generate text.",
 
    "## Practical Exercise — Improve the Prompt",
    "Weak prompt: \"Write a Bible study about forgiveness.\" Improve it by adding: audience, purpose, format, tone, length, requirements, verification instruction.",
    "Example improved prompt: \"Prepare a 30-minute Bible study outline on forgiveness for an adult church group. Use simple, respectful language. Include an introduction, three main teaching points, five discussion questions, practical application, and a conclusion. Keep the material focused on the topic and identify biblical references for me to verify personally.\"",
 
    "## Practical Exercise — Protect Your Voice",
    "Take an AI-generated paragraph and ask: \"Rewrite this in a warm, natural pastoral voice while preserving the meaning. Avoid overly academic language and keep the explanation suitable for an adult congregation.\"",
    "Then compare: AI version with your revised version. Ask yourself: Does this sound like me? Is the message accurate? Is the language appropriate? Have I added my own understanding? Would I actually say this to my congregation? If the answer is no, keep refining it.",
 
    "## Key Principle for Elderly Learners",
    "You do not need to become a computer expert to use AI effectively. You only need to learn a repeatable process.",
    "Remember: 1. Know what you want. 2. Tell AI what you want. 3. Read what it gives you. 4. Check important information. 5. Correct what is wrong. 6. Add your own knowledge and voice. 7. Decide what to use.",
    "AI becomes much easier when you stop thinking: \"What complicated command do I need to give this machine?\" and start thinking: \"What would I ask a capable assistant to help me with?\" Then write that request clearly.",
 
    "## Key Takeaways",
    "By the end of this lesson, remember these principles. AI CAN HELP YOU: organize sermon notes, create outlines, generate discussion questions, suggest possible cross-references, simplify explanations, adapt material for different audiences, improve structure, review drafts, create supporting teaching materials.",
    "AI CANNOT REPLACE: personal study, prayer, biblical discernment, pastoral relationships, personal responsibility, understanding of your congregation, human judgment, your own voice and lived wisdom.",
    "The central rule: AI may help prepare the message, but the minister remains responsible for the message.",
  ],
  quiz: [
    {
      id: "sermons-and-study-q1",
      prompt: "What is the best role for AI in sermon preparation?",
      options: [
        { id: "a", text: "Spiritual authority" },
        { id: "b", text: "Replacement for personal study" },
        { id: "c", text: "Preparation and organization assistant" },
        { id: "d", text: "Final decision-maker" },
      ],
      correctOptionId: "c",
      explanation: "AI can assist preparation, but it must not become the source of spiritual authority or replace personal study and judgment.",
    },
    {
      id: "sermons-and-study-q2",
      prompt: "Why should a minister personally verify AI-generated Bible references?",
      options: [
        { id: "a", text: "AI cannot write sentences" },
        { id: "b", text: "AI can provide incorrect or unsuitable references" },
        { id: "c", text: "Bible references never need checking" },
        { id: "d", text: "Verification makes AI unnecessary" },
      ],
      correctOptionId: "b",
      explanation: "A suggested cross-reference is a lead to investigate, not automatic proof -- it must be checked for accuracy and context.",
    },
    {
      id: "sermons-and-study-q3",
      prompt: "Which should remain foundational when preparing a sermon?",
      options: [
        { id: "a", text: "AI-generated text" },
        { id: "b", text: "Personal study and prayer" },
        { id: "c", text: "The longest possible prompt" },
        { id: "d", text: "Copying another person's sermon" },
      ],
      correctOptionId: "b",
      explanation: "Use AI after you have a purpose, not instead of having one -- personal study and prayer come first.",
    },
    {
      id: "sermons-and-study-q4",
      prompt: "A minister wants AI to organize three ideas into a sermon outline. What is the best approach?",
      options: [
        { id: "a", text: "Give AI only the word \"sermon\"" },
        { id: "b", text: "Tell AI the topic, audience, purpose, format, and important requirements" },
        { id: "c", text: "Ask AI to decide what the congregation should believe" },
        { id: "d", text: "Copy the first response without reading it" },
      ],
      correctOptionId: "b",
      explanation: "A strong prompt is a work brief -- role, context, task, audience, format, and constraints -- not a single vague word.",
    },
    {
      id: "sermons-and-study-q5",
      prompt: "True or False: If AI produces a complete sermon, the minister no longer needs to review it.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "A complete-looking sermon is still a draft -- AI draft → minister reads → checks → corrects → approves → final message.",
    },
    {
      id: "sermons-and-study-q6",
      prompt: "Which task is AI particularly useful for?",
      options: [
        { id: "a", text: "Replacing pastoral relationships" },
        { id: "b", text: "Making spiritual decisions for a minister" },
        { id: "c", text: "Organizing notes and generating discussion questions" },
        { id: "d", text: "Replacing prayer" },
      ],
      correctOptionId: "c",
      explanation: "AI is particularly useful for organization and first-draft tasks like outlines and discussion questions.",
    },
    {
      id: "sermons-and-study-q7",
      prompt: "A minister asks AI to explain a difficult concept for elderly beginners. Which instruction would be most useful?",
      options: [
        { id: "a", text: "\"Make it complicated.\"" },
        { id: "b", text: "\"Use simple English, explain unfamiliar terms, and give an everyday example.\"" },
        { id: "c", text: "\"Use as many technical words as possible.\"" },
        { id: "d", text: "\"Write anything you think is appropriate.\"" },
      ],
      correctOptionId: "b",
      explanation: "Specific instructions about language level and examples give AI a clear target instead of leaving it to guess.",
    },
    {
      id: "sermons-and-study-q8",
      prompt: "What does it mean to preserve the minister's voice?",
      options: [
        { id: "a", text: "Always copy AI exactly" },
        { id: "b", text: "Make every sermon sound like a computer" },
        { id: "c", text: "Ensure the final material reflects the minister's own understanding, communication style, and pastoral perspective" },
        { id: "d", text: "Never use AI" },
      ],
      correctOptionId: "c",
      explanation: "AI can imitate a requested style, but it does not possess the minister's personal pastoral experience -- that stays theirs to add.",
    },
    {
      id: "sermons-and-study-q9",
      prompt: "Which workflow is the most responsible?",
      options: [
        { id: "a", text: "AI → Copy → Preach" },
        { id: "b", text: "Prompt → Trust → Share" },
        { id: "c", text: "Study → Pray → Prompt → Review → Verify → Refine → Personalize → Decide" },
        { id: "d", text: "AI → Publish → Check later" },
      ],
      correctOptionId: "c",
      explanation: "This is the full memory formula from the lesson -- personal study and prayer first, AI assistance in the middle, human judgment throughout.",
    },
  ],
},
 
      {
  id: "announcements",
  title: "Announcements and correspondence",
  summary: "Draft clear, warm, audience-aware communications in minutes.",
  duration: "15 min",
  content: [
    "## Lesson Overview",
    "Ministers, teachers, administrators, and church workers communicate constantly. They write: church announcements, meeting notices, invitations, reminders, newsletters, thank-you messages, condolence letters, formal correspondence, messages to parents, staff communications, event descriptions, WhatsApp messages, short speeches and notices.",
    "Writing these messages can take considerable time, especially when you are trying to make the message clear, respectful, warm, and appropriate for the audience. AI can help you prepare a first draft quickly.",
    "But the goal is not simply to ask: \"Write an announcement.\" A better approach is to give AI the important facts, explain who will receive the message, specify the tone, and tell it what action the reader should take. Then you review and personalize the result before sending it.",
 
    "## Learning Objectives",
    "By the end of this lesson, you should be able to: Give AI the essential facts needed to create a communication. Identify the audience for a message. Choose an appropriate tone. Ask AI to produce the correct communication format.",
    "Include a clear call to action. Create announcements, invitations, reminders, and correspondence. Personalize AI-generated messages. Check names, dates, times, locations, and other important details. Keep human warmth and responsibility in the final message.",
 
    "## Why AI Is Useful for Everyday Writing",
    "Suppose you need to announce a church meeting. You may know exactly what you want to say, but you may struggle with: how to begin; how to organize the information; how formal the message should be; how much detail to include; how to make the message sound welcoming; how to make the important information easy to find.",
    "AI can help organize the information. For example, instead of starting with: \"Write an announcement for our meeting.\" you can provide the actual facts: \"Our church is holding a leadership meeting on Saturday, 14 March, at 10:00 a.m. at the church office. The audience is church leaders. Ask everyone to arrive 15 minutes early. Write a short, warm WhatsApp announcement.\" This gives AI a much clearer assignment.",
 
    "## The Five Things to Give AI",
    "For announcements and correspondence, remember: FACTS + AUDIENCE + TONE + FORMAT + ACTION. These five elements are extremely useful.",
    "1. Facts — Give the information that must appear. For example: event name; date; time; location; purpose; contact person; deadline; required materials; other important instructions.",
    "2. Audience — Tell AI who will read the message. Examples: church members; pastors; parents; elderly members; teachers; students; staff; customers; community members; government officials. The same information may need to be written differently for different audiences.",
    "3. Tone — Tell AI how the message should sound. Examples: warm; respectful; professional; formal; friendly; encouraging; compassionate; simple; celebratory; serious.",
    "4. Format — Tell AI what kind of output you want. Examples: WhatsApp message; formal letter; email; announcement; invitation; newsletter paragraph; memo; SMS; notice.",
    "5. Action — Tell the reader what they should do. This is called a call to action. Examples: \"Please confirm your attendance.\" \"Kindly arrive by 9:30 a.m.\" \"Please register before Friday.\" \"Bring your course handbook.\" \"Contact the church office for more information.\" A message without a clear action can leave readers wondering: \"What am I supposed to do?\"",
 
    "## Example: Creating a Church Announcement",
    "Weak prompt: Write an announcement for our church. This is too vague. AI does not know: what the announcement is about; when it will happen; who will attend; how long the message should be; what tone to use; what readers should do.",
    "Better prompt: \"Write a short WhatsApp announcement for church members. We are holding a thanksgiving service on Sunday, 22 March, at 9:00 a.m. at Grace Chapel. The tone should be warm and welcoming. Encourage members to invite their families and arrive 15 minutes early. Keep it under 100 words.\"",
    "This prompt gives AI: Audience: church members. Task: write an announcement. Facts: service, date, time, location. Tone: warm and welcoming. Action: invite family and arrive early. Format: WhatsApp message. Constraint: under 100 words. That is much easier for AI to work with.",
 
    "## Always Check the Facts",
    "One of the most important rules from Module 04 applies here: AI can write a beautiful message containing incorrect information. The wording may sound excellent while the date or time is wrong.",
    "Before sending an AI-generated announcement, check: NAME — Are names spelled correctly? DATE — Is the date correct? TIME — Is the time correct? LOCATION — Is the venue correct? CONTACT — Is the phone number or email correct? EVENT — Is the event described correctly? ACTION — Does the reader know what to do?",
    "A useful memory aid is: NAME → DATE → TIME → PLACE → ACTION",
 
    "## Why Personalization Matters",
    "AI can produce a polished message, but polished does not always mean personal. Compare these two approaches.",
    "AI-only approach: \"Dear members, we are pleased to inform you of an upcoming event. Your attendance will be highly appreciated.\" This is acceptable, but it may sound generic.",
    "Personalized approach: You might change it to: \"Dear church family, we look forward to gathering together this Sunday for our thanksgiving service. Please come with your family and invite someone who would be blessed by the fellowship.\" The second version sounds more like a real person communicating with people they know. The minister or teacher should therefore ask: \"Does this sound like me?\" If not, edit it.",
 
    "## AI Should Not Remove Human Warmth",
    "This is particularly important when writing sensitive messages. Consider: condolences; appreciation; encouragement; congratulations; pastoral communication; messages to someone experiencing difficulty.",
    "AI can help organize the words, but it does not personally know the relationship between you and the recipient. For example, a condolence letter may require details about: the person's relationship with the church; the family's relationship with the congregation; the person's character; shared memories; the appropriate expression of sympathy.",
    "AI should not invent these details. Instead, provide the real information you are comfortable using and then personally review the message. Remember: AI can help you find the words. You provide the relationship and the genuine human meaning.",
 
    "## Creating Different Types of Communication",
    "AI can help with many common formats.",
    "A. Notice — Useful for: schedule changes; meetings; deadlines; maintenance; important instructions. Prompt: \"Turn these facts into a clear church notice. Use simple English and put the date, time, and location on separate lines.\"",
    "B. Invitation — Useful for: conferences; weddings; seminars; church programs; workshops; community events. Prompt: \"Write a warm invitation to church members for a one-day leadership seminar. Mention the date, time, location, registration requirement, and contact number. Make it welcoming but concise.\"",
    "C. Reminder — A reminder should usually be short. Prompt: \"Write a friendly WhatsApp reminder for teachers about tomorrow's 9:00 a.m. meeting. Remind them to bring their lesson plans and arrive 10 minutes early.\"",
    "D. Thank-You Message — Prompt: \"Write a warm thank-you message to volunteers who helped with our community outreach program. Keep it sincere, respectful, and suitable for WhatsApp. Avoid exaggerated language.\"",
    "E. Formal Correspondence — Formal correspondence may include: letters to organizations; requests; official responses; notices; administrative communication. Prompt: \"Draft a formal letter to the director of a local school requesting permission to use the school hall for an educational workshop. Explain the purpose, proposed date, expected number of participants, and contact information. Keep the tone respectful and professional.\" The final letter should still be reviewed by the person sending it.",
 
    "## Writing for Different Audiences",
    "The same information can require different language depending on the audience. Imagine you need to explain an AI training program.",
    "For elderly beginners, you might request: \"Use simple English, avoid technical terms, explain unfamiliar words, and use practical everyday examples.\" For professional administrators, you might request: \"Use professional language and emphasize workplace applications, efficiency, documentation, and responsible AI use.\" For young students, you might request: \"Use clear, friendly language and practical examples that relate to school and everyday technology.\"",
    "The facts can remain the same. What changes is: vocabulary; tone; level of explanation; examples; format. This is the principle from Lesson 3 of Module 03: Same information does not always mean same presentation.",
 
    "## A Reusable Communication Prompt",
    "You do not need to invent a new prompting method every time. Use this template: \"Write a [FORMAT] for [AUDIENCE]. Purpose: [WHY YOU ARE WRITING]. Important facts: [DATE, TIME, PLACE, NAMES, DETAILS]. Tone: [WARM/FORMAL/FRIENDLY/PROFESSIONAL/etc.]. Call to action: [WHAT THE READER SHOULD DO]. Length: [SHORT/MEDIUM/SPECIFIC WORD COUNT]. Keep the message clear, natural, and easy to understand.\"",
    "You can save this as a reusable prompt.",
 
    "## Example Using the Template",
    "Suppose you are announcing an AI class. You could write: \"Write a short WhatsApp announcement for church leaders. Purpose: invite them to an introductory AI training session. Important facts: The session is Saturday, 5 April, from 10:00 a.m. to 1:00 p.m. at the church training hall. Participants should bring a smartphone. Tone: warm, encouraging, and professional. Call to action: ask interested participants to confirm attendance. Length: under 120 words. Keep the message clear and easy to understand.\"",
    "Notice that you did not ask AI to invent the event. You supplied the facts. AI's job is to help organize and express them.",
 
    "## Refining the First Draft",
    "The first AI response does not have to be the final response. Suppose AI gives you something that is too formal. You can say: \"Make this warmer and more natural while keeping all the facts unchanged.\"",
    "Or: \"Shorten this for WhatsApp without removing the date, time, location, or call to action.\" Or: \"Make this easier for elderly readers to understand.\" Or: \"Keep my meaning but make the wording sound more like a personal message from a pastor.\" Or: \"Remove unnecessary introductory sentences and make the important details easier to see.\"",
    "This is the PROMPT → REVIEW → REFINE method from Module 03.",
 
    "## Protecting Important Details During Refinement",
    "When refining an announcement, be careful. If you say: \"Rewrite this and make it shorter.\" AI may accidentally remove an important detail.",
    "Instead say: \"Make this shorter, but do not remove the date, time, location, registration instruction, or contact number.\" This is an example of a constraint. Constraints tell AI what must remain unchanged.",
    "Useful phrases include: \"Keep all dates unchanged.\" \"Do not change the names.\" \"Keep the phone number exactly as provided.\" \"Do not remove the location.\" \"Preserve the original meaning.\" \"Do not add information that I did not provide.\"",
 
    "## Privacy and Sensitive Information",
    "Be careful about what information you place into an AI tool. Do not automatically paste private information simply because AI can help you write more easily.",
    "Be particularly cautious with: private family information; confidential pastoral matters; private student information; passwords; financial information; confidential organizational information; sensitive personal records.",
    "If the message can be written without identifying private details, consider removing or generalizing them. For example, instead of: \"Write a letter about John Doe's private medical situation...\" you might use: \"Write a compassionate message to a church member who is experiencing a serious personal difficulty.\" Then personally add the appropriate details.",
 
    "## Common Mistakes to Avoid",
    "Mistake 1: Giving AI too little information — \"Write a church announcement.\" Problem: AI must guess too much. Better: Give the event facts, audience, tone, format, and action.",
    "Mistake 2: Allowing AI to invent facts — Do not assume that anything AI adds is true. If AI adds a date, quotation, location, name, contact number, or event detail, and you did not provide it, check it before using it.",
    "Mistake 3: Sending the first draft immediately — The first draft is a draft. Read it before sharing.",
    "Mistake 4: Making every message overly formal — Not every church message needs to sound like a government letter. A WhatsApp reminder may be better when it sounds natural and conversational.",
    "Mistake 5: Losing your personal voice — If your normal communication is warm and simple, do not allow AI to turn every message into stiff corporate language.",
    "Mistake 6: Forgetting the call to action — A message should make the next step clear. Ask: \"What should the reader do after reading this?\"",
    "Mistake 7: Using the wrong format — A 500-word announcement may not be appropriate for WhatsApp. A formal letter should not necessarily look like a casual text message. Tell AI where the message will be used.",
 
    "## A Simple Workflow for Everyday Communication",
    "When using AI for announcements and correspondence, follow this process: FACTS — Gather the correct information. ↓ AUDIENCE — Identify who will read it. ↓ TONE — Choose how it should sound. ↓ FORMAT — Choose where and how it will be used. ↓ ACTION — Tell readers what to do.",
    "↓ PROMPT — Give AI the information. ↓ REVIEW — Read the draft carefully. ↓ REFINE — Correct wording and structure. ↓ PERSONALIZE — Add your human voice and relationship. ↓ VERIFY — Check names, dates, times, places, and other facts. ↓ SEND — Only after you are satisfied that the message is correct.",
    "Remember: FACTS → AUDIENCE → TONE → FORMAT → ACTION → PROMPT → REVIEW → PERSONALIZE → VERIFY → SEND",
 
    "## Key Principle",
    "AI can make communication faster. It should not make communication careless.",
    "The objective is not: \"Let AI write everything for me.\" The better objective is: \"Let AI help me communicate clearly while I remain responsible for what I say.\"",
  ],
  quiz: [
    {
      id: "announcements-q1",
      prompt: "What five things are especially useful to give AI when creating an announcement?",
      options: [
        { id: "a", text: "Password, username, date, location, colour" },
        { id: "b", text: "Facts, audience, tone, format, action" },
        { id: "c", text: "Name, password, account, tone, image" },
        { id: "d", text: "Topic, password, audience, payment, action" },
      ],
      correctOptionId: "b",
      explanation: "FACTS + AUDIENCE + TONE + FORMAT + ACTION is the five-part framework this lesson builds around.",
    },
    {
      id: "announcements-q2",
      prompt: "Why should you tell AI who will receive the message?",
      options: [
        { id: "a", text: "So AI can automatically send the message" },
        { id: "b", text: "So AI can choose an appropriate language and tone" },
        { id: "c", text: "So AI can find the recipients' phone numbers" },
        { id: "d", text: "So AI can decide whether the message is true" },
      ],
      correctOptionId: "b",
      explanation: "The same facts may need very different vocabulary and tone depending on who's reading.",
    },
    {
      id: "announcements-q3",
      prompt: "What is a call to action?",
      options: [
        { id: "a", text: "A description of the AI model" },
        { id: "b", text: "A greeting at the beginning of a message" },
        { id: "c", text: "An instruction telling the reader what to do next" },
        { id: "d", text: "A password for the communication platform" },
      ],
      correctOptionId: "c",
      explanation: "A message without a clear action can leave readers wondering \"What am I supposed to do?\"",
    },
    {
      id: "announcements-q4",
      prompt: "You ask AI to shorten an announcement. What is the best instruction?",
      options: [
        { id: "a", text: "\"Make it shorter.\"" },
        { id: "b", text: "\"Change everything.\"" },
        { id: "c", text: "\"Make it shorter, but keep the date, time, location, and contact number unchanged.\"" },
        { id: "d", text: "\"Write something completely different.\"" },
      ],
      correctOptionId: "c",
      explanation: "A constraint like this protects important details that a vague \"make it shorter\" could accidentally drop.",
    },
    {
      id: "announcements-q5",
      prompt: "True or False: If an AI-generated announcement sounds professional, you can send it without checking the facts.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "A professional-sounding message can still contain incorrect information -- always verify names, dates, times, and places.",
    },
    {
      id: "announcements-q6",
      prompt: "Which information should you carefully check before sending an announcement?",
      options: [
        { id: "a", text: "Names" },
        { id: "b", text: "Dates" },
        { id: "c", text: "Times and locations" },
        { id: "d", text: "All of the above" },
      ],
      correctOptionId: "d",
      explanation: "NAME → DATE → TIME → PLACE → ACTION -- all of it deserves a check before sending.",
    },
    {
      id: "announcements-q7",
      prompt: "Which is the better prompt?",
      options: [
        { id: "a", text: "\"Write an invitation.\"" },
        { id: "b", text: "\"Write a warm invitation for church members to attend our leadership seminar on Saturday, 5 April, at 10:00 a.m. Include the venue, registration instruction, and contact number. Keep it under 120 words.\"" },
      ],
      correctOptionId: "b",
      explanation: "This prompt supplies facts, audience, tone, format, and a length constraint -- far less for AI to guess.",
    },
    {
      id: "announcements-q8",
      prompt: "Why should you personalize AI-generated correspondence?",
      options: [
        { id: "a", text: "AI cannot type words correctly" },
        { id: "b", text: "Personalization adds your actual relationship, knowledge, voice, and human warmth" },
        { id: "c", text: "AI cannot write sentences" },
        { id: "d", text: "AI automatically sends messages without permission" },
      ],
      correctOptionId: "b",
      explanation: "AI can help you find the words, but you provide the relationship and the genuine human meaning.",
    },
    {
      id: "announcements-q9",
      prompt: "You need to write a condolence message. What is the most responsible approach?",
      options: [
        { id: "a", text: "Allow AI to invent personal details about the person" },
        { id: "b", text: "Give AI confidential information without considering privacy" },
        { id: "c", text: "Use AI carefully for wording, provide appropriate real information, and personally review the final message" },
        { id: "d", text: "Send the first draft immediately" },
      ],
      correctOptionId: "c",
      explanation: "AI should not invent sensitive personal details -- provide real information you're comfortable using, then review before sending.",
    },
  ],
},
 
      {
  id: "teaching-materials",
  title: "Teaching materials and summaries",
  summary: "Create practice questions, simplified explanations, and study summaries.",
  duration: "18 min",
  content: [
    "## Why This Lesson Matters",
    "A teacher does much more than stand in front of a classroom and explain a topic. Teachers prepare: lesson notes; examples; exercises; revision questions; quizzes; summaries; explanations; worksheets; assignments; discussion questions; examination preparation; practical activities; classroom instructions.",
    "Preparing all of this can take considerable time. AI can help a teacher move from: \"I need to create everything from nothing.\" to: \"I provide the teaching goal, and AI helps me develop a draft that I can review and improve.\" The teacher still decides what is suitable.",
 
    "## The Teacher Remains in Charge",
    "This is one of the most important principles in this lesson. AI is a teaching assistant, not the teacher.",
    "The teacher knows: the learners; the classroom; the curriculum; the students' ability levels; the local context; the previous lessons; common areas of difficulty; what the students need to practice. AI does not automatically know these things.",
    "Therefore: AI GENERATES → TEACHER REVIEWS → TEACHER ADJUSTS → STUDENTS LEARN. Never reverse this order.",
 
    "## What AI Can Help a Teacher Create",
    "AI can assist with: Explanations — \"Explain photosynthesis simply.\" Examples — \"Give five examples of fractions used in everyday life.\" Practice questions — \"Create ten questions on simultaneous equations.\"",
    "Multiple-choice questions — \"Create 15 objective questions on the water cycle.\" Revision summaries — \"Summarize the causes of soil erosion.\" Vocabulary — \"Explain these literary terms in simple English.\" Comparisons — \"Compare renewable and non-renewable energy.\"",
    "Lesson activities — \"Create a 20-minute classroom activity about percentages.\" Differentiated material — \"Explain the same topic at beginner, intermediate, and advanced levels.\" Marking support — \"Create a marking guide for these questions.\" The teacher should still verify the output.",
 
    "## The Basic Teaching Prompt",
    "A useful teaching prompt can contain: SUBJECT + TOPIC + LEARNERS + GOAL + LEVEL + FORMAT",
    "For example: \"I am teaching Basic Science to 12-year-old beginners. Explain the water cycle using simple English. Give a short explanation, a real-life example, five practice questions, and an answer key.\" This is much stronger than: \"Explain the water cycle.\"",
 
    "## Teaching Mathematics with AI",
    "Mathematics is an excellent example of where AI can help—but also where careful checking is essential. AI can help teachers create: worked examples; practice exercises; word problems; multiple-choice questions; revision sheets; step-by-step explanations; different difficulty levels; real-life applications.",
    "Example: Fractions — Weak prompt: \"Teach fractions.\" Better prompt: \"Create a beginner mathematics lesson on adding fractions for Junior Secondary students. Explain the idea using simple language, show three worked examples, give five practice questions from easy to moderate difficulty, and provide an answer key.\"",
    "The teacher should check: every calculation; every answer; whether the difficulty is appropriate; whether the method matches what students have been taught.",
    "Mathematics Example: Different Levels — Ask AI: \"Explain percentages at three levels: A very simple explanation for a beginner. A normal classroom explanation. A more advanced explanation using mathematical notation. Use the same basic concept but adjust the language and detail.\" This helps a teacher see how the same mathematical idea can be explained differently.",
 
    "## Mathematics: Use AI for Practice, Not Blind Trust",
    "A teacher can ask: \"Create 20 practice questions on simultaneous equations. Make questions 1–5 easy, 6–15 moderate, and 16–20 challenging. Include answers but do not show the solutions yet.\" Then review the questions.",
    "Check: Are the equations mathematically valid? Are the answers correct? Is the difficulty progression sensible? Are there repeated questions? Can students reasonably solve them using the methods taught?",
    "Important rule: Never distribute AI-generated mathematics questions without checking the mathematics. A wrong answer key can teach students the wrong method.",
 
    "## Teaching Science with AI",
    "AI can help teachers prepare material for: Biology; Chemistry; Physics; Basic Science; Environmental Science; Agricultural Science; Health-related classroom topics. Examples include: definitions; diagrams to plan; experiment questions; observations; explanations; comparisons; revision questions; summaries.",
    "Example: Photosynthesis — Prompt: \"Explain photosynthesis to secondary school beginners. Define the process, identify the materials needed, explain why sunlight is important, give one everyday example, and finish with five short questions.\"",
    "The teacher should verify: scientific terminology; biological processes; equations or formulas; examples; whether the explanation is scientifically accurate.",
 
    "## Science: Ask AI to Explain, Then Verify",
    "Suppose AI gives an explanation of electricity. The teacher should not assume: \"It sounds scientific, so it must be correct.\"",
    "Instead ask: Is the definition correct? Are units correct? Are formulas correct? Are the examples accurate? Does the explanation match the curriculum? Is anything important missing?",
    "This follows the Module 04 principle: GENERATE → READ → CHECK → VERIFY → CORRECT → USE",
 
    "## Teaching English Language",
    "AI can be particularly useful for English teaching. Teachers can create: grammar exercises; vocabulary exercises; comprehension questions; sentence correction activities; writing exercises; spelling practice; punctuation exercises; speaking prompts; summaries; essay topics.",
    "Example — Prompt: \"Create a Junior Secondary English exercise on subject-verb agreement. Give a short explanation followed by 15 questions. Use simple sentences and provide an answer key.\" The teacher can then ask: \"Create five additional questions that are slightly more difficult.\" This allows the teacher to build practice material progressively.",
 
    "## Teaching Essay Writing",
    "AI can help students understand the structure of writing. For example: \"Explain how to write a five-paragraph argumentative essay to secondary school students. Explain introduction, main points, supporting evidence, and conclusion. Give a simple example topic but do not write the complete essay.\" This is often better for learning than simply asking AI to write the student's assignment.",
    "Important distinction: Teaching with AI is not the same as allowing AI to do the student's work. The teacher can use AI to create: practice; explanations; examples; feedback; revision activities. The student should still develop their own understanding and ability.",
 
    "## Teaching Literature",
    "AI can help teachers prepare Literature lessons involving: themes; characters; literary devices; plot structure; discussion questions; vocabulary; comparison exercises; essay questions; revision summaries.",
    "For example: \"Create a Literature lesson explaining the difference between theme, character, setting, conflict, and plot. Use simple definitions and provide one generic example for each.\"",
    "For a specific literary work, the teacher should carefully check AI's claims about: characters; events; quotations; themes; authorship; historical context. AI may incorrectly attribute a quotation or invent a detail.",
    "Important rule for Literature: Do not treat an AI-generated quotation as an authentic quotation until you verify it against the actual text.",
 
    "## Teaching Agriculture",
    "Agriculture provides many opportunities for practical AI-assisted teaching. AI can help create materials about: crop production; soil types; farm tools; livestock; pests and diseases; irrigation; farm management; agricultural economics; food production; environmental conservation.",
    "Example: \"Create a secondary school Agricultural Science revision lesson on soil types. Explain sandy, clay, and loamy soil in simple language. Give their characteristics, advantages, disadvantages, common uses, and ten objective questions with answers.\"",
    "The teacher should verify that: agricultural terminology is correct; examples are appropriate to the local environment; recommendations are not presented as universal when they depend on location; practical activities are safe and appropriate.",
 
    "## Teaching Geography",
    "AI can help with: definitions; map-reading exercises; climate; weather; population; natural resources; physical geography; human geography; revision questions.",
    "Example: \"Explain the difference between weather and climate to secondary school students. Use simple English, give three examples, create five multiple-choice questions, and provide the answers.\"",
 
    "## Teaching History",
    "AI can help organize: timelines; historical summaries; cause-and-effect questions; comparison exercises; revision questions; discussion topics.",
    "For example: \"Create a revision summary about the causes and effects of a historical event. Separate established facts from interpretation and include five revision questions.\"",
    "History requires especially careful verification. Check: dates; names; places; sequence of events; quotations; historical claims. Remember: A confident historical explanation can still contain errors.",
 
    "## Government and Civic Education",
    "AI can assist with: definitions; government structures; civic responsibilities; revision questions; classroom debates; comparisons; case-study questions.",
    "Example: \"Explain the concept of separation of powers for secondary school students. Use simple English, give a practical example, and create eight objective questions.\" The teacher should check that the material reflects the correct legal or civic context being taught.",
 
    "## Economics and Business Studies",
    "AI can help create: definitions; examples; calculations; case studies; business scenarios; revision questions; comparison tables.",
    "Example: \"Explain demand and supply to secondary school students. Use a simple market example, explain the relationship between price and quantity demanded, and create ten objective questions.\" For calculations, always verify the answers.",
 
    "## Religious Studies",
    "AI can help teachers organize: lesson outlines; discussion questions; definitions; comparisons; revision questions; summaries. But religious teaching requires particular care.",
    "The teacher should personally check: scripture references; quotations; interpretation; historical claims; denominational context; theological conclusions. AI should not automatically become the authority for doctrine.",
    "This connects directly to Lesson 1 of this module: AI can organize ideas, but the teacher or minister remains responsible for interpretation and teaching.",
 
    "## Computer Studies and ICT",
    "AI can help teachers create: definitions; coding exercises; digital literacy lessons; algorithm questions; troubleshooting scenarios; revision quizzes; practical exercises.",
    "For example: \"Create a beginner lesson explaining what an algorithm is. Use a familiar everyday example, followed by five practice questions and one simple classroom activity.\" The teacher can then adapt the examples to the students' actual computer environment.",
 
    "## Other Subjects",
    "The same approach can be used across many disciplines. Physics — Formulas, worked examples, conceptual questions, experiments. Chemistry — Definitions, equations, classification exercises, revision questions. Biology — Processes, classifications, diagrams to plan, quizzes.",
    "Home Economics — Nutrition concepts, household management, practical questions. Basic Technology — Tools, materials, processes, safety concepts. Business Studies — Business terms, bookkeeping practice, case studies. Economics — Concept explanations, calculations, scenarios.",
    "Geography — Map-reading questions, climate, resources, population studies. History — Timelines, causes and effects, revision questions. Government — Civic concepts, institutions, discussion questions. Social Studies — Community, family, culture, citizenship, social issues. Religious Studies — Study questions, lesson organization, comparative explanations. Vocational Education — Procedures, terminology, practice questions, checklists.",
    "The principle remains the same: Tell AI what you are teaching, who you are teaching, and what learners need to achieve.",
 
    "## Creating Study Summaries",
    "AI can turn longer teaching material into a revision summary. For example: \"Summarize this lesson on soil erosion for secondary school students. Use five headings, simple English, key definitions, causes, effects, prevention methods, and five revision questions.\"",
    "A good summary should help learners remember the important ideas. A summary should not simply remove words from the original material. It should preserve: essential concepts; important definitions; relationships between ideas; key examples; important qualifications.",
 
    "## Create Multiple Levels of Explanation",
    "One of the most useful teaching applications is asking AI to explain the same idea at different levels. Use: \"Explain this topic in three ways: Level 1 — Beginner: very simple language and everyday examples. Level 2 — Classroom: normal secondary-school explanation. Level 3 — Advanced: more detailed explanation using appropriate subject terminology.\"",
    "This can help teachers identify the appropriate level for their learners.",
 
    "## Age, Language, and Context Matter",
    "A teaching explanation should match the learners. Consider three factors.",
    "AGE — Young learners may need: shorter explanations; familiar examples; simpler vocabulary. Older students may be ready for: technical vocabulary; deeper explanations; more complex examples.",
    "LANGUAGE — If learners struggle with English, ask AI to: use simpler English; explain difficult words; use familiar examples; avoid unnecessary jargon.",
    "CONTEXT — Examples should make sense to the students. For example, a lesson about agriculture may be easier to understand when examples relate to familiar crops, farming practices, markets, or local environments. Context helps students connect abstract knowledge to real life.",
 
    "## Differentiating for Different Learners",
    "Not every student learns at the same pace. AI can help teachers prepare different versions of the same material.",
    "For example: \"Create three versions of this mathematics exercise: Group A: learners who need more support. Group B: learners at the expected level. Group C: learners who need additional challenge. Test the same core concept but vary the difficulty.\"",
    "The teacher must still decide whether the grouping and difficulty are appropriate. AI should assist differentiation—not label students unfairly.",
 
    "## Creating Objective Questions",
    "AI can generate: multiple-choice questions; true/false questions; matching questions; fill-in-the-blank questions; short-answer questions.",
    "Example: \"Create 10 multiple-choice questions on photosynthesis for secondary school beginners. Give four options for each question, identify the correct answer separately, and avoid ambiguous questions.\"",
    "Then check every question. Ask: Is there only one clearly correct answer? Are the distractors reasonable? Is the question testing the intended concept? Is the wording clear? Is the answer key correct?",
 
    "## Creating Essay and Discussion Questions",
    "AI can also create higher-level questions. For example: \"Create five discussion questions about environmental conservation. Make the questions require students to explain, compare, justify, or apply ideas rather than simply recall definitions.\" This encourages deeper learning.",
    "Useful command words include: explain; compare; analyze; describe; justify; evaluate; discuss; apply; distinguish; give reasons.",
 
    "## Creating a Complete Lesson Activity",
    "A teacher could ask: \"Create a 40-minute lesson activity on percentages for secondary school students. Include: a five-minute introduction; a simple explanation; two worked examples; a pair activity; five individual practice questions; an answer key; a five-minute review. Use simple classroom language.\"",
    "This can provide a useful starting structure. But the teacher should adapt it to: available time; classroom size; learner ability; curriculum; available materials.",
 
    "## Using AI to Turn One Lesson into Many Materials",
    "A single lesson can become several resources. For example, after preparing a lesson on fractions, ask AI to create: a one-page summary; ten practice questions; five multiple-choice questions; three word problems; a revision quiz; a homework exercise; a simple explanation for struggling learners.",
    "This can save preparation time. However, all generated materials should be checked for consistency.",
 
    "## The Danger of Incorrect Teaching Materials",
    "This lesson connects directly to Module 04. AI can produce: incorrect calculations; incorrect definitions; invented references; misleading examples; wrong dates; inaccurate historical claims; incorrect scientific explanations; ambiguous questions; incorrect answer keys.",
    "The danger is greater when the material is given to students because an error can become part of their learning. Therefore: NEVER CONFUSE FLUENT WRITING WITH ACCURATE TEACHING. A beautifully written lesson can still be wrong.",
 
    "## The Teacher Review Checklist",
    "Before sharing AI-generated teaching material, ask: 1. ACCURACY — Is the information correct? 2. CURRICULUM — Does it match what I am expected to teach? 3. LEVEL — Is it appropriate for these learners? 4. LANGUAGE — Will the students understand it? 5. CONTEXT — Do the examples make sense to them?",
    "6. COMPLETENESS — Is anything important missing? 7. QUESTIONS — Are the questions clear and valid? 8. ANSWERS — Are the answer keys correct? 9. BIAS — Does the material make unfair assumptions? 10. HUMAN JUDGMENT — Would I personally be comfortable teaching this?",
 
    "## A Reusable Teaching Prompt",
    "Save this template: \"I am teaching [SUBJECT] to [LEARNER LEVEL/AGE]. Topic: [TOPIC]. Learning goal: [WHAT STUDENTS SHOULD UNDERSTAND OR DO]. Current ability: [BEGINNER/INTERMEDIATE/ADVANCED]. Context: [RELEVANT CLASSROOM OR LOCAL CONTEXT].",
    "Create: a simple explanation; key terms and definitions; practical examples; practice questions; an answer key; a short revision summary. Use language appropriate for the learners. Do not invent facts or references. Clearly identify anything that requires verification.\" This is a strong general-purpose teaching prompt.",
 
    "## A Subject-Specific Example",
    "For Mathematics: \"I am teaching Junior Secondary Mathematics to beginner learners. Topic: percentages. Learning goal: Students should be able to calculate simple percentages and apply them to everyday situations. Create a simple explanation, three worked examples, five practice questions, three real-life word problems, and an answer key. Use simple English and gradually increase the difficulty. Check all calculations carefully.\"",
    "For Science: \"I am teaching secondary-school Basic Science. Topic: the water cycle. Create a simple explanation, key terms, a classroom example, five objective questions, three short-answer questions, and a revision summary. Use age-appropriate language and ensure the scientific explanations are accurate.\"",
    "For English: \"I am teaching Junior Secondary English. Topic: subject-verb agreement. Explain the rule simply, give examples, create 15 practice questions with an answer key, and include five questions that require students to correct incorrect sentences.\"",
 
    "## A Better Way to Use AI with Students",
    "AI should not always produce the final answer. Sometimes it is better to use AI to create learning opportunities.",
    "Instead of: \"Solve this mathematics problem for my students.\" try: \"Create three hints that help a student solve this problem without giving the final answer immediately.\"",
    "Instead of: \"Write the student's essay.\" try: \"Create an essay-writing exercise that helps students develop their own introduction and arguments.\"",
    "Instead of: \"Give students the answer.\" try: \"Ask the student three questions that help them discover the answer.\" This changes AI from an answer machine into a learning assistant.",
 
    "## Using AI for Remedial Teaching",
    "If a learner does not understand a topic, the teacher can ask AI for another explanation. For example: \"Explain fractions again to a learner who understands addition and subtraction but struggles with fractions. Avoid technical language and use everyday examples.\"",
    "Then: \"Give three different explanations using different examples.\" The teacher can select the explanation that best fits the learner. This is particularly useful because the teacher does not have to repeat the same explanation in exactly the same way.",
 
    "## Using AI for Revision",
    "Before an examination, a teacher can provide the topics covered and ask: \"Create a revision plan for these topics. Divide the material into five study sessions. For each session, include a short summary, five practice questions, and one self-check activity.\" The teacher can then review and adjust the plan.",
 
    "## Common Mistakes",
    "Mistake 1: Asking AI only for \"notes\" — \"Give me notes on Biology.\" Too vague. Specify: topic; learners; learning goal; format; difficulty.",
    "Mistake 2: Not checking answer keys — An answer key can contain mistakes. Always verify it.",
    "Mistake 3: Ignoring the learners' level — A university-level explanation may be completely unsuitable for a beginner.",
    "Mistake 4: Allowing AI to replace teaching — A generated lesson plan does not understand the classroom. The teacher does.",
    "Mistake 5: Giving students AI-generated work without adaptation — Teaching materials should fit the actual students.",
    "Mistake 6: Treating every subject the same — Mathematics requires calculation checks. Science requires scientific verification. History requires historical verification. Literature requires checking texts and quotations. Religious studies require careful interpretation and source checking. Agriculture may require contextual and local relevance. The review process changes according to the subject.",
 
    "## Practical Exercise 1 — Create a Mathematics Resource",
    "Ask AI: \"Create a beginner worksheet on percentages for secondary school students. Include a short explanation, five worked examples, ten practice questions, and an answer key.\" Review the material. Check every calculation.",
 
    "## Practical Exercise 2 — Create a Science Summary",
    "Ask AI: \"Summarize photosynthesis for secondary school beginners using five headings, simple English, key terms, one everyday analogy, and five revision questions.\" Check the scientific accuracy.",
 
    "## Practical Exercise 3 — Create an English Exercise",
    "Ask AI: \"Create a 15-question English grammar exercise on subject-verb agreement. Use simple sentences and provide an answer key.\" Review the grammar and answers.",
 
    "## Practical Exercise 4 — Create Literature Questions",
    "Choose a literary work that you already teach. Ask AI to create: five comprehension questions; five discussion questions; three essay questions. Then verify every question against the actual text. Do not accept invented quotations or events.",
 
    "## Practical Exercise 5 — Create an Agriculture Revision Sheet",
    "Ask AI: \"Create a revision sheet on soil types for secondary school Agricultural Science. Include definitions, characteristics, advantages, disadvantages, examples, ten objective questions, and an answer key.\" Review the agricultural information and make the examples relevant to your learners.",
 
    "## Practical Exercise 6 — Explain One Topic at Three Levels",
    "Choose any subject. Ask AI: \"Explain [TOPIC] at beginner, classroom, and advanced levels. Keep the central facts consistent but change the vocabulary, depth, and examples.\" Decide which explanation is appropriate for your learners.",
 
    "## Practical Exercise 7 — Turn One Lesson into Five Resources",
    "Give AI a topic you teach. Ask it to create: a lesson summary; a worksheet; five objective questions; three discussion questions; a revision quiz. Review all five resources and check whether they teach the same information consistently.",
 
    "## The Complete Teaching Workflow",
    "Use this workflow whenever AI helps you prepare teaching material: 1. DEFINE — Decide what students need to learn. ↓ 2. PROVIDE CONTEXT — Tell AI the subject, level, topic, and learner needs. ↓ 3. PROMPT — Ask AI to create the material.",
    "↓ 4. REVIEW — Read the complete response. ↓ 5. VERIFY — Check facts, calculations, references, quotations, and answers. ↓ 6. ADAPT — Change the language, examples, difficulty, and context.",
    "↓ 7. PERSONALIZE — Add your own teaching approach and experience. ↓ 8. USE — Teach the material. ↓ 9. OBSERVE — See whether students understand it. ↓ 10. REFINE — Improve the material for the next lesson.",
    "Remember: DEFINE → CONTEXT → PROMPT → REVIEW → VERIFY → ADAPT → PERSONALIZE → USE → REFINE",
 
    "## Subject Review Guide",
    "Different subjects require different checks. Mathematics — Calculations, formulas, answer keys, difficulty. Physics — Formulas, units, calculations, scientific accuracy. Chemistry — Equations, terminology, processes, calculations. Biology — Processes, terminology, classifications. Basic Science — Scientific accuracy, age appropriateness.",
    "English — Grammar, spelling, punctuation, clarity. Literature — Text details, quotations, themes, characters. Agriculture — Technical accuracy, local relevance, terminology. Geography — Facts, maps, terminology, locations. History — Dates, names, events, historical context.",
    "Government — Definitions, institutions, civic/legal context. Economics — Definitions, calculations, examples. Business Studies — Concepts, calculations, terminology. Computer Studies — Technical accuracy, commands, current practices. Religious Studies — References, interpretation, context. Social Studies — Context, fairness, cultural sensitivity.",
 
    "## Key Lesson Principle",
    "The power of AI in education is not simply that it can produce more material. Its real value is that it can help teachers prepare, adapt, explain, practice, revise, and differentiate more efficiently. But efficiency must never replace professional judgment.",
    "A teacher should never ask only, \"Did AI create this?\" Ask: \"Is this correct, appropriate, useful, and suitable for my learners?\"",
  ],
  quiz: [
    {
      id: "teaching-materials-q1",
      prompt: "What is the teacher's primary responsibility when using AI-generated teaching material?",
      options: [
        { id: "a", text: "Send the material immediately" },
        { id: "b", text: "Make sure the material is accurate and appropriate before using it" },
        { id: "c", text: "Allow AI to teach the entire lesson" },
        { id: "d", text: "Remove all human explanations" },
      ],
      correctOptionId: "b",
      explanation: "AI generates, but the teacher reviews and adjusts before students ever see it.",
    },
    {
      id: "teaching-materials-q2",
      prompt: "Which is the strongest teaching prompt?",
      options: [
        { id: "a", text: "\"Teach Mathematics.\"" },
        { id: "b", text: "\"Give me notes.\"" },
        { id: "c", text: "\"Explain percentages to beginner secondary students using simple English, three worked examples, five practice questions, and an answer key.\"" },
        { id: "d", text: "\"Write school work.\"" },
      ],
      correctOptionId: "c",
      explanation: "SUBJECT + TOPIC + LEARNERS + GOAL + LEVEL + FORMAT -- this prompt supplies all of it.",
    },
    {
      id: "teaching-materials-q3",
      prompt: "Why should AI-generated Mathematics answers be checked?",
      options: [
        { id: "a", text: "AI cannot write numbers" },
        { id: "b", text: "AI-generated calculations or answer keys can contain errors" },
        { id: "c", text: "Mathematics cannot be taught with technology" },
        { id: "d", text: "AI only works with English" },
      ],
      correctOptionId: "b",
      explanation: "A wrong answer key can teach students the wrong method -- never distribute unchecked math questions.",
    },
    {
      id: "teaching-materials-q4",
      prompt: "A teacher wants to explain a difficult science topic to beginners. What should the teacher ask AI to do?",
      options: [
        { id: "a", text: "Use the most complicated technical language possible" },
        { id: "b", text: "Explain it at an appropriate level using simple language and relevant examples" },
        { id: "c", text: "Remove all scientific terminology" },
        { id: "d", text: "Give the students the examination answers" },
      ],
      correctOptionId: "b",
      explanation: "Matching language and examples to the learners' level is the core skill this lesson teaches.",
    },
    {
      id: "teaching-materials-q5",
      prompt: "True or False: A well-written AI-generated lesson is automatically a correct lesson.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "Never confuse fluent writing with accurate teaching -- the teacher must still verify the content.",
    },
    {
      id: "teaching-materials-q6",
      prompt: "A Literature teacher receives a quotation from AI. What should the teacher do?",
      options: [
        { id: "a", text: "Assume it is authentic" },
        { id: "b", text: "Publish it immediately" },
        { id: "c", text: "Verify it against the actual literary text" },
        { id: "d", text: "Ask students to trust AI" },
      ],
      correctOptionId: "c",
      explanation: "AI may incorrectly attribute a quotation or invent a detail -- never treat it as authentic until verified.",
    },
    {
      id: "teaching-materials-q7",
      prompt: "Which sequence best describes responsible use of AI for teaching materials?",
      options: [
        { id: "a", text: "Generate → Send → Review" },
        { id: "b", text: "Generate → Review → Verify → Adapt → Use" },
        { id: "c", text: "Generate → Ignore → Send" },
        { id: "d", text: "Ask AI → Let AI decide → Teach" },
      ],
      correctOptionId: "b",
      explanation: "This is the core of the Complete Teaching Workflow -- review and verify always come before use.",
    },
    {
      id: "teaching-materials-q8",
      prompt: "Why should a teacher tell AI the learners' age or level?",
      options: [
        { id: "a", text: "So AI can contact the learners" },
        { id: "b", text: "So AI can choose appropriate vocabulary, examples, and difficulty" },
        { id: "c", text: "So AI can grade every student automatically" },
        { id: "d", text: "So AI can replace the teacher" },
      ],
      correctOptionId: "b",
      explanation: "Age, language, and context all shape what explanation is actually appropriate for the learners.",
    },
    {
      id: "teaching-materials-q9",
      prompt: "Which is an appropriate use of AI for student learning?",
      options: [
        { id: "a", text: "Completing every student's assignment for them" },
        { id: "b", text: "Creating practice questions, hints, explanations, and revision activities" },
        { id: "c", text: "Making students depend on AI for every answer" },
        { id: "d", text: "Removing classroom teaching" },
      ],
      correctOptionId: "b",
      explanation: "AI works best as a learning assistant -- hints and practice, not an answer machine that does the student's work.",
    },
  ],
},
 
    ],
  },
  {
    id: "office-work-records",
    number: 6,
    title: "AI for Office Work & Records",
    strapline: "Order and excellence, done faster.",
    whyItMatters: "Administrative work is full of repeated writing and information sorting. AI can reduce the first-draft burden without removing accountability.",
    outcomes: ["Draft minutes, reports, memos, and formal letters.", "Turn messy notes into categories and simple tables.", "Build reusable templates for repetitive office tasks."],
    exerciseTitle: "Build a reusable office template",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
      {
  id: "minutes-and-reports",
  title: "Reports, minutes, and memos",
  summary: "Move from rough notes to clear, organised office records.",
  duration: "16 min",
  content: [
    "## Why AI Matters in Office Work",
    "Administrative work often contains repetitive tasks: Writing meeting minutes, Preparing reports, Drafting memos, Writing formal letters, Summarising long documents, Sorting information into categories, Creating tables, Preparing presentations, Reformatting information, Turning notes into structured documents, Creating recurring templates.",
    "These tasks can consume significant amounts of time even when the information itself is straightforward. AI can reduce the first-draft burden. Instead of starting with a completely blank document, you can provide the information you already have and ask AI to organise it.",
    "The important distinction: AI should help you move from: MESSY INFORMATION → STRUCTURED DRAFT — not: NO INFORMATION → INVENTED INFORMATION.",
    "For example, if your meeting notes say: \"John will prepare the budget by Friday.\" AI can turn this into a structured action item: Prepare budget, owner John, deadline Friday. But if your notes never mention who is responsible for the budget, AI should not invent an owner.",
 
    "## AI as an Office Assistant",
    "Think of AI as a capable junior administrative assistant. You can give it: Information, Instructions, Context, A desired format, A target audience, Rules to follow. It can then help produce a first draft. But a junior assistant's work still needs supervision. The same principle applies to AI.",
    "The office workflow: RAW INFORMATION → AI DRAFT → HUMAN REVIEW → CORRECTION → APPROVAL → FINAL RECORD. This is one of the most important workflows in this module.",
 
    "## Turning Meeting Notes into Minutes",
    "Meeting minutes normally record what happened during a meeting. Useful sections can include: Meeting title, Date, Time, Location, Attendees, Apologies, Agenda items, Key discussions, Decisions, Action items, Responsible persons, Deadlines, Next meeting, Closing. You do not necessarily need to write all of these manually. You can provide your raw notes to AI and ask it to organise them.",
    "Example raw notes: \"Staff meeting, 5 September. Started 10am. Present: Grace, Peter, Samuel, David. Discussed office internet. Current provider is unreliable. Peter will compare three providers. Report back next Monday. Finance: September office supplies budget approved. Grace to purchase stationery before Friday. Next meeting 12 September, 10am.\"",
    "Useful prompt: \"Turn these rough meeting notes into formal meeting minutes. Use these sections: meeting details, attendees, discussion points, decisions, action items, responsible persons, deadlines, and next meeting. Do not invent information. If something is unclear or missing, mark it as 'Not provided' rather than guessing. Keep the language professional and concise.\" This is much better than: \"Write minutes from this.\" The second prompt does not tell AI what structure or rules to follow.",
 
    "## Getting Better Results from AI",
    "A strong office prompt usually contains: CONTEXT — What type of office work is this? SOURCE INFORMATION — What information should AI use? TASK — What should AI do with it? FORMAT — How should the result be organised? AUDIENCE — Who will read it? CONSTRAINTS — What must AI avoid or preserve?",
    "Example: \"I am preparing minutes for a departmental staff meeting. Using only the notes below, organise the information into formal minutes with sections for attendees, discussions, decisions, action items, owners, and deadlines. Do not add information that is not in the notes. If information is missing, clearly mark it as 'Not provided'. Use professional language and keep the minutes concise.\" This gives AI a clear administrative brief.",
 
    "## Never Allow AI to Invent the Official Record",
    "This is especially important with minutes. AI may sometimes try to make incomplete information sound complete.",
    "For example, your notes say: \"The team discussed the new project.\" AI might produce: \"The team discussed the project's implementation timeline and agreed to begin implementation next month.\" That sounds professional—but if your original notes never said that, the AI has added information. That is unacceptable in an official record.",
    "Remember: Professional wording does not make invented information true. When creating minutes, reports, or records, instruct AI: \"Use only the information provided. Do not infer decisions, names, dates, commitments, or conclusions.\"",
 
    "## Reviewing AI-Generated Minutes",
    "Never circulate AI-generated minutes immediately. Compare them against your original notes. Check: NAMES — Are names correct? DATE — Is the meeting date correct? TIME — Are starting and ending times correct? ATTENDEES — Did AI include only people who actually attended?",
    "DISCUSSIONS — Does the summary accurately represent what was discussed? DECISIONS — Were these actually decisions? ACTION ITEMS — Were these actually assigned? OWNERS — Is the correct person responsible? DEADLINES — Are the dates correct? NEXT MEETING — Is the date and time correct?",
    "Use the simple rule: SOURCE → AI DRAFT → COMPARE → CORRECT → APPROVE",
 
    "## Creating Reports with AI",
    "AI can also help transform information into reports. A report may contain: Title, Introduction, Background, Activities, Findings, Challenges, Results, Recommendations, Conclusion, Next steps.",
    "Example — Suppose an administrator has these notes: \"Community outreach held on Saturday. 82 people attended. Three volunteers handled registration. Main questions were about the new training programme. Five people requested more information. Two registration forms were incomplete.\"",
    "You could ask: \"Turn these notes into a professional one-page activity report. Use the headings: Overview, Attendance, Activities, Key Findings, Challenges, and Next Steps. Use only the information provided. Do not invent explanations or statistics. Make the report suitable for submission to a programme coordinator.\" AI can structure the information without changing its meaning.",
 
    "## Creating Memos with AI",
    "A memo is usually an internal communication. For example: Purpose: Inform staff that the office will close early on Friday. Instead of writing: \"Write a memo about office closing.\" Give AI the complete context.",
    "Better prompt: \"Draft a formal internal memo to all staff informing them that the office will close at 2:00 p.m. on Friday, 18 September, for scheduled electrical maintenance. Ask staff to save their work and shut down office equipment before leaving. Keep it under 150 words. Use a professional but courteous tone.\"",
    "Notice the prompt provides: AUDIENCE + PURPOSE + FACTS + ACTION + LENGTH + TONE",
 
    "## Using AI for Formal Letters",
    "AI can also create first drafts of: Request letters, Invitation letters, Appreciation letters, Response letters, Recommendation drafts, Internal correspondence, Notices, Official communications.",
    "Example prompt: \"Draft a formal letter inviting representatives of local partner organisations to a stakeholder meeting. The meeting will discuss the next phase of our community education programme. Use a respectful and professional tone. Include placeholders for the recipient's name, meeting date, time, location, and contact information. Do not invent any missing details.\"",
    "Why placeholders are useful: Instead of allowing AI to guess, use placeholders like [RECIPIENT NAME], [DATE], [TIME], [VENUE], [CONTACT PERSON]. This makes the document easier to review and personalise.",
 
    "## Turning Messy Notes into Categories",
    "AI is particularly useful for sorting information. Imagine someone gives you: \"Need printer paper. Sarah says the internet is slow. James needs a new office chair. Buy toner. Meeting with supplier Tuesday. Printer making noise. Internet provider should be contacted. Need three new chairs.\"",
    "Instead of manually sorting this information, ask: \"Organise these office notes into categories. Use the categories: Supplies, Equipment/Repairs, Staff Needs, Meetings, and Follow-up Actions. Put each item under the most appropriate category. Do not add information that is not present.\"",
    "The result groups printer paper and toner under Supplies; printer noise and slow internet under Equipment/Repairs; James's chair request and the need for three new chairs under Staff Needs; the supplier meeting under Meetings; and contacting the internet provider under Follow-up. This is much easier to work with.",
 
    "## Turning Information into a Simple Table",
    "AI can also convert unstructured information into tables. For example: \"We have three departments. Finance has 5 staff, Administration has 8, and Operations has 12.\"",
    "Prompt: \"Turn this information into a simple table with the columns Department and Number of Staff. Do not add any departments or numbers.\" Result: a table listing Finance (5), Administration (8), and Operations (12). This becomes particularly useful when preparing reports, spreadsheets, presentations, and management summaries.",
 
    "## Creating Downloadable Word Documents",
    "Many AI tools can create files rather than only displaying text. If your AI tool supports file generation, you can request a downloadable Word document.",
    "Example prompt: \"Create this report as a professionally formatted Word document (.docx). Include the title, headings, tables, and recommendations. Use a clean professional layout and make the document easy to edit.\"",
    "A good workflow is: GENERATE → DOWNLOAD → OPEN → REVIEW → EDIT → SAVE. Do not assume that because the file downloaded successfully, its contents are correct. Open the document and check it.",
    "Useful Word-document requests: You can ask AI to: Create a .docx report, Format headings, Add tables, Create a cover page, Add page numbers, Structure meeting minutes, Create a formal memo, Create a letter, Combine multiple sections into one document.",
 
    "## Creating Excel Spreadsheets with AI",
    "AI can also help create spreadsheets when the tool supports spreadsheet/file generation. For example, you could ask: \"Create an Excel spreadsheet containing these office expenses. Use the columns Date, Description, Category, Amount, and Notes. Add a total at the bottom and format the Amount column as currency. Do not invent missing information.\" AI may produce a downloadable .xlsx file.",
    "Excel is useful for: Expense records, Attendance registers, Inventory lists, Staff schedules, Contact lists, Project trackers, Budget tables, Action-item trackers, Monthly reports, Data summaries.",
    "Example: Action-item spreadsheet — \"Create an Excel action tracker from these meeting notes. Use columns: Action Item, Responsible Person, Deadline, Status, and Notes. Leave Status blank for items where no status was provided.\" This is a powerful combination: AI organises → Excel stores → Human updates",
 
    "## Important Excel Safety Rule",
    "Do not allow AI to silently invent numbers. For financial or operational records, check: Amounts, Dates, Names, Formulas, Totals, Categories, Currency, Missing values.",
    "If the spreadsheet affects money, reporting, payroll, inventory, or management decisions, review it carefully before using it.",
 
    "## Using AI to Create PowerPoint Slides",
    "AI can also help turn a report, lesson, proposal, or meeting information into presentation slides. Instead of designing every slide from an empty PowerPoint file, ask AI to create a slide structure first.",
    "Example prompt: \"Turn this project report into a 10-slide PowerPoint presentation for senior management. Create a clear title slide, executive summary, objectives, activities, results, challenges, recommendations, next steps, and conclusion. Keep each slide concise. Use short bullet points rather than paragraphs.\"",
    "AI can then create a slide outline such as: Title, Executive Summary, Project Objectives, Activities, Participation, Key Results, Challenges, Lessons Learned, Recommendations, Next Steps.",
 
    "## Making Better PowerPoint Slides",
    "A common mistake is asking AI to put the entire report onto slides. A presentation is not a document copied onto a screen. Instead, ask AI to: Keep slides concise, Use short bullet points, Separate major ideas, Highlight important numbers, Suggest charts where appropriate, Suggest visuals, Create speaker notes separately, Keep a consistent structure.",
    "Better presentation prompt: \"Create a 12-slide presentation from this report. Each slide should communicate one main idea. Use no more than 5 short bullet points per slide. Highlight important statistics. Suggest an appropriate visual or chart where useful. Put additional explanation in speaker notes rather than overcrowding the slides. Keep the tone professional and suitable for an executive audience.\"",
 
    "## AI Can Help With the Whole Office Workflow",
    "Consider this example. You hold a staff meeting. You have rough notes. AI can help you move through the entire process:",
    "STEP 1 — RAW NOTES: Provide your meeting notes. ↓ STEP 2 — MINUTES: Ask AI to organise the notes into formal minutes. ↓ STEP 3 — ACTION TABLE: Ask AI to extract action items, owners, and deadlines.",
    "↓ STEP 4 — EXCEL: Ask AI to create an action tracker. ↓ STEP 5 — MEMO: Ask AI to create a short internal memo summarising important decisions. ↓ STEP 6 — POWERPOINT: Ask AI to turn the major decisions and next steps into presentation slides.",
    "↓ STEP 7 — REVIEW: Compare everything against the original notes. ↓ STEP 8 — APPROVE: The responsible human approves the final materials. This demonstrates the real value of AI: One set of information can become several useful office outputs.",
 
    "## One Source, Multiple Outputs",
    "Suppose your original information is a project report. You can ask AI to transform it into: REPORT → EXECUTIVE SUMMARY → MEMO → EXCEL TRACKER → POWERPOINT → EMAIL. This can dramatically reduce repetitive administrative work.",
    "But there is an important principle: Transformation is useful only when the underlying information remains accurate. If the original information is wrong, AI can make the wrong information look more organised.",
 
    "## Reusable Office Prompt Template",
    "Save this template for future office tasks: \"I am working as [ROLE] in [OFFICE/ORGANISATION]. Source information: [PASTE YOUR NOTES/DATA]. Task: [WHAT YOU WANT AI TO DO]. Audience: [WHO WILL READ/USE IT]. Format: [REPORT/MEMO/MINUTES/TABLE/LETTER/PRESENTATION]. Tone: [FORMAL/PROFESSIONAL/COURTEOUS/CONCISE]. Requirements: [LENGTH/HEADINGS/TABLES/OTHER RULES].",
    "Important: Use only the information provided. Do not invent names, dates, numbers, decisions, quotations, or responsibilities. Clearly identify anything missing or uncertain.\" This is a reusable office-work prompt.",
 
    "## Common Office AI Mistakes",
    "Mistake 1 — Giving AI too little information: \"Write my report.\" Better: Give the source information, purpose, audience, structure, and constraints.",
    "Mistake 2 — Allowing AI to fill gaps: If a date is missing, AI should not invent one. Ask: \"Leave missing information as a placeholder.\"",
    "Mistake 3 — Not checking the original notes: AI-generated minutes can contain subtle errors. Always compare the draft with the source.",
    "Mistake 4 — Confusing professional language with accuracy: A beautifully written report can still contain incorrect information. Professional ≠ verified.",
    "Mistake 5 — Overloading PowerPoint slides: Do not simply paste an entire report into PowerPoint. Ask AI to identify the key points and move supporting explanations into speaker notes.",
    "Mistake 6 — Trusting generated spreadsheets automatically: Check formulas, totals, dates, categories, and numbers.",
    "Mistake 7 — Sharing confidential information carelessly: Before putting office information into an AI service, consider whether it contains: Passwords, Financial account details, Personal identification information, Private employee information, Confidential client information, Sensitive organisational information, Information protected by policy or law. Use approved AI tools and follow your organisation's data-handling rules.",
 
    "## The Efficiency Principle",
    "AI is most useful when it removes repetitive first-draft work, not when it removes human accountability. Think about your work this way:",
    "BEFORE AI: Collect → Type → Format → Rewrite → Organise → Format again → Review. WITH RESPONSIBLE AI: Collect → Prompt → Generate → Review → Correct → Approve.",
    "The goal is not simply to work faster. The goal is: FASTER + CLEARER + MORE CONSISTENT + STILL ACCOUNTABLE",
  ],
  quiz: [
    {
      id: "minutes-and-reports-q1",
      prompt: "What is the most appropriate role of AI when preparing official meeting minutes?",
      options: [
        { id: "a", text: "Create information that is missing" },
        { id: "b", text: "Decide what the meeting must have meant" },
        { id: "c", text: "Organise the information provided into a structured draft" },
        { id: "d", text: "Replace the person responsible for the official record" },
      ],
      correctOptionId: "c",
      explanation: "AI should help you move from messy information to a structured draft -- not from no information to invented information.",
    },
    {
      id: "minutes-and-reports-q2",
      prompt: "If the meeting notes do not contain a deadline, what should AI do?",
      options: [
        { id: "a", text: "Guess a reasonable deadline" },
        { id: "b", text: "Create a deadline based on previous meetings" },
        { id: "c", text: "Mark the information as missing or use a placeholder" },
        { id: "d", text: "Remove the action item completely" },
      ],
      correctOptionId: "c",
      explanation: "AI should mark missing information as \"Not provided\" rather than guessing or inventing it.",
    },
    {
      id: "minutes-and-reports-q3",
      prompt: "True or False: A professionally written AI report is automatically an accurate report.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "Professional wording does not make invented or incorrect information true -- professional does not mean verified.",
    },
    {
      id: "minutes-and-reports-q4",
      prompt: "Which sequence represents responsible use of AI for official records?",
      options: [
        { id: "a", text: "AI generates → immediately send" },
        { id: "b", text: "AI generates → human reviews → corrects → approves" },
        { id: "c", text: "Human writes → AI changes all facts → send" },
        { id: "d", text: "AI generates → AI approves → send" },
      ],
      correctOptionId: "b",
      explanation: "RAW INFORMATION → AI DRAFT → HUMAN REVIEW → CORRECTION → APPROVAL → FINAL RECORD is the office workflow this lesson teaches.",
    },
    {
      id: "minutes-and-reports-q5",
      prompt: "Which prompt is most useful for creating meeting minutes?",
      options: [
        { id: "a", text: "\"Write good minutes.\"" },
        { id: "b", text: "\"Make my notes better.\"" },
        { id: "c", text: "\"Organise these notes into minutes and make up anything missing.\"" },
        { id: "d", text: "\"Turn these notes into formal minutes with sections for discussions, decisions, action items, owners, and deadlines. Use only the information provided and mark missing information clearly.\"" },
      ],
      correctOptionId: "d",
      explanation: "This prompt specifies structure and explicitly forbids inventing missing information -- a clear administrative brief.",
    },
    {
      id: "minutes-and-reports-q6",
      prompt: "What is one useful way to use AI with Excel?",
      options: [
        { id: "a", text: "Allow AI to invent missing financial figures" },
        { id: "b", text: "Use AI to organise provided information into a spreadsheet" },
        { id: "c", text: "Avoid checking formulas because AI created them" },
        { id: "d", text: "Replace all financial controls with AI" },
      ],
      correctOptionId: "b",
      explanation: "AI organises the information you provide into a spreadsheet -- it should never silently invent numbers or replace financial review.",
    },
    {
      id: "minutes-and-reports-q7",
      prompt: "When creating PowerPoint slides from a long report, what is generally better?",
      options: [
        { id: "a", text: "Copy the entire report onto the slides" },
        { id: "b", text: "Put every sentence on the slides" },
        { id: "c", text: "Give each slide a main idea and use concise points" },
        { id: "d", text: "Remove all supporting information" },
      ],
      correctOptionId: "c",
      explanation: "A presentation isn't a document copied onto a screen -- keep slides concise and move supporting detail into speaker notes.",
    },
  ],
},
 
      {
  id: "official-letters",
  title: "Official correspondence",
  summary: "Draft formal letters and responses with an appropriate tone.",
  duration: "20 min",
  content: [
    "## What Is Official Correspondence?",
    "Official correspondence refers to formal communication produced for an organisation, office, institution, ministry, business, school, church, government agency, or other professional setting.",
    "Examples include: Application letters, Cover letters, Request letters, Invitation letters, Response letters, Complaint responses, Appreciation letters, Recommendation letters, Appointment letters, Introduction letters, Permission requests, Notification letters, Confirmation letters, Follow-up letters, Official emails, Internal memos, Notices, Circulars.",
    "The exact structure depends on the purpose and audience. AI can help draft these documents, but the user must still verify the information before sending them.",
 
    "## The Five Things AI Needs",
    "A strong official-correspondence prompt should normally provide:",
    "1. PURPOSE — Why are you writing? Examples: To request, To invite, To inform, To respond, To apologise, To confirm, To recommend, To acknowledge.",
    "2. RECIPIENT — Who will receive it? Examples: A manager, A government official, A customer, A school administrator, A partner organisation, A church member, A supplier.",
    "3. KEY FACTS — What information must be included? Names, dates, locations, reference numbers, events, amounts, deadlines, and other relevant facts.",
    "4. TONE — How should the letter sound? Examples: Formal, Professional, Respectful, Courteous, Warm, Firm but polite, Concise.",
    "5. NEXT STEP — What should the recipient do? Examples: Confirm attendance, Provide information, Approve a request, Make a payment, Attend a meeting, Respond by a particular date, Contact the office.",
    "Memory rule: PURPOSE + RECIPIENT + FACTS + TONE + ACTION",
 
    "## Example: Request Letter",
    "A weak prompt: \"Write a letter asking for something.\" AI does not know enough.",
    "A stronger prompt: \"Draft a formal letter to the Director of Administration requesting approval to purchase three office computers. Explain that the existing computers are outdated and affecting administrative work. Keep the letter under 300 words. Use a respectful and professional tone. End by requesting approval for the purchase.\"",
    "This gives AI: WHO → WHY → WHAT → HOW → ACTION",
 
    "## Example: Response Letter",
    "Suppose an organisation receives a request from another organisation. You can give AI the relevant information: \"Draft a formal response to an organisation that requested permission to use our conference hall. Thank them for the request and explain that the hall is unavailable on their requested date but may be available on 22 October. Ask them to confirm whether the alternative date is suitable. Keep the response concise and courteous.\"",
    "AI can create the first draft. The human then checks: Organisation name, Recipient's name, Dates, Availability, Commitments, Contact information.",
 
    "## Choosing the Right Document Format",
    "One important office skill is knowing what type of document should be created. Do not simply ask AI to \"make a document.\" Tell it the format you need.",
    "A formal request suits an official letter. An internal instruction suits a memo. A meeting record suits minutes. Detailed activity information suits a report. Short public information suits a notice. A repeated announcement suits a circular.",
    "Data and calculations suit an Excel spreadsheet. A presentation to an audience suits PowerPoint. Structured information collection suits a form. A long editable document suits a Word document. A fixed final document suits a PDF. Quick internal communication suits an email or message. The content may be similar, but the format changes how people use the information.",
 
    "## Word Document vs PDF",
    "Understanding the difference is important.",
    "Word / DOCX — A .docx document is normally best when you need to: Edit the document, Add or remove text, Change formatting, Collaborate with others, Continue working on a draft, Maintain an editable office record.",
    "PDF — A .pdf is normally useful when you want to: Share a finished document, Preserve the intended layout, Print the document, Reduce accidental editing, Submit a final version, Send a document that should look the same on different devices.",
    "Simple rule: DOCX = WORKING/EDITABLE. PDF = FINAL/SHAREABLE. This is not an absolute rule, but it is a useful starting point.",
 
    "## Asking AI for a Downloadable Word Document",
    "Some AI tools can generate actual downloadable files. Instead of asking only: \"Write this letter.\" You can ask: \"Draft this official letter and create it as a downloadable Word document (.docx). Use a professional layout with a clear heading, date, recipient information, subject line, body, closing, and signature placeholder. Keep the wording concise and respectful.\"",
    "If the AI tool supports document generation, it may provide a downloadable .docx file.",
    "After downloading, do not immediately send it. Use: DOWNLOAD → OPEN → REVIEW → EDIT → SAVE → SEND. Check: Spelling, Names, Titles, Dates, Addresses, Subject, Facts, Commitments, Formatting, Signature, Attachments.",
 
    "## Creating a Downloadable Excel File",
    "Excel is better when the information is primarily structured data. For example, suppose an office has a list of correspondence with dates, recipients, subjects, and statuses.",
    "Instead of manually creating the spreadsheet, you can ask AI: \"Create a downloadable Excel spreadsheet (.xlsx) for tracking official correspondence. Use the columns: Date, Recipient, Organisation, Subject, Reference Number, Status, Follow-up Date, and Notes. Create a clean professional table. Leave fields blank when information is not provided. Do not invent data.\" If supported, AI can generate the spreadsheet.",
    "Important: Always inspect: Dates, Names, Status, Numbers, Formulas, Sorting, Missing values.",
 
    "## Document Conversion: PDF to Word",
    "Sometimes you receive a PDF but need to edit its contents. If your AI tool supports document uploads and conversion, you can upload the PDF and request: \"Convert this PDF into an editable Word document (.docx). Preserve the headings, paragraphs, tables, and overall structure as closely as possible. Do not change the wording.\"",
    "This is particularly useful for: Existing reports, Forms, Letters, Policies, Meeting documents, Office templates.",
    "Important limitation: PDFs can contain: Selectable text, Scanned images, Complex tables, Multiple columns, Signatures, Stamps, Forms, Graphics. A PDF-to-Word conversion may therefore change formatting. Always inspect the converted document.",
 
    "## PDF to Word Workflow",
    "Use: UPLOAD PDF → CONVERT → DOWNLOAD DOCX → OPEN → COMPARE → CORRECT",
    "Pay particular attention to: Tables, Page breaks, Headings, Numbers, Dates, Special characters, Headers and footers, Names, Signatures, Formatting. If the PDF is a scan rather than normal text, the system may need OCR to recognise the words.",
 
    "## Converting Word Back to PDF",
    "Once you have finished editing the Word document, you may need a final PDF. If the AI tool supports conversion, you can request: \"Convert this completed Word document to PDF. Preserve the page layout, headings, tables, spacing, and formatting.\"",
    "The workflow becomes: PDF → DOCX → EDIT → REVIEW → PDF. This is useful when you receive a document that needs editing but must eventually be submitted or shared as a PDF.",
 
    "## A Critical Conversion Rule",
    "Never assume: Converted = Identical. After conversion, inspect the result.",
    "For example: A table may move to another page. A heading may become misaligned. A signature may disappear. A page break may change. A font may be substituted. A scanned page may not be recognised correctly.",
    "Therefore: CONVERT → INSPECT → CORRECT → FINALISE",
 
    "## Controlling Word Count",
    "AI is especially useful when you need a document to stay within a specific length. For example: 100-word application, 250-word cover letter, 500-word report, 1-page memo, 300-word response.",
    "You can ask: \"Draft this application letter in approximately 250 words. Keep the important facts, make the language professional, and avoid unnecessary repetition.\" You can also ask AI to count an existing document: \"Count the words in this application. Give me the total word count and identify sentences that can be shortened without removing important information.\"",
 
    "## Word Count Is Not the Same as Page Count",
    "This is important. A 500-word document does not always occupy the same number of pages. Page length depends on: Font, Font size, Line spacing, Margins, Paragraph spacing, Tables, Headings, Page size.",
    "Therefore, if an organisation says: \"Submit a 2-page application.\" Do not assume that exactly 500 words will always produce two pages. Ask AI to help with both: WORD COUNT + DOCUMENT FORMAT",
 
    "## Writing Applications with AI",
    "AI can help with applications for: Jobs, Scholarships, Training programmes, Grants, Conferences, Membership, Partnerships, Academic programmes. But the information must come from the applicant.",
    "Strong prompt: \"Help me draft a professional application letter using the information below. Keep it under 400 words. Highlight my relevant experience without exaggerating or inventing qualifications. Use a confident but respectful tone. Follow the structure: introduction, purpose, relevant experience, motivation, and closing request.\"",
    "The instruction: \"Do not invent qualifications or experience.\" is particularly important.",
 
    "## Improving an Existing Application",
    "You can also give AI an existing application and ask it to improve the writing without changing the facts.",
    "Prompt: \"Improve the grammar, clarity, structure, and professionalism of this application letter. Keep all facts, qualifications, dates, organisations, and achievements exactly as provided. Do not add achievements that are not stated. Keep the final version under 350 words.\"",
    "This is safer than: \"Make my application impressive.\" The second prompt may encourage unnecessary exaggeration.",
 
    "## Creating Forms with AI",
    "AI can also help design forms for collecting structured information. Examples: Staff information forms, Event registration forms, Customer feedback forms, Training registration forms, Equipment request forms, Leave request forms, Complaint forms, Volunteer registration forms, Attendance forms, Evaluation forms.",
    "Example prompt: \"Create a staff training registration form. Include fields for full name, department, job role, phone number, email address, preferred training date, previous experience with the subject, and accessibility requirements. Use clear labels and group related questions together.\"",
    "AI can provide: The form structure, Questions, Field types, Instructions, Required/optional field suggestions.",
 
    "## Designing Better Forms",
    "A good form should be: CLEAR — People should understand what each field asks. RELEVANT — Do not collect unnecessary information. CONSISTENT — Use consistent formats for dates, phone numbers, and other information.",
    "EASY TO COMPLETE — Avoid unnecessarily complicated questions. PURPOSE-DRIVEN — Every question should have a reason. For example, if you do not need someone's home address, do not collect it simply because a form template contains an address field.",
 
    "## Turning a Form into Different Formats",
    "AI can help you design the same form for different uses. For example: Training Registration Form can become: Printable Word form, PDF form, Online form structure, Excel registration sheet, Google Forms-style question list, Mobile-friendly questionnaire.",
    "Prompt: \"Create this training registration form in three versions: a printable Word form, an online form question list, and an Excel data-entry structure. Keep the questions identical across all three versions.\" This reduces repetitive work.",
 
    "## Creating Templates for Repeated Office Tasks",
    "One of the biggest benefits of AI is creating reusable templates. Suppose your office sends the same type of response every week. Instead of generating it from scratch each time, create a template.",
    "Example: \"Create a reusable official response-letter template for acknowledging receipt of correspondence. Include placeholders for recipient name, organisation, reference number, date received, subject, response deadline, contact person, and signature. Use professional and respectful language.\"",
    "You might then have a reusable structure with the date, recipient name, organisation, and reference number at the top, a subject line, a greeting using the recipient's title or name, the main message, the required next step, and a closing with name, title, and organisation. Now the same structure can be reused.",
 
    "## Use Placeholders Instead of Guessing",
    "Placeholders are extremely useful in official documents. Examples: [RECIPIENT NAME], [ORGANISATION], [DATE], [REFERENCE NUMBER], [AMOUNT], [VENUE], [DEADLINE], [CONTACT PERSON], [PHONE NUMBER], [EMAIL ADDRESS], [SIGNATURE].",
    "Prompt: \"Where information has not been provided, use clearly labelled placeholders instead of guessing.\" This one instruction can prevent many administrative errors.",
 
    "## Creating Multiple Versions",
    "AI can create different versions of the same correspondence. For example: Version 1 — Formal, for a government office or senior official. Version 2 — Professional, for a business partner. Version 3 — Warm, for a familiar community or church audience.",
    "Prompt: \"Create three versions of this message: formal, professional, and warm. Preserve all facts and commitments exactly. Do not change the requested action.\" This allows you to choose the appropriate communication style.",
 
    "## Making a Letter Shorter",
    "Suppose an AI-generated letter is too long. Instead of starting over, refine it: \"Reduce this letter to approximately 250 words. Preserve the purpose, names, dates, commitments, and requested action. Remove repetition and unnecessary background information.\" This follows the Module 03 principle: PROMPT → REVIEW → REFINE",
 
    "## Making a Letter More Formal",
    "You can also ask: \"Make this letter more formal and professional. Keep the meaning, facts, dates, names, and requested action unchanged. Do not make the language unnecessarily complicated.\" Notice the instruction: Keep the meaning unchanged. That helps prevent AI from rewriting the message into something different.",
 
    "## Checking a Letter Before Sending",
    "Before sending official correspondence, use this checklist: NAME — Is the recipient's name correct? TITLE — Is the person's professional or official title correct? ORGANISATION — Is the organisation correctly named? DATE — Is the date correct? SUBJECT — Does the subject accurately describe the letter?",
    "FACTS — Are all important claims correct? COMMITMENTS — Did the letter promise something the organisation did not approve? ACTION — Is it clear what the recipient should do? CONFIDENTIALITY — Does it contain information that should not be shared?",
    "ATTACHMENTS — Are referenced attachments actually included? CONTACT DETAILS — Are phone numbers and email addresses correct? SIGNATURE — Is the correct person authorised to sign?",
 
    "## Confidentiality",
    "Official correspondence can contain sensitive information. Before giving information to an AI service, consider whether it includes: Personal information, Employee information, Customer information, Financial information, Private correspondence, Passwords, Identification numbers, Confidential business information, Internal decisions, Sensitive case information.",
    "Follow your organisation's AI and data-handling policies. If the information is sensitive, use an approved AI environment or remove unnecessary identifying information where appropriate.",
 
    "## A Powerful Official Correspondence Prompt",
    "Save this prompt as a reusable template: \"I need to prepare a [DOCUMENT TYPE]. Purpose: [WHY I AM WRITING]. Recipient: [WHO WILL RECEIVE IT]. Key facts: [FACTS]. Required action: [WHAT THE RECIPIENT SHOULD DO].",
    "Tone: [FORMAL/PROFESSIONAL/COURTEOUS/WARM/FIRM]. Length: [WORD COUNT OR PAGE LIMIT]. Format: [LETTER/MEMO/EMAIL/REPORT]. Requirements: [HEADINGS/REFERENCE NUMBER/OTHER REQUIREMENTS].",
    "Use only the information provided. Do not invent names, dates, titles, qualifications, amounts, commitments, or other facts. Use placeholders for missing information. Keep the document concise, clear, and respectful.\" This prompt can be adapted for many office situations.",
 
    "## From Idea to Finished Document",
    "A practical AI-assisted correspondence workflow is: STEP 1 — DEFINE: What document do you need? STEP 2 — COLLECT: Gather the correct facts. STEP 3 — PROMPT: Tell AI the purpose, recipient, facts, tone, format, and action. STEP 4 — GENERATE: Create the first draft.",
    "STEP 5 — REVIEW: Check the wording and information. STEP 6 — REFINE: Ask AI to correct length, tone, structure, or clarity. STEP 7 — FORMAT: Choose Word, Excel, PDF, form, or presentation as appropriate. STEP 8 — DOWNLOAD: Obtain the editable or final file where supported.",
    "STEP 9 — INSPECT: Open the actual file and check the layout. STEP 10 — APPROVE: The authorised human approves the document. STEP 11 — SEND: Only then should it be sent or officially circulated.",
 
    "## The Bigger Productivity Lesson",
    "AI does not only help you write faster. It can help you move information through an entire administrative process.",
    "For example: A request leads AI to draft an official letter, which becomes a Word document. A human edits and approves it, and it becomes a PDF sent to the recipient. A response is received, AI helps summarise the response, and the summary goes into an Excel tracker with a follow-up date recorded.",
    "This is where AI becomes an office productivity system, rather than merely a writing tool.",
  ],
  quiz: [
    {
      id: "official-letters-q1",
      prompt: "What five pieces of information are especially useful when asking AI to draft official correspondence?",
      options: [
        { id: "a", text: "Colour, font, logo, image, animation" },
        { id: "b", text: "Purpose, recipient, key facts, tone, required action" },
        { id: "c", text: "Password, username, address, PIN, signature" },
        { id: "d", text: "Only the recipient and date" },
      ],
      correctOptionId: "b",
      explanation: "PURPOSE + RECIPIENT + FACTS + TONE + ACTION is the memory rule this lesson builds around.",
    },
    {
      id: "official-letters-q2",
      prompt: "Which format is generally most appropriate for a detailed editable office document?",
      options: [
        { id: "a", text: "DOCX" },
        { id: "b", text: "JPG" },
        { id: "c", text: "MP3" },
        { id: "d", text: "PNG" },
      ],
      correctOptionId: "a",
      explanation: "DOCX = WORKING/EDITABLE -- it's the right format when the document needs further editing or collaboration.",
    },
    {
      id: "official-letters-q3",
      prompt: "Which format is generally useful when sharing a completed document while preserving its layout?",
      options: [
        { id: "a", text: "TXT" },
        { id: "b", text: "PDF" },
        { id: "c", text: "CSV" },
        { id: "d", text: "MP4" },
      ],
      correctOptionId: "b",
      explanation: "PDF = FINAL/SHAREABLE -- it preserves layout and looks the same across devices.",
    },
    {
      id: "official-letters-q4",
      prompt: "True or False: If AI does not know a recipient's title, it is acceptable for it to guess one.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "Use a placeholder or provide the correct information -- AI should never guess missing details in official correspondence.",
    },
    {
      id: "official-letters-q5",
      prompt: "You need to track recipients, correspondence dates, reference numbers, statuses, and follow-up dates. Which format is most suitable?",
      options: [
        { id: "a", text: "Excel spreadsheet" },
        { id: "b", text: "PowerPoint presentation" },
        { id: "c", text: "Audio recording" },
        { id: "d", text: "Image" },
      ],
      correctOptionId: "a",
      explanation: "Excel is best suited for structured, trackable data like correspondence logs.",
    },
    {
      id: "official-letters-q6",
      prompt: "What should you do after converting a PDF to Word?",
      options: [
        { id: "a", text: "Send it immediately" },
        { id: "b", text: "Assume the conversion is perfect" },
        { id: "c", text: "Open and compare the converted document with the original" },
        { id: "d", text: "Delete the original PDF" },
      ],
      correctOptionId: "c",
      explanation: "Never assume converted = identical -- tables, headings, and formatting can shift during conversion.",
    },
    {
      id: "official-letters-q7",
      prompt: "You need to create a 250-word application letter. Which instruction is most useful?",
      options: [
        { id: "a", text: "\"Make it impressive.\"" },
        { id: "b", text: "\"Write anything suitable.\"" },
        { id: "c", text: "\"Keep it under approximately 250 words while preserving the important facts and qualifications.\"" },
        { id: "d", text: "\"Make it as long as necessary.\"" },
      ],
      correctOptionId: "c",
      explanation: "A specific length constraint paired with a preservation instruction gives AI a clear, checkable target.",
    },
    {
      id: "official-letters-q8",
      prompt: "What is the main purpose of using placeholders such as [DATE] and [RECIPIENT NAME]?",
      options: [
        { id: "a", text: "To make the document look unfinished" },
        { id: "b", text: "To prevent AI from guessing missing information" },
        { id: "c", text: "To make the document longer" },
        { id: "d", text: "To remove the need for review" },
      ],
      correctOptionId: "b",
      explanation: "Placeholders make missing information visible and reviewable instead of letting AI invent it silently.",
    },
    {
      id: "official-letters-q9",
      prompt: "True or False: An AI-generated official letter should be reviewed for names, titles, dates, commitments, and confidential information before sending.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "a",
      explanation: "This is exactly the pre-send checklist the lesson walks through -- review is never optional for official correspondence.",
    },
    {
      id: "official-letters-q10",
      prompt: "Which workflow is the most responsible?",
      options: [
        { id: "a", text: "Prompt → Send" },
        { id: "b", text: "Generate → Send → Review" },
        { id: "c", text: "Generate → Review → Refine → Format → Approve → Send" },
        { id: "d", text: "Generate → Let AI approve → Send" },
      ],
      correctOptionId: "c",
      explanation: "This mirrors the full idea-to-finished-document workflow -- review, refinement, and human approval all precede sending.",
    },
  ],
},
 
     {
  id: "organise-and-template",
  title: "Organise information and reuse patterns",
  summary: "Summarise, categorise, tabulate, and standardise recurring work.",
  duration: "20 min",
  content: [
    "## Why This Lesson Matters",
    "Office work often becomes difficult not because the information is complicated, but because the information is messy. You may have: handwritten meeting notes; names written in different formats; several pages of information; lists copied from WhatsApp; expenses written in no particular order; customer information mixed together; tasks scattered across messages; repeated requests that require almost the same response; attendance information; inventory lists; staff records; event registrations; questions collected from different people.",
    "AI can help turn this information into something easier to understand and manage. Instead of spending a long time manually arranging information, you can give AI the information and explain how you want it organised.",
    "The important principle is: AI can organise information, but the human must make sure the organisation is accurate.",
 
    "## What Does \"Organise Information\" Mean?",
    "Organising information means taking information that is difficult to read or manage and putting it into a useful structure. For example, imagine notes like: \"John paid 15,000 for registration. Mary has not paid. Peter paid 10,000. Sarah asked whether accommodation is available. David paid 15,000 but still needs to submit his form. Mary also asked about the training date.\" This is understandable, but it is not well organised.",
    "You could ask AI: \"Organise the following training registration notes into a simple table with these columns: Name, Payment Status, Amount Paid, Form Status, Question or Follow-up. Do not invent missing information. If something is not provided, write 'Not provided.'\"",
    "AI could produce a table showing John as paid ₦15,000 with form status not provided; Mary as not paid, ₦0, form status not provided, asking about the training date; Peter as partially paid ₦10,000; Sarah with payment and form status not provided, asking about accommodation; and David as paid ₦15,000 but form not submitted.",
    "The value is not simply that AI created a table. The value is that the information is now easier to review, filter, update, and act upon.",
 
    "## AI Can Categorise Information",
    "Categorising means putting similar items together. For example, suppose an office receives requests like: printer is not working; staff member needs leave; customer wants price information; office needs more paper; computer is slow; staff member requests salary information; customer complained about delivery; meeting room needs repair.",
    "You could ask AI to categorise them: \"You are helping an office administrator organise incoming requests. Categorise the following items into logical groups such as IT, Staff/HR, Customers, Supplies, and Repairs. Do not change the meaning of any item. If an item does not clearly fit a category, place it under 'Needs Review.'\"",
    "AI may group the printer and computer issues under IT; the leave request and salary question under Staff/HR; the price question and delivery complaint under Customers; the paper request under Supplies; and the meeting room repair under Repairs. This is much easier to work with than the original list.",
 
    "## Summarising Large Amounts of Information",
    "AI can also reduce a long document or collection of notes into a shorter version. However, there is an important difference between shortening information and removing important information. A good summary should preserve the information that matters.",
    "Weak Prompt: \"Summarise this.\" This does not tell AI what is important.",
    "Better Prompt: \"Summarise these meeting notes for a busy manager. Include: Main decisions, Important issues, Action items, Person responsible for each action, Deadlines, Items that still need a decision. Do not invent information that is not present in the notes.\" This gives AI a clear job.",
 
    "## Different Types of Summaries",
    "There is no single \"correct\" summary. You can ask for different summaries depending on what you need.",
    "Executive Summary, for a manager or senior leader: \"Summarise this report in no more than 250 words for a senior administrator. Focus on the main findings, important problems, decisions required, and recommended next steps.\"",
    "Simple Summary, for someone who wants the information explained plainly: \"Explain the main points of this report in simple English. Use short paragraphs and bullet points. Avoid unnecessary technical language.\"",
    "Action Summary, for people who need to know what to do: \"Extract the action items from these notes. Create a table with Task, Responsible Person, Deadline, and Status. Do not invent missing details.\"",
    "Decision Summary, for management: \"Identify the decisions made in these meeting notes and separate them from suggestions, discussions, and unresolved issues.\" This teaches an important skill: Do not simply ask AI to summarise. Tell AI what kind of summary you need.",
 
    "## Turning Information Into Tables",
    "Tables are particularly useful for office work because they make information easier to compare. You can ask AI to create tables for: attendance; expenses; customer records; action items; inventory; event registration; staff information; project tasks; complaints; equipment; appointments; training participants; follow-up activities.",
    "Example: Expense Notes — Suppose you have: \"Transport 5,000. Printing 12,000. Refreshments 18,500. Stationery 7,000. Transport to Abuja 8,000. Printing 4,500.\"",
    "Ask: \"Convert these expense notes into a table with Date, Category, Description, and Amount. The dates were not provided, so do not invent them. Group similar expense categories where appropriate, but preserve every individual transaction.\" The AI can organise the information without pretending to know information that was never supplied.",
 
    "## Important Rule: Do Not Let AI Invent Missing Information",
    "This is especially important when organising official records. Suppose you provide: \"John attended the meeting. Mary was absent. Peter gave the report.\" Do not ask: \"Complete the attendance record.\" AI might be tempted to create information that was never provided.",
    "Instead say: \"Create an attendance table using only the information provided. Do not guess attendance for anyone not mentioned. Mark missing information as 'Not provided.'\" This creates a safer result.",
    "Remember: UNKNOWN ≠ NO. If you do not know whether someone attended, that does not necessarily mean they were absent. If you do not know whether an invoice was paid, that does not mean it was unpaid. If you do not know the date, do not allow AI to guess the date.",
 
    "## Cleaning Up Inconsistent Information",
    "People often write the same information in different ways -- for example: Mr John Ade, John Ade, JOHN ADE, J. Ade, John A. AI can help identify possible inconsistencies.",
    "Prompt: \"Review this list for inconsistent names, duplicate-looking entries, spelling variations, and formatting differences. Do not automatically assume that two similar names are the same person. Create a 'Possible Duplicate' column and explain why the entries may need human review.\"",
    "This is better than simply telling AI: \"Remove duplicates.\" Why? Because AI may incorrectly merge two different people. For official records, possible duplicates should be reviewed by a human.",
 
    "## Standardising Information",
    "Standardising means using the same pattern throughout a document or record. For example, you may have dates written as: 2/9/26, September 2, 2026, 02-09-2026, 2 September 2026. You can ask AI to standardise them.",
    "Prompt: \"Standardise all dates in this document to the format '2 September 2026'. Do not change the actual dates. Do not create dates where none are provided.\" You can also standardise: names, headings, telephone numbers, addresses, currency, job titles, department names, report sections, file naming patterns.",
    "Standardisation makes an organisation look more professional and makes records easier to maintain.",
 
    "## Creating Templates",
    "A template is a reusable pattern. Instead of creating the same document from the beginning every time, you create the structure once and reuse it. For example, instead of writing a meeting agenda from scratch every week, create a template.",
    "A meeting agenda template might include: Meeting Title, Date, Time, Location, Chairperson placeholders, followed by an agenda of Opening, Review of previous minutes, Matters arising, Main discussion, Decisions required, Any other business, and Closing. The next meeting requires only the specific details to be changed.",
 
    "## Ask AI to Create Reusable Templates",
    "AI is particularly useful for creating templates. Prompt: \"Create a reusable professional template for a monthly administrative report. Include placeholders for: Organisation name, Reporting period, Activities completed, Major achievements, Challenges, Expenses, Outstanding tasks, Recommendations, Responsible officers, Next steps. Keep the template simple enough for an office administrator to reuse every month.\" You now have a structure that can be reused.",
 
    "## Templates Save Time",
    "Consider an administrator who prepares the same type of document every month. Without a template: START FROM BLANK → THINK ABOUT STRUCTURE → WRITE → FORMAT → CHECK. With a good template: OPEN TEMPLATE → REPLACE DETAILS → REVIEW → APPROVE. AI can help create the first structure, but the organisation should decide whether that structure is appropriate.",
 
    "## Templates Must Still Allow Human Judgement",
    "A template should not become a rigid machine. For example, a condolence letter may have a standard structure, but every situation is different. A staff meeting may follow a standard agenda, but an emergency meeting may require a different structure. A monthly report may have standard headings, but an unusual event may require an additional section.",
    "Therefore: A template provides consistency; it does not remove judgement.",
 
    "## Creating a Template With Placeholders",
    "One of the most useful techniques is asking AI to create clearly marked placeholders. Example: \"Create a professional staff meeting invitation template. Use placeholders such as: [ORGANISATION NAME], [MEETING DATE], [MEETING TIME], [LOCATION], [MEETING PURPOSE], [ATTENDEES], [PREPARATION REQUIRED]. Make it easy to reuse without accidentally leaving old information in the document.\" This is safer than having old names, dates, and locations mixed into a new document.",
 
    "## Creating a Template From an Existing Document",
    "You can also give AI an old document and ask it to identify its reusable structure. Prompt: \"Examine this document and identify the parts that are reusable for future reports. Create a clean template while removing the specific names, dates, figures, and other situation-specific information. Replace them with clearly labelled placeholders. Do not remove important structural sections.\" This is useful when an organisation already has a good document but wants to turn it into a standard template.",
 
    "## Creating a Family of Related Templates",
    "You do not have to create only one template. You can create a complete set. For example, an office could have Meeting Templates (agenda, minutes, action tracker, invitation, follow-up message), Staff Templates (leave request, leave approval, staff notice, performance summary, appointment letter), Customer Templates (enquiry response, complaint response, thank-you message, follow-up message, service quotation), and Reporting Templates (daily, weekly, monthly, project, incident report).",
    "This creates a repeatable office workflow rather than isolated documents.",
 
    "## Turning One Piece of Information Into Several Outputs",
    "One of the most powerful uses of AI is transforming the same information into different formats. Suppose you have meeting notes. You can ask AI to create: Output 1 — Official Minutes: \"Turn these notes into formal meeting minutes.\" Output 2 — Action Tracker: \"Extract the action items into a table with Task, Owner, Deadline, and Status.\"",
    "Output 3 — Management Summary: \"Create a 150-word summary for the manager.\" Output 4 — Staff Message: \"Create a short professional message informing staff about the decisions that affect them.\" Output 5 — Presentation: \"Turn the major decisions and action points into a 6-slide presentation outline.\"",
    "The underlying information remains the same. Only the format and audience change. This connects directly to the prompting skills learned earlier.",
 
    "## The \"One Source, Many Outputs\" Method",
    "Teach yourself to think this way: ONE SOURCE ↓ ORGANISE ↓ VERIFY ↓ MULTIPLE USEFUL OUTPUTS. For example, meeting notes can become minutes, an action tracker, a management summary, a staff announcement, a PowerPoint outline, and a follow-up email.",
    "This can save considerable time. But remember: Every output must still be checked against the original information.",
 
    "## Creating Action Trackers",
    "An action tracker is a structured list of things that need to be done. Prompt: \"Extract every action item from these meeting notes. Create a table with: Action, Responsible person, Deadline, Priority, Status. Do not invent a responsible person, deadline, priority, or status. Use 'Not provided' where information is missing.\" An action tracker can then be transferred into Excel or another spreadsheet system.",
 
    "## Creating Categories Automatically",
    "Suppose a church, school, business, or office receives 100 questions. Instead of reading them one by one and manually creating categories, you can ask AI to identify patterns.",
    "Prompt: \"Review these questions and group them into logical categories. Give each category a short name and place each question under the most appropriate category. If a question does not clearly fit, place it under 'Needs Review.' Do not change the meaning of the questions.\"",
    "You might discover categories such as Registration, Payment, Accommodation, Training schedule, Technical support, General enquiries. This makes large amounts of information easier to manage.",
 
    "## Creating a Frequently Asked Questions List",
    "Once questions have been categorised, AI can help identify repeated questions. Prompt: \"Review these enquiries and identify questions that appear repeatedly or have very similar meanings. Group similar questions together and create a list of the ten most common questions. Do not create answers yet.\"",
    "Then you can ask: \"Using only the information provided in the source material, draft a simple answer for each frequently asked question. Mark any question where the source does not contain enough information to provide a reliable answer.\" This is much safer than asking AI to invent answers.",
 
    "## Reusing Patterns in Everyday Work",
    "Look for tasks that you perform repeatedly. Ask yourself: \"Did I do something very similar last week?\" If the answer is yes, there may be an opportunity to create a template.",
    "Examples: Every week — staff announcement, meeting agenda, meeting minutes, weekly report. Every month — financial report, attendance report, management summary, activity report. For every customer — welcome message, quotation, follow-up, feedback request. For every event — invitation, registration form, attendance list, reminder, thank-you message, event report.",
    "Repeated work is where templates can produce some of the greatest efficiency gains.",
 
    "## A Powerful Prompt for Repetitive Work",
    "Use this prompt when you notice a task being repeated: \"I perform this task regularly: [DESCRIBE TASK]. Analyse the process and identify which parts can be standardised and which parts need to remain flexible. Create: A reusable template, A list of information I must provide each time, A checklist for reviewing the final result, A reusable AI prompt. Do not remove details that may be important to the specific situation.\" This turns AI from a writing tool into a workflow-design assistant.",
 
    "## Premium Prompting: Tell AI What Must Not Change",
    "One of the techniques that produces better results is explicitly identifying what must remain unchanged. For example: \"Organise these records into a table. Preserve every name, amount, date, and reference number exactly as provided. Do not correct or guess any missing information. If something appears inconsistent, flag it for review rather than changing it.\"",
    "This is particularly important for: financial records, official records, names, identification numbers, dates, prices, addresses, quotations, legal or administrative information. Remember: Organise ≠ Rewrite. If you want AI to organise information, tell it to preserve the original facts.",
 
    "## Premium Prompting: Tell AI What to Do With Uncertainty",
    "A professional prompt should explain what AI should do when information is missing or unclear. Useful instructions include: \"Mark missing information as Not provided.\" \"Do not guess.\" \"Flag contradictions for human review.\" \"Preserve the original figures.\" \"Separate confirmed information from assumptions.\" \"If two entries may refer to the same person, flag them rather than merging them.\" These instructions significantly improve reliability.",
 
    "## Premium Prompting: Control the Output",
    "Do not simply ask AI to organise information. Tell it exactly what the finished result should look like.",
    "Basic: \"Organise these records.\" Better: \"Organise these records into a table.\" Strong: \"Organise these records into a table with Name, Department, Phone, Status, and Follow-up columns.\"",
    "Premium: \"Organise these records into a clean table with Name, Department, Phone, Status, and Follow-up columns. Preserve names and phone numbers exactly as provided. Do not invent missing information. Mark missing fields as 'Not provided.' Flag possible duplicate names for human review. Sort the final table alphabetically by Name.\" The final prompt gives AI: TASK + STRUCTURE + RULES + QUALITY CONTROL",
 
    "## AI Can Help Design Office Workflows",
    "You can also ask AI to examine a repeated process and suggest improvements. Example: \"Our current process for handling customer enquiries is: Customer sends message. Staff member reads it. Staff member records the request. Staff member forwards it to the appropriate person. Response is prepared. Customer receives response. Suggest a simpler workflow that reduces repeated work while keeping human approval before a response is sent. Identify which steps can be standardised and which require human judgement.\"",
    "AI can help identify opportunities for: templates, checklists, categories, standard responses, spreadsheets, forms, task trackers. The human decides whether the suggested workflow actually fits the organisation.",
 
    "## A Practical Example: Church Administration",
    "Imagine a church administrator receives notes: \"Sister Grace wants to join the choir. Brother David needs information about the men's meeting. Sister Mary wants to register her children for Sunday school. Brother John has not completed the membership form. Sister Grace also wants to know when choir rehearsal is held. Pastor asked John to submit his membership form.\"",
    "Instead of leaving the information in a notebook, ask: \"Organise these notes into a follow-up table with Name, Request, Additional Information, Required Action, and Responsible Person. Preserve the information exactly as provided. Do not assume missing details. Mark missing information as 'Not provided.'\" The result becomes an actionable record.",
 
    "## A Practical Example: School Administration",
    "Suppose a teacher gives you: \"Ada needs help with Mathematics. James missed two lessons. Peter needs an English reading exercise. Mary has completed her assignment. James also needs the missed Science notes.\"",
    "Prompt: \"Organise these student notes into a table with Student, Subject, Issue, Required Support, and Status. Do not invent information. If the subject or status is not provided, mark it as 'Not provided.'\" The teacher can then review the table and decide what action is appropriate.",
 
    "## A Practical Example: Small Business",
    "Suppose a business has these notes: \"Customer A complained about late delivery. Customer B asked for price of 10 units. Customer C has not received invoice. Customer A also wants delivery tracking. Customer D asked whether payment can be made by transfer.\"",
    "Prompt: \"Categorise these customer enquiries into Delivery, Pricing, Invoicing, and Payment. Create a follow-up table with Customer, Category, Request, Action Needed, and Status. Do not invent status information. Mark missing information as 'Not provided.'\" This gives the business a simple customer-service worklist.",
 
    "## Templates for Elderly Users: Keep Them Simple",
    "A template does not need to be complicated. For beginners, a good template should have: a clear title, simple headings, obvious placeholders, logical order, enough space for information, instructions where necessary. Avoid creating a template with twenty complicated fields when six fields are enough.",
    "A useful principle is: Simple enough to use. Detailed enough to be useful.",
 
    "## The Human Review Step",
    "After AI organises information, do not immediately treat the result as official. Use this process: SOURCE — Where did the information come from? ↓ ORGANISE — Ask AI to structure it. ↓ COMPARE — Compare the AI result with the original.",
    "↓ CORRECT — Fix errors or misunderstandings. ↓ APPROVE — A responsible person decides the information is ready. ↓ SAVE — Save the final version. This is particularly important for official records.",
 
    "## A Simple Verification Checklist",
    "Before using an AI-organised table or summary, ask: FACTS — Are the facts correct? NAMES — Are names preserved correctly? NUMBERS — Are amounts and figures correct? DATES — Are dates correct? CATEGORIES — Were items placed in the right category?",
    "DUPLICATES — Did AI accidentally merge different people or records? MISSING INFORMATION — Did AI guess anything? MEANING — Did the organisation change the original meaning? ACTIONS — Are the action items actually supported by the source? CONFIDENTIALITY — Does the information contain anything that should not have been entered into the AI service?",
 
    "## Common Mistakes to Avoid",
    "Mistake 1: Giving AI too little information — \"Organise this.\" Better: \"Organise this information into a table with these five columns...\"",
    "Mistake 2: Allowing AI to guess — Bad: \"Complete the missing details.\" Better: \"Identify missing details and mark them as 'Not provided.'\"",
    "Mistake 3: Automatically merging similar records — Two people may have similar names. Always review possible duplicates.",
    "Mistake 4: Creating a template that is too complicated — A template should make work easier, not create more work.",
    "Mistake 5: Using an old template without checking it — Old templates may contain previous dates, old phone numbers, former staff names, outdated addresses, old prices, incorrect departments. Always check before reuse.",
    "Mistake 6: Treating the AI table as the original record — The AI-generated table is a working output until it has been checked against the source.",
 
    "## The Master Prompt for This Lesson",
    "Save this prompt because it can be reused for many office tasks: \"You are helping me organise office information. Take the information I provide and: Identify the main categories. Organise related information together. Create a clear table where useful. Separate confirmed information from unclear or missing information. Preserve names, dates, numbers, amounts, and reference information exactly as provided. Do not invent missing information. Flag contradictions or possible duplicates for human review. Suggest a simple reusable template if this appears to be a recurring task.",
    "Output format: [table / bullet list / summary / checklist / template]. Audience: [manager / staff / customer / teacher / church administrator]. Purpose: [explain the purpose]. Here is the information: [PASTE INFORMATION]\" This is a strong general-purpose prompt because it gives AI the job, rules, output, audience, and purpose.",
  ],
  quiz: [
    {
      id: "organise-and-template-q1",
      prompt: "What is one major benefit of organising information with AI?",
      options: [
        { id: "a", text: "It guarantees that every piece of information is correct" },
        { id: "b", text: "It makes information easier to review and use" },
        { id: "c", text: "It removes the need for human review" },
        { id: "d", text: "It allows AI to make official decisions" },
      ],
      correctOptionId: "b",
      explanation: "AI can organise information, but the human must still make sure the organisation is accurate -- review is never removed.",
    },
    {
      id: "organise-and-template-q2",
      prompt: "True or False: If information is missing, AI should automatically fill in what seems likely.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "UNKNOWN ≠ NO -- missing information should be marked as \"Not provided,\" never guessed.",
    },
    {
      id: "organise-and-template-q3",
      prompt: "Which prompt is strongest?",
      options: [
        { id: "a", text: "\"Organise this.\"" },
        { id: "b", text: "\"Make this better.\"" },
        { id: "c", text: "\"Put this into a table.\"" },
        { id: "d", text: "\"Organise these records into Name, Department, Status, and Follow-up columns. Preserve the original information, do not guess missing details, and mark missing information as 'Not provided.'\"" },
      ],
      correctOptionId: "d",
      explanation: "This is TASK + STRUCTURE + RULES + QUALITY CONTROL -- the premium level of prompting this lesson teaches.",
    },
    {
      id: "organise-and-template-q4",
      prompt: "If two records have very similar names, what should you do?",
      options: [
        { id: "a", text: "Automatically merge them" },
        { id: "b", text: "Delete one" },
        { id: "c", text: "Flag them for human review" },
        { id: "d", text: "Assume they are the same person" },
      ],
      correctOptionId: "c",
      explanation: "AI may incorrectly merge two different people -- possible duplicates should always be flagged for a human to check.",
    },
    {
      id: "organise-and-template-q5",
      prompt: "True or False: A template should never be changed because consistency is always more important than the specific situation.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "A template provides consistency; it does not remove judgement -- unusual situations may still need adjustments.",
    },
    {
      id: "organise-and-template-q6",
      prompt: "Which is an example of \"one source, many outputs\"?",
      options: [
        { id: "a", text: "Writing the same document repeatedly" },
        { id: "b", text: "Turning meeting notes into minutes, an action tracker, a summary, and a presentation outline" },
        { id: "c", text: "Asking AI to guess missing information" },
        { id: "d", text: "Deleting the original notes" },
      ],
      correctOptionId: "b",
      explanation: "The same underlying information can become several different, useful formats without changing the facts.",
    },
    {
      id: "organise-and-template-q7",
      prompt: "True or False: AI can help identify a useful structure for a recurring task, but a human should decide whether that structure is appropriate.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "a",
      explanation: "AI can suggest templates and workflows, but the organisation decides whether the suggested structure actually fits.",
    },
  ],
},
 
    ],
  },
  {
    id: "safety-and-misinformation",
    number: 7,
    title: "Staying Safe — Scams, Privacy & Misinformation",
    strapline: "Wisdom protects the one who learns to use it.",
    whyItMatters: "Scammers use convincing messages, fake images, and cloned voices to create panic. Safety habits protect families, churches, colleagues, and communities.",
    outcomes: ["Recognise common AI-enabled scam patterns.", "Protect personal information when using AI tools.", "Pause, verify, and challenge misinformation before forwarding it."],
    exerciseTitle: "Identify the warning signs",
    exercisePrompt: "Open the google form first, complete your work, then return here and mark it submitted so your own progress record stays up to date.",
    lessons: [
      {
  id: "ai-scams",
  title: "Recognising AI-related scams",
  summary: "Spot fake voices, images, urgent requests, and get-rich-quick promises.",
  duration: "15 min",
  content: [
    "## Why This Matters",
    "Scammers can use convincing messages, fake images, edited videos, and computer-generated or cloned voices to create fear, excitement, urgency, or false trust. A message may appear to come from: a family member; a pastor or church leader; a colleague; a business; a government organization; a bank or financial service; a famous person; a friend on WhatsApp.",
    "The technology may make the deception more convincing, but the basic scam pattern is often familiar. The safest response is not panic. It is: PAUSE → CHECK → VERIFY → DECIDE. This lesson teaches you how to recognize common warning signs and protect yourself, your family, church, workplace, and community.",
 
    "## Learning Objectives",
    "By the end of this lesson, you should be able to: Recognise common AI-enabled scam patterns. Identify suspicious urgent requests for money or information. Understand why fake voices and images cannot automatically be trusted. Recognise common \"get-rich-quick\" warning signs.",
    "Protect personal information when interacting with AI tools and online services. Pause and independently verify surprising or urgent claims. Avoid forwarding unverified information to other people.",
 
    "## What Is an AI-Enabled Scam?",
    "An AI-enabled scam is a scam in which artificial intelligence is used to make deception more convincing, faster, or easier to produce. For example, scammers may use AI to help create: realistic-looking messages; convincing fake profiles; altered photographs; fabricated documents; generated audio; cloned voices; manipulated videos; persuasive investment advertisements; fake customer-service conversations.",
    "AI does not create the basic idea of fraud. It can simply make an old scam look or sound more believable. That is why we should not think: \"It sounds exactly like the person, so it must be real.\" Instead ask: \"How can I verify that this really came from that person?\"",
 
    "## The First Rule: Do Not Panic",
    "Many scams are designed to make you act before you think. A message may say: \"URGENT! Send the money now!\" Or: \"Do not call me. I am in an emergency.\" Or: \"Your account will be closed today!\" Or: \"You have won a large amount of money. Claim it immediately!\"",
    "The purpose of the urgency is to reduce the time you have to question the message. Remember: Urgency is not proof. Someone saying \"act now\" does not make the request legitimate. When a message creates panic, slow down.",
 
    "## Common Scam Pattern #1 — The Emergency Request",
    "Imagine receiving a message that appears to come from a relative: \"Please send money immediately. I have an emergency. I cannot talk right now.\" The profile picture looks correct. The writing looks familiar. The person may even send an audio message that sounds like them. Do not immediately send money.",
    "Instead: PAUSE — Do not act because of the pressure. CHECK — Ask yourself: Is this normal behaviour for this person? Is the request unusually urgent? Why can they not speak normally? VERIFY — Contact the person through a separate, trusted channel.",
    "For example: call their usual number; contact another trusted family member; speak to them in person if practical. Do not rely only on the suspicious message itself to prove its authenticity.",
 
    "## AI-Generated or Cloned Voices",
    "Modern technology can produce audio that resembles a real person's voice. This creates an important safety lesson: A familiar voice is not automatically proof of identity.",
    "If someone makes an unusual request involving: money; passwords; account access; confidential information; urgent transfers; sensitive documents — verify the request independently. Use a second channel.",
    "For example: Suspicious WhatsApp message → ordinary phone call. Or: Unexpected email → official website/contact method. Or: Voice message → speak directly to the person. This is called independent verification.",
 
    "## Common Scam Pattern #2 — Fake Images and Videos",
    "Images can also be manipulated or generated. You may encounter: a fake photograph of a celebrity; a fake image of an event; a manipulated photograph of a public figure; a fabricated screenshot; an image showing something that never happened.",
    "A picture can be useful evidence, but: Seeing something is not always the same as verifying it. Ask: Where did this image come from? Who originally published it? Is there another reliable source reporting the same event? Does the date make sense? Is the surrounding story consistent? For important claims, look beyond the image.",
 
    "## Common Scam Pattern #3 — \"You Have Won!\"",
    "Another common pattern is the unexpected prize. For example: \"Congratulations! You have been selected to receive a large cash prize.\" Then the sender asks you to pay: a registration fee; a processing fee; a release fee; a tax payment; an account activation fee.",
    "Be extremely cautious. An unexpected prize combined with a demand for payment is a major warning sign. Do not assume that a professional-looking certificate, logo, image, or message proves the offer is genuine.",
 
    "## Common Scam Pattern #4 — Get-Rich-Quick Promises",
    "Be particularly careful with promises such as: \"Guaranteed profit.\" \"Double your money quickly.\" \"No risk.\" \"Everyone is making money.\" \"You must invest today.\" \"Secret opportunity.\" \"Guaranteed returns.\" \"Only a few spaces remain.\"",
    "The use of AI can make these advertisements appear polished and persuasive. But polished language does not make an investment legitimate. Remember: GUARANTEED + EASY + FAST + URGENT = STOP AND CHECK. Real financial decisions require careful consideration. Never make an important financial decision simply because an online message creates excitement or pressure.",
 
    "## Common Scam Pattern #5 — Fake Authority",
    "A scammer may pretend to represent: a bank; a government agency; a church leader; an employer; a school; a delivery company; technical support; another trusted organization. The message may contain official-looking logos; signatures; photographs; names; documents; email formatting. These things can be copied or fabricated.",
    "Ask: \"Can I verify this through the organization's official contact channel?\" Do not use only the phone number, email address, or link supplied by the suspicious message.",
 
    "## Common Scam Pattern #6 — Asking for Secret Information",
    "Be very cautious if an unexpected message asks for: passwords; PINs; verification codes; authentication codes; security questions; banking credentials; account recovery information; private documents.",
    "Important rule: Your password is not something you should give to an AI assistant, scammer, or unexpected stranger. If someone claims: \"I need your verification code to help you.\" Stop and verify the request through a trusted channel.",
 
    "## Protecting Your Information When Using AI",
    "AI tools can be useful, but you should think before entering personal or confidential information. Avoid unnecessarily providing: passwords; banking credentials; authentication codes; private identification information; confidential church records; confidential employee information; private student records; sensitive family information.",
    "Ask yourself: \"Does the AI actually need this information to perform the task?\" Often, the answer is no.",
    "Example — Instead of entering: \"Here is the full personal information of this person. Write a letter about their situation.\" consider removing unnecessary identifying information and using a general description. The principle is: MINIMISE WHAT YOU SHARE. Only provide information that is necessary for the task and appropriate for the tool you are using.",
 
    "## Common Scam Pattern #7 — Fake Login Links",
    "A message may say: \"Your account requires verification. Click here immediately.\" The link may lead to a fake website designed to collect your login information.",
    "Do not automatically click because: the logo looks genuine; the page looks professional; the message uses your name; the message says it is urgent. Instead, open the organization's known official app or website yourself and check your account there.",
    "Safer habit: Do not let the suspicious message choose the route you use to verify it.",
 
    "## The Five Warning Signs",
    "When you receive an unexpected message, look for these five warning signs: 1. URGENCY — \"Act immediately.\" 2. SECRECY — \"Don't tell anyone.\" 3. MONEY — \"Send payment now.\" 4. PERSONAL INFORMATION — \"Give me your password/code/details.\" 5. EMOTIONAL PRESSURE — \"I'm desperate.\" or: \"You will lose everything.\" or: \"You have won!\"",
    "One warning sign does not automatically prove something is a scam. But several together should make you stop and verify.",
 
    "## The Pause Rule",
    "When a message creates strong emotion, use the PAUSE RULE. P — Pause: Do not immediately click, send, forward, or pay. A — Ask: What exactly is this message asking me to do? U — Understand: Why is the sender creating urgency?",
    "S — Seek independent verification: Contact the person or organization through a trusted method. E — Evaluate: Only then decide what to do. PAUSE means: Do not let the sender's urgency become your urgency.",
 
    "## How to Verify a Suspicious Message",
    "Suppose you receive: \"This is Pastor James. I need ₦150,000 urgently. Please send it to this account immediately.\" Use this process.",
    "Step 1 — Stop: Do not transfer money. Step 2 — Identify the claim: The claim is: \"Pastor James needs money urgently.\" Step 3 — Find an independent way to contact Pastor James: Use a known number or another trusted communication method.",
    "Step 4 — Ask directly: For example: \"Did you send me a message asking for money?\" Step 5 — Verify the details: Confirm: amount; reason; account details; timing. Step 6 — Decide: Only act after the request has been independently verified.",
 
    "## Do Not Trust Screenshots Alone",
    "A screenshot can be useful, but it can also be edited. For example, someone may send a screenshot supposedly showing: a bank transfer; a payment confirmation; a conversation; an official announcement; a social-media post. Do not assume the screenshot proves the event happened.",
    "If money or an important decision is involved, verify through the actual system or trusted source. Example — If someone sends: \"Here is the transfer receipt.\" Do not release goods simply because a screenshot was provided. Confirm the actual payment through the appropriate account or payment system.",
 
    "## Misinformation and Forwarding",
    "Scams are not the only problem. AI can also make it easier to produce large amounts of misleading or false information. You may receive a message saying: \"IMPORTANT! Share this with everyone immediately!\"",
    "Before forwarding it, ask: WHO? Who created the information? WHAT? What exactly is being claimed? WHEN? When was the information created? WHERE? Where did the claim originate? EVIDENCE? Is there reliable evidence supporting it? If you cannot establish that the information is trustworthy, do not forward it as fact.",
 
    "## Why \"Forward to Everyone\" Is Dangerous",
    "A false message can spread quickly because people trust the person who forwarded it. Someone may think: \"My pastor sent it, so it must be true.\" Or: \"My brother sent it, so it must be true.\" But the person forwarding it may also have been deceived.",
    "Remember: Trust in the sender is not the same as proof of the claim. Even people we trust can accidentally forward misinformation.",
 
    "## AI Does Not Automatically Detect Every Scam",
    "It is reasonable to ask AI: \"What warning signs do you see in this message?\" AI may help you identify: urgency; suspicious requests; unusual language; pressure tactics; requests for personal information; unrealistic promises.",
    "However, AI itself should not be treated as the final authority. For important situations: AI can help you analyse. Independent verification confirms.",
 
    "## A Useful Prompt for Scam Analysis",
    "You can ask an AI assistant: \"Analyse this message for possible scam warning signs. Identify any urgency, requests for money or personal information, suspicious claims, pressure tactics, or unusual instructions. Do not assume it is genuine or fraudulent. Tell me what I should independently verify before taking action.\"",
    "This is better than asking: \"Is this definitely a scam?\" Why? Because AI may not have enough information to determine authenticity with certainty. The better goal is to identify what needs verification.",
 
    "## A Second Useful Prompt",
    "You can also ask: \"Help me create a verification checklist for this message. Separate what is known from what is claimed, and identify which facts I should confirm through an independent source.\" This encourages careful thinking instead of immediate acceptance.",
 
    "## Protecting Families and Churches",
    "Scam awareness is not only an individual responsibility. Families and churches can establish simple habits.",
    "Family habit — If a relative sends an unusual urgent money request: Call them directly before sending anything. Church habit — Church leaders can establish a rule: No financial request is acted upon solely because it appears in a WhatsApp message. Important requests can be verified through an established communication process.",
    "Workplace habit — For unusual payment or account requests: Verify through a second trusted channel before acting. Simple procedures can prevent serious mistakes.",
 
    "## What To Do If You Suspect a Scam",
    "If something looks suspicious: Stop communicating if appropriate. Do not send money. Do not provide passwords or security codes. Do not click suspicious links. Do not forward the message. Preserve the relevant information if needed for reporting. Contact the legitimate organization or person independently. Tell a trusted adult, family member, church leader, teacher, or appropriate authority if you need help.",
    "The important principle is: You do not have to solve the situation immediately. Taking time to verify is a strength, not a weakness.",
 
    "## Common Mistakes",
    "Mistake 1: \"The voice sounds exactly right.\" Correction: Verify through another channel.",
    "Mistake 2: \"The image looks real.\" Correction: Check the source and surrounding evidence.",
    "Mistake 3: \"The message is from someone I know.\" Correction: Their account or identity may have been impersonated.",
    "Mistake 4: \"It says URGENT, so I must act now.\" Correction: Urgency is a reason to slow down.",
    "Mistake 5: \"They promised guaranteed profit.\" Correction: Treat guaranteed, easy, fast-money promises with extreme caution.",
    "Mistake 6: \"My friend forwarded it, so it must be true.\" Correction: Verify the original claim.",
    "Mistake 7: \"AI says it is probably genuine.\" Correction: AI analysis is not independent proof.",
 
    "## The Golden Rule",
    "When a message involves money, identity, passwords, security codes, confidential information, or unusual urgency, do not rely on appearance alone. Use: PAUSE → CHECK → VERIFY → DECIDE",
    "And when information is being forwarded: STOP → CHECK THE SOURCE → CHECK THE CLAIM → THEN SHARE",
 
    "## Lesson Summary",
    "AI-enabled scams can use convincing text; images; audio; videos; profiles; documents; advertisements. But scammers still commonly rely on familiar psychological techniques: urgency; fear; excitement; secrecy; authority; greed; trust.",
    "Your strongest protection is not trying to identify every piece of AI-generated content. It is developing a verification habit. Ask: Who sent this? What are they asking me to do? Why is it urgent? What information or money is involved? How can I verify it independently?",
  ],
  quiz: [
    {
      id: "ai-scams-q1",
      prompt: "You receive a voice message that sounds exactly like a family member asking for money urgently. What should you do first?",
      options: [
        { id: "a", text: "Send the money immediately because the voice sounds familiar." },
        { id: "b", text: "Forward the message to your friends." },
        { id: "c", text: "Independently contact the family member through a trusted channel." },
        { id: "d", text: "Ask the sender to provide another voice message." },
      ],
      correctOptionId: "c",
      explanation: "A familiar voice is not automatically proof of identity -- verify through a separate, trusted channel first.",
    },
    {
      id: "ai-scams-q2",
      prompt: "Which combination contains common warning signs of a scam?",
      options: [
        { id: "a", text: "Clear information, reasonable timing, and independent verification" },
        { id: "b", text: "Urgency, secrecy, money requests, and emotional pressure" },
        { id: "c", text: "A friendly greeting and correct spelling" },
        { id: "d", text: "A message that contains a photograph" },
      ],
      correctOptionId: "b",
      explanation: "These are the Five Warning Signs this lesson teaches -- together, they should make you stop and verify.",
    },
    {
      id: "ai-scams-q3",
      prompt: "Why should you not automatically trust an image, video, or voice recording?",
      options: [
        { id: "a", text: "All digital media is fake." },
        { id: "b", text: "AI and other editing technologies can make fabricated or altered content convincing." },
        { id: "c", text: "Images and audio cannot contain useful information." },
        { id: "d", text: "Only printed information can be trusted." },
      ],
      correctOptionId: "b",
      explanation: "Seeing or hearing something is not the same as verifying it -- fabricated media can look and sound convincing.",
    },
    {
      id: "ai-scams-q4",
      prompt: "You receive a message promising guaranteed profits if you send money immediately. What is the safest response?",
      options: [
        { id: "a", text: "Invest quickly before the opportunity disappears." },
        { id: "b", text: "Ask the sender for a larger profit." },
        { id: "c", text: "Pause and independently investigate the opportunity before making any decision." },
        { id: "d", text: "Forward it to everyone you know." },
      ],
      correctOptionId: "c",
      explanation: "GUARANTEED + EASY + FAST + URGENT = STOP AND CHECK -- polished promises still require careful, independent investigation.",
    },
    {
      id: "ai-scams-q5",
      prompt: "Which information should you generally avoid unnecessarily entering into an AI tool?",
      options: [
        { id: "a", text: "A general question about writing" },
        { id: "b", text: "A public topic you want explained" },
        { id: "c", text: "Passwords, security codes, and confidential personal information" },
        { id: "d", text: "A request to summarize a public article" },
      ],
      correctOptionId: "c",
      explanation: "MINIMISE WHAT YOU SHARE -- only provide what's actually necessary for the task.",
    },
    {
      id: "ai-scams-q6",
      prompt: "Someone sends you a message saying, \"URGENT! Forward this to everyone immediately.\" What should you do before forwarding it?",
      options: [
        { id: "a", text: "Forward it because the sender sounds confident." },
        { id: "b", text: "Check the source and verify the important claim." },
        { id: "c", text: "Add your own warning and forward it." },
        { id: "d", text: "Send it to several people to ask whether it is true." },
      ],
      correctOptionId: "b",
      explanation: "STOP → CHECK THE SOURCE → CHECK THE CLAIM → THEN SHARE -- trust in the sender isn't proof of the claim.",
    },
    {
      id: "ai-scams-q7",
      prompt: "What is the most useful safety habit when you encounter a suspicious or urgent request?",
      options: [
        { id: "a", text: "React quickly before the opportunity disappears." },
        { id: "b", text: "Trust anything that looks professional." },
        { id: "c", text: "PAUSE → CHECK → VERIFY → DECIDE" },
        { id: "d", text: "Ask the suspicious sender to confirm that they are trustworthy." },
      ],
      correctOptionId: "c",
      explanation: "This is the core habit the whole lesson builds toward -- don't let the sender's urgency become your urgency.",
    },
  ],
},
 
      {
  id: "privacy",
  title: "Protecting personal privacy",
  summary: "Know what is safe to share with an AI assistant and what must stay private.",
  duration: "15 min",
  content: [
    "## Lesson Overview",
    "AI assistants can be very useful for writing, explaining, organising, planning, summarising, and solving everyday problems. But an AI assistant should not be treated like a private diary, a bank officer, a password manager, or a confidential filing cabinet.",
    "The quality of an AI response does not depend on knowing every private detail about you. In many situations, you can get useful help while leaving out information that identifies you, another person, your organisation, or your finances.",
    "The basic rule is: Share what the AI needs for the task — not everything you know. General questions, drafts, ideas, and non-sensitive information may be appropriate to share. Passwords, PINs, identity numbers, full bank details, security codes, and another person's private information should remain private.",
    "When you are unsure, remove identifying details first or ask a trusted person whether the information should be shared.",
 
    "## Learning Objectives",
    "By the end of this lesson, you should be able to: Distinguish between information that is generally safe to share and information that should remain private. Identify personal and sensitive information that should not be entered into an AI assistant. Remove unnecessary identifying details before using AI. Protect another person's privacy when preparing documents or asking AI for help. Apply a simple privacy check before submitting information to an AI tool.",
 
    "## What Does Personal Privacy Mean?",
    "Personal privacy means having control over information about yourself and deciding who should have access to it. Some information is ordinary and presents little privacy risk.",
    "For example: \"Explain how solar panels work.\" \"Help me write a thank-you message.\" \"Give me five ideas for teaching children about teamwork.\" \"Create a meeting agenda.\" \"Rewrite this paragraph in simpler English.\" These requests generally do not require sensitive personal information.",
    "Other information can identify, authenticate, locate, or financially affect a person. Examples include: passwords, PINs, one-time security codes, bank account details, card numbers, identity numbers, private addresses, private phone numbers, private medical information, private employment records, confidential church or organisational records, another person's private correspondence. These require much greater caution.",
    "Remember: Useful information is not automatically safe information. Before sharing something with an AI assistant, ask: Does the AI really need this information to complete my task? If the answer is no, leave it out.",
 
    "## Information That May Be Appropriate to Share",
    "Many ordinary tasks can be completed without revealing sensitive information. For example, you can ask: \"Help me write a polite letter asking a supplier to correct an invoice.\"",
    "You do not necessarily need to provide: your bank password, your account PIN, the supplier's private banking credentials, your complete financial records. You could instead write: \"Help me write a polite letter asking a supplier to correct an invoice. The invoice contains an incorrect amount.\" The AI can help with the wording without receiving unnecessary sensitive information.",
    "Another example — Instead of: \"My full name is [name], I live at [full address], my phone number is [number], and my account number is [number]. Write a complaint about my internet service.\" You could write: \"Help me write a formal complaint to an internet service provider about repeated service interruptions.\" The second request contains enough information to help with the writing task while removing unnecessary identifying information.",
 
    "## Information That Should Stay Private",
    "Some information should not be entered into an AI assistant simply because the tool asks for it or because including it seems convenient.",
    "Passwords and Login Credentials — Never provide your: email password, banking password, social-media password, workplace password, AI account password, computer password. A password is intended to prove that you are authorised to access something. It should remain secret.",
    "Important rule: An AI assistant does not need your password to explain how to reset a password. You can ask: \"How do I reset my email password?\" You do not need to give the AI your actual password.",
 
    "## PINs and Security Codes",
    "Protect: bank PINs, ATM PINs, card security codes, one-time passwords, verification codes, account recovery codes, authentication codes. These are particularly sensitive because they can be used to gain access to accounts or services.",
    "If you receive a security code, do not paste it into an AI assistant simply because someone tells you to. Remember: A code that gives access to an account is private.",
 
    "## Identity Numbers and Official Documents",
    "Identity information can be sensitive. Examples can include: national identification numbers, passport numbers, driver's licence numbers, tax identification numbers, employee identification numbers, student identification numbers, document numbers.",
    "If you need help understanding a form, you can often remove the identifying information first. For example: Instead of sharing: \"My identification number is 1234567890. Help me complete this form.\" Ask: \"Help me understand what information this identification field is requesting.\" The AI can explain the form without receiving the actual number.",
 
    "## Financial Information",
    "Financial information deserves special care. Avoid entering unnecessary: bank account numbers, debit or credit card numbers, PINs, security codes, transaction authentication codes, complete financial statements, private financial records.",
    "You can still ask general financial questions. For example: \"What information should I check before accepting a bank transfer?\" or: \"Explain the difference between a savings account and a current account.\" You can receive general guidance without revealing your private banking information.",
    "Key principle: Ask about the financial situation without exposing the financial credentials.",
 
    "## Protecting Other People's Privacy",
    "Privacy does not apply only to you. You also have a responsibility to protect information belonging to other people. This is particularly important for: pastors, teachers, church administrators, employers, office workers, community leaders, people handling records.",
    "Suppose a church member sends a private message to a pastor. The pastor should not automatically copy the entire private conversation into an AI assistant just because they want help writing a response. Instead, remove unnecessary identifying and personal information.",
    "For example: Instead of: \"John Smith from [specific address] sent me this private message about his family situation...\" You might ask: \"Help me write a compassionate response to someone who is experiencing a difficult family situation.\" The AI can help with the communication without receiving the person's identity or private story.",
    "Important principle: Your access to someone's information does not automatically give you permission to share it with an AI tool.",
 
    "## Privacy and Church or Ministry Records",
    "Churches and ministries may handle information about: members, visitors, counselling situations, donations, volunteers, employees, children, families, contact information, attendance, private correspondence.",
    "Do not assume that because information belongs to your organisation, it is automatically appropriate to place it into an AI assistant. Before using AI with organisational information, consider: Is the information necessary? Does it identify a person? Is it confidential? Am I authorised to share it? Can I remove identifying details? Does my organisation have a policy about AI use?",
    "When appropriate, replace names and identifying information with neutral labels. For example: Person A, Staff Member B, Church Member C. This can make it possible to discuss the structure of a task without exposing someone's identity.",
 
    "## Remove Identifying Details",
    "One of the simplest privacy techniques is data minimisation. Data minimisation means providing only the information necessary for the task.",
    "Suppose you want AI to rewrite a letter. You may not need to include: full names, home addresses, phone numbers, account numbers, identification numbers. You could replace them with: [NAME], [ADDRESS], [PHONE NUMBER], [ACCOUNT NUMBER], [ORGANISATION].",
    "Example — Instead of: \"Dear Mrs. Elizabeth Adeyemi, thank you for your donation of ₦250,000 to our church account...\" You might first write: \"Dear [NAME], thank you for your generous donation to our organisation...\" The AI can improve the wording. You can then restore the appropriate details yourself after reviewing the result.",
 
    "## The Privacy Test",
    "Before putting information into an AI assistant, use this simple five-question test. NEED → IDENTIFY → SENSITIVE → REMOVE → CHECK",
    "1. NEED — Does the AI actually need this information? If not, leave it out. 2. IDENTIFY — Does this information identify a person? Think about names, addresses, phone numbers, identification numbers, and similar details.",
    "3. SENSITIVE — Could this information cause harm, financial loss, embarrassment, or unwanted exposure if mishandled? If yes, be extremely cautious. 4. REMOVE — Can I remove or replace the sensitive details? Use placeholders where possible.",
    "5. CHECK — Am I comfortable and authorised to share what remains? If you are uncertain, stop and ask a trusted person or follow your organisation's privacy guidance.",
 
    "## A Practical Example",
    "Imagine an administrator wants AI to organise employee information into a table. The administrator has a document containing: employee names, telephone numbers, home addresses, salaries, job titles, work responsibilities.",
    "The administrator's task is simply: \"Organise employees by department and job role.\" Does the AI need every piece of information? No. The administrator may be able to provide only each employee's department and role -- for example, Employee A in Finance as Accountant, Employee B in Administration as Office Manager, Employee C in Operations as Supervisor.",
    "The private telephone numbers, home addresses, and salaries are unnecessary for that particular task. Lesson: If a detail is unnecessary for the task, consider removing it.",
 
    "## Privacy Does Not Mean \"Never Use AI\"",
    "Privacy protection does not mean you should stop using AI. It means you should use AI deliberately.",
    "AI can still help you: write announcements, improve grammar, organise ideas, create lesson plans, explain concepts, draft reports, create meeting agendas, brainstorm projects, summarise non-sensitive information, prepare templates. The goal is to give the tool enough information to perform the task without unnecessarily exposing private information.",
 
    "## Be Careful With Screenshots and Documents",
    "A common mistake is thinking: \"I didn't type the private information, so it is safe.\" But uploading a screenshot or document can also reveal information.",
    "A screenshot might contain: someone's name, phone number, email address, account information, private conversation, notification, document number. Before uploading an image or document to an AI tool, look at what is visible.",
    "Ask: What information am I giving the tool by uploading this file? If unnecessary private information is visible, remove or hide it first when appropriate.",
 
    "## Privacy and AI-Generated Content",
    "Privacy also matters when AI creates information. For example, you might ask AI to create a fictional example for a lesson. Do not use a real person's private situation simply because it makes the example more realistic.",
    "Instead, create a fictional scenario: \"Create a fictional example of an employee requesting annual leave.\" This protects real people's information while still giving you useful material.",
 
    "## When You Are Unsure",
    "Sometimes you will not know whether something is safe to share. That is when you should pause. Ask: Can I remove the name? Can I remove the account number? Can I describe the situation generally? Can I use a fictional example? Do I have permission to share this? Is there an organisational policy? Should I ask a trusted person first?",
    "You do not have to solve every privacy question alone. Good safety habit: When in doubt, leave it out.",
 
    "## Privacy Mistakes to Avoid",
    "Mistake 1: \"The AI asked for it, so I should provide it.\" Not necessarily. Only provide information that is necessary and appropriate.",
    "Mistake 2: Giving an AI your password to solve a login problem. You do not need to reveal the password. Ask for general instructions instead.",
    "Mistake 3: Copying an entire private conversation. If you only need help writing a response, remove unnecessary personal details.",
    "Mistake 4: Uploading a complete document without checking it. Review the document first. It may contain information you did not intend to share.",
    "Mistake 5: Sharing someone else's information because you have access to it. Access does not automatically mean permission to share.",
    "Mistake 6: Believing that replacing a name is always enough. Sometimes other details can identify someone even without their name. Consider whether the combination of details could still reveal the person.",
 
    "## A Safe Privacy Prompt",
    "You can ask AI to help you identify unnecessary personal information without giving it the sensitive information itself. For example: \"I am preparing a document for an AI assistant. Give me a checklist of the types of personal or confidential information I should remove before sharing it.\"",
    "Another useful prompt is: \"I need AI to help me organise a document. Tell me what categories of information I should consider removing before uploading it, especially information that could identify people or expose confidential details.\" Notice that these prompts ask for general guidance rather than providing private information.",
 
    "## The Privacy Rule for Everyday AI Use",
    "Remember this simple rule: SHARE THE TASK, NOT THE SECRETS. Tell the AI: what you are trying to accomplish, the general situation, the audience, the desired format, relevant non-sensitive facts.",
    "Do not unnecessarily provide: passwords, PINs, security codes, identity numbers, full banking details, confidential records, another person's private information.",
 
    "## Quick Privacy Checklist",
    "Before sharing information with an AI assistant, ask: Does the AI need this information? Does it identify me or someone else? Does it contain a password, PIN, or security code? Does it contain financial or identity information?",
    "Is it confidential? Do I have permission to share it? Can I replace names with placeholders? Can I describe the situation without revealing private details? Have I checked any relevant organisational rules? If you answer yes to a privacy concern, pause before submitting the information.",
  ],
  quiz: [
    {
      id: "privacy-q1",
      prompt: "Which information should normally never be entered into an AI assistant?",
      options: [
        { id: "a", text: "A general question about history" },
        { id: "b", text: "An idea for a lesson" },
        { id: "c", text: "Your banking PIN" },
        { id: "d", text: "A request to improve grammar" },
      ],
      correctOptionId: "c",
      explanation: "A code that gives access to an account -- like a banking PIN -- is private and should never be entered into an AI tool.",
    },
    {
      id: "privacy-q2",
      prompt: "What is the best reason to remove unnecessary personal information before using AI?",
      options: [
        { id: "a", text: "It makes the AI respond more slowly" },
        { id: "b", text: "It reduces unnecessary exposure of private information" },
        { id: "c", text: "It makes every AI answer correct" },
        { id: "d", text: "It prevents the AI from understanding the task" },
      ],
      correctOptionId: "b",
      explanation: "Data minimisation means providing only what's necessary for the task -- reducing unnecessary exposure of private information.",
    },
    {
      id: "privacy-q3",
      prompt: "A church administrator wants AI to help organise staff by department. The document also contains employees' home addresses and phone numbers. What is the best approach?",
      options: [
        { id: "a", text: "Upload everything because the information is already in the office" },
        { id: "b", text: "Upload the entire document without checking it" },
        { id: "c", text: "Remove information that is unnecessary for the task" },
        { id: "d", text: "Ask AI to publish the information in a table" },
      ],
      correctOptionId: "c",
      explanation: "If a detail is unnecessary for the task -- like home addresses when only department and role are needed -- remove it.",
    },
    {
      id: "privacy-q4",
      prompt: "True or False: If you have access to another person's private information, you automatically have permission to give it to an AI assistant.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "Access does not automatically mean permission to share -- that's true for AI tools just as it is anywhere else.",
    },
    {
      id: "privacy-q5",
      prompt: "Which is the safest way to ask AI for help with a private situation?",
      options: [
        { id: "a", text: "Provide the person's full name, address, phone number, and private history" },
        { id: "b", text: "Upload every private conversation connected to the situation" },
        { id: "c", text: "Describe the situation generally and remove unnecessary identifying details" },
        { id: "d", text: "Give the AI all available information so it can decide what is private" },
      ],
      correctOptionId: "c",
      explanation: "Share the task, not the secrets -- a general description gives AI what it needs without exposing anyone's identity.",
    },
    {
      id: "privacy-q6",
      prompt: "What does data minimisation mean in this lesson?",
      options: [
        { id: "a", text: "Giving AI as much information as possible" },
        { id: "b", text: "Providing only the information necessary for the task" },
        { id: "c", text: "Refusing to use AI for any task" },
        { id: "d", text: "Deleting every document after using AI" },
      ],
      correctOptionId: "b",
      explanation: "Data minimisation is providing only what the task actually requires -- nothing extra.",
    },
    {
      id: "privacy-q7",
      prompt: "You are unsure whether a piece of information is appropriate to share with an AI assistant. What should you do?",
      options: [
        { id: "a", text: "Share it immediately because AI needs complete information" },
        { id: "b", text: "Publish it online first" },
        { id: "c", text: "Remove unnecessary details or ask a trusted person before sharing" },
        { id: "d", text: "Send it to several AI assistants and compare their answers" },
      ],
      correctOptionId: "c",
      explanation: "When in doubt, leave it out -- or check with a trusted person before sharing.",
    },
  ],
},
 
      {
  id: "misinformation",
  title: "Spotting misinformation",
  summary: "Slow down and verify before forwarding claims, images, or messages.",
  duration: "15 min",
  content: [
    "## Lesson Overview",
    "Every day, people receive claims, photographs, videos, voice notes, headlines, and warnings through WhatsApp, social media, email, websites, and other digital platforms. Some are true. Some are partly true. Some are outdated. Some are presented without enough context. And some are simply false.",
    "AI has made it easier to create convincing text, images, audio, and video. This means that looking real is no longer enough to prove that something is true.",
    "A responsible digital citizen does not immediately forward information because it is: frightening, surprising, emotional, impressive, urgent, apparently from an authority, accompanied by a photograph, shared by a trusted friend.",
    "Instead: Slow down. Find the source. Check the date. Compare reliable information. Then decide. The key rule for this lesson is: DO NOT FORWARD UNCERTAINTY AS TRUTH.",
 
    "## Learning Objectives",
    "By the end of this lesson, you should be able to: Recognise common signs of misinformation. Identify the original source of a claim where possible. Check the date and context of information. Compare important claims with trusted sources. Recognise emotional pressure designed to make people forward information quickly. Decide when information should not be forwarded.",
 
    "## What Is Misinformation?",
    "Misinformation is incorrect or misleading information that is shared as if it were true, whether or not the person sharing it intended to deceive others.",
    "For example, someone might receive a message saying: \"Important! This new rule starts tomorrow. Forward this to everyone you know.\" The person may believe the message and forward it to friends and family. If the information is false or misleading, the person has helped spread misinformation even if they did not intend to deceive anyone.",
    "Important distinction: A person does not have to be a scammer to spread misinformation. They may simply have: trusted the wrong source, misunderstood a message, missed important context, shared an old story as though it were new, believed a manipulated image, forwarded a rumour, assumed that many forwards mean something is true. This is why responsible digital behaviour matters.",
 
    "## Why Misinformation Spreads So Quickly",
    "False information can spread because it creates a strong emotional reaction. People are more likely to share something when it makes them feel: afraid, angry, shocked, excited, worried, hopeful, curious, morally pressured.",
    "A message might say: \"URGENT! Everyone must know this!\" or: \"Please don't ignore this!\" or: \"Forward immediately before it is deleted!\" The emotional pressure can make people act before thinking.",
    "Remember: Urgency is not evidence. A message can be urgent and true. A message can be urgent and false. The urgency itself does not prove anything.",
 
    "## The Original Source",
    "One of the most important questions to ask is: Where did this information originally come from? A WhatsApp message saying: \"According to experts...\" is not the same as providing the actual source.",
    "Ask: Who originally published this? Is there an identifiable organisation? Is there an official announcement? Can I find the original article? Does the supposed source actually say this? Is someone quoting a source without providing it?",
    "Example — You receive: \"Government has announced that all schools will close tomorrow. Please forward.\" Do not assume it is true simply because the message says \"government.\" Look for the original announcement from an appropriate official source.",
 
    "## Check the Date",
    "Information can be accurate but still misleading if it is old. For example, a photograph from several years ago might be shared with the caption: \"This happened today.\" The photograph may be genuine. The caption may be false. This is why checking the date matters.",
    "Ask: When was this information originally published? Also ask: Does the date match the event being described? Remember: Old information presented as new information can mislead people.",
 
    "## Compare Trusted Reports",
    "Do not depend on a single forwarded message for important claims. Compare the information with reliable sources. For example, if you receive a major public announcement, look for confirmation from: the relevant government agency, the organisation involved, an official statement, reputable news organisations, established professional or institutional sources.",
    "You do not need to search the entire internet. You need to find credible independent confirmation. Important: Two websites repeating the same unverified message do not necessarily count as two independent sources. The question is: Do they have independent evidence for the claim?",
 
    "## Be Careful With Images",
    "A photograph is not automatically proof. Images can be: old, edited, taken out of context, generated by AI, associated with the wrong event, cropped to remove important information.",
    "For example, a real photograph from a large gathering may be shared with a false caption claiming it shows a completely different event. The image may be genuine. The story attached to the image may not be. Therefore: Check the image and the claim separately.",
    "Ask: Is the image real? When was it taken? Where was it taken? Does it actually show what the message claims?",
 
    "## Be Careful With AI-Generated Images",
    "Modern AI tools can create realistic-looking images. An image may show: a person appearing to make a statement, an event that never happened, a building appearing damaged, a public figure appearing somewhere, a dramatic scene that looks photographic. The fact that an image looks realistic does not prove that the event happened.",
    "Good habit: When an image is surprising or important, ask: What independent evidence confirms what this image claims? Do not make the image itself your only evidence.",
 
    "## Be Careful With Videos and Voice Messages",
    "The same principle applies to audio and video. A video may be: edited, shortened, taken out of context, old, manipulated, artificially generated. A voice message may also be misleading. A familiar person's voice does not automatically prove that the person made the statement. This connects directly to Lesson 1 on AI-enabled scams.",
    "Remember: A familiar voice, face, photograph, or logo is not proof by itself.",
 
    "## Watch for Panic",
    "Some misinformation is designed to create fear. For example: \"Everyone is in danger! Send this to your family immediately!\" or: \"Do not go outside tomorrow. This is a serious warning!\"",
    "Before forwarding, stop. Ask: Who made the claim? What evidence supports it? Is there an official announcement? Is the information current? Can I confirm it elsewhere? The goal is not to ignore genuine warnings. The goal is to make sure that panic does not replace verification. If a genuine emergency exists, reliable authorities should be consulted.",
 
    "## Watch for \"Forward This to Everyone\"",
    "A request to forward a message is not evidence that the message is true. Common phrases include: \"Forward to everyone.\" \"Send this to 10 people.\" \"Share before it is deleted.\" \"Make sure everyone knows.\" \"Don't keep this information to yourself.\"",
    "These phrases create social pressure. Ask yourself: Why does this message want me to forward it before I verify it? A responsible digital citizen does not allow forwarding pressure to replace checking.",
 
    "## Emotional Claims Require Extra Care",
    "Be especially cautious when a message makes you immediately feel: Fear → Anger → Shock → Excitement → Panic. Strong emotions can reduce the time we spend evaluating information.",
    "For example: \"You will not believe what they are hiding!\" or: \"This is shocking! Share this now!\" Instead of reacting immediately: STOP → CHECK. Ask: \"What evidence is provided?\"",
 
    "## The Four-Step Verification Method",
    "Use this simple process whenever you receive a questionable claim. SOURCE → DATE → COMPARE → DECIDE",
    "1. SOURCE — Find the original source. Who first made this claim? 2. DATE — Check when it was published or when the event occurred. Is this information current?",
    "3. COMPARE — Look for confirmation from reliable independent sources. Do other credible sources support it? 4. DECIDE — Choose what to do. If verified, you may share it appropriately. If uncertain, do not present it as fact. If false, do not forward it as true.",
 
    "## What If You Cannot Verify It?",
    "You do not have to prove that something is false before deciding not to share it. There are three useful categories: VERIFIED — You have sufficient reliable evidence. Action: You may share it, while preserving context.",
    "UNCERTAIN — You cannot establish whether it is true. Action: Do not forward it as fact. FALSE — Reliable evidence shows that the claim is incorrect. Action: Do not forward it as true.",
    "Key principle: Unverified information should remain unverified in your communication. Do not turn: \"I don't know if this is true.\" into: \"This is true.\"",
 
    "## \"Many People Are Sharing It\" Is Not Proof",
    "A common mistake is believing something because it has been forwarded many times. But consider this: If one person receives false information and sends it to ten people, and each of those people sends it to ten more people, the message can spread rapidly. The number of people sharing it does not establish its accuracy.",
    "Remember: Popularity is not proof. A message can be widely shared and still be false.",
 
    "## Trusted People Can Also Share Wrong Information",
    "Someone you respect may forward something that turns out to be incorrect. This does not necessarily mean they intended to deceive you. They may have believed it was true.",
    "Therefore, avoid thinking: \"My pastor sent it, so it must be true.\" or: \"My teacher sent it, so it must be true.\" or: \"My friend sent it, so it must be true.\" Respect the person. Verify the information.",
 
    "## AI Can Help — But AI Is Not the Final Judge",
    "AI can help you analyse a suspicious message. For example: \"Analyse this claim and identify which statements require independent verification. Separate the claims from the opinions and tell me what evidence I should look for.\" Or: \"Help me create a checklist for verifying this message. Do not assume the message is true.\" This can help you think more carefully.",
    "However, do not simply ask: \"Is this true?\" and accept the AI's answer without checking important claims yourself. AI can also make mistakes. The correct relationship is: AI HELPS YOU CHECK → RELIABLE SOURCES PROVIDE EVIDENCE → YOU MAKE THE DECISION",
 
    "## Example: A WhatsApp Rumour",
    "Imagine you receive: \"URGENT!!! From tomorrow, everyone must register their phone number again or their WhatsApp account will be permanently deleted. Forward this to all your contacts!\" What should you do?",
    "Step 1 — SOURCE: Who originally announced this? The message does not clearly say. Step 2 — DATE: When was the claim published? Unknown. Step 3 — COMPARE: Look for reliable information from the relevant service or reputable sources. Step 4 — DECIDE: Until verified, do not forward it as fact.",
    "Notice that you did not need to panic. You simply slowed down and checked.",
 
    "## Example: A Dramatic Photograph",
    "You receive a photograph showing a large crowd with the message: \"Thousands of people gathered today because of the new announcement.\" Before forwarding: Is the photograph actually from today? Where was it taken? Is it from the event being described? Can you find the original photograph or report? Do credible sources confirm the event? The photograph itself does not answer these questions.",
 
    "## Protecting Your WhatsApp Groups",
    "Your WhatsApp group is a small information network. What you forward can influence: family members, church members, colleagues, students, friends, community members. When you forward something, people may assume: \"This person checked it.\" That means forwarding carries responsibility.",
    "Before forwarding, ask: Would I be comfortable if everyone in this group believed this because I shared it? If the answer is no, stop and verify.",
 
    "## A Responsible Forwarding Rule",
    "Use this simple rule: VERIFY BEFORE YOU AMPLIFY. \"Amplify\" means helping information reach more people. When you forward a message, you increase its reach. If it is accurate, you may be helping people. If it is false, you may be helping misinformation spread. Therefore: Every forward is a decision.",
 
    "## Common Mistakes",
    "Mistake 1: Forwarding because the message says \"URGENT.\" Better: Verify first.",
    "Mistake 2: Believing a photograph proves the whole story. Better: Check the date, location, original source, and context.",
    "Mistake 3: Trusting something because many people shared it. Better: Look for evidence.",
    "Mistake 4: Trusting something because a respected person shared it. Better: Respect the person but verify the claim.",
    "Mistake 5: Treating AI's answer as proof. Better: Use AI as an analysis aid and verify important claims independently.",
    "Mistake 6: Sharing first and checking later. Better: Check before forwarding.",
    "Mistake 7: Assuming old information is current. Better: Always check the date when timing matters.",
 
    "## Practical Verification Prompt",
    "You can use AI to help structure your verification process: \"I received the following message. Help me analyse it without assuming that it is true. Identify the factual claims, emotional language, requests to forward it, missing evidence, and information I should independently verify. Tell me what kinds of reliable sources I should check before sharing it.\"",
    "This is better than simply asking: \"Is this true?\" because it encourages investigation rather than immediate acceptance.",
 
    "## A Simple Misinformation Checklist",
    "Before forwarding a claim, image, video, or voice message, ask: SOURCE — Where did this originally come from? DATE — When was it published or recorded? CONTEXT — Is the information being presented accurately? EVIDENCE — What supports the claim?",
    "COMPARE — Do reliable independent sources confirm it? EMOTION — Is the message trying to make me panic, become angry, or act quickly? FORWARDING — Is it pressuring me to send it to others? DECISION — Am I certain enough to share this as fact?",
    "If you cannot verify an important claim: Do not forward it as though it were true.",
  ],
  quiz: [
    {
      id: "misinformation-q1",
      prompt: "What should you look for first when checking a suspicious claim?",
      options: [
        { id: "a", text: "How many people have forwarded it" },
        { id: "b", text: "The original source" },
        { id: "c", text: "How emotional the message sounds" },
        { id: "d", text: "Whether the message contains a photograph" },
      ],
      correctOptionId: "b",
      explanation: "SOURCE → DATE → COMPARE → DECIDE -- finding the original source is the first step in verification.",
    },
    {
      id: "misinformation-q2",
      prompt: "Why is checking the date important?",
      options: [
        { id: "a", text: "Old information can be presented as if it were current" },
        { id: "b", text: "Every message becomes false after one day" },
        { id: "c", text: "Newer information is always correct" },
        { id: "d", text: "The date tells you who created the message" },
      ],
      correctOptionId: "a",
      explanation: "A genuine old photograph or story can still mislead people if it's presented as happening today.",
    },
    {
      id: "misinformation-q3",
      prompt: "True or False: A photograph is automatically proof that the story attached to it is true.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
      ],
      correctOptionId: "b",
      explanation: "The image may be genuine while the caption or story attached to it is false -- check them separately.",
    },
    {
      id: "misinformation-q4",
      prompt: "A WhatsApp message says, \"URGENT! Forward this to everyone immediately!\" What should you do?",
      options: [
        { id: "a", text: "Forward it immediately" },
        { id: "b", text: "Assume it is true because it sounds urgent" },
        { id: "c", text: "Pause and verify the claim before sharing it" },
        { id: "d", text: "Send it to another group for people to investigate" },
      ],
      correctOptionId: "c",
      explanation: "Urgency is not evidence -- verify before you amplify.",
    },
    {
      id: "misinformation-q5",
      prompt: "Which sequence is the best method for checking questionable information?",
      options: [
        { id: "a", text: "Forward → React → Search → Forget" },
        { id: "b", text: "Source → Date → Compare → Decide" },
        { id: "c", text: "Believe → Forward → Check → Correct" },
        { id: "d", text: "Screenshot → Forward → Ask friends → Decide" },
      ],
      correctOptionId: "b",
      explanation: "This is the Four-Step Verification Method taught in this lesson.",
    },
    {
      id: "misinformation-q6",
      prompt: "Why should you not assume that a message is true simply because many people have forwarded it?",
      options: [
        { id: "a", text: "Large groups cannot use WhatsApp" },
        { id: "b", text: "Forwarding automatically changes the message" },
        { id: "c", text: "Popularity does not prove accuracy" },
        { id: "d", text: "Messages become unreliable after five forwards" },
      ],
      correctOptionId: "c",
      explanation: "A message can spread rapidly through forwarding regardless of whether it's true -- reach isn't evidence.",
    },
    {
      id: "misinformation-q7",
      prompt: "You cannot verify an important claim you received. What is the most responsible action?",
      options: [
        { id: "a", text: "Forward it but add \"I don't know if this is true\"" },
        { id: "b", text: "Forward it because someone else sent it first" },
        { id: "c", text: "Present it as true because it sounds convincing" },
        { id: "d", text: "Do not forward it as fact until it can be verified" },
      ],
      correctOptionId: "d",
      explanation: "Unverified information should remain unverified in your communication -- don't turn uncertainty into a forwarded claim.",
    },
  ],
},
 
    ],
  },
  {
  id: "graduation-project",
  number: 8,
  title: "Graduation Project & Certification",
  strapline: "Carry this small flame forward, and light the way for others.",
  whyItMatters: "The final project confirms that learners can apply the skills in a real setting, explain their choices, and keep human responsibility at the centre.",
  outcomes: ["Complete a real AI-assisted project from start to finish.", "Apply prompting, ethical checking, and fact verification.", "Present how AI assisted the work and what human judgement changed."],
  exerciseTitle: "Present your graduation project",
  exercisePrompt: "Choose one of five projects, complete it with AI's help, and submit your work below to generate your certificate.",
  lessons: [
    { id: "choose-project", title: "Choose a meaningful project", summary: "Select a real piece of work from ministry, teaching, office life, or home.", duration: "12 min", content: ["Choose a project that is useful enough to matter but small enough to complete carefully. Remove personal or confidential information before working with AI.", "Write down the intended audience, purpose, and standard of quality before you begin."] },
    { id: "apply-the-method", title: "Apply the full method", summary: "Use clear prompting, review, verification, and revision in one complete workflow.", duration: "20 min", content: ["Start with a brief, generate a first draft, test it against the purpose, verify facts, remove private details, and revise the language.", "Keep a short record of what AI produced and what you changed so your process is transparent."] },
    { id: "share-and-certify", title: "Share, reflect, and certify", summary: "Present your work and prepare to carry the learning into your community.", duration: "15 min", content: ["A project presentation is an opportunity to encourage others, not to perform technical perfection. Explain the choices that made the work responsible and useful.", "Certificate eligibility recognises attendance, practice, and a finished project—not perfect technical skill."] },
  ],
},
 
];

export const totalLessons = courseModules.reduce((total, module) => total + module.lessons.length, 0);
