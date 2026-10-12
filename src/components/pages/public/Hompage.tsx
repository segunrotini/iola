import Topbar from "../../home/topbar"
import Nav from "../../home/Nav"
import HeroSection from "../../home/Hero-section"
import WhyChooseUs from "../../home/WhyChooseUs"
import Programs from "../../home/Programs"
import Testimonials from "../../home/Testimonials"
import LearningProcess from "../../home/LearningProcess"
import AdmissionSection from "../../home/AdmissionSection"
import Footer from "../../home/Footer"
import { motion, useReducedMotion } from "framer-motion"

function Homepage() {
  const shouldReduceMotion = useReducedMotion()
  const sections = [
    { id: "why-choose-us", Component: WhyChooseUs },
    { id: "programs", Component: Programs },
    { id: "learning-process", Component: LearningProcess },
    { id: "testimonials", Component: Testimonials },
    { id: "admission", Component: AdmissionSection },
    { id: "footer", Component: Footer },
  ]

  return (
    <>
      <Topbar/>
      <Nav/>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: "easeOut" }}
      >
        <HeroSection/>
      </motion.div>
      {sections.map(({ id, Component }) => (
        <motion.div
          key={id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeOut" }}
        >
          <Component/>
        </motion.div>
      ))}
    </>
  )
}
export default Homepage