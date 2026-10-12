import { motion, useReducedMotion } from "framer-motion";
import TopBar from "../../home/topbar";
import Navbar from "../../home/Nav";
import Footer from "../../home/Footer";
import AdmissionsHero from "../../home/AdmissionsHero";
import AdmissionsRoadmap from "../../home/AdmissionsRoadmap";
import AcademicInquiry from "../../home/AcademicInquiry";
import TuitionOptions from "../../home/TuitionOptions";
import AdmissionsFAQs from "../../home/AdmissionsFAQs";
import AdmissionsCTA from "../../home/AdmissionsCTA";

function Admissions() {
  const shouldReduceMotion = useReducedMotion();
  const sections = [
    { id: "admissions-roadmap", Component: AdmissionsRoadmap },
    { id: "academic-inquiry", Component: AcademicInquiry },
    { id: "tuition-options", Component: TuitionOptions },
    { id: "admissions-faqs", Component: AdmissionsFAQs },
    { id: "admissions-cta", Component: AdmissionsCTA },
    { id: "admissions-footer", Component: Footer },
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
        <AdmissionsHero />
      </motion.div>
      {sections.map(({ id, Component }) => (
        <motion.div
          key={id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
}

export default Admissions;
