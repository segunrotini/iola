
import {
  Laptop,
  BookOpen,
  Church,
  Moon,
  FlaskConical,
} from "lucide-react";

const programs = [
  {
    icon: Laptop,
    title: "TECHNOLOGY & DIGITAL SKILLS",
    description:
      "Build practical digital skills in computing, programming, web development, and modern technology.",
  },
  {
    icon: BookOpen,
    title: "LANGUAGE & LITERACY",
    description:
      "Develop strong reading, writing, communication, and language skills for learning and everyday life.",
  },
  {
    icon: Church,
    title: "CHRISTIAN LEARNING",
    description:
      "Explore Christian teachings and values through structured learning and meaningful study.",
  },
  {
    icon: Moon,
    title: "ISLAMIC LEARNING",
    description:
      "Learn Islamic knowledge, values, and teachings through accessible and practical education.",
  },
  {
    icon: FlaskConical,
    title: "STEM & LOGICAL REASONING",
    description:
      "Develop problem-solving, scientific thinking, mathematics, and logical reasoning skills.",
  },
];

const Programs = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-md bg-[#073B63] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Our Programs
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            Learn Skills That Create
            <br className="hidden sm:block" />
            Real Opportunities
          </h2>

          <p className="mt-3 text-xs leading-5 text-[#64748B] sm:text-sm">
            Explore practical learning programs designed to build knowledge,
            develop skills, and create opportunities for everyone.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group rounded-xl border border-[#E4EDF2] bg-[#F9FCFD] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F3FA]">
                  <Icon
                    size={23}
                    className="text-[#073B63] transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-xs font-extrabold leading-4 text-[#073B63]">
                  {program.title}
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#64748B]">
                  {program.description}
                </p>

                <button className="mt-5 text-[10px] font-bold text-[#073B63] transition hover:text-[#0B6EA8]">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
