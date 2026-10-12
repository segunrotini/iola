import {
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
 function AboutStory() {
  return (
    <section id="heritage" className="bg-[#EEF0FF] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="relative">
          <div className="h-[330px] overflow-hidden rounded-xl border border-[#E0E5F2] bg-white shadow-sm sm:h-[380px]">
            <img
              src="/hybrid-campus.jpg"
              alt="IOLA Hybrid Campus"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 flex w-[220px] -translate-x-1/2 items-center gap-3 rounded-xl bg-[#073B63] px-4 py-3 text-white shadow-xl sm:left-auto sm:right-[-15px] sm:translate-x-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0B5D8F]">
              <Building2 size={18} className="text-[#75DDF0]" />
            </div>

            <div>
              <p className="text-[10px] font-bold">
                Hybrid Campus
              </p>

              <p className="mt-0.5 text-[9px] leading-4 text-[#C8DCE9]">
                Bridging geographic divides across the UK, Africa & North
                America.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pl-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#079BC2]">
            Founding Story & Heritage
          </p>

          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#073B63] sm:text-[34px]">
            Solving the Great Educational Dilemma
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-6 text-[#64748B]">
            <p>
              IOLA was founded in response to a recurring, poignant struggle
              articulated by forward-thinking parents worldwide: the deep
              fragmentation between cutting-edge technology and STEM
              education and wholesome, faith-respecting ethical environments.
            </p>

            <p>
              Too often, modern educational platforms offer technical
              excellence in isolation from moral grounding, while traditional
              spaces frequently lack exposure to future-defining digital
              skills like artificial intelligence, robotics, data analysis,
              and product creation.
            </p>

            <p>
              We engineered a hybrid virtual campus that dismantles this
              false compromise. At IOLA, a child can master Python programming
              and algorithmic thinking in the morning, refine their Arabic or
              English in the afternoon, and participate in peer-led moral
              character mentorship by evening.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-[#DDE4F0] bg-white p-4 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF2FF]">
                <ShieldCheck
                  size={18}
                  className="text-[#079BC2]"
                />
              </div>

              <h3 className="mt-3 text-sm font-extrabold text-[#073B63]">
                Ethical Safety First
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-[#64748B]">
                Strict parent-verified digital norms and guided
                environments.
              </p>
            </div>

            <div className="rounded-lg border border-[#DDE4F0] bg-white p-4 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF2FF]">
                <Sparkles
                  size={18}
                  className="text-[#079BC2]"
                />
              </div>

              <h3 className="mt-3 text-sm font-extrabold text-[#073B63]">
                Applied Mastery
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-[#64748B]">
                Project-based practice designed for future career impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;