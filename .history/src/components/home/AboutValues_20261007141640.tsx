
import {
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Excellence",
    description:
      "We pursue high standards in learning, teaching, and personal development.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We build character through honesty, responsibility, and strong moral values.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We create a supportive environment where learners, instructors, and families grow together.",
  },
  {
    icon: ShieldCheck,
    title: "Innovation",
    description:
      "We embrace creative ideas, modern technology, and practical approaches to education.",
  },
];

function AboutValues() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Core Values
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            The Values Defining Every Lesson
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            At IOLA, education goes beyond the classroom. Our values guide
            every lesson, interaction, and experience we create for our
            learners.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

