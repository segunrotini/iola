
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/public/Aboutus";
import Homepage from "./components/pages/public/Hompage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />

    </Routes>
  );
}

export default App;