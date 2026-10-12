
import AboutHero from "../../home/Abouthero";
import AboutVision from "../../home/AboutVision";


import Nav from "../../home/Nav";
import Topbar from "../../home/topbar";
import AboutStory from "../../home/AboutStory";
import AboutValues from "../../home/AboutValues";
function AboutUs() {
  return (
    <>
      <Topbar/>
      <Nav />
      <AboutHero />
      <AboutVision />
      <AboutStory />
      <AboutValues />
    </>
  );
}

export default AboutUs;