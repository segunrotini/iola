import {
  ArrowRight,
  CalendarDays,
  CircleCheck,
  Headset,
  LockKeyhole,
} from "lucide-react";

function WhyIolaCTA() {
  return (
    <section className="bg-[#052D55] px-4 py-12 text-center text-white sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4778] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D7E9F8]">
          <CalendarDays size={13} aria-hidden="true" />
          Next Cohort Starts Soon
        </span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Experience the IOLA Advantage
          <br className="hidden sm:block" /> Today
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#C6D9EA] sm:text-base sm:leading-7">
          Equip yourself or your child with world-class technical competence,
          unshakable moral grounding, and direct mentorship from industry
          leaders.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/#admissions"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#087BAE] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0792C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#052D55]"
          >
            <CalendarDays size={15} aria-hidden="true" />
            Book a Free Assessment
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a
            href="/#admissions"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#173B61] transition-colors hover:bg-[#EAF3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#052D55]"
          >
            View Enrollment Options
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-[#D1DFEF]">
          <li className="inline-flex items-center gap-1.5">
            <CircleCheck size={13} aria-hidden="true" />
            Zero Risk 14-Day Trial
          </li>
          <li className="inline-flex items-center gap-1.5">
            <LockKeyhole size={13} aria-hidden="true" />
            Transparent Fixed Tuition
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Headset size={13} aria-hidden="true" />
            Dedicated Family Support
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyIolaCTA;
