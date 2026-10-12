import { ArrowRight, Globe2, ShieldCheck, UsersRound } from "lucide-react";

function WhyIolaHero() {
  return (
    <section className="bg-[#052D55] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4778] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D7E9F8]">
            <ShieldCheck size={13} aria-hidden="true" />
            Institutional Excellence &amp; Values
          </span>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[42px]">
            Why Discerning Families &amp;
            <br className="hidden sm:block" /> Ambitious Learners Choose IOLA
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#C6D9EA] sm:text-base sm:leading-7">
            Discover how our unique blend of real-world digital skills,
            values-based mentorship, and flexible scheduling prepares learners
            for a brighter tomorrow.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#admissions"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#087BAE] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0792C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#052D55]"
            >
              Book a Free Assessment
              <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#iola-difference"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#0B4778] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#12598D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#052D55]"
            >
              Compare Academy Matrix
              <span aria-hidden="true">⊞</span>
            </a>
          </div>
        </div>

        <aside className="rounded-xl border border-white/10 bg-[#103D68] p-5 shadow-md">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-[#C4D8EA]">
              Global Cohorts Active
            </p>
            <Globe2 size={17} className="text-[#62C6E8]" aria-hidden="true" />
          </div>
          <p className="mt-2 text-3xl font-bold leading-none text-white">
            4
            <span className="ml-2 text-base font-medium text-[#D4E2EF]">
              Primary Timezones
            </span>
          </p>
          <p className="mt-2 text-sm leading-5 text-[#C6D9EA]">
            Synchronized Nigeria, US &amp; Canada tracks with dedicated mentors.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-3 text-xs font-semibold text-[#D6E6F3]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#6EE0D3]" aria-hidden="true" />
              Verified Syllabi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UsersRound size={13} className="text-[#6EE0D3]" aria-hidden="true" />
              ≤6 Per Group
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default WhyIolaHero;
