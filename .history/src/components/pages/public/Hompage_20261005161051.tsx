import Topbar from "../../home/topbar"
import Nav from "../../home/Nav"
import HeroSection from "../../home/Hero-section"
import WhyChooseUs from "../../home/WhyChooseUs"
import Programs from "../../home/Programs"
import Testimonials from "../../home/Testimonials"
import LearningProcess from "../../home/LearningProcess"
import AdmissionSection from "../../home/AdmissionSection"
import Footer from "../../home/Footer"
function Homepage() {
  return (
    <>
      

      <Topbar/>
      <Nav/>
      <HeroSection/>
      <WhyChooseUs/>
      <Programs/>
      <LearningProcess/>
      <Testimonials/>
      <AdmissionSection/>
      <Footer/>
    </>
  )
}
export default Homepage