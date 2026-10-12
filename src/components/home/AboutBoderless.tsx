import { Globe2 } from "lucide-react";
import londonMap from "../../assets/london-map.svg";

function AboutBoderless() {
  return (
    <section className="w-full bg-[#eef0ff] px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow-sm sm:p-8">
        <div className="grid items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-9">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Globe2 size={14} className="text-[#087bb5]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#087bb5]">
                Borderless Learning Ecosystem
              </span>
            </div>

            <h2 className="max-w-lg text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#07345b] sm:text-4xl">
              Connecting Learners Across Timezones
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
              Our virtual classrooms run synchronously across GMT, WAT, EST,
              and PST timezones, providing collaborative peer groups where a
              student in London interacts seamlessly with peers in Lagos,
              Toronto, and Dallas.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-[11px] font-medium text-[#17406b]">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#42c9a5]" />
                United Kingdom (HQ)
              </span>

              <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-[11px] font-medium text-[#17406b]">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#087bb5]" />
                Nigeria
              </span>

              <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-[11px] font-medium text-[#17406b]">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#17406b]" />
                United States
              </span>

              <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-[11px] font-medium text-[#17406b]">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2f65a0]" />
                Canada
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <img
              src={londonMap}
              alt="Illustrated street map of London, showing the academy's global learning hub"
              className="h-[260px] w-full object-cover sm:h-[300px]"
            />

            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-lg sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
              <Globe2 size={18} className="text-[#087bb5]" />

              <span className="text-[11px] font-semibold text-[#17406b] sm:text-xs">
                Global Registry: London, UK • West Africa Hub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBoderless;
