import {
  ArrowUpRight,
  BookOpenCheck,
  Languages,
  ListChecks,
  UsersRound,
} from "lucide-react";

const learningLevels = [
  {
    number: "1",
    title: "Level 1: Early Phonics & Sound Blends",
    description: "Phonemic awareness, digraphs, and blend vocalization",
    icon: UsersRound,
  },
  {
    number: "2",
    title: "Level 2: Reading Foundation & Sentences",
    description: "Sight words, reading rhythm, syntax comprehension",
    icon: BookOpenCheck,
  },
  {
    number: "3",
    title: "Level 3: Expressive Communication & Writing",
    description: "Creative narrative drafting, vocabulary, public clarity",
    icon: ListChecks,
  },
];

function LanguageLiteracyTrack() {
  return (
    <section
      id="language-literacy"
      className="h-full min-w-0"
    >
      <article className="flex h-full flex-col rounded-xl border border-[#F3F1F9] bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#E2E7FF] px-3 py-1 text-xs font-bold text-[#00254D]">
              MODULE 2
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-[#006DA8]">
              Language Mastery
            </span>
          </div>
          <Languages
            size={20}
            className="shrink-0 text-[#006DA8]"
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-3 text-lg font-bold leading-tight tracking-[-0.015em] text-[#00254D] sm:text-xl">
          Language &amp; Literacy (Phonics)
        </h2>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-[#4B5563]">
          Diagnostic-based reading and expressive articulation curriculum
          designed to bridge learning gaps rapidly.
        </p>

        <ol className="mt-4 space-y-1.5">
          {learningLevels.map((level) => {
            const Icon = level.icon;

            return (
              <li
                key={level.number}
                className="flex items-center gap-2.5 rounded-lg bg-[#F2F3FF] px-2.5 py-2 sm:gap-3 sm:px-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CFE4FF] text-sm font-bold text-[#00254D]">
                  {level.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-5 text-[#00254D]">
                    {level.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-5 text-[#4B5563]">
                    {level.description}
                  </p>
                </div>

                <Icon
                  size={17}
                  className="hidden shrink-0 text-[#4B5563] sm:block"
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ol>

        <div className="mt-auto flex flex-col gap-3 border-t border-[#F0EEF6] pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium text-[#4B5563]">
              Schedule Delivery
            </p>
            <p className="text-sm font-bold text-[#00254D]">
              3 Days / Week · 45 min
            </p>
          </div>

          <a
            href="/#admissions"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#006DA8] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#005E95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006DA8] focus-visible:ring-offset-2"
          >
            Enroll in Track
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </article>
    </section>
  );
}

export default LanguageLiteracyTrack;
