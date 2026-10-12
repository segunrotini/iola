import { CheckCircle2, CircleX } from "lucide-react";

const comparisons = [
  {
    metric: "Live Instructor Guidance",
    detail: "Dedicated synchronous sessions per week",
    traditional: "Yes, but rigid pace",
    moocs: "None (recorded videos)",
    iola: "Active Live Coding & Mentorship",
  },
  {
    metric: "Character & Faith Integration",
    detail: "Moral anchors, values, wholesome environment",
    traditional: "Rare / Inconsistent",
    moocs: "Completely Absent",
    iola: "Core Foundation (Faith & Skills)",
  },
  {
    metric: "Micro-Cohort Size",
    detail: "Direct attention & active student participation",
    traditional: "25 – 40+ Students",
    moocs: "Massive (Thousands)",
    iola: "Strictly ≤ 6 Learners",
  },
  {
    metric: "Personalized Pacing",
    detail: "Adapting to learning cues and diagnostics",
    traditional: "One-size-fits-all",
    moocs: "Self-paced (Low accountability)",
    iola: "Adaptive with Live Accountability",
  },
  {
    metric: "Direct WhatsApp Tutor Access",
    detail: "Unblocking homework bugs and project hurdles",
    traditional: "No Direct Access",
    moocs: "Unmoderated Forums",
    iola: "Included in All Enrollments",
  },
  {
    metric: "Practical Portfolio Outputs",
    detail: "Live apps, deployed code, verified credentials",
    traditional: "Theory & Memorization",
    moocs: "Cookie-cutter Code Copies",
    iola: "Custom Tangible Artifacts",
  },
];

function IolaDifference() {
  return (
    <section id="iola-difference" className="bg-[#F0F2FF] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#087BAE]">
            System Analysis
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#073B63] sm:text-3xl">
            The IOLA Difference: How We Stand Apart
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#4B5563]">
            Compare our integrated high-touch academy model against legacy
            schooling and detached self-paced video catalogs.
          </p>
        </header>

        <div className="mt-7 overflow-x-auto rounded-xl border border-[#DDE3F1] bg-white shadow-sm">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr className="bg-[#052D55] text-white">
                <th scope="col" className="w-[34%] px-4 py-3 text-sm font-semibold">
                  Evaluation Metric
                </th>
                <th scope="col" className="w-[20%] px-4 py-3 text-sm font-semibold">
                  Traditional Schooling
                  <span className="mt-1 block text-[10px] font-normal text-[#BBD0E2]">
                    Public &amp; Private Classrooms
                  </span>
                </th>
                <th scope="col" className="w-[20%] px-4 py-3 text-sm font-semibold">
                  Generic MOOCs
                  <span className="mt-1 block text-[10px] font-normal text-[#BBD0E2]">
                    Coursera, Udemy, etc.
                  </span>
                </th>
                <th scope="col" className="w-[26%] bg-[#06477C] px-4 py-3 text-sm font-semibold">
                  IOLA Academy
                  <span className="mt-1 block text-[10px] font-normal text-[#C8E2F5]">
                    Integrated Cohort Model
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={row.metric}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#F4F5FF]"}
                >
                  <th scope="row" className="px-4 py-3">
                    <span className="block text-sm font-semibold text-[#173B61]">
                      {row.metric}
                    </span>
                    <span className="mt-0.5 block text-xs leading-4 text-[#64748B]">
                      {row.detail}
                    </span>
                  </th>
                  <td className="px-4 py-3 text-sm text-[#374151]">
                    <span className="inline-flex items-start gap-1.5">
                      <CircleX size={14} className="mt-0.5 shrink-0 text-[#697386]" aria-hidden="true" />
                      {row.traditional}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#374151]">
                    <span className="inline-flex items-start gap-1.5">
                      <CircleX size={14} className="mt-0.5 shrink-0 text-[#CC4B55]" aria-hidden="true" />
                      {row.moocs}
                    </span>
                  </td>
                  <td className="bg-[#E9EDFF] px-4 py-3 text-sm font-medium text-[#173B61]">
                    <span className="inline-flex items-start gap-1.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#087BAE]" aria-hidden="true" />
                      {row.iola}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default IolaDifference;
