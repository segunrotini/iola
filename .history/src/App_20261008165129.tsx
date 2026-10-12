
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/public/Aboutus";
import Homepage from "./components/pages/public/Hompage";
import Programs from "./components/home/Programs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
<Route path="/about" element={<Programs />} />
    </Routes>
  );
}

export default App;