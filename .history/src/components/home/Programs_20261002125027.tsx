import {
  Code2,
  BookOpen,
  Church,
  Moon,
  Brain,
  CircleCheck,
} from "lucide-react";

const Programs = () => {
  return (
    <section className="bg-[#F1F6FA] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-md bg-[#003B5C] px-5 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm">
            OUR PROGRAMS & SERVICES
          </span>

          <p className="mx-auto mt-4 max-w-2xl text-[11px] leading-5 text-[#64748B]">
            Structured step-by-step pathways designed specifically for Children,
            Teenagers, and Adult learners.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {/* MODULE 1 */}
          <div className="row-span-2 overflow-hidden rounded-xl border border-[#D9E2E8] bg-white shadow-sm">
            <div className="flex items-center justify-between bg-[#003B5C] px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#075375]">
                  <Code2 size={18} />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-[#5ED6EA]">
                    MODULE 1
                  </p>
                  <h3 className="text-sm font-extrabold">
                    Technology & Digital Skills
                  </h3>
                </div>
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-extrabold text-[#003B5C]">
                1
              </div>
            </div>

            <div className="p-4">
              <ProgramGroup
                title="CHILDREN"
                items={[
                  "Computer literacy",
                  "Digital creativity",
                  "Scratch-style programming",
                  "Coding fundamentals",
                  "AI literacy",
                  "Internet safety & cyber hygiene",
                ]}
              />

              <ProgramGroup
                title="TEENAGERS"
                items={[
                  "Web design (HTML, CSS, modern builders)",
                  "Python foundation",
                  "AI literacy & prompt tools",
                  "Freelancing & digital career prep",
                ]}
              />

              <ProgramGroup
                title="ADULTS"
                items={[
                  "Computer fundamentals",
                  "Microsoft Office suite proficiency",
                  "Google Workspace collaboration",
                  "Applied AI literacy for productivity",
                  "Digital marketing & social branding",
                  "Data analysis foundation",
                  "Web design",
                ]}
              />

              <EnrollButton color="bg-[#003B5C]" text="Enroll in Tech Track" />
            </div>
          </div>

          {/* MODULE 2 */}
          <ProgramCard
            number="2"
            module="MODULE 2"
            title="Language & Literacy"
            subtitle="(Primary)"
            icon={BookOpen}
            headerColor="bg-[#108477]"
            iconBg="bg-[#24968A]"
            numberColor="text-[#108477]"
            items={[
              "Early phonics & sound blends",
              "Reading foundation & sentence building",
              "Expressive communication & writing",
            ]}
            levels={["Level 1", "Level 2", "Level 3"]}
            button="Enroll in Literacy Track"
            buttonColor="bg-[#108477]"
          />

          {/* MODULE 4 */}
          <ProgramCard
            number="4"
            module="MODULE 4"
            title="Christian Learning"
            icon={Church}
            headerColor="bg-[#E98500]"
            iconBg="bg-[#F09A24]"
            numberColor="text-[#E98500]"
            items={[
              "Bible Studies & Scriptural literacy",
              "Denominational context & moral character",
            ]}
            levels={["Level 1"]}
            button="Enroll in Christian Track"
            buttonColor="bg-[#E98500]"
          />

          {/* MODULE 3 */}
          <ProgramCard
            number="3"
            module="MODULE 3"
            title="Islamic Learning"
            icon={Moon}
            headerColor="bg-[#38328F]"
            iconBg="bg-[#4943A0]"
            numberColor="text-[#38328F]"
            items={[
              "Quran Reading (Tajwid)",
              "Aqeedah & Islamic foundation",
              "Islamic Studies (knowledge & Akhlaq)",
              "Tajweed & Quran recitation rules",
            ]}
            levels={["Level 1"]}
            button="Enroll in Islamic Track"
            buttonColor="bg-[#38328F]"
          />

          {/* MODULE 5 */}
          <ProgramCard
            number="5"
            module="MODULE 5"
            title="STEM & Logical Reasoning"
            icon={Brain}
            headerColor="bg-[#109D91]"
            iconBg="bg-[#25AA9F]"
            numberColor="text-[#109D91]"
            items={[
              "Mathematics problem solving",
              "Science discovery & experiments",
              "Design thinking & analytical logic",
              "Grammar and Character Education",
            ]}
            levels={["Level 1"]}
            button="Enroll in STEM Track"
            buttonColor="bg-[#109D91]"
          />
        </div>
      </div>
    </section>
  );
};

type ProgramCardProps = {
  number: string;
  module: string;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  headerColor: string;
  iconBg: string;
  numberColor: string;
  items: string[];
  levels: string[];
  button: string;
  buttonColor: string;
};

const ProgramCard = ({
  number,
  module,
  title,
  subtitle,
  icon: Icon,
  headerColor,
  iconBg,
  numberColor,
  items,
  levels,
  button,
  buttonColor,
}: ProgramCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-[#D9E2E8] bg-white shadow-sm">
      <div
        className={`flex items-center justify-between px-4 py-4 text-white ${headerColor}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
          >
            <Icon size={17} />
          </div>

          <div>
            <p className="text-[8px] font-bold uppercase tracking-widest opacity-80">
              {module}
            </p>

            <h3 className="text-sm font-extrabold">
              {title}
              {subtitle && (
                <span className="ml-1 text-[9px] font-medium">
                  {subtitle}
                </span>
              )}
            </h3>
          </div>
        </div>

        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-extrabold ${numberColor}`}
        >
          {number}
        </div>
      </div>

      <div className="p-4">
        {levels.map((level, index) => (
          <div key={level} className={index > 0 ? "mt-4" : ""}>
            <span className="inline-flex rounded-full bg-[#EAF8F7] px-2.5 py-1 text-[8px] font-bold text-[#108477]">
              {level}
            </span>

            {index === 0 && (
              <div className="mt-3 space-y-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[9px] leading-4 text-[#475569]"
                  >
                    <CircleCheck
                      size={11}
                      className="mt-0.5 shrink-0 text-[#109D91]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <EnrollButton color={buttonColor} text={button} />
      </div>
    </div>
  );
};

const ProgramGroup = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="border-b border-[#E7EDF1] py-3 last:border-b-0">
      <span className="inline-flex rounded-full bg-[#E7F7F7] px-2.5 py-1 text-[8px] font-extrabold uppercase text-[#159C94]">
        {title}
      </span>

      <div className="mt-2 space-y-1.5">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-[8px] leading-4 text-[#475569]"
          >
            <CircleCheck
              size={10}
              className="mt-0.5 shrink-0 text-[#159C94]"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const EnrollButton = ({
  color,
  text,
}: {
  color: string;
  text: string;
}) => {
  return (
    <button
      className={`mt-4 flex w-full items-center justify-center gap-2 rounded-md px-3 py-2.5 text-[9px] font-bold text-white transition hover:opacity-90 ${color}`}
    >
      {text}
      <span>›</span>
    </button>
  );
};

export default Programs;