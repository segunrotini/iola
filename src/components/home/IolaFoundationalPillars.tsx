import {
  Clock3,
  GraduationCap,
  Laptop,
  MessageSquare,
  MonitorCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const pillars = [
  {
    number: "Pillar 01",
    title: "Expert Instructors",
    description:
      "Certified educators, expert software engineers, and passionate faith scholars committed to thoroughness. Not pre-recorded videos, but true academic leaders.",
    badge: "Top 3% Vetted",
    footerBadge: "100% degree & background-checked",
    icon: GraduationCap,
    footerIcon: ShieldCheck,
    iconClass: "bg-[#052D55] text-white",
    badgeClass: "bg-[#E7EAF8] text-[#173B61]",
  },
  {
    number: "Pillar 02",
    title: "Flexible Learning",
    description:
      "Learn at your own pace, anywhere. Tailored weekend, evening, and synchronized-timezone cohorts prevent academic overload while maintaining momentum.",
    badge: "UK • NG • US • CA",
    footerBadge: "Live sync or recorded replay options",
    icon: Clock3,
    footerIcon: Clock3,
    iconClass: "bg-[#087BAE] text-white",
    badgeClass: "bg-[#E7EAF8] text-[#173B61]",
  },
  {
    number: "Pillar 03",
    title: "Practical & Hands-On",
    description:
      "Real-world software, live pair-coding exercises, public speaking rounds, and publishable personal portfolios designed for tangible career leverage.",
    badge: "Portfolio Driven",
    footerBadge: "Verified GitHub / Showcase assets",
    icon: Laptop,
    footerIcon: MonitorCheck,
    iconClass: "bg-[#052D55] text-white",
    badgeClass: "bg-[#E7EAF8] text-[#173B61]",
  },
  {
    number: "Pillar 04 • Supervised Lounge",
    title: "Safe, Supervised Community",
    description:
      "Zero unsupervised algorithmic rabbit holes. Our closed peer network features proactive safety pads, peer code reviews, and responsive family liaisons who keep adults aligned on the involved learner.",
    footerBadge: "Fully Monitored",
    secondaryBadge: "Direct WhatsApp Tutor Line",
    icon: MessageSquare,
    footerIcon: ShieldCheck,
    iconClass: "bg-[#052D55] text-white",
    badgeClass: "bg-[#E7EAF8] text-[#173B61]",
    featured: true,
  },
  {
    number: "Pillar 05",
    title: "Faith-Friendly Environment",
    description:
      "A respectful, teacher-building atmosphere welcoming students of all backgrounds. Zero tolerance for vulgarity, cynicism, or bullying—equipping both technical mastery and servant leadership.",
    badge: "Moral Anchor",
    footerBadge: "Safe speech & wholesome mentorship",
    icon: UsersRound,
    footerIcon: ShieldCheck,
    iconClass: "bg-[#075C55] text-white",
    badgeClass: "bg-[#DDF7F0] text-[#075C55]",
  },
];

function IolaFoundationalPillars() {
  return (
    <section className="bg-[#FAF9FF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 grid gap-3 sm:grid-cols-[1fr_0.75fr] sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
              Uncompromising Quality
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
              The Five Foundational Pillars of the IOLA Campus
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-[#4B5563] sm:justify-self-end">
            Engineered systematically to transform virtual learning from
            passive screen fatigue into structured personal mastery and moral
            clarity.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const FooterIcon = pillar.footerIcon;

            return (
              <article
                key={pillar.number}
                className={`flex flex-col rounded-xl border border-[#E6E9F4] bg-white p-4 ${
                  pillar.featured ? "lg:col-span-2 lg:flex-row lg:gap-5" : ""
                }`}
              >
                <div className={pillar.featured ? "min-w-0 flex-1" : ""}>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-md ${pillar.iconClass}`}
                  >
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-[#087BAE]">
                    {pillar.number}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold leading-5 text-[#073B63]">
                      {pillar.title}
                    </h3>
                    {pillar.badge && (
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${pillar.badgeClass}`}>
                        {pillar.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-5 text-[#4B5563]">
                    {pillar.description}
                  </p>
                  {!pillar.featured && (
                    <div className="mt-auto pt-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F0F2FF] px-2.5 py-1.5 text-xs font-medium text-[#263C5A]">
                        <FooterIcon size={13} aria-hidden="true" />
                        {pillar.footerBadge}
                      </span>
                    </div>
                  )}
                </div>

                {pillar.featured && (
                  <div className="mt-4 flex flex-wrap gap-3 lg:mt-0 lg:w-40 lg:flex-col lg:justify-center">
                    <div className="rounded-lg border border-[#E8EBF4] bg-[#FAFBFF] p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#4B5563]">
                        Parent Liaison SLA
                      </p>
                      <p className="mt-1 text-lg font-bold text-[#073B63]">
                        &lt; 30 Mins
                      </p>
                      <p className="text-xs leading-4 text-[#4B5563]">
                        Average query turnaround for enrolled parents during
                        term weeks.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#173B61]">
                        <FooterIcon size={13} aria-hidden="true" />
                        {pillar.footerBadge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#173B61]">
                        <MonitorCheck size={13} aria-hidden="true" />
                        {pillar.secondaryBadge}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IolaFoundationalPillars;
