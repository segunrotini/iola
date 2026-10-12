import { CheckCircle2, Gauge, Timer } from "lucide-react";

function AdmissionsHero() {
  return (
    <section className="bg-[#FAF9FF] px-4 pb-7 pt-8 sm:px-6 sm:pb-8 sm:pt-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1.3fr_0.8fr]">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#087BAE]" />
            Academic Intake 2026 / 2027 Sprints Open
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#073B63] sm:text-4xl">
            IOLA Admissions &amp; Academic Advisory
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4B5563] sm:text-base">
            Simple, transparent entry process designed to place your learner in
            the exact cohort where they will thrive.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-xl bg-[#F0F2FF] p-4 sm:p-5">
          <div className="flex items-start gap-2 border-r border-[#DDE3F5] pr-3">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-[#087BAE]"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold text-[#173B61]">100% Free</p>
              <p className="text-xs text-[#4B5563]">Diagnostic check</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Timer
              size={17}
              className="mt-0.5 shrink-0 text-[#39B9AC]"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold text-[#173B61]">&lt; 2 Hours</p>
              <p className="text-xs text-[#4B5563]">Average response</p>
            </div>
          </div>
          <div className="col-span-2 flex items-start gap-2 border-t border-[#DDE3F5] pt-3">
            <Gauge
              size={17}
              className="mt-0.5 shrink-0 text-[#087BAE]"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold text-[#173B61]">1:6 Ratio</p>
              <p className="text-xs text-[#4B5563]">Cohort maximum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsHero;
