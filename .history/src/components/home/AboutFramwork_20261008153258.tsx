import { Award, ShieldCheck, Sparkles } from "lucide-react";

const framework = [
  {
    number: "1",
    title: "Foundational Immersion",
    description:
      "Interactive live synchronous classrooms accompanied by bite-sized asynchronous reviews, diagnostic assessments, and mentor checkpoints.",
    bottom: "Interactive Live Learning",
    type: "wave",
  },
  {
    number: "2",
    title: "Character & Ethics Integration",
    description:
      "Contextual discussions that analyze modern technological challenges—from AI ethics to intellectual honesty—through ancient moral wisdom.",
    bottom: "Integrity",
    type: "values",
  },
  {
    number: "3",
    title: "Showcase & Certification",
    description:
      "Students defend their capstone projects in front of advisory panels, earning accredited credentials recognized by international partners.",
    bottom: "Verified Portfolio",
    type: "certificate",
  },
];

function AboutFramework () {
  return (
    <section className="bg-[#EEF0FF] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#079BC2]">
              Pedagogical Framework
            </p>

            <h2 className="mt-1 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
              How We Bridge Skill and Spirit
            </h2>
          </div>

          <p className="max-w-sm text-[10px] leading-4 text-[#64748B] md:pb-1">
            Our three-tier learning architecture ensures every learner moves
            from conceptual understanding to verified real-world mastery.
          </p>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {framework.map((item) => (
            <div
              key={item.number}
              className="rounded-lg border border-[#E1E5F0] bg-white p-4 shadow-sm"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1EEFF] text-[11px] font-bold text-[#2864A0]">
                {item.number}
              </div>

              <h3 className="mt-3 text-[12px] font-extrabold leading-4 text-[#073B63]">
                {item.title}
              </h3>

              <p className="mt-2 text-[9px] leading-4 text-[#64748B]">
                {item.description}
              </p>

              {item.type === "wave" && (
                <div className="mt-4 overflow-hidden rounded-md bg-[#F2F5FF] px-2 pt-2">
                  <svg
                    viewBox="0 0 300 45"
                    className="h-7 w-full"
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
                <div className="mt-4 flex items-center justify-between rounded-md bg-[#F2F5FF] px-3 py-2">
                  <span className="flex items-center gap-1 text-[8px] font-semibold text-[#64748B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#079BC2]" />
                    Integrity
                  </span>

                  <span className="flex items-center gap-1 text-[8px] font-semibold text-[#64748B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#073B63]" />
                    Wisdom
                  </span>

                  <span className="flex items-center gap-1 text-[8px] font-semibold text-[#64748B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8B9AAF]" />
                    Service
                  </span>
                </div>
              )}

              {item.type === "certificate" && (
                <div className="mt-4 flex items-center justify-between rounded-md bg-[#F2F5FF] px-3 py-2">
                  <span className="text-[8px] font-bold text-[#073B63]">
                    {item.bottom}
                  </span>

                  <Award size={13} className="text-[#079BC2]" />
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