import { BadgeCheck, Clock3, UsersRound } from "lucide-react";

const categories = [
  { label: "All Programs", href: "#all-programs", active: true },
  {
    label: "Technology & Digital Skills",
    href: "#technology-digital-skills",
  },
  { label: "Language & Literacy", href: "#language-literacy" },
  { label: "Islamic Learning", href: "#islamic-learning" },
  { label: "Christian Learning", href: "#christian-learning" },
  { label: "STEM & Logic", href: "#stem-logical-reasoning" },
];

function LearningTracksIntro() {
  return (
    <section
      id="all-programs"
      className="relative overflow-hidden bg-[#F2F3FF] px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#D4E7FF]/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#E3EDFF]/90 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E2E7FF] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#00254D]">
              <BadgeCheck size={14} aria-hidden="true" />
              Academic &amp; Vocational Syllabi
            </div>

            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#00254D] sm:text-4xl">
              Comprehensive Learning Tracks for Every Stage of Life
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5563]">
              Structured, instructor-led online pathways for Children (Ages
              5–12), Teenagers (Ages 13–17), and Adults &amp; Career
              Professionals.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:mb-1 lg:justify-end">
            <span                         className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/80 bg-white/75 px-3 py-2 text-sm font-semibold text-[#00254D]">
              <UsersRound size={16} className="text-[#006DA8]" aria-hidden="true" />
              Ages 5 to Adult
            </span>
            <span                         className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/80 bg-white/75 px-3 py-2 text-sm font-semibold text-[#00254D]">
              <Clock3 size={16} className="text-[#006DA8]" aria-hidden="true" />
              Live Video Sessions
            </span>
          </div>
        </div>

        <nav
          aria-label="Program categories"
          className="-mx-4 mt-8 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
        >
          <div className="inline-flex min-w-max items-center gap-1 rounded-xl bg-[#EAEDFF] p-1">
            {categories.map((category) => (
              <a
                key={category.label}
                href={category.href}
                aria-current={category.active ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006DA8] focus-visible:ring-offset-2 ${
                  category.active
                    ? "bg-[#00254D] text-white"
                    : "text-[#454D5B] hover:bg-white/70 hover:text-[#00254D]"
                }`}
              >
                {category.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default LearningTracksIntro;
