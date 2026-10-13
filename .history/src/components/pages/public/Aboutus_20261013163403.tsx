
import AboutHero from "../../home/Abouthero";
import AboutVision from "../../home/AboutVision";


import Nav from "../../home/Nav";
import Topbar from "../../home/topbar";
import AboutValues from "../../home/AboutValues";
import AboutFramework from "../../home/AboutFramwork";
import AboutLeadership from "../../home/AboutLeadership";
import AboutBoderless from "../../home/AboutBoderless";
import AboutCta from "../../home/AboutCta";
import Footer from "../../home/Footer";
import { motion, useReducedMotion } from "framer-motion";

function AboutUs() {
  const shouldReduceMotion = useReducedMotion();
  const sections = [
    { id: "vision", Component: AboutVision },
    { id: "values", Component: AboutValues },
    { id: "framework", Component: AboutFramework },
    { id: "leadership", Component: AboutLeadership },
    { id: "borderless", Component: AboutBoderless },
    { id: "cta", Component: AboutCta },
    { id: "footer", Component: Footer },
  ];

  return (
    <>
      <Topbar/>
      <Nav />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
      >
        <AboutHero />
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

export default AboutUs;