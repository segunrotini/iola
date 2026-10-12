
import AboutHero from "../../home/Abouthero";
import AboutVision from "../../home/AboutVision";


import Nav from "../../home/Nav";
import Topbar from "../../home/topbar";
import AboutStory from "../../home/AboutStory";
import AboutValues from "../../home/AboutValues";
import AboutFramework from "../../home/AboutFramwork";
import AboutLeadership from "../../home/AboutLeadership";
import AboutBoderless from "../../home/AboutBoderless";
function AboutUs() {
  return (
    <>
      <Topbar/>
      <Nav />
      <AboutHero />
      <AboutVision />
      <AboutStory />
      <AboutValues />
      <AboutFramework/>
      <AboutLeadership/>
      <AboutBoderless/>
    </>
  );
}

export default AboutUs;