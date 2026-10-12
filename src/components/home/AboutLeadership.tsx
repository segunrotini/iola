import {
  GraduationCap,
  UserRound,
} from "lucide-react";

const team = [
  {
    name: "Mrs. Grace Adeyemi",
    role: "Academic Director",
    badge: "Academic Lead",
    description:
      "Over 18 years in curriculum design and pedagogy across West Africa and the UK, spearheading learner-centric teaching methodologies.",
    qualification: "M.Ed. Curriculum & Instruction",
    image: "",
  },
  {
    name: "Michael O.",
    role: "Head of Tech & Innovation",
    badge: "Tech & STEM",
    description:
      "Software architect and STEM curriculum fellow passionate about equipping the next generation with applied coding, AI literacy, and systems thinking.",
    qualification: "B.Sc. Computer Science",
    image: "",
  },
  {
    name: "Dr. Tariq Al-Mansoor",
    role: "Director of Faith, Ranks & Ethics",
    badge: "Faith Studies",
    description:
      "Renowned scholar of comparative religious studies and classical Arabic, dedicated to moral character formation in digital learning.",
    qualification: "Ph.D. Islamic Jurisprudence & Ethics",
    image: "/tariq.jpg",
  },
  {
    name: "Claire Edwards",
    role: "Lead for Student Wellbeing & Advisory",
    badge: "Wellbeing",
    description:
      "Specialist in digital-age adolescent psychology, personalised learning, and safeguarding within modern educational environments.",
    qualification: "M.Sc. Child & Adolescent Education",
    image: "/claire.jpg",
  },
];

function AboutLeadership() {
  return (
    <section className="bg-[#F8F9FF] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#079BC2]">
              Faculty & Council
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#073B63] sm:text-4xl">
              Leadership & Advisory Team
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-[#64748B]">
            Seasoned educators, technologists, and ethicists dedicated to
            cultivating holistic brilliance in every learner.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-xl border border-[#E1E5F0] bg-white shadow-sm"
            >
              <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-lg bg-[#E7E9FA]">
                <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#64748B] shadow-sm">
                  {member.badge}
                </span>

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <UserRound
                      size={70}
                      strokeWidth={1}
                      className="text-[#C9D0EF]"
                    />
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-base font-extrabold leading-5 text-[#073B63]">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#079BC2]">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-5 text-[#64748B]">
                  {member.description}
                </p>

                <div className="mt-4 flex items-center gap-2 border-t border-[#EEF1F5] pt-3">
                  <GraduationCap
                    size={14}
                    className="shrink-0 text-[#079BC2]"
                  />

                  <span className="text-[11px] font-medium text-[#64748B]">
                    {member.qualification}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;