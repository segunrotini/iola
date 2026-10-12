
const learningSteps = [
  {
    number: "01",
    title: "Needs Assessment",
    description:
      "Initial diagnostic test to match your learner to the right level and mentor.",
  },
  {
    number: "02",
    title: "Live Interactive Classes",
    description:
      "Engaging, small-color video sessions with active core ideas and instant feedback.",
  },
  {
    number: "03",
    title: "Guided Project Work",
    description:
      "Students build websites, apps, fluency, or skills while practicing challenges and guidance.",
  },
  {
    number: "04",
    title: "Progress Reports & Certs",
    description:
      "Periodic parent reports, milestone tracking, and accredited course completion awards.",
  },
];

const LearningProcess = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#079BC2]">
            The IOLA Experience
          </p>

          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            How Online Learning Works With Us
          </h2>

          <p className="mt-2 text-base leading-7 text-[#64748B]">
            Designed for maximum retention, practical versatility, and student
            confidence.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-[#E3ECF1] bg-[#F7FAFC] p-4 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E1F3FA] text-xs font-extrabold text-[#079BC2]">
                {step.number}
              </div>

              <h3 className="mt-4 text-base font-extrabold leading-6 text-[#073B63]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;
