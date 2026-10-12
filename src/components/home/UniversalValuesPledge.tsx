import {
  Ban,
  Medal,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const values = [
  {
    title: "Safe Digital Spaces",
    description:
      "Closed, encrypted classrooms with vetted proctoring and constant adult pastoral moderation.",
    icon: ShieldCheck,
    iconClass: "bg-[#0B4778] text-[#D3E9FF]",
  },
  {
    title: "Zero Derogatory Content",
    description:
      "Strict screening against profanity, secular extremism, cyberbullying, or sectarian antagonism.",
    icon: Ban,
    iconClass: "bg-[#075C5B] text-[#9CF1E3]",
  },
  {
    title: "Courteous Cohorts",
    description:
      "Fostering an active empathy, honoring family values, and promoting uplifting cross-cultural camaraderie.",
    icon: UsersRound,
    iconClass: "bg-[#17669D] text-[#D4E9FF]",
  },
  {
    title: "Moral Excellence",
    description:
      "Character assessments integrated alongside academic scores to encourage truthfulness and diligence.",
    icon: Medal,
    iconClass: "bg-[#315C8D] text-[#DCE8FF]",
  },
];

function UniversalValuesPledge() {
  return (
    <section className="bg-[#FAF9FF] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-xl bg-[#052D55] px-5 py-6 text-white shadow-lg sm:px-7 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4778] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#E1EFFB]">
            <ShieldCheck size={13} aria-hidden="true" />
            Our Universal Moral Covenant
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            The IOLA Universal Values Pledge
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#C6D9EA] sm:text-base sm:leading-7">
            Regardless of faith pathway, every single learner at IOLA enters
            a sanctuary of dignity, safety, and mutual respect. We believe high
            achievement without unbending moral character is incomplete.
          </p>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <li
                key={value.title}
                className="rounded-lg bg-[#073761] p-3 sm:p-3.5"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${value.iconClass}`}
                >
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h3 className="mt-2 text-sm font-semibold leading-5 text-white">
                  {value.title}
                </h3>
                <p className="mt-1 text-xs leading-[18px] text-[#C4D5E8]">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default UniversalValuesPledge;
