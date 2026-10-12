import {
  BadgeCheck,
  CalendarClock,
  Moon,
  UsersRound,
} from "lucide-react";

const learningFormats = [
  {
    title: "1-on-1 Personalized Tutoring",
    description:
      "Exclusively dedicated instructor attention customized specifically to the pupil’s pace, learning style, and diagnostic needs. Ideal for accelerated mastery or remedial reinforcement.",
    detail: "100% Adaptive Scheduling",
    icon: UsersRound,
    detailIcon: BadgeCheck,
  },
  {
    title: "Small Cohort Groups",
    description:
      "Strictly capped at a maximum of 6 students per classroom to preserve interactive discussion, peer debate, healthy teamwork, and meaningful teacher engagement.",
    detail: "Max 6 Learners Per Group",
    icon: UsersRound,
    detailIcon: UsersRound,
    popular: true,
  },
  {
    title: "Weekend & Evening Batches",
    description:
      "Strategic time slots scheduled after standard school hours and over Saturdays and Sundays, ensuring no conflict with conventional school or corporate demands.",
    detail: "Friday–Sunday & After-School",
    icon: Moon,
    detailIcon: CalendarClock,
  },
];

function FlexibleLearningFormats() {
  return (
    <section className="bg-[#E2E7FF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-white/75 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#123D70]">
            Delivery Architecture
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#00254D] sm:text-4xl">
            Flexible Learning Formats
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#4B5563]">
            Designed for active school calendars, busy family routines, and
            professional work schedules across multiple time zones.
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {learningFormats.map((format) => {
            const Icon = format.icon;
            const DetailIcon = format.detailIcon;

            return (
              <article
                key={format.title}
                className="relative flex h-full flex-col rounded-xl border border-[#E7E9F4] bg-white p-5 sm:p-6"
              >
                {format.popular && (
                  <span                                     className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-[#006DA8] px-3 py-1 text-xs font-bold text-white">
                    Popular Choice
                  </span>
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#CFE4FF] text-[#00254D]">
                  <Icon size={21} aria-hidden="true" />
                </div>

                <h3 className="mt-3 text-lg font-bold leading-6 text-[#00254D]">
                  {format.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#4B5563]">
                  {format.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#006DA8]">
                  <DetailIcon size={16} aria-hidden="true" />
                  {format.detail}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FlexibleLearningFormats;
