import TopBar from "../../home/topbar";
import Navbar from "../../home/Nav";
import LearningTracksIntro from "../../home/LearningTracksIntro";
import TechnologyDigitalSkills from "../../home/TechnologyDigitalSkills";
import LanguageLiteracyTrack from "../../home/LanguageLiteracyTrack";
import StemLogicalReasoning from "../../home/StemLogicalReasoning";
import IslamicLearningTrack from "../../home/IslamicLearningTrack";
import ChristianLearningTrack from "../../home/ChristianLearningTrack";
import FlexibleLearningFormats from "../../home/FlexibleLearningFormats";
import AcademyAdmissionsAssistance from "../../home/AcademyAdmissionsAssistance";
import Footer from "../../home/Footer";
import { motion, useReducedMotion } from "framer-motion";

function Programs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Navbar />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: "easeOut" }}
      >
        <LearningTracksIntro />
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
      >
        <TechnologyDigitalSkills />
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
      >
        <div className="bg-[#FAF8FF] px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-stretch gap-4 md:grid-cols-2">
            <LanguageLiteracyTrack />
            <StemLogicalReasoning />
            <IslamicLearningTrack />
            <ChristianLearningTrack />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
      >
        <FlexibleLearningFormats />
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
      >
        <AcademyAdmissionsAssistance />
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default Programs;