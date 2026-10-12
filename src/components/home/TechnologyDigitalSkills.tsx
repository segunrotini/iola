import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  GraduationCap,
  Laptop,
  MonitorPlay,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import classroomImage from "../../assets/student.png";

const learnerTracks = [
  {
    title: "Children (5–12)",
    icon: UsersRound,
    topics: [
      "Computer literacy & safe mouse/keyboard ergonomics",
      "Scratch block-based game engineering",
      "Foundational AI concepts & cyber hygiene",
    ],
  },
  {
    title: "Teens (13–17)",
    icon: Laptop,
    topics: [
      "Web design (HTML5, CSS3, modern builders)",
      "Python foundation & algorithmic logic",
      "Prompt engineering & digital freelancing prep",
    ],
  },
  {
    title: "Adults & Pros",
    icon: GraduationCap,
    topics: [
      "Microsoft 365 & Google Workspace mastery",
      "Applied Generative AI for corporate workflow",
      "Data analytics fundamentals & brand design",
    ],
  },
];

function TechnologyDigitalSkills() {
  return (
    <section
      id="technology-digital-skills"
      className="bg-[#FAF8FF] px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
    >
      <article className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-[#F3F1F9] bg-white shadow-sm lg:grid-cols-[0.72fr_1fr]">
        <div className="relative min-h-64 overflow-hidden bg-[#DCE7EE] sm:min-h-80 lg:min-h-[390px]">
          <img
            src={classroomImage}
            alt="Learners developing digital skills together in a bright classroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F35]/30 via-transparent to-[#071F35]/20" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
            <span                         className="rounded-full bg-[#00254D]/95 px-3 py-1.5 text-xs font-bold text-white">
              MODULE 1
            </span>
            <span                         className="rounded-full bg-[#006DA8] px-3 py-1.5 text-xs font-bold text-white">
              High Demand
            </span>
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#006DA8]">
              Ages 5 Through Professional
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4B5563]">
              <CalendarDays size={16} className="text-[#006DA8]" aria-hidden="true" />
              Term / 12-Week Sprints
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#00254D] sm:text-4xl">
            Technology &amp; Digital Skills
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4B5563]">
            From playful computational logic to commercial-grade software
            competency, tailored for developmental cognitive readiness.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {learnerTracks.map((track) => {
              const Icon = track.icon;

              return (
                <div
                  key={track.title}
                  className="rounded-lg bg-[#F2F3FF] p-4"
                >
                  <h3 className="flex items-center gap-2 text-base font-bold leading-5 text-[#00254D]">
                    <Icon
                      size={16}
                      className="shrink-0 text-[#006DA8]"
                      aria-hidden="true"
                    />
                    {track.title}
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {track.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm leading-5 text-[#4B5563]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006DA8]"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-[#F0EEF6] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#4B5563]">
              <span className="inline-flex items-center gap-2">
                <Code2 size={16} className="text-[#006DA8]" aria-hidden="true" />
                Entry: Beginner to Advanced
              </span>
              <span className="inline-flex items-center gap-2">
                <MonitorPlay size={16} className="text-[#006DA8]" aria-hidden="true" />
                Virtual Lab Access
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#006DA8]" aria-hidden="true" />
                Guided, Safe Learning
              </span>
            </div>

            <a
              href="/#admissions"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00254D] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#073F6D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006DA8] focus-visible:ring-offset-2"
            >
              Enroll in Track
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default TechnologyDigitalSkills;
