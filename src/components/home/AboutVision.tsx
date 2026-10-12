import {
  Eye,
  Globe2,
  Rocket,
  Users,
} from "lucide-react";

function AboutVision() {
  return (
    <section className="bg-[#F8F9FF] py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-[#06355E] p-7 text-white shadow-md sm:p-8">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#0B5A8D]/40 blur-2xl" />

          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0A5687]">
              <Rocket size={21} className="text-[#73DDF2]" />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#72D8EE]">
              Our Core Purpose
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-[32px]">
              Academy Mission
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#D2E1EC]">
              Provide accessible, world-class digital, language, STEM, and
              faith-grounded education for children, teens, and adults
              regardless of geographical boundaries.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0A4B79] px-3.5 py-2 text-[10px] font-medium text-[#D8EDF6]">
                <Globe2 size={13} />
                Accessible Everywhere
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#0A4B79] px-3.5 py-2 text-[10px] font-medium text-[#D8EDF6]">
                <Users size={13} />
                All Age Groups
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#E5E9F2] bg-white p-7 shadow-sm sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E9F1FF]">
            <Eye size={21} className="text-[#079BC2]" />
          </div>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#079BC2]">
            The Horizon
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#073B63] sm:text-[32px]">
            Our Global Vision
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            To be the world's most trusted hybrid online academy fostering
            visionary digital innovators anchored in strong moral faith
            principles.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-lg bg-[#F0F3FF] p-4">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white">
              <Globe2 size={14} className="text-[#079BC2]" />
            </div>

            <p className="text-[10px] leading-5 text-[#64748B]">
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