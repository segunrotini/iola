import {
  ArrowUpRight,
  BrainCircuit,
  FlaskConical,
  ListChecks,
  Sigma,
} from "lucide-react";

const focusAreas = [
  {
    title: "Mental Arithmetic",
    description:
      "Speed computation, mental shortcuts, logic riddles, and Olympiad foundations.",
    icon: Sigma,
  },
  {
    title: "Science Discovery",
    description:
      "Interactive simulations, real-world physics puzzles, and home-friendly lab projects.",
    icon: FlaskConical,
  },
  {
    title: "Design Thinking",
    description:
      "Deconstructing system failures, hypothesis testing, and user-centric prototyping.",
    icon: BrainCircuit,
  },
  {
    title: "Analytical Grammar",
    description:
      "Structural language mechanics paired with cognitive ethical leadership training.",
    icon: ListChecks,
  },
];

function StemLogicalReasoning() {
  return (
    <section
      id="stem-logical-reasoning"
      className="h-full min-w-0"
    >
      <article className="flex h-full flex-col rounded-xl border border-[#F3F1F9] bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#E2E7FF] px-3 py-1 text-xs font-bold text-[#00254D]">
              MODULE 5
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-[#006DA8]">
              Critical Thinking
            </span>
          </div>
          <BrainCircuit
            size={20}
            className="shrink-0 text-[#006DA8]"
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-3 text-lg font-bold leading-tight tracking-[-0.015em] text-[#00254D] sm:text-xl">
          STEM &amp; Logical Reasoning
        </h2>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-[#4B5563]">
          Rigorous analytical frameworks equipping young minds with
          problem-solving acumen and experimental scientific methodology.
        </p>

        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <li
                key={area.title}
                className="rounded-lg bg-[#F2F3FF] p-2.5 sm:p-3"
              >
                <h3 className="flex items-center gap-2 text-sm font-bold leading-5 text-[#00254D]">
                  <Icon
                    size={16}
                    className="shrink-0 text-[#006DA8]"
                    aria-hidden="true"
                  />
                  {area.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-[#4B5563]">
                  {area.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto flex flex-col gap-3 border-t border-[#F0EEF6] pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium text-[#4B5563]">Prerequisite</p>
            <p className="text-sm font-bold text-[#00254D]">
              Initial Logic Diagnostic
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

export default StemLogicalReasoning;
