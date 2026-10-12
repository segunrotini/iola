
import { Routes, Route } from "react-router-dom"
import AboutUs from "./components/pages/public/Aboutus";
import Homepage from "./components/pages/public/Hompage";

function App() {
  return (
     <Routes>
       <Route path="/login" element={<Homepage />} />
        <Route path="/login" element={<AboutUs />} />
      </Routes>
    
  );
}

export default App;