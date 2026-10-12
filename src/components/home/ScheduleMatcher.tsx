import { CalendarClock, ClipboardCheck } from "lucide-react";

function ScheduleMatcher() {
  return (
    <section className="bg-[#E5E9FF] px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-lg border border-[#DFE4F3] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#052D55] text-white">
            <CalendarClock size={18} aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-base font-semibold text-[#173B61]">
              Is IOLA the Right Fit for Your Schedule?
            </h2>
            <p className="mt-0.5 max-w-3xl text-sm leading-5 text-[#4B5563]">
              Complete a 2-minute diagnostic to determine whether Weekend
              Sprints, Evening Sessions, or Private Mentorship best suits your
              goals.
            </p>
          </div>
        </div>
        <a
          href="/#admissions"
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-[#052D55] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#073B63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2"
        >
          <ClipboardCheck size={15} aria-hidden="true" />
          Take 2-Min Matcher
        </a>
      </div>
    </section>
  );
}

export default ScheduleMatcher;
