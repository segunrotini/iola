import {
  ArrowRight,
  CalendarDays,
  CircleCheck,
  UserRound,
} from "lucide-react";

function AboutCta() {
  return (
    <section className="bg-[#EEF0FF] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#052D55] px-5 py-12 text-center text-white shadow-md sm:px-8 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-[#1D6292]/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-32 h-64 w-64 rounded-full bg-[#07517C]/50 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A9D8EE]">
            Take the next step
          </p>

          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.025em] sm:text-4xl">
            Ready to begin your learning journey with IOLA?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#D1DFEF]">
            Join hundreds of families building future-ready competencies
            backed by grounded character. Book a personalized session with an
            academic advisor.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#087FAE] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0A91C3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#052D55]"
            >
              Explore Our Programs
              <ArrowRight size={16} />
            </a>

            <a
              href="/#admissions"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#073B63] transition-colors hover:bg-[#EAF4FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#052D55]"
            >
              Schedule a Consultation
              <CalendarDays size={15} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#D1DFEF]">
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck size={13} className="text-[#86D8E8]" />
              Zero Obligation
            </span>
            <span aria-hidden="true" className="hidden text-[#7192AF] sm:inline">
              •
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UserRound size={13} className="text-[#86D8E8]" />
              1-on-1 Academic Fit Review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCta;
