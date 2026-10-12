import {
  CircleHelp,
  Clock3,
  CreditCard,
  Laptop,
} from "lucide-react";

const questions = [
  {
    question: "How does the Free Diagnostic Assessment work?",
    answer:
      "Once you submit an inquiry, we dispatch a lightweight, non-intimidating link. For phonics, it tests letter-sound mastery; for coding, logic readiness; for Arabic/Faith, phonetic recitation. Our advisors review results before scheduling your 1-on-1 call.",
    icon: CircleHelp,
  },
  {
    question: "What time zones do cohorts accommodate?",
    answer:
      "We operate across three primary windows: United Kingdom (GMT/BST), West African Time (WAT), and Eastern Standard Time (EST). Weekend sessions are concentrated on Saturday mornings, while weekday sessions run in after-school slots.",
    icon: Clock3,
  },
  {
    question: "What hardware and software are required?",
    answer:
      "A computer (laptop/desktop preferred for coding & STEM, tablet acceptable for early literacy and Quran tracks), stable broadband internet, and a webcam/headset. All portal software is cloud-hosted without mandatory paid software licenses.",
    icon: Laptop,
  },
  {
    question: "What payment methods and currencies are supported?",
    answer:
      "We accept international debit cards (GBP, USD) as well as direct local bank transfers in Nigerian Naira (NGN). Flexible two-installment payment splits are available for full-term registrations upon request.",
    icon: CreditCard,
  },
];

function AdmissionsFAQs() {
  return (
    <section className="bg-[#F0F2FF] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-xl bg-[#F0F2FF]">
        <header className="mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
            Answers for Parents
          </p>
          <h2 className="text-xl font-semibold leading-tight text-[#173B61] sm:text-2xl">
            Frequently Asked Admissions Questions
          </h2>
          <p className="text-sm leading-5 text-[#4B5563]">
            Everything you need to know about testing, cohort assignments,
            technical requirements, and curriculum flexibility.
          </p>
        </header>

        <div className="grid gap-3 md:grid-cols-2">
          {questions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.question}
                className="rounded-lg border border-[#E5E9F4] bg-white p-3"
              >
                <h3 className="flex items-start gap-2 text-sm font-semibold leading-5 text-[#173B61]">
                  <Icon
                    size={15}
                    className="mt-0.5 shrink-0 text-[#087BAE]"
                    aria-hidden="true"
                  />
                  {item.question}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-[#4B5563]">
                  {item.answer}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AdmissionsFAQs;
