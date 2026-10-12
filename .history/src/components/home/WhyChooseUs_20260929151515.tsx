import {
  BookOpen,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "EXPERT INSTRUCTORS",
    description:
      "Skilled and experienced educators focused on practical teaching.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Laptop,
    title: "FLEXIBLE LEARNING",
    description:
      "Learn at your own pace, anytime, anywhere with flexible learning.",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "PRACTICAL & HANDS-ON",
    description:
      "Real-world projects and practical activities for useful skills.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: Users,
    title: "SUPPORTIVE COMMUNITY",
    description:
      "Learn, connect and grow with dedicated peers and educators.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: HeartHandshake,
    title: "FAITH-FRIENDLY ENVIRONMENT",
    description:
      "Values-based learning that supports character and personal growth.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section  className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-md bg-[#073B63] px-4 py-1.5 text-[30px] font-bold text-white font-[inter]">
            WHY CHOOSE IOLA?
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            Built For Practical Mastery & Lifelong
            <br className="hidden sm:block" />
            Growth
          </h2>

          <p className="mt-3 text-xs leading-5 text-[#64748B] sm:text-sm">
            Every course at IOLA combines certified modern training methods
            with values-based mentoring.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-[#E4EDF2] bg-[#F9FCFD] p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
                >
                  <Icon size={22} className={feature.iconColor} />
                </div>

                <h3 className="mt-4 text-[11px] font-extrabold leading-4 text-[#073B63]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#64748B]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;