import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";


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

      <div className="relative mx-auto grid min-h-[520px] w-full max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-20 xl:px-20">
        {/* LEFT / CONTENT */}
        <div className="relative z-20 max-w-[650px]">
          <p className="mb-4 text-[10px] font-extrabold uppercase leading-4 tracking-[0.14em] text-[#0f4f9b] sm:text-xs sm:tracking-[0.16em]">
            Theotechne Institute for Faith and Technology
          </p>

          <h1
            id="hero-heading"
            className="max-w-[650px] text-[39px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142944] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]"
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
              className="ml-1 inline-block align-middle text-[32px] font-normal not-italic text-[#f5b900] sm:ml-2 sm:text-[44px]"
            >
              (sun)
            </span>
          </h1>

          <p className="mt-5 max-w-[510px] text-[14px] leading-6 text-[#26394f] sm:mt-6 sm:text-[15px]">
            A grounded executive certificate for people who want to use
            artificial intelligence with confidence, discernment, and a human
            purpose.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
  onClick={() => startLogin()}
  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1769d5] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(23,105,213,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0f58b9] focus:outline-none focus:ring-2 focus:ring-[#1769d5] focus:ring-offset-2 sm:w-auto"
>
  Begin Your Enrolment
  <span aria-hidden="true">{'->'}</span>
</Button>

            <a
              href="#curriculum"
              className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#26394f] shadow-[0_6px_18px_rgba(24,52,83,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(24,52,83,0.12)] focus:outline-none focus:ring-2 focus:ring-[#1769d5] focus:ring-offset-2 sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#d8e0e8] bg-white text-[10px] shadow-sm"
              >
                {'>'}
              </span>
              Explore the Curriculum
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-[#172b43] sm:mt-7">
            <span
              aria-hidden="true"
              className="relative inline-block h-7 w-9 shrink-0 rotate-[-9deg]"
            >
              <span className="absolute left-0 top-3 h-[1.5px] w-8 rotate-[-8deg] bg-[#172b43]" />
              <span className="absolute left-0 top-3 h-3 w-3 rotate-[38deg] rounded-bl-full border-b-[1.5px] border-l-[1.5px] border-[#172b43]" />
            </span>

            <span className="text-[13px] font-medium italic [font-family:cursive]">
              Learn the tool. Keep the wisdom.
            </span>
          </div>
        </div>

        {/* RIGHT / HERO IMAGE */}
        <div className="relative z-10 mx-auto mt-2 flex min-h-[340px] w-full max-w-[680px] items-end justify-center sm:min-h-[400px] lg:mt-0 lg:min-h-[500px] lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] right-[7%] h-[62%] w-[68%] rounded-[46%_54%_42%_58%/53%_42%_58%_47%] bg-[#ffc400] sm:right-[8%] lg:right-[7%]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[15%] right-[30%] h-16 w-12 rotate-[18deg] rounded-[48%_52%_55%_45%] bg-[#ffc400] sm:h-20 sm:w-16"
          />

          <svg
            aria-hidden="true"
            className="absolute right-[1%] top-[8%] h-14 w-14 text-[#142944] sm:right-[2%] sm:h-20 sm:w-20"
            viewBox="0 0 90 90"
            fill="none"
          >
            <path
              d="M20 16L13 2M33 20L32 0M48 22L57 7M59 30L78 20"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M68 42C74 38 80 38 85 41"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>

          <svg
            aria-hidden="true"
            className="absolute left-[5%] top-[20%] h-16 w-24 sm:left-[9%] sm:top-[22%] sm:h-20 sm:w-28"
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

          {/* Main image */}
          <div className="relative z-10 h-[320px] w-full max-w-[500px] sm:h-[430px] sm:max-w-[580px] lg:h-[500px] lg:w-[650px] lg:max-w-none">
            <img
              src="/images/img2.png"
              alt="Learner exploring practical artificial intelligence for ministry, teaching, work, and everyday life"
              className="absolute inset-0 h-full w-full object-contain object-bottom"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-[19%] right-[2%] z-30 flex min-w-[88px] flex-col items-center rounded-xl bg-white px-3 py-3 text-center shadow-[0_12px_28px_rgba(21,46,77,0.14)] sm:bottom-[24%] sm:right-[1%] sm:min-w-[108px] sm:px-4">
            <strong className="text-2xl font-extrabold leading-none text-[#142944] sm:text-3xl">
              8
            </strong>

            <span className="mt-1 text-[9px] font-semibold leading-3 text-[#4b5d71] sm:text-[10px]">
              Practical
              <br />
              Sessions
            </span>

            <span
              aria-hidden="true"
              className="absolute -right-2 -top-2 grid h-7 w-7 rotate-12 place-items-center rounded-full bg-[#3b9af2] text-sm text-white shadow-sm sm:-right-3 sm:-top-3"
            >
              {'<3'}
            </span>
          </div>

          <div className="absolute bottom-[5%] left-[3%] z-30 rotate-[-5deg] rounded-sm bg-[#fffdf4] px-3 py-2 text-center shadow-[0_7px_15px_rgba(25,45,70,0.10)] sm:bottom-[6%] sm:left-[7%] sm:px-4 sm:py-3">
            <span className="block text-[11px] font-medium leading-4 text-[#39404a] [font-family:cursive] sm:text-[12px]">
              faith
              <br />
              meets
              <br />
              technology
            </span>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-[2%] right-[0%] z-20 h-14 w-10 rounded-t-[55%] bg-[#f8b900] sm:h-20 sm:w-14"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[13%] right-[0.6%] z-30 h-10 w-8 rotate-[-22deg] rounded-[60%_35%_55%_35%] bg-[#54a85b] sm:h-12 sm:w-9"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[17%] right-[2%] z-30 h-9 w-7 rotate-[25deg] rounded-[35%_60%_35%_55%] bg-[#3f9451] sm:h-11 sm:w-8"
          />
        </div>
      </div>
    </section>
  );
}