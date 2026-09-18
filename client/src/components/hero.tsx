export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#eef7ff]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute right-[-8%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-[#dbeeff]/60 blur-3xl" />
      </div>
      <div className="relative mx-auto grid min-h-[520px] w-full max-w-[1440px] items-center gap-10 px-6 py-16 sm:px-10 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-20 xl:px-20">
        <div className="relative z-20 max-w-[650px]">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0f4f9b] sm:text-xs">
            Theotechne Institute for Faith and Technology
          </p>
          <h1
            id="hero-heading"
            className="max-w-[650px] text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#142944] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]"
          >
            Practical AI for
            <br />
            <span className="text-[#1769d5]">Everyday Life</span>
            <br />
            <span className="font-medium italic text-[#f5b900] [font-family:cursive]">
              Ministry, Teaching & Work
            </span>
            <span
              aria-hidden="true"
              className="ml-2 inline-block align-middle text-[38px] font-normal not-italic text-[#f5b900] sm:text-[44px]"
            >
              (sun)
            </span>
          </h1>
          <p className="mt-6 max-w-[510px] text-sm leading-6 text-[#26394f] sm:text-[15px]">
            A grounded executive certificate for people who want to use
            artificial intelligence with confidence, discernment, and a human
            purpose.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1769d5] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(23,105,213,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0f58b9] focus:outline-none focus:ring-2 focus:ring-[#1769d5] focus:ring-offset-2"
            >
              Begin Your Enrolment
              <span aria-hidden="true">{'->'}</span>
            </a>
            <a
              href="#intro"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#26394f] shadow-[0_6px_18px_rgba(24,52,83,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(24,52,83,0.12)] focus:outline-none focus:ring-2 focus:ring-[#1769d5] focus:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-full border border-[#d8e0e8] bg-white text-[10px] shadow-sm"
              >
                {'>'}
              </span>
              Explore the Curriculum
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3 text-[#172b43]">
            <span
              aria-hidden="true"
              className="relative inline-block h-7 w-9 rotate-[-9deg]"
            >
              <span className="absolute left-0 top-3 h-[1.5px] w-8 rotate-[-8deg] bg-[#172b43]" />
              <span className="absolute left-0 top-3 h-3 w-3 rotate-[38deg] rounded-bl-full border-b-[1.5px] border-l-[1.5px] border-[#172b43]" />
            </span>
            <span className="text-[13px] font-medium italic [font-family:cursive]">
              Learn the tool. Keep the wisdom.
            </span>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex min-h-[380px] w-full max-w-[680px] items-end justify-center lg:min-h-[500px] lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] right-[7%] h-[62%] w-[68%] rounded-[46%_54%_42%_58%/53%_42%_58%_47%] bg-[#ffc400] sm:right-[8%] lg:right-[7%]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[15%] right-[30%] h-20 w-16 rounded-[48%_52%_55%_45%] bg-[#ffc400] rotate-[18deg]"
          />
          <svg
            aria-hidden="true"
            className="absolute right-[1%] top-[8%] h-20 w-20 text-[#142944] sm:right-[2%]"
            viewBox="0 0 90 90"
            fill="none"
          >
            <path d="M20 16L13 2M33 20L32 0M48 22L57 7M59 30L78 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M68 42C74 38 80 38 85 41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <svg
            aria-hidden="true"
            className="absolute left-[9%] top-[22%] h-20 w-28"
            viewBox="0 0 120 80"
            fill="none"
          >
            <path
              d="M7 52C17 43 24 34 30 19C37 33 45 39 58 39C51 50 48 58 49 69"
              stroke="#f2b900"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M68 52C77 43 84 34 89 18C98 32 106 39 117 40"
              stroke="#2f8fe8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 7"
            />
          </svg>
          {/* Main image. Place your photo at /public/images/img2.png */}
          <div className="relative z-10 h-[370px] w-[500px] overflow-hidden sm:h-[430px] sm:w-[580px] lg:h-[500px] lg:w-[650px]">
            <img
              src="/images/img2.png"
              alt="Learner exploring practical artificial intelligence for ministry, teaching, work, and everyday life"
              className="absolute inset-0 h-full w-full object-contain object-bottom"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-[21%] right-[2%] z-30 flex min-w-[94px] flex-col items-center rounded-xl bg-white px-4 py-3 text-center shadow-[0_12px_28px_rgba(21,46,77,0.14)] sm:bottom-[24%] sm:right-[1%] sm:min-w-[108px]">
            <strong className="text-2xl font-extrabold leading-none text-[#142944] sm:text-3xl">
              8
            </strong>
            <span className="mt-1 text-[10px] font-semibold leading-3 text-[#4b5d71]">
              Practical
              <br />
              Sessions
            </span>
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 grid h-7 w-7 rotate-12 place-items-center rounded-full bg-[#3b9af2] text-sm text-white shadow-sm"
            >
              {'<3'}
            </span>
          </div>
          <div className="absolute bottom-[6%] left-[5%] z-30 rotate-[-5deg] rounded-sm bg-[#fffdf4] px-4 py-3 text-center shadow-[0_7px_15px_rgba(25,45,70,0.10)] sm:left-[7%]">
            <span className="block text-[12px] font-medium leading-4 text-[#39404a] [font-family:cursive]">
              faith
              <br />
              meets
              <br />
              technology
            </span>
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-[2%] right-[0%] z-20 h-16 w-12 rounded-t-[55%] bg-[#f8b900] sm:h-20 sm:w-14"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[13%] right-[0.6%] z-30 h-12 w-9 rounded-[60%_35%_55%_35%] bg-[#54a85b] rotate-[-22deg]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[17%] right-[2%] z-30 h-11 w-8 rounded-[35%_60%_35%_55%] bg-[#3f9451] rotate-[25deg]"
          />
        </div>
      </div>
    </section>
  );
}

