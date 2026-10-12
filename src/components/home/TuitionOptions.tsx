import { Check, CheckCircle2, UsersRound, X } from "lucide-react";

const plans = [
  {
    category: "Modular Sprint",
    badge: "Month-to-Month",
    name: "Flexible Monthly",
    description:
      "Ideal for trial periods, individual coding modules, or targeted phonics acceleration.",
    price: "£45",
    cadence: "/ mo",
    naira: "(~₦75,000)",
    features: [
      { text: "2 Live cohort sessions per week", included: true },
      { text: "Full student portal access", included: true },
      { text: "Continuous assessment feedback", included: true },
      { text: "Dedicated private coach", included: false },
    ],
    action: "Select Monthly Sprint",
  },
  {
    category: "Full Mastery Term",
    badge: "12-Week Term",
    name: "Standard Cohort Term",
    description:
      "Comprehensive curriculum completion with peer project presentations and capstone portfolio.",
    price: "£115",
    cadence: "/ term",
    naira: "(~₦190,000)",
    features: [
      { text: "3 Live interactive sessions per week", included: true },
      { text: "Small peer cohort (maximum 6 learners)", included: true },
      { text: "Bi-weekly parent progress report & rubric", included: true },
      { text: "IOLA Official Verified Certificate", included: true },
    ],
    action: "Enroll in Full Term",
    featured: true,
  },
  {
    category: "Bespoke Pacing",
    badge: "Custom Slots",
    name: "Private 1-on-1 Mentorship",
    description:
      "Direct individual tutor engagement tailored for rapid advancement or learners needing special guidance.",
    price: "£90",
    cadence: "/ mo",
    naira: "(~₦150,000)",
    features: [
      { text: "1-on-1 dedicated private instructor", included: true },
      { text: "100% custom time slots and calendar", included: true },
      { text: "Accelerated diagnostic and milestone plan", included: true },
      { text: "Direct parent-tutor WhatsApp communication", included: true },
    ],
    action: "Apply for Private Track",
  },
];

function TuitionOptions() {
  return (
    <section className="bg-[#FAF9FF] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
              Clear &amp; Predictable Investment
            </p>
            <h2 className="text-xl font-semibold leading-tight text-[#173B61] sm:text-2xl">
              Tuition &amp; Term Pricing Options
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-[#4B5563]">
              All plans include complete learning materials, live session
              recordings, progress portals, and end-of-sprint certificates.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-md bg-[#E5E9FF] px-3 py-2 text-sm font-semibold text-[#173B61] lg:self-auto">
            <UsersRound size={16} className="text-[#087BAE]" aria-hidden="true" />
            10% Sibling Discount Auto-Applied
          </span>
        </header>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-4 sm:p-5 ${
                plan.featured
                  ? "border-[#052D55] bg-[#052D55] text-white shadow-lg lg:-mt-1 lg:mb-1"
                  : "border-[#E7EAF3] bg-white text-[#173B61]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#63C8EA] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#073B63]">
                  Most Selected
                </span>
              )}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wide ${plan.featured ? "text-[#A8D8F0]" : "text-[#4B5563]"}`}>
                    {plan.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-6">
                    {plan.name}
                  </h3>
                </div>
                <span className={`shrink-0 rounded-sm px-2 py-1 text-xs font-medium ${plan.featured ? "bg-[#0D4774] text-white" : "bg-[#E9ECFF] text-[#173B61]"}`}>
                  {plan.badge}
                </span>
              </div>
              <p className={`mt-2 min-h-10 text-sm leading-5 ${plan.featured ? "text-[#C6D9EA]" : "text-[#4B5563]"}`}>
                {plan.description}
              </p>

              <div className={`mt-3 rounded-lg px-3 py-2 ${plan.featured ? "bg-[#06477C]" : "bg-[#F0F2FF]"}`}>
                <p className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.featured ? "text-white" : "text-[#173B61]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-[#D4E2EF]" : "text-[#4B5563]"}`}>
                    {plan.cadence} {plan.naira}
                  </span>
                </p>
              </div>

              <ul className="mt-4 flex-1 space-y-1.5">
                {plan.features.map((feature) => (
                  <li key={feature.text} className={`flex items-start gap-2 text-sm leading-5 ${plan.featured ? "text-[#E6F0F8]" : "text-[#27384D]"}`}>
                    {feature.included ? (
                      <Check size={15} className="mt-0.5 shrink-0 text-[#41C9B9]" aria-hidden="true" />
                    ) : (
                      <X size={15} className="mt-0.5 shrink-0 text-[#697386]" aria-hidden="true" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              <a
                href="#admissions-inquiry"
                className={`mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2 ${
                  plan.featured
                    ? "bg-[#087BAE] text-white hover:bg-[#0792C7] focus-visible:ring-offset-[#052D55]"
                    : "bg-[#E9ECFF] text-[#173B61] hover:bg-[#DDE3FF]"
                }`}
              >
                {plan.action}
                {plan.featured && <CheckCircle2 size={15} aria-hidden="true" />}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TuitionOptions;
