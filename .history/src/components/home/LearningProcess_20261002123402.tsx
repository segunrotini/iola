
import {
  ClipboardCheck,
  GraduationCap,
  Hammer,
  BarChart3,
} from "lucide-react";

const learningSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "NEEDS ASSESSMENT",
    description:
      "We understand each learner's goals, current level, and learning needs before getting started.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "LIVE INTERACTIVE CLASSES",
    description:
      "Join engaging online classes led by experienced instructors with real-time interaction.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "GUIDED PROJECT WORK",
    description:
      "Apply what you learn through practical projects, exercises, and hands-on activities.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "PROGRESS REPORTS & CERTS",
    description:
      "Track your progress and receive certificates when you successfully complete your program.",
  },
];

const LearningProcess = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-md bg-[#073B63] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
            How It Works
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            How Online Learning
            <br className="hidden sm:block" />
            Works With Us
          </h2>

          <p className="mt-3 text-xs leading-5 text-[#64748B] sm:text-sm">
            A simple learning process designed to help you learn, practice,
            and grow with confidence.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#DCE9EF] lg:block" />

          {learningSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#E8F5FA] shadow-sm">
                  <Icon size={23} className="text-[#079BC2]" />
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-extrabold text-[#079BC2]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-xs font-extrabold leading-4 text-[#073B63]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-[10px] leading-4 text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;

