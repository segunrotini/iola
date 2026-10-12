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

function Programs() {
  return (
    <>
      <TopBar />
      <Navbar />
      <LearningTracksIntro />
      <TechnologyDigitalSkills />
      <div className="bg-[#FAF8FF] px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-4 md:grid-cols-2">
          <LanguageLiteracyTrack />
          <StemLogicalReasoning />
          <IslamicLearningTrack />
          <ChristianLearningTrack />
        </div>
      </div>
      <FlexibleLearningFormats />
      <AcademyAdmissionsAssistance />
      <Footer />
    </>
  );
}

export default Programs;