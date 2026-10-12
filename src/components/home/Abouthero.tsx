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
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10">
        <div className="text-[11px] font-medium text-[#475569]">
          Home
          <span className="mx-1 text-[#94A3B8]">›</span>
          <span className="font-semibold text-[#073B63]">About Us</span>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#E2F4FA] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#079BC2]">
              • Integrated Online Learning Academy
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#073B63] sm:text-5xl lg:text-[52px]">
              Empowering Minds,
              <br />
              Nurturing Values,
              <br />
              <span className="text-[#079BC2]">Building Futures.</span>
            </h1>
          </div>

          <div className="lg:pt-12">
            <p className="max-w-lg text-sm leading-6 text-[#64748B]">
              At IOLA, we believe education is most transformative when
              technical competence and deep moral character grow
              hand-in-hand.
            </p>

            <a
              href="#heritage"
              className="mt-5 inline-flex text-[11px] font-bold text-[#073B63] transition hover:text-[#079BC2]"
            >
              Read Our Heritage →
            </a>
          </div>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.value}
                className="rounded-xl border border-white bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F1FF]">
                    <Icon size={17} className="text-[#079BC2]" />
                  </div>

                  <span className="rounded-full bg-[#F1F3FA] px-2.5 py-1 text-[9px] font-semibold text-[#64748B]">
                    {stat.badge}
                  </span>
                </div>

                <p className="mt-4 text-2xl font-extrabold leading-none text-[#073B63]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] text-[#64748B]">
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