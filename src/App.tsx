
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/public/Aboutus";
import Homepage from "./components/pages/public/Hompage";
import ProgramsPage from "./components/pages/public/Programs";
import FaithValuesPage from "./components/pages/public/FaithValues";
import WhyIolaPage from "./components/pages/public/WhyIola";
import AdmissionsPage from "./components/pages/public/Admissions";
import StudentPortalPage from "./components/pages/public/StudentPortal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/faith-values" element={<FaithValuesPage />} />
      <Route path="/why-iola" element={<WhyIolaPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/student-portal" element={<StudentPortalPage />} />
    </Routes>
  );
}

export default App;