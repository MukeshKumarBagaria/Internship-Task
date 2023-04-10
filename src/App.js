import HomePage from "./Pages/Homepage.js";
import ModeChoice from "./Pages/ModeChoice.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (<>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mode-choice" element={<ModeChoice />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
