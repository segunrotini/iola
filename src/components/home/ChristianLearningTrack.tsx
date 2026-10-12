import {
  ArrowUpRight,
  BookOpen,
  Church,
  HandHeart,
  UsersRound,
} from "lucide-react";

const learningAreas = [
  {
    title: "Bible Studies & Scriptural Literacy",
    description:
      "Systematic study of Old & New Testaments, historical hermeneutics, and contextual analysis.",
    icon: BookOpen,
  },
  {
    title: "Christian Character Formation & Ethics",
    description:
      "Cultivating biblical integrity, interpersonal humility, and ethical decision-making in youth.",
    icon: HandHeart,
  },
  {
    title: "Values-Based Mentorship",
    description:
      "Denominational alignment respecting family traditions paired with direct executive life coaching.",
    icon: UsersRound,
  },
];

function ChristianLearningTrack() {
  return (
    <section id="christian-learning" className="h-full min-w-0">
      <article className="flex h-full flex-col rounded-xl border border-[#F3F1F9] bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#E2E7FF] px-3 py-1 text-xs font-bold text-[#00254D]">
              MODULE 4
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-[#006DA8]">
              Moral Leadership
            </span>
          </div>
          <Church
            size={20}
            className="shrink-0 text-[#006DA8]"
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-3 text-lg font-bold leading-tight tracking-[-0.015em] text-[#00254D] sm:text-xl">
          Christian Learning Track
        </h2>

        <p className="mt-1 text-sm leading-6 text-[#4B5563]">
          Faith-rooted intellectual mentorship building Scriptural literacy,
          steadfast character, and servant-hearted public engagement.
        </p>

        <ul className="mt-4 space-y-1.5">
          {learningAreas.map((area) => {
            const Icon = area.icon;

            return (
              <li
                key={area.title}
                className="flex items-start gap-2.5 rounded-lg bg-[#F2F3FF] px-3 py-2.5"
              >
                <Icon
                  size={17}
                  className="mt-0.5 shrink-0 text-[#006DA8]"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-5 text-[#00254D]">
                    {area.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-5 text-[#4B5563]">
                    {area.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto flex flex-col gap-3 border-t border-[#F0EEF6] pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium text-[#4B5563]">Frequency</p>
            <p className="text-sm font-bold text-[#00254D]">
              Weekend &amp; Midweek Circles
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

export default ChristianLearningTrack;
