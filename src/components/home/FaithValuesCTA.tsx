import { ArrowRight, BookOpen } from "lucide-react";

function FaithValuesCTA() {
  return (
    <section className="bg-[#FAF9FF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#073B63] sm:text-3xl">
          Empower Your Child With Unshakable Faith
          <br className="hidden sm:block" /> and Modern Intellect
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#4B5563]">
          Join hundreds of parents worldwide raising globally competent
          leaders anchored in godly wisdom.
        </p>

        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/#admissions"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#087BAE] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#066995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B63] focus-visible:ring-offset-2"
          >
            Apply for Next Cohort
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="/programs#technology-digital-skills"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#E9ECFF] px-5 py-2.5 text-sm font-semibold text-[#173B61] transition-colors hover:bg-[#DDE3FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2"
          >
            <BookOpen size={16} aria-hidden="true" />
            View STEM &amp; Arts Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaithValuesCTA;
