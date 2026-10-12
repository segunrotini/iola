const testimonials = [
  {
    category: "Islamic Track",
    message:
      "Enrolling Faruq and Amina at IOLA has been the best decision. Their Tajweed and Quran reading have improved tremendously, while Faruq is now coding his own games in Scratch. The mentors are patient, values-driven, and truly caring.",
    name: "Mum Faruq",
    role: "Parent of IOLA Learner",
    image: "https://i.pravatar.cc/100?img=47",
    verified: "Verified Parent",
  },
  {
    category: "Christian & STEM",
    message:
      "Finding an academy that offers top-tier STEM and digital skills with faith Christian moral guidance was a blessing. David has excelled in mathematics and coding, and his confidence has soared.",
    name: "Mrs. Grace Adeyemi",
    role: "Parent of IOLA Student",
    image: "https://i.pravatar.cc/100?img=32",
    verified: "Verified Parent",
  },
  {
    category: "Teen Tech Track",
    message:
      "The Python and AI literacy sessions are so practical. I never knew learning could be this engaging or that I could use programming to build my own projects. The classes are fun and structured.",
    name: "Tunde K.",
    role: "Age 16, Teen Tech Learner",
    image: "https://i.pravatar.cc/100?img=12",
    verified: "Verified Student",
  },
  {
    category: "Adult Professional",
    message:
      "As a working professional, the evening flexible schedule in Google Workspace, Data Analysis, and Applied AI tools gave me the immediate skills I use in my workplace every day. Outstanding instructors.",
    name: "Michael B.",
    role: "Adult Professional Track",
    image: "https://i.pravatar.cc/100?img=11",
    verified: "Verified Learner",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f7fafc] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-cyan-700">
            <span>▣</span>
            REAL STORIES FROM OUR LEARNING COMMUNITY
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#063b68] md:text-4xl">
            What Parents, Students & Learners
            <br />
            Say
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Discover how IOLA is transforming confidence, academic results,
            and practical skillsets worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex min-h-[285px] flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="text-[13px] tracking-wide text-yellow-500">
                  ★★★★★
                </div>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-[8px] font-bold text-purple-600">
                  {testimonial.category}
                </span>
              </div>

              <p className="mt-5 text-[11px] leading-5 text-gray-600">
                “{testimonial.message}”
              </p>

              <div className="mt-auto border-t border-gray-100 pt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-[10px] font-bold text-[#123f64]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-0.5 text-[8px] text-gray-500">
                      {testimonial.role}
                    </p>

                    <p className="mt-1 text-[8px] font-semibold text-emerald-500">
                      ✓ {testimonial.verified}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;