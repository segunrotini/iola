import { BookOpen, Church, ShieldCheck } from "lucide-react";

const faithCommitments = [
  {
    value: "1:1",
    label: "Personalized Mentorship",
    valueClass: "text-[#073B63]",
  },
  {
    value: "100%",
    label: "Faith & Safety Verified",
    valueClass: "text-[#087BAE]",
  },
  {
    value: "3+",
    label: "Time Zones (UK, US, NG)",
    valueClass: "text-[#39B9AC]",
  },
  {
    value: (
      <>
        Grade-
        <br />
        Aligned
      </>
    ),
    label: "Balanced with Academics",
    valueClass: "text-[#0B4C83]",
  },
];

function FaithValuesHero() {
  return (
    <section className="bg-[#FAF9FF] px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-[60px] lg:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8ECFF] px-3 py-1 text-xs font-semibold tracking-wide text-[#073B63]">
            <ShieldCheck
              size={13}
              className="text-[#087BAE]"
              aria-hidden="true"
            />
            FAITH · VALUES · CHARACTER
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-[#073B63] sm:text-4xl lg:text-[40px]">
            Faith-Grounded Education Tailored
            <br className="hidden sm:block" /> to Your Family&apos;s Beliefs
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4B5563] sm:text-base">
            At IOLA, we provide dedicated, respectful, and values-aligned
            tracks where Muslim and Christian students can thrive in their
            faith alongside world-class academic and digital training.
          </p>

          <nav
            aria-label="Faith learning tracks"
            className="mt-6 inline-flex rounded-full bg-[#E9ECFF] p-1"
          >
            <a
              href="#islamic-learning"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#052D55] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#073B63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2"
            >
              <BookOpen size={15} aria-hidden="true" />
              Islamic Track
            </a>
            <a
              href="#christian-learning"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-[#27364C] transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2"
            >
              <Church size={15} aria-hidden="true" />
              Christian Track
            </a>
          </nav>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-4 sm:gap-4">
          {faithCommitments.map((commitment) => (
            <div
              key={commitment.label}
              className="flex min-h-[88px] flex-col items-center justify-center rounded-lg border border-[#EEF0F8] bg-white px-3 py-3 text-center"
            >
              <p
                className={`text-[21px] font-bold leading-tight tracking-tight sm:text-[22px] ${commitment.valueClass}`}
              >
                {commitment.value}
              </p>
              <p className="mt-1 text-xs leading-4 text-[#374151] sm:text-[13px]">
                {commitment.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaithValuesHero;
