import {
  Microscope,
  HandHeart,
  UsersRound,
  Infinity,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Microscope,
    title: "Academic Rigor & Practical Application",
    description:
      "We go beyond passive memorization. Learners synthesize theory through live coding, research dissertations, and hands-on capstones.",
    badge: "Certified Curriculum Standards",
  },
  {
    number: "02",
    icon: HandHeart,
    title: "Moral & Faith Integrity",
    description:
      "Celebrating faith traditions in harmony. Dedicated Quranic, Biblical, and ethical modules build honorable, honest, and respectful citizens.",
    badge: "Islamic & Christian Harmony",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Small-Group & 1-on-1 Mentorship",
    description:
      "Every mind flourishes differently. Cohort sizes are capped to maintain intimate feedback loops and individualized development roadmaps.",
    badge: "Max 1:6 Cohort Ratio",
  },
  {
    number: "04",
    icon: Infinity,
    title: "Global Inclusivity & Lifelong Learning",
    description:
      "Curricula designed for youth, working professionals, and curious elders across continents, creating a truly borderless learning family.",
    badge: "4 Continents Networked",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-[#f5f4ff] px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1687c9]">
            Our Institutional Pillars
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#07335d] sm:text-4xl md:text-5xl">
            The Values Defining Every Lesson
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#667085] sm:text-base">
            Rooted in enduring ethics, reinforced by pedagogical research, and
            tailored for global leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.number}
                className="flex min-h-[360px] flex-col rounded-xl border border-white bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#e9edff] text-[#07335d]">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-[#7b8494]">
                  {value.number} / Pillar
                </p>

                <h3 className="text-xl font-bold leading-snug text-[#07335d]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  {value.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex items-center rounded-md bg-[#eef0ff] px-3 py-2 text-xs font-semibold text-[#31537b]">
                    {value.number === "01" && (
                      <Microscope size={14} className="mr-2" />
                    )}

                    {value.number === "02" && (
                      <HandHeart size={14} className="mr-2" />
                    )}

                    {value.number === "03" && (
                      <UsersRound size={14} className="mr-2" />
                    )}

                    {value.number === "04" && (
                      <Infinity size={14} className="mr-2" />
                    )}

                    {value.badge}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Value;