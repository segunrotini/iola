import { Award } from "lucide-react";

const framework = [
  {
    number: "1",
    title: "Foundational Immersion",
    description:
      "Interactive live synchronous classrooms accompanied by bite-sized asynchronous reviews, diagnostic assessments, and mentor checkpoints.",
    type: "wave",
  },
  {
    number: "2",
    title: "Character & Ethics Integration",
    description:
      "Contextual discussions that analyze modern technological challenges—from AI ethics to intellectual honesty—through ancient moral wisdom.",
    type: "values",
  },
  {
    number: "3",
    title: "Showcase & Certification",
    description:
      "Students defend their capstone projects in front of advisory panels, earning accredited credentials recognized by international partners.",
    type: "certificate",
  },
];

function AboutFramework() {
  return (
    <section className="bg-[#EEF0FF] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#079BC2]">
              Pedagogical Framework
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#073B63] sm:text-4xl">
              How We Bridge Skill and Spirit
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-[#64748B]">
            Our three-tier learning architecture ensures every learner moves
            from conceptual understanding to verified real-world mastery.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {framework.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-[#E1E5F0] bg-white p-6 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1EEFF] text-sm font-bold text-[#2864A0]">
                {item.number}
              </div>

              <h3 className="mt-5 text-lg font-extrabold leading-6 text-[#073B63]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                {item.description}
              </p>

              {item.type === "wave" && (
                <div className="mt-6 overflow-hidden rounded-lg bg-[#F2F5FF] px-3 pt-3">
                  <svg
                    viewBox="0 0 300 45"
                    className="h-10 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 30 C45 18, 75 19, 110 25 C145 31, 175 35, 210 24 C245 13, 265 15, 300 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-[#0877A8]"
                    />
                  </svg>
                </div>
              )}

              {item.type === "values" && (
                <div className="mt-6 flex items-center justify-between rounded-lg bg-[#F2F5FF] px-4 py-3">
                  <span className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                    <span className="h-2 w-2 rounded-full bg-[#079BC2]" />
                    Integrity
                  </span>

                  <span className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                    <span className="h-2 w-2 rounded-full bg-[#073B63]" />
                    Wisdom
                  </span>

                  <span className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                    <span className="h-2 w-2 rounded-full bg-[#8B9AAF]" />
                    Service
                  </span>
                </div>
              )}

              {item.type === "certificate" && (
                <div className="mt-6 flex items-center justify-between rounded-lg bg-[#F2F5FF] px-4 py-3">
                  <span className="text-xs font-bold text-[#073B63]">
                    Verified Portfolio
                  </span>

                  <Award size={17} className="text-[#079BC2]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFramework;