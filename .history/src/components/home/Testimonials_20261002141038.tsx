
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "ADEBOLA JOHN",
    role: "Parent",
    message:
      "I am impressed with the quality of teaching and the practical approach. My child has gained skills and confidence since joining IOLA.",
  },
  {
    name: "MICHAEL DAVID",
    role: "Student",
    message:
      "The learning environment is excellent. The instructors explain things clearly and give us practical knowledge we can use.",
  },
  {
    name: "GRACE OLAMIDE",
    role: "Learner",
    message:
      "IOLA has helped me improve my digital skills and understand how to apply what I learn to real-world situations.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            What Our Learners Say
          </h2>

          <p className="mt-4 text-gray-600">
            Hear from students, parents, and learners who are growing their
            skills and achieving their goals with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Quote size={22} />
              </div>

              <p className="text-base leading-7 text-gray-600">
                “{testimonial.message}”
              </p>

              <div className="mt-7 border-t border-gray-200 pt-5">
                <h3 className="font-bold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
