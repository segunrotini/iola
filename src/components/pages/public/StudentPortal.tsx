import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import {
  Award,
  BadgeCheck,
  BookOpen,
  BookOpenText,
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  Clock3,
  Code2,
  Download,
  FileUp,
  Headphones,
  Info,
  MessageSquareText,
  Play,
  Radio,
  ShieldCheck,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Session = {
  day: string;
  time: string;
  title: string;
  tutor: string;
  duration: string;
  detail: string;
  icon: LucideIcon;
  color: string;
  daysFromToday: number;
  hour: number;
  minute: number;
};

const sessions: Session[] = [
  {
    day: "Tomorrow",
    time: "10:00 AM WAT",
    title: "Scratch Game Building: Variables & Sprites",
    tutor: "Coach David",
    duration: "60 mins • Cohort Beta Group A",
    detail: "Required: Scratch Online Tab",
    icon: Video,
    color: "text-sky-700",
    daysFromToday: 1,
    hour: 10,
    minute: 0,
  },
  {
    day: "Thursday",
    time: "4:30 PM WAT",
    title: "Tajweed Oral Recitation Clinic",
    tutor: "Ustadha Maryam",
    duration: "45 mins • 1-on-1 Feedback",
    detail: "Prep: Ayah 15–20",
    icon: Radio,
    color: "text-teal-600",
    daysFromToday: 4,
    hour: 16,
    minute: 30,
  },
];

type QuickAction = "assignment" | "office-hour" | "report" | "coordinator";

const quickActions: {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  action: QuickAction;
}[] = [
  {
    title: "Submit Assignment / Code",
    description: "Choose an audio recording or Scratch URL",
    icon: FileUp,
    color: "bg-[#073964]",
    action: "assignment",
  },
  {
    title: "Request 1-on-1 Office Hour",
    description: "Consultation with Course Leads",
    icon: Headphones,
    color: "bg-[#0876a2]",
    action: "office-hour",
  },
  {
    title: "Download Term Report PDF",
    description: "Comprehensive academic evaluation",
    icon: Download,
    color: "bg-[#005148]",
    action: "report",
  },
  {
    title: "Cohort WhatsApp Coordinator",
    description: "Direct line for Mum Faruq",
    icon: MessageSquareText,
    color: "bg-[#42b9ad]",
    action: "coordinator",
  },
];

function getLagosDate(daysFromToday: number) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const date = new Date(Date.UTC(year, month - 1, day + daysFromToday));

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function formatCalendarTime(daysFromToday: number, hour: number, minute: number) {
  const date = getLagosDate(daysFromToday);
  const start = new Date(Date.UTC(date.year, date.month - 1, date.day, hour, minute));
  const end = new Date(start.getTime() + 45 * 60 * 1000);
  const format = (value: Date) =>
    `${value.getUTCFullYear()}${String(value.getUTCMonth() + 1).padStart(2, "0")}${String(value.getUTCDate()).padStart(2, "0")}T${String(value.getUTCHours()).padStart(2, "0")}${String(value.getUTCMinutes()).padStart(2, "0")}00`;

  return { start: format(start), end: format(end) };
}

function downloadCalendarEvent(session: Session) {
  const { start, end } = formatCalendarTime(
    session.daysFromToday,
    session.hour,
    session.minute,
  );
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//IOLA//Student Portal Demo//EN",
    "BEGIN:VEVENT",
    `UID:${crypto.randomUUID()}@iola-demo`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
    `DTSTART;TZID=Africa/Lagos:${start}`,
    `DTEND;TZID=Africa/Lagos:${end}`,
    `SUMMARY:${session.title}`,
    `DESCRIPTION:Sample timetable event from the IOLA demo dashboard. Tutor: ${session.tutor}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const file = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "iola-demo-class.ics";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function StudentPortal() {
  const [message, setMessage] = useState("");
  const [notesOpen, setNotesOpen] = useState(false);
  const [playingNote, setPlayingNote] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const assignmentInput = useRef<HTMLInputElement>(null);

  const handleAssignmentSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFileName(file.name);
    setMessage(
      `${file.name} is selected on this device only; it has not been uploaded.`,
    );
    event.target.value = "";
  };

  const handleQuickAction = (action: Exclude<QuickAction, "office-hour">) => {
    switch (action) {
      case "assignment":
        assignmentInput.current?.click();
        break;
      case "report":
        setMessage(
          "Term reports are not connected to a student records service in this demo.",
        );
        break;
      case "coordinator":
        setMessage(
          "A cohort coordinator contact has not been connected to this demo dashboard.",
        );
        break;
    }
  };

  return (
    <main className="min-h-screen bg-[#f2f3ff] px-4 py-6 text-[#17243b] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <section className="grid gap-6 rounded-xl bg-gradient-to-r from-[#062b53] via-[#00424c] to-[#063c6b] px-6 py-8 text-white shadow-lg sm:px-9 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-12 lg:py-10">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-sky-200 sm:text-sm">
              <span className="rounded-full bg-[#0b5280] px-3 py-1 font-semibold uppercase tracking-wide">
                Parent &amp; Student Portal
              </span>
              <span aria-hidden="true">•</span>
              <span>Term 1 (Cohort Beta)</span>
              <span className="rounded-full border border-white/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-100">
                Demo data
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#35b9ab] text-[#043e49] sm:flex">
                <Check size={13} strokeWidth={3} />
              </span>
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Welcome back, Faruq &amp; Mum Faruq!
              </h1>
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-sky-100 sm:text-base">
              <BookOpen size={17} aria-hidden="true" />
              <span>
                Enrolled Tracks:{" "}
                <strong className="font-semibold text-white">
                  Scratch Coding &amp; Quran Tahfiz
                </strong>
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 rounded-2xl bg-slate-900/25 p-2 sm:grid-cols-3">
            <div className="flex min-h-[78px] items-center gap-3 rounded-xl bg-slate-700/65 px-4 py-3">
              <Clock3 size={22} className="shrink-0 text-sky-300" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-300">
                  Next live class
                </p>
                <p className="text-sm font-semibold text-white">Today @ 4:30 PM WAT</p>
              </div>
            </div>
            <div className="flex min-h-[78px] items-center gap-3 rounded-xl bg-slate-700/65 px-4 py-3">
              <BadgeCheck size={22} className="shrink-0 text-teal-300" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-300">
                  Attendance
                </p>
                <p className="text-sm font-semibold text-teal-300">96% (On Track)</p>
              </div>
            </div>
            <div className="flex min-h-[78px] items-center gap-3 rounded-xl bg-slate-700/65 px-4 py-3">
              <ClipboardList size={22} className="shrink-0 text-sky-300" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-300">
                  Tasks
                </p>
                <p className="text-sm font-semibold text-sky-300">2 Pending Reviews</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-4 rounded-xl border border-[#dfe4f8] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0876a2] text-white">
              <Radio size={21} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-[#d8fbf4] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#075a52]">
                  Starts in 48 mins
                </span>
                <span className="text-slate-500">Classroom Room B-12</span>
              </div>
              <h2 className="mt-0.5 text-base font-semibold sm:text-lg">
                Live Interactive Session: Quran Recitation &amp; Tajweed
              </h2>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setNotesOpen((open) => !open)}
              aria-expanded={notesOpen}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#eef0ff] px-4 py-2.5 text-sm font-medium text-[#354159] transition hover:bg-[#e4e8ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]"
            >
              <BookOpenText size={15} />
              {notesOpen ? "Hide Session Notes" : "Session Notes"}
            </button>
            <button
              type="button"
              onClick={() =>
                setMessage(
                  "The live classroom link is not connected in this demo dashboard.",
                )
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#062e58] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#084578] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]"
            >
              <Video size={15} />
              Join Classroom Now
            </button>
          </div>
        </section>

        {notesOpen && (
          <div className="mt-3 rounded-lg border border-[#d8def7] bg-[#eef0ff] px-5 py-4 text-sm text-[#354159]">
            <h3 className="font-semibold text-[#17243b]">Session notes (demo)</h3>
            <p className="mt-1">
              Quran recitation practice: prepare Ayah 15–20 and review the
              articulation points (Makharij) before class.
            </p>
          </div>
        )}

        {message && (
          <div
            role="status"
            className="mt-3 flex items-start gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-950"
          >
            <Info size={17} className="mt-0.5 shrink-0 text-sky-700" />
            <span>{message}</span>
            <button
              type="button"
              className="ml-auto text-xs font-semibold underline underline-offset-2"
              onClick={() => setMessage("")}
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="mt-6 grid items-start gap-6 xl:grid-cols-[2fr_0.96fr]">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
                <span className="h-6 w-2 rounded-full bg-[#0785ad]" />
                Active Learning Tracks
              </h2>
              <span className="text-sm font-medium text-slate-600">3 Courses Enrolled</span>
            </div>

            <section className="rounded-xl border border-[#e5e8f3] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00564f] text-[#70e0d1]">
                    <BookOpen size={23} />
                  </span>
                  <div>
                    <div className="mb-1 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#eef0ff] px-3 py-0.5 text-xs font-semibold text-[#3a4661]">
                        Track A
                      </span>
                      <span className="rounded-full bg-[#e0f5f2] px-3 py-0.5 text-xs font-semibold text-[#174d49]">
                        Tutor: Ustadha Maryam
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug">
                      Quran Tahfiz &amp; Tajweed Mastery
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Focus: Accurate articulation points (Makharij) &amp; Surah memorization
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#e4eaff] px-3 py-1 text-sm font-semibold text-[#07518a]">
                  65% Completed
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-1.5 flex flex-wrap justify-between gap-2 text-xs font-medium text-slate-600">
                  <span>
                    Memorization Milestone: <strong className="text-slate-800">Surah Al-Mulk (Ayah 1–20)</strong>
                  </span>
                  <span>13 of 20 Ayahs Verified</span>
                </div>
                <div
                  className="h-2.5 overflow-hidden rounded-full bg-[#e5e9ff]"
                  role="progressbar"
                  aria-label="Quran Tahfiz progress"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-full w-[65%] rounded-full bg-[#0876a2]" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 rounded-lg bg-[#eef0ff] p-3">
                <button
                  type="button"
                  aria-label={playingNote ? "Stop sample audio note" : "Play sample audio note"}
                  onClick={() => {
                    setPlayingNote((playing) => !playing);
                    setMessage(
                      "Audio playback is not connected in this demo dashboard.",
                    );
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#073964] text-white transition hover:bg-[#095184] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]"
                >
                  {playingNote ? <CircleCheck size={17} /> : <Play size={17} />}
                </button>
                <div className="min-w-[180px] flex-1">
                  <p className="text-sm font-semibold">Mentor Audio Note (Surah Al-Mulk Ayah 12)</p>
                  <p className="text-xs text-slate-600">Ustadha Maryam • Yesterday at 5:14 PM</p>
                </div>
                <div className="flex items-center gap-1" aria-hidden="true">
                  {[12, 20, 10, 25, 15, 28, 13, 22, 11, 18].map((height, index) => (
                    <span
                      key={index}
                      className="w-1 rounded-full bg-[#0876a2]"
                      style={{ height }}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-600">0:42</span>
              </div>
            </section>

            <section className="mt-4 rounded-xl border border-[#e5e8f3] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d5eaff] text-[#073964]">
                    <Code2 size={23} />
                  </span>
                  <div>
                    <div className="mb-1 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#eef0ff] px-3 py-0.5 text-xs font-semibold text-[#3a4661]">
                        Track B
                      </span>
                      <span className="rounded-full bg-[#d8edff] px-3 py-0.5 text-xs font-semibold text-[#164a6b]">
                        Coach David
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug">
                      Technology &amp; Digital Skills - Scratch Level 2
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Current Capstone: Interactive Solar System Simulation
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#e4eaff] px-3 py-1 text-sm font-semibold text-[#07518a]">
                  80% Completed
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-1.5 flex flex-wrap justify-between gap-2 text-xs font-medium text-slate-600">
                  <span>
                    Module: <strong className="text-slate-800">Broadcast Messages, Gravity physics, and Score Loops</strong>
                  </span>
                  <span>4 of 5 Mini-Projects Submitted</span>
                </div>
                <div
                  className="h-2.5 overflow-hidden rounded-full bg-[#e5e9ff]"
                  role="progressbar"
                  aria-label="Scratch Coding progress"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-full w-4/5 rounded-full bg-[#0876a2]" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                <p className="flex items-center gap-2 text-slate-600">
                  <CircleCheck size={16} className="text-[#00564f]" />
                  Code Review: Faruq resolved sprite coordinates cleanly
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setMessage(
                      "A Scratch project link has not been connected in this demo dashboard.",
                    )
                  }
                  className="inline-flex items-center gap-1 font-semibold text-[#0876a2] hover:text-[#075b82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]"
                >
                  Inspect Code Project <ChevronRight size={16} />
                </button>
              </div>
            </section>

            <section className="mt-4 rounded-xl border border-[#e5e8f3] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06433f] text-[#71ded1]">
                    <Award size={21} />
                  </span>
                  <div>
                    <span className="rounded-full bg-[#9df4e6] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#06443f]">
                      Completed
                    </span>
                    <p className="mt-1 text-xs text-slate-600">Graduated Term 0</p>
                    <h3 className="text-base font-semibold">Phonics &amp; Reading Foundation Level 2</h3>
                    <p className="text-sm text-slate-600">
                      Comprehensive Fluency &amp; Storytelling Badge Awarded
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setMessage(
                      "Certificates are not connected to a student records service in this demo.",
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-lg bg-[#eef0ff] px-4 py-2.5 text-sm font-medium text-[#263746] transition hover:bg-[#e4e8ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]"
                >
                  <Award size={16} className="text-[#0876a2]" />
                  Download Certificate
                </button>
              </div>
            </section>

            <section className="mt-6 rounded-xl border border-[#e5e8f3] bg-[#eef0ff] p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <CalendarDays size={21} className="text-[#0876a2]" />
                  Upcoming Timetable
                </h2>
                <span className="text-sm text-slate-600">Timezone: West Africa Time (WAT)</span>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                {sessions.map((session) => {
                  const SessionIcon = session.icon;
                  return (
                    <article
                      key={session.title}
                      className="rounded-xl border border-[#e2e6f4] bg-white p-4"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="rounded-md bg-[#eef0ff] px-2.5 py-1 text-xs text-slate-700">
                          {session.day} • {session.time}
                        </span>
                        <SessionIcon size={17} className={session.color} />
                      </div>
                      <h3 className="mt-2 text-base font-semibold leading-snug">
                        {session.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {session.tutor} • {session.duration}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm text-slate-600">{session.detail}</p>
                        <button
                          type="button"
                          onClick={() => downloadCalendarEvent(session)}
                          className="font-semibold text-[#0876a2] hover:text-[#075b82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]"
                        >
                          Add to Calendar
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-xl border border-[#e5e8f3] bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <BookOpenText size={20} className="text-[#0876a2]" />
                  Weekly Highlights
                </h2>
                <span className="rounded-md bg-[#eef0ff] px-2.5 py-1 text-xs font-medium text-slate-700">
                  Week 4
                </span>
              </div>
              <blockquote className="rounded-xl bg-[#f0f1ff] p-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#073964] text-xs font-bold text-white">
                    UM
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Ustadha Maryam</p>
                    <p className="text-xs text-slate-600">Lead Quranic Mentor</p>
                  </div>
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-slate-700">
                  “Faruq showed fantastic articulation of Makharij today and
                  helped his classmate debug a Scratch loop in peer work. Keep
                  it up!”
                </p>
              </blockquote>

              <div className="mt-4 rounded-xl bg-[#e7eaff] p-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0876a2] shadow-sm">
                    <Award size={22} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#0876a2]">
                      Achieved badge
                    </p>
                    <h3 className="text-base font-semibold">Top Contributor</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                      Earned for peer mentoring and active recitation participation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                  <span>Weekly Attendance Tracker</span>
                  <span className="font-semibold text-teal-700">4 / 4 Sessions Attended</span>
                </div>
                <div
                  className="grid h-[76px] grid-cols-5 items-end gap-3 rounded-lg bg-[#eef0ff] px-4 pt-2"
                  role="img"
                  aria-label="Attendance this week: Monday through Thursday attended, Friday not yet attended"
                >
                  {[true, true, true, true, false].map((attended, index) => (
                    <div key={index} className="flex h-full flex-col items-center justify-end gap-1">
                      <span
                        className={`w-full rounded-t-md ${attended ? "h-8 bg-[#0876a2]" : "h-3 bg-[#d8def1]"}`}
                      />
                      <span className="text-[11px] text-slate-600">
                        {["Mon", "Tue", "Wed", "Thu", "Fri"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-[#e5e8f3] bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold tracking-tight">Quick Actions &amp; Help</h2>
              <div className="mt-4 space-y-2.5">
                {quickActions.map((item) => {
                  const ActionIcon = item.icon;
                  const content = (
                    <>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${item.color}`}
                      >
                        <ActionIcon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-snug">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">
                          {item.action === "assignment" && selectedFileName
                            ? `Selected locally: ${selectedFileName}`
                            : item.description}
                        </span>
                      </span>
                      <ChevronRight
                        size={18}
                        className="shrink-0 text-slate-500 transition group-hover:translate-x-0.5"
                      />
                    </>
                  );
                  const className =
                    "group flex w-full items-center gap-3 rounded-lg bg-[#f0f1ff] p-2 text-left transition hover:bg-[#e6e9ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876a2]";

                  return item.action === "office-hour" ? (
                    <a
                      key={item.action}
                      href="mailto:learn@iola.com?subject=IOLA%20office%20hour%20request"
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <button
                      key={item.action}
                      type="button"
                      onClick={() => {
                        if (item.action !== "office-hour") {
                          handleQuickAction(item.action);
                        }
                      }}
                      className={className}
                    >
                      {content}
                    </button>
                  );
                })}
                <input
                  ref={assignmentInput}
                  type="file"
                  accept="audio/*,.sb3"
                  className="sr-only"
                  aria-label="Choose an assignment file"
                  onChange={handleAssignmentSelection}
                />
              </div>

              <div className="mt-4 flex gap-2 rounded-lg bg-[#e9ebff] p-3 text-xs leading-relaxed text-slate-600">
                <Info size={15} className="mt-0.5 shrink-0 text-[#0876a2]" />
                <p>
                  Have questions about Faruq&apos;s Scratch assignments? Use
                  Office Hours or contact the cohort coordinator before Friday
                  2 PM.
                </p>
              </div>
            </section>
          </aside>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <ShieldCheck size={14} />
          This dashboard is a frontend demonstration with sample student data.
          Actions are not saved to an account.
        </p>
      </div>
    </main>
  );
}

export default StudentPortal;
