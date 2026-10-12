import { motion, useReducedMotion } from "framer-motion";
import TopBar from "../../home/topbar";
import Navbar from "../../home/Nav";
import Footer from "../../home/Footer";
import WhyIolaHero from "../../home/WhyIolaHero";
import WhyIolaMetrics from "../../home/WhyIolaMetrics";
import IolaFoundationalPillars from "../../home/IolaFoundationalPillars";
import IolaDifference from "../../home/IolaDifference";
import WhyIolaTestimonials from "../../home/WhyIolaTestimonials";
import ScheduleMatcher from "../../home/ScheduleMatcher";
import WhyIolaCTA from "../../home/WhyIolaCTA";

function WhyIola() {
  const shouldReduceMotion = useReducedMotion();
  const sections = [
    { id: "why-iola-metrics", Component: WhyIolaMetrics },
    { id: "iola-foundational-pillars", Component: IolaFoundationalPillars },
    { id: "iola-difference-table", Component: IolaDifference },
    { id: "why-iola-testimonials", Component: WhyIolaTestimonials },
    { id: "schedule-matcher", Component: ScheduleMatcher },
    { id: "why-iola-cta", Component: WhyIolaCTA },
    { id: "why-iola-footer", Component: Footer },
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
      >
        <WhyIolaHero />
      </motion.div>
      {sections.map(({ id, Component }) => (
        <motion.div
          key={id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
}

export default WhyIola;
