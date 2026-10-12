import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MessageSquareText,
  Phone,
  UserRound,
} from "lucide-react";
import advisorPhoto from "../../assets/parent1.png";
import classroomPhoto from "../../assets/student.png";

function AcademicInquiry() {
  const [submissionNotice, setSubmissionNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionNotice(
      "Your form passed the required-field checks, but this website is not connected to an application service. Please contact the admissions desk by WhatsApp or email to complete your inquiry.",
    );
  }

  return (
    <section className="bg-[#FAF9FF] px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div
          id="admissions-inquiry"
          className="rounded-xl border border-[#E7EAF3] bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
                Stage 01 Initiator
              </p>
              <h2 className="text-xl font-semibold leading-tight text-[#173B61] sm:text-2xl">
                Begin Your Academic Inquiry
              </h2>
            </div>
            <CalendarDays
              size={21}
              className="mt-1 shrink-0 text-[#087BAE]"
              aria-hidden="true"
            />
          </div>
          <p className="mt-2 text-sm leading-6 text-[#4B5563]">
            Complete this baseline form to schedule your complimentary
            assessment &amp; diagnostic call. No credit card required.
          </p>

          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="guardian-name"
                className="mb-1 block text-sm font-semibold text-[#173B61]"
              >
                Guardian / Student Full Name
              </label>
              <div className="relative">
                <UserRound
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B8CA3]"
                  aria-hidden="true"
                />
                <input
                  id="guardian-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Dr. Amina Balogun or David Campbell"
                  className="h-11 w-full rounded-md border border-transparent bg-[#F0F2FF] pl-9 pr-3 text-sm text-[#173B61] outline-none placeholder:text-[#8996AA] focus:border-[#087BAE] focus:ring-2 focus:ring-[#087BAE]/20"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="guardian-email"
                  className="mb-1 block text-sm font-semibold text-[#173B61]"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B8CA3]"
                    aria-hidden="true"
                  />
                  <input
                    id="guardian-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@domain.com"
                    className="h-11 w-full rounded-md border border-transparent bg-[#F0F2FF] pl-9 pr-3 text-sm text-[#173B61] outline-none placeholder:text-[#8996AA] focus:border-[#087BAE] focus:ring-2 focus:ring-[#087BAE]/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="guardian-whatsapp"
                  className="mb-1 block text-sm font-semibold text-[#173B61]"
                >
                  WhatsApp Phone (with code)
                </label>
                <div className="relative">
                  <Phone
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B8CA3]"
                    aria-hidden="true"
                  />
                  <input
                    id="guardian-whatsapp"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+234 812 245 2692"
                    className="h-11 w-full rounded-md border border-transparent bg-[#F0F2FF] pl-9 pr-3 text-sm text-[#173B61] outline-none placeholder:text-[#8996AA] focus:border-[#087BAE] focus:ring-2 focus:ring-[#087BAE]/20"
                  />
                </div>
              </div>
            </div>

            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold text-[#173B61]">
                Learner Age Group
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Child", detail: "Ages 5–12" },
                  { label: "Teen", detail: "Ages 13–17" },
                  { label: "Adult", detail: "Ages 18+" },
                ].map((age) => (
                  <label
                    key={age.label}
                    className="flex min-h-12 cursor-pointer items-start gap-2 rounded-md border border-transparent bg-[#F0F2FF] px-2.5 py-2 text-[#173B61] transition-colors has-[:checked]:border-[#073B63] has-[:checked]:bg-[#073B63] has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="age-group"
                      value={age.label}
                      required
                      defaultChecked={age.label === "Child"}
                      className="mt-1 accent-[#087BAE]"
                    />
                    <span>
                      <span className="block text-sm font-medium leading-4">
                        {age.label}
                      </span>
                      <span className="block text-xs opacity-80">
                        {age.detail}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="program-interest"
                className="mb-1 block text-sm font-semibold text-[#173B61]"
              >
                Primary Program Interest
              </label>
              <select
                id="program-interest"
                name="program"
                defaultValue="Technology, Coding & Digital Skills"
                className="h-11 w-full rounded-md border border-transparent bg-[#F0F2FF] px-3 text-sm text-[#173B61] outline-none focus:border-[#087BAE] focus:ring-2 focus:ring-[#087BAE]/20"
              >
                <option>Technology, Coding &amp; Digital Skills</option>
                <option>Language &amp; Literacy</option>
                <option>Islamic Learning</option>
                <option>Christian Learning</option>
                <option>STEM &amp; Logical Reasoning</option>
              </select>
            </div>

            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold text-[#173B61]">
                Preferred Learning Mode
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="flex cursor-pointer items-start gap-2 rounded-md border border-transparent bg-[#F0F2FF] p-3 text-[#173B61] has-[:checked]:bg-[#073B63] has-[:checked]:text-white has-[:checked]:ring-2 has-[:checked]:ring-[#087BAE]">
                  <input
                    type="radio"
                    name="learning-mode"
                    value="Small Collaborative Cohort"
                    required
                    defaultChecked
                    className="mt-1 accent-[#4BD3C4]"
                  />
                  <span>
                    <span className="block text-sm font-semibold">
                      Small Collaborative Cohort
                    </span>
                    <span className="block text-xs leading-4 opacity-80">
                      Max 6 peers, vibrant group dynamic &amp; teamwork.
                    </span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-2 rounded-md border border-transparent bg-[#F0F2FF] p-3 text-[#173B61] has-[:checked]:bg-[#073B63] has-[:checked]:text-white has-[:checked]:ring-2 has-[:checked]:ring-[#087BAE]">
                  <input
                    type="radio"
                    name="learning-mode"
                    value="Private 1-on-1 Mentorship"
                    required
                    className="mt-1 accent-[#087BAE]"
                  />
                  <span>
                    <span className="block text-sm font-semibold">
                      Private 1-on-1 Mentorship
                    </span>
                    <span className="block text-xs leading-4 opacity-80">
                      100% custom pacing, dedicated mentor &amp; timetable.
                    </span>
                  </span>
                </label>
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="learner-goals"
                className="mb-1 block text-sm font-semibold text-[#173B61]"
              >
                Specific Learner Goals or Background
              </label>
              <textarea
                id="learner-goals"
                name="goals"
                rows={3}
                placeholder="Tell us about previous curriculum, specific challenges (e.g. reading hesitation), or rapid advancement aims..."
                className="w-full resize-y rounded-md border border-transparent bg-[#F0F2FF] px-3 py-2 text-sm leading-5 text-[#173B61] outline-none placeholder:text-[#8996AA] focus:border-[#087BAE] focus:ring-2 focus:ring-[#087BAE]/20"
              />
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#087BAE] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B63] focus-visible:ring-offset-2 sm:max-w-[260px] sm:flex-1"
              >
                Request Free Academic Consultation
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <p className="text-xs leading-4 text-[#4B5563]">
                No fee required. Response via WhatsApp &amp; email.
              </p>
            </div>
            {submissionNotice && (
              <p
                role="status"
                className="rounded-md border border-[#C8E8E3] bg-[#EFFBF8] p-3 text-sm leading-5 text-[#075C55]"
              >
                {submissionNotice}
              </p>
            )}
          </form>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl bg-[#F0F2FF] p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <img
                src={advisorPhoto}
                alt="IOLA academic advisor"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <h2 className="text-base font-bold leading-5 text-[#173B61]">
                  Academic Placement Desk
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#087BAE]">
                  Direct Family Admissions Help
                </p>
                <p className="mt-0.5 text-xs text-[#4B5563]">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#39B9AC]" />
                  Advisors Online Now
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-white p-3">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#173B61]">
                <Clock3 size={16} className="text-[#087BAE]" aria-hidden="true" />
                2-Hour Guarantee
              </p>
              <p className="mt-1 text-xs leading-4 text-[#4B5563]">
                Inquiries submitted between 08:00 and 21:00 (GMT/WAT) receive
                direct coordinator outreach within two hours.
              </p>
            </div>

            <h3 className="mb-2 mt-4 text-xs font-bold uppercase tracking-wide text-[#4B5563]">
              Priority WhatsApp Lines
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/2348124526982"
                className="rounded-lg bg-white p-2.5 text-[#173B61] transition-colors hover:bg-[#FAFBFF]"
              >
                <span className="flex items-center gap-1.5 text-xs text-[#4B5563]">
                  <MessageSquareText size={14} className="text-[#087BAE]" aria-hidden="true" />
                  Line 1 (WA)
                </span>
                <span className="mt-0.5 block text-sm font-bold">08124526982</span>
              </a>
              <a
                href="https://wa.me/2348141570784"
                className="rounded-lg bg-white p-2.5 text-[#173B61] transition-colors hover:bg-[#FAFBFF]"
              >
                <span className="flex items-center gap-1.5 text-xs text-[#4B5563]">
                  <MessageSquareText size={14} className="text-[#087BAE]" aria-hidden="true" />
                  Line 2 (WA)
                </span>
                <span className="mt-0.5 block text-sm font-bold">08141570784</span>
              </a>
            </div>
            <a
              href="mailto:info@learnwithiola.co.uk"
              className="mt-2 flex items-center gap-2 rounded-lg bg-white p-2.5 text-sm text-[#173B61] transition-colors hover:bg-[#FAFBFF]"
            >
              <Mail size={15} className="text-[#087BAE]" aria-hidden="true" />
              <span>
                <span className="block text-xs text-[#4B5563]">
                  Institutional Inquiries
                </span>
                <span className="font-semibold">info@learnwithiola.co.uk</span>
              </span>
            </a>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-[#052D55]">
            <img
              src={classroomPhoto}
              alt="Learners working together in an online learning cohort"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#052D55]/75" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <span className="inline-flex rounded-sm bg-[#087BAE] px-2 py-1 text-xs font-semibold uppercase tracking-wide">
                Global Synchronous Classrooms
              </span>
              <h2 className="mt-1 text-lg font-bold">
                Learners Across 14 Countries
              </h2>
              <p className="mt-1 max-w-sm text-sm leading-5 text-[#D1DFEF]">
                Bridging UK curriculum standards, West African values, and
                North American practical innovation.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AcademicInquiry;
