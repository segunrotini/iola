
import { ArrowUpRight } from "lucide-react";

const learningPoints = [
  {
    number: "01",
    title: "Learn Without Borders",
    text: "Access quality learning from anywhere in the world, connecting with educators and learners beyond geographical boundaries.",
  },
  {
    number: "02",
    title: "Connect Across Timezones",
    text: "Our learning community brings together people from different locations, cultures, and backgrounds.",
  },
  {
    number: "03",
    title: "Grow Together",
    text: "Build meaningful connections, exchange ideas, and develop skills in a truly global learning environment.",
  },
];

function AboutBoderless() {
  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Borderless Learning Ecosystem
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Connecting Learners
              <br />
              Across Timezones
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            IOLA creates a learning environment where knowledge, ideas, and
            opportunities move freely across borders.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[430px]">
              <div className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
              <div className="absolute h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />

              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-80 sm:w-80">
                <div className="text-center">
                  <p className="text-5xl font-bold text-white sm:text-6xl">
                    IOLA
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
                    Global Learning
                  </p>
                </div>
              </div>

              <span className="absolute left-[12%] top-[25%] h-3 w-3 rounded-full bg-blue-400" />
              <span className="absolute right-[17%] top-[18%] h-3 w-3 rounded-full bg-cyan-300" />
              <span className="absolute right-[10%] bottom-[27%] h-3 w-3 rounded-full bg-blue-400" />
              <span className="absolute left-[20%] bottom-[18%] h-3 w-3 rounded-full bg-cyan-300" />
            </div>

            <div>
              <div className="mb-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white">
                  <ArrowUpRight size={21} />
                </span>
              </div>

              <div className="space-y-8">
                {learningPoints.map((point) => (
                  <div
                    key={point.number}
                    className="border-b border-white/10 pb-7 last:border-b-0"
                  >
                    <div className="mb-3 flex items-center gap-4">
                      <span className="text-xs font-semibold tracking-[0.2em] text-blue-300">
                        {point.number}
                      </span>

                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {point.title}
                      </h3>
                    </div>

                    <p className="pl-9 text-sm leading-6 text-slate-400 sm:text-base">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBoderless;

