import HomePage from "./Pages/Homepage.js";
import ModeChoice from "./Pages/ModeChoice.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mode-choice" element={<ModeChoice />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
