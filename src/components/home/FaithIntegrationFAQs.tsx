import { useState } from "react";
import { ArrowDown, Headset } from "lucide-react";

const questions = [
  {
    question: "How do Faith Tracks fit with STEM and standard school hours?",
    answer:
      "Faith learning is scheduled around each learner’s regular school day. Families can select weekday, evening, or weekend sessions, with STEM and other core subjects planned alongside the faith track.",
  },
  {
    question: "How are one-on-one Quran or Scripture tutors vetted and matched?",
    answer:
      "Tutors are reviewed for subject expertise, teaching experience, and suitability for working with children. We consider the learner’s age, level, schedule, and family preferences when matching a tutor.",
  },
  {
    question: "What if our family has a specific Christian denomination background?",
    answer:
      "Families can share their denomination and learning preferences during consultation. The Christian track respects family traditions and seeks appropriate alignment when planning instruction.",
  },
  {
    question: "Can diaspora students outside Nigeria join and receive certificates?",
    answer:
      "Yes. Online sessions are designed for families in different locations and time zones. Certificate eligibility and requirements can be discussed with an academic advisor during enrollment.",
  },
];

function FaithIntegrationFAQs() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section className="bg-[#F0F2FF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            Parents&apos; Questions on Faith Integration
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#4B5563]">
            Clear answers regarding scheduling, tutor assignment, and curriculum
            harmony.
          </p>
        </header>

        <div className="mx-auto mt-6 max-w-3xl space-y-1.5">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faith-faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-lg border border-[#E6E9F4] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenQuestion(isOpen ? null : index)
                  }
                  className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-[#173B61] transition-colors hover:bg-[#FAFBFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#087BAE]"
                >
                  {item.question}
                  <ArrowDown
                    size={16}
                    className={`shrink-0 text-[#087BAE] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div id={answerId} className="px-4 pb-3">
                    <p className="text-sm leading-6 text-[#4B5563]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-3 rounded-lg bg-[#E5E9FF] p-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#052D55] text-white">
              <Headset size={17} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-5 text-[#173B61]">
                Need a personalized consultation?
              </p>
              <p className="text-xs leading-4 text-[#4B5563]">
                Speak directly with an Academic &amp; Spiritual Guidance
                Director.
              </p>
            </div>
          </div>
          <a
            href="/#admissions"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#173B61] transition-colors hover:bg-[#F8F9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2"
          >
            Book Academic Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaithIntegrationFAQs;
