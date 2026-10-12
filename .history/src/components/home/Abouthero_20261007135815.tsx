import {
  Award,
  Globe2,
  Heart,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    badge: "Global",
    value: "500+",
    label: "Active Learners Enrolled",
  },
  {
    icon: Award,
    badge: "Academic",
    value: "98%",
    label: "Completion & Satisfaction",
  },
  {
    icon: Globe2,
    badge: "Footprint",
    value: "4 Continents",
    label: "UK, Nigeria, US, Canada",
  },
  {
    icon: Heart,
    badge: "Faculty",
    value: "100%",
    label: "Values-Aligned Mentors",
  },
];

function AboutHero() {
  return (
    <section className="bg-[#EEF2FF]">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10">
        <div className="text-[8px] font-medium text-[#475569]">
          Home <span className="mx-1 text-[#94A3B8]">›</span>
          <span className="font-semibold text-[#073B63]">About Us</span>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#E2F4FA] px-3 py-1 text-[8px] font-bold uppercase tracking-wide text-[#079BC2]">
              • Integrated Online Learning Academy
            </span>

            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tight text-[#073B63] sm:text-5xl">
              Empowering Minds,
              <br />
              Nurturing Values,
              <br />
              <span className="text-[#079BC2]">Building Futures.</span>
            </h1>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-md text-[10px] leading-5 text-[#64748B] sm:text-xs">
              At IOLA, we believe education is most transformative when
              technical competence and deep moral character grow
              hand-in-hand.
            </p>

            <a
              href="#heritage"
              className="mt-4 inline-flex text-[9px] font-bold text-[#073B63] transition hover:text-[#079BC2]"
            >
              Read Our Heritage →
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.value}
                className="rounded-lg border border-white bg-white p-3 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#E8F1FF]">
                    <Icon size={14} className="text-[#079BC2]" />
                  </div>

                  <span className="rounded-full bg-[#F1F3FA] px-2 py-1 text-[7px] font-semibold text-[#64748B]">
                    {stat.badge}
                  </span>
                </div>

                <p className="mt-3 text-xl font-extrabold leading-none text-[#073B63]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[8px] text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;