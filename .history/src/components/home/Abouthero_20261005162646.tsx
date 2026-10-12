const stats = [
  {
    value: "500+",
    label: "Active Learners",
  },
  {
    value: "98%",
    label: "Completion & Satisfaction",
  },
  {
    value: "4",
    label: "Continents",
  },
  {
    value: "100%",
    label: "Values-Aligned Mentors",
  },
];

function AboutHero() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-gray-900">About Us</span>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Empowering Minds, Nurturing Values, Building Futures.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            At IOLA, we believe education goes beyond acquiring knowledge. We
            empower learners with practical skills, strong values, and the
            confidence to create meaningful impact in their communities and
            around the world.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;