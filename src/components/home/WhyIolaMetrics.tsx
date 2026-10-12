const metrics = [
  { value: "98%", label: "Parent Approval Score", color: "text-[#073B63]" },
  { value: "100%", label: "Project Completion Rate", color: "text-[#087BAE]" },
  { value: "4.9/5", label: "Student Satisfaction", color: "text-[#073B63]" },
  { value: "1:6", label: "Max Class Ratio", color: "text-[#087BAE]" },
];

function WhyIolaMetrics() {
  return (
    <section
      aria-label="IOLA outcomes at a glance"
      className="bg-[#E5E9FF] px-4 py-3 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className={`text-2xl font-extrabold leading-none ${metric.color}`}>
              {metric.value}
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#37465C]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyIolaMetrics;
