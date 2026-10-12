import {
  Eye,
  Globe2,
  Rocket,
  Users,
} from "lucide-react";

function AboutVision() {
  return (
    <section className="bg-[#F8F9FF] py-10 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-[#06355E] p-6 text-white shadow-md sm:p-7">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0B5A8D]/40 blur-2xl" />

          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A5687]">
              <Rocket size={19} className="text-[#73DDF2]" />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#72D8EE]">
              Our Core Purpose
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Academy Mission
            </h2>

            <p className="mt-3 max-w-xl text-[11px] leading-5 text-[#D2E1EC] sm:text-xs">
              Provide accessible, world-class digital, language, STEM, and
              faith-grounded education for children, teens, and adults
              regardless of geographical boundaries.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A4B79] px-3 py-1.5 text-[9px] font-medium text-[#D8EDF6]">
                <Globe2 size={11} />
                Accessible Everywhere
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A4B79] px-3 py-1.5 text-[9px] font-medium text-[#D8EDF6]">
                <Users size={11} />
                All Age Groups
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#E5E9F2] bg-white p-6 shadow-sm sm:p-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9F1FF]">
            <Eye size={19} className="text-[#079BC2]" />
          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#079BC2]">
            The Horizon
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-[#073B63] sm:text-3xl">
            Our Global Vision
          </h2>

          <p className="mt-3 text-[11px] leading-5 text-[#64748B] sm:text-xs">
            To be the world's most trusted hybrid online academy fostering
            visionary digital innovators anchored in strong moral faith
            principles.
          </p>

          <div className="mt-5 flex items-start gap-3 rounded-lg bg-[#F0F3FF] p-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white">
              <Globe2 size={13} className="text-[#079BC2]" />
            </div>

            <p className="text-[9px] leading-4 text-[#64748B]">
              Unifying high-standard British/International curriculum
              benchmarking with holistic ethical integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;