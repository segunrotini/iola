import TopBar from "../../home/topbar";
import Navbar from "../../home/Nav";
import FaithValuesHero from "../../home/FaithValuesHero";
import DedicatedLearningTracks from "../../home/DedicatedLearningTracks";
import UniversalValuesPledge from "../../home/UniversalValuesPledge";
import FaithIntegrationFAQs from "../../home/FaithIntegrationFAQs";
import FaithValuesCTA from "../../home/FaithValuesCTA";
import Footer from "../../home/Footer";
import { motion, useReducedMotion } from "framer-motion";

function FaithValues() {
  const shouldReduceMotion = useReducedMotion();
  const sections = [
    { id: "dedicated-learning-tracks", Component: DedicatedLearningTracks },
    { id: "universal-values-pledge", Component: UniversalValuesPledge },
    { id: "faith-integration-faqs", Component: FaithIntegrationFAQs },
    { id: "faith-values-cta", Component: FaithValuesCTA },
    { id: "footer", Component: Footer },
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: "easeOut" }}
      >
        <FaithValuesHero />
      </motion.div>
      {sections.map(({ id, Component }) => (
        <motion.div
          key={id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
}

export default FaithValues;
