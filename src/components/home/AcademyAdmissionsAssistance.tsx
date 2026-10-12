import {
  ArrowRight,
  BadgeCheck,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";

function AcademyAdmissionsAssistance() {
  return (
    <section className="bg-[#FAF8FF] px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#00254D] px-6 py-8 text-white shadow-md sm:px-8 sm:py-9 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#006DA8]/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-1/4 h-56 w-56 rounded-full bg-[#006DA8]/20 blur-3xl"
        />

        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#91C7E8]">
              Immediate Admissions Assistance
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
              Ready to Begin Your Academy Journey?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#B7D0E4]">
              Speak directly with an IOLA Academic Advisor via WhatsApp or
              telephone for custom placement testing and cohort timetable
              reservation.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#D7E7F4]">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#91C7E8]" aria-hidden="true" />
                Free Academic Assessment
              </span>
              <span className="inline-flex items-center gap-2">
                <PhoneCall size={16} className="text-[#91C7E8]" aria-hidden="true" />
                Instant WhatsApp Desk
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
            <a
              href="https://wa.me/2348124526982"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#00254D] transition-colors hover:bg-[#EAF3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00254D] sm:flex-none"
            >
              <MessageSquareText size={17} aria-hidden="true" />
              WhatsApp Admission Desk
            </a>

            <a
              href="/#admissions"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-lg bg-[#006DA8] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#005E95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00254D] sm:flex-none"
            >
              Complete Enrollment
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademyAdmissionsAssistance;
