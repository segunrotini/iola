import {
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Laptop,
  Rocket,
  Video,
  type LucideIcon,
} from "lucide-react";

const steps: {
  number: string;
  title: string;
  description: string;
  footer: string;
  icon: LucideIcon;
  footerColor: string;
}[] = [
  {
    number: "01",
    title: "Free Diagnostic Assessment",
    description:
      "Evaluate baseline reading fluency, digital & coding aptitude, or foundational Arabic and faith background through low-stress interactive tasks.",
    footer: "Est. time: 15–20 mins",
    icon: ClipboardCheck,
    footerColor: "text-[#087BAE]",
  },
  {
    number: "02",
    title: "Personalized Consultation",
    description:
      "Meet 1-on-1 with an experienced IOLA Academic Advisor via Zoom or WhatsApp video to analyze diagnostic insights and student goals.",
    footer: "Parent + Learner welcome",
    icon: Video,
    footerColor: "text-[#087BAE]",
  },
  {
    number: "03",
    title: "Cohort & Schedule Match",
    description:
      "Lock in optimal times across UK (BST/GMT), Nigeria (WAT), or North American zones. Select weekend micro-groups or weekdays.",
    footer: "Multi-timezone synchronized",
    icon: CalendarDays,
    footerColor: "text-[#087BAE]",
  },
  {
    number: "04",
    title: "Orientation & Onboarding",
    description:
      "Activate student portal credentials, download syllabus kits, meet lead instructors, and test class hardware in a friendly dry run.",
    footer: "Full portal unlock",
    icon: Rocket,
    footerColor: "text-[#39B9AC]",
  },
];

function AdmissionsRoadmap() {
  return (
    <section className="bg-[#F0F2FF] px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
              The Roadmap
            </p>
            <h2 className="text-xl font-semibold leading-tight text-[#173B61] sm:text-2xl">
              The 4-Stage Admissions Workflow
            </h2>
          </div>
          <p className="inline-flex items-center gap-1.5 text-sm text-[#4B5563]">
            <span className="h-2 w-2 rounded-full bg-[#087BAE]" />
            Rolling intakes start bi-weekly
          </p>
        </header>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="flex min-h-[196px] flex-col rounded-xl border border-[#E4E8F3] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#087BAE]">
                    {step.number}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9ECFF] text-[#073B63]">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-[#173B61]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-[#4B5563]">
                  {step.description}
                </p>
                <p className={`mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium ${step.footerColor}`}>
                  {step.number === "04" ? (
                    <CheckCircle2 size={14} aria-hidden="true" />
                  ) : step.number === "03" ? (
                    <Laptop size={14} aria-hidden="true" />
                  ) : (
                    <ClipboardCheck size={14} aria-hidden="true" />
                  )}
                  {step.footer}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default AdmissionsRoadmap;
