import { Star } from "lucide-react";

const stories = [
  {
    quote:
      "Before IOLA, coding tutorials felt repetitive and lonely. In my cohort, we met twice a week with an engineer based in London who guided us through Python. I built a tool that assists my school’s youth fellowship team. My parents love the clear investment and dedicated updates!",
    name: "Zainab K.",
    role: "Teen Coder & STEM Scholar · Lagos & Manchester Cohort",
    track: "Track: Python & Web Architectures",
  },
  {
    quote:
      "Balancing a full-time corporate role with technical upskilling was overwhelming until I found IOLA’s evening track. The tutors are patient, the curriculum adapts with life, and WhatsApp support resolved roadblocks fast. The moral and ethical perspective brought into modern tech governance was deeply refreshing.",
    name: "Michael O.",
    role: "Adult Tech Learner & Ops Lead · Toronto Cohort",
    track: "Track: Cloud Data & Applied AI",
  },
];

function WhyIolaTestimonials() {
  return (
    <section className="bg-[#FAF9FF] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
            Proof of Transformation
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            Voices from Our Global Learning Family
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#4B5563]">
            From teen prodigies publishing full-stack applications to adult
            professionals executing high-impact career pivots.
          </p>
        </header>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.name}
              className="flex flex-col overflow-hidden rounded-xl border border-[#E1E5F0] bg-white shadow-sm"
            >
              <div className="flex-1 p-5 sm:p-6">
                <div className="flex gap-1 text-[#087BAE]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm italic leading-6 text-[#364152] sm:text-base sm:leading-7">
                  “{story.quote}”
                </blockquote>
              </div>
              <div className="bg-[#F2F4FF] px-5 py-4 sm:px-6">
                <p className="text-sm font-bold text-[#173B61]">{story.name}</p>
                <p className="mt-0.5 text-xs leading-5 text-[#4B5563]">
                  {story.role}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#087BAE]">
                  {story.track}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-lg bg-[#E8EBFF] p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium leading-6 text-[#173B61]">
            “As a homeschooling parent, IOLA has solved our STEM gap without
            compromising our family values.”
            <span className="ml-1 text-xs font-normal text-[#4B5563]">
              — Mrs. Adebayo, Parent of 2 Enrolled Scholars (Houston, TX)
            </span>
          </p>
          <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-[#173B61]">
            ★ &nbsp;100% Recommended
          </span>
        </div>
      </div>
    </section>
  );
}

export default WhyIolaTestimonials;
