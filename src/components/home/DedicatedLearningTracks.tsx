import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Church,
  Heart,
  Landmark,
  Languages,
  Music2,
  PenLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const tracks = [
  {
    id: "islamic-learning",
    name: "Islamic Learning Track",
    module: "TRACK A · ISLAMIC SCIENCES",
    icon: BookOpen,
    accent: "from-[#07564F] to-[#65E7D2]",
    iconColor: "text-[#07564F]",
    facultyTitle: "Certified Faculty:",
    faculty:
      "Dedicated male & female Quran tutors with extensive experience teaching diaspora kids in the UK, US, and Nigeria with compassionate pacing.",
    quote:
      "“My 9-year-old transitioned from struggling with Arabic letters to reciting Surah Al-Mulk with proper Tajweed in 6 months. IOLA’s teachers are wonderful.”",
    quoteAuthor: "Mum Faruq",
    quoteDetails: "Diaspora Parent, London UK",
    scheduleIcon: Music2,
    schedule: "Flexible 2x or 3x Weekly Sessions",
    enrollLabel: "Enroll in Islamic Track",
    modules: [
      {
        title: "Quran & Tahfeez",
        description:
          "One-on-one recitation, structured memorization tracking, and daily guided revision with certified Qaris.",
        icon: BookOpen,
      },
      {
        title: "Tajweed Masterclass",
        description:
          "Articulation points (Makharij), rules of Noon & Meem sakinah, prolonged vowels, and pitch training.",
        icon: Music2,
      },
      {
        title: "Arabiyyah (Arabic)",
        description:
          "Interactive spoken dialogue, Quranic vocabulary, comprehension, and practical classical Arabic grammar.",
        icon: Languages,
      },
      {
        title: "Tarbiyyah & Akhlaaq",
        description:
          "Adab, stories of the Prophets, daily Sunnah Duas, personal accountability, and etiquette for the youth.",
        icon: Heart,
      },
    ],
  },
  {
    id: "christian-learning",
    name: "Christian Learning Track",
    module: "TRACK B · CHRISTIAN FORMATION",
    icon: Church,
    accent: "from-[#0876A8] to-[#A8D9FF]",
    iconColor: "text-[#0876A8]",
    facultyTitle: "Devout Educators:",
    faculty:
      "Led by passionate, licensed Christian school teachers experienced in mentoring children through biblical literacy and real-world moral resilience.",
    quote:
      "“Finding an online academy that reinforces Christian virtues without watering down academic rigor and maths was our prayer answered.”",
    quoteAuthor: "Mrs. Grace Adeyemi",
    quoteDetails: "Parent & Educator, Lagos",
    scheduleIcon: CalendarDays,
    schedule: "Weekend & Evening Cohorts Available",
    enrollLabel: "Enroll in Christian Track",
    modules: [
      {
        title: "Scriptural Literacy",
        description:
          "Age-appropriate deep dives across Old and New Testament narratives, scripture memorization, and historical contexts.",
        icon: BookOpen,
      },
      {
        title: "Character & Ethics",
        description:
          "Servant leadership, integrity in digital spaces, resilience, ethical decision-making, and walking in unconditional grace.",
        icon: Sparkles,
      },
      {
        title: "Denominational Harmony",
        description:
          "Customized modules respecting diverse Christian home traditions and local church foundations with ecumenical clarity.",
        icon: Landmark,
      },
      {
        title: "Creative Expression",
        description:
          "Biblical drama writing, modern devotional journaling, spoken word, and faith-inspired digital media storytelling.",
        icon: PenLine,
      },
    ],
  },
];

function DedicatedLearningTracks() {
  return (
    <section className="bg-[#F0F2FF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-7 grid gap-3 lg:mb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
              Curated Pathways
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-[#073B63] sm:text-3xl">
              Explore Our Dedicated Learning Tracks
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#4B5563] lg:justify-self-end">
            Both tracks run parallel to the core STEM, Arts, and Leadership
            curricula, scheduled seamlessly around regular school hours and
            time zones.
          </p>
        </header>

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {tracks.map((track) => {
            const TrackIcon = track.icon;
            const ScheduleIcon = track.scheduleIcon;

            return (
              <article
                key={track.id}
                id={track.id}
                className="overflow-hidden rounded-xl border border-[#DFE4F3] bg-white shadow-sm"
              >
                <div className={`h-2 bg-gradient-to-r ${track.accent}`} />

                <div className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF0F5]">
                        <TrackIcon
                          size={21}
                          className={track.iconColor}
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#087BAE]">
                          {track.module}
                        </p>
                        <h3 className="text-lg font-bold leading-tight text-[#073B63] sm:text-xl">
                          {track.name}
                        </h3>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-[#46526A]">
                      Ages 5–18
                    </span>
                  </div>

                  <div className="mt-3 flex gap-2.5 rounded-lg bg-[#F0F2FF] px-3 py-3">
                    <ShieldCheck
                      size={17}
                      className={`mt-0.5 shrink-0 ${track.iconColor}`}
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-5 text-[#364152]">
                      <strong className="font-bold text-[#172B4D]">
                        {track.facultyTitle}
                      </strong>{" "}
                      {track.faculty}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-[#173B61]">
                      Core Modules &amp; Competencies
                    </h4>
                    <ul className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                      {track.modules.map((module) => {
                        const ModuleIcon = module.icon;

                        return (
                          <li
                            key={module.title}
                            className="min-h-[98px] rounded-lg bg-[#F2F3FF] p-3"
                          >
                            <h5 className={`flex items-center gap-1.5 text-sm font-bold leading-5 ${track.iconColor}`}>
                              <ModuleIcon
                                size={14}
                                className="shrink-0"
                                aria-hidden="true"
                              />
                              {module.title}
                            </h5>
                            <p className="mt-1 text-[13px] leading-[18px] text-[#4B5563]">
                              {module.description}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <blockquote className="mt-3 rounded-lg bg-[#E9ECFF] px-4 py-3 text-center">
                    <p className="text-[13px] italic leading-5 text-[#243047]">
                      {track.quote}
                    </p>
                    <footer className="mt-1 text-sm font-bold text-[#073B63]">
                      — {track.quoteAuthor}{" "}
                      <span className="font-normal text-[#4B5563]">
                        ({track.quoteDetails})
                      </span>
                    </footer>
                  </blockquote>

                  <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="inline-flex items-center gap-2 text-sm text-[#374151]">
                      <ScheduleIcon
                        size={15}
                        className={track.iconColor}
                        aria-hidden="true"
                      />
                      {track.schedule}
                    </p>
                    <a
                      href="/#admissions"
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#052D55] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#073B63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BAE] focus-visible:ring-offset-2"
                    >
                      {track.enrollLabel}
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DedicatedLearningTracks;
