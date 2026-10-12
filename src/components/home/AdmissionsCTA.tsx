import { ArrowRight, MessageSquareText } from "lucide-react";

function AdmissionsCTA() {
  return (
    <section className="bg-[#FAF9FF] px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-xl bg-[#073B70] px-5 py-6 text-white sm:px-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#7BC9E8]">
            Empowering Future Leaders
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-7 sm:text-2xl">
            Need a custom timetable or corporate group enrollment?
          </h2>
          <p className="mt-1 text-sm leading-5 text-[#C6D9EA]">
            Our Academic Advisor desk works directly with homeschool co-ops,
            diaspora networks, and families worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href="https://wa.me/2348124526982"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#087BAE] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0792C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#073B70]"
          >
            <MessageSquareText size={15} aria-hidden="true" />
            WhatsApp Admissions Desk
          </a>
          <a
            href="#admissions-inquiry"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#173B61] transition-colors hover:bg-[#EAF3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#073B70]"
          >
            Start Free Form
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsCTA;
