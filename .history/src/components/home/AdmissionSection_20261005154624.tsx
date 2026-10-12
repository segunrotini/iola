import {
  Check,
  Mail,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

function AdmissionSection() {
  return (
    <section
      id="admissions"
      className="bg-gradient-to-br from-[#073B63] via-[#084B78] to-[#087EA8] py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="text-white">
          <span className="inline-flex rounded-full bg-[#0B6D91] px-3 py-1 text-[8px] font-bold uppercase tracking-wide text-[#C7F5FC]">
            Admission Open For Next Cohort
          </span>

          <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-[1.05] sm:text-4xl">
            Your Future Starts
            <br />
            Here.
          </h2>

          <p className="mt-4 max-w-xl text-[10px] leading-5 text-white/80 sm:text-xs">
            Equip your children and yourself with digital competence and
            faith-grounded excellence. Contact our advisory team today for a
            free consultation and level assessment.
          </p>

          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2 text-[9px] text-white/90">
              <Check size={13} className="text-[#39D4C1]" />
              Flexible evening & weekend time slots available
            </div>

            <div className="flex items-center gap-2 text-[9px] text-white/90">
              <Check size={13} className="text-[#39D4C1]" />
              One-on-one and small group options
            </div>

            <div className="flex items-center gap-2 text-[9px] text-white/90">
              <Check size={13} className="text-[#39D4C1]" />
              Global access from Nigeria, USA, UK, Canada & Worldwide
            </div>
          </div>

          <div className="mt-6 flex max-w-md items-center justify-between gap-4 rounded-xl bg-[#145D8A] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0CA8C5]">
                <Phone size={16} className="text-white" />
              </div>

              <div>
                <p className="text-[8px] text-white/70">
                  Call / WhatsApp
                </p>
                <p className="text-[10px] font-bold text-white">
                  08124526982 / 08141570784
                </p>
              </div>
            </div>

            <a
              href="tel:+2348124526982"
              className="rounded-md bg-white px-3 py-2 text-[8px] font-bold text-[#073B63] transition hover:bg-[#EAF8FC]"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
          <div>
            <h3 className="text-base font-extrabold text-[#073B63] sm:text-lg">
              Request Enrollment Details
            </h3>

            <p className="mt-1 text-[8px] leading-4 text-[#64748B]">
              Fill the quick form and an admissions counsellor will reach out
              via WhatsApp/call.
            </p>
          </div>

          <form className="mt-4 space-y-3">
            <div>
              <label className="mb-1 block text-[8px] font-semibold text-[#334155]">
                Guardian / Student Full Name
              </label>

              <div className="relative">
                <UserRound
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                />

                <input
                  type="text"
                  placeholder="e.g. Samuel Adeboye"
                  className="h-9 w-full rounded-md border border-[#DCE5EA] pl-9 pr-3 text-[9px] outline-none transition focus:border-[#079BC2]"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[8px] font-semibold text-[#334155]">
                  WhatsApp / Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                  />

                  <input
                    type="tel"
                    placeholder="0812..."
                    className="h-9 w-full rounded-md border border-[#DCE5EA] pl-9 pr-3 text-[9px] outline-none focus:border-[#079BC2]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[8px] font-semibold text-[#334155]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                  />

                  <input
                    type="email"
                    placeholder="name@domain.com"
                    className="h-9 w-full rounded-md border border-[#DCE5EA] pl-9 pr-3 text-[9px] outline-none focus:border-[#079BC2]"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[8px] font-semibold text-[#334155]">
                  Target Age Group
                </label>

                <select className="h-9 w-full rounded-md border border-[#DCE5EA] bg-white px-3 text-[9px] text-[#475569] outline-none focus:border-[#079BC2]">
                  <option>Children (Ages 5 - 12)</option>
                  <option>Teenagers (Ages 13 - 17)</option>
                  <option>Adults</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-[8px] font-semibold text-[#334155]">
                  Primary Program Interest
                </label>

                <select className="h-9 w-full rounded-md border border-[#DCE5EA] bg-white px-3 text-[9px] text-[#475569] outline-none focus:border-[#079BC2]">
                  <option>Technology & Digital Skills</option>
                  <option>Language & Literacy</option>
                  <option>Christian Learning</option>
                  <option>Islamic Learning</option>
                  <option>STEM & Logical Reasoning</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[8px] font-semibold text-[#334155]">
                Note or Specific Course Option
              </label>

              <textarea
                rows={3}
                placeholder="Tell us about the learner's current level or schedule needs..."
                className="w-full resize-none rounded-md border border-[#DCE5EA] px-3 py-2 text-[9px] outline-none focus:border-[#079BC2]"
              />
            </div>

            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#073B63] text-[9px] font-bold text-white transition hover:bg-[#052F50]"
            >
              Submit Application Request
              <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;