import About from "./pages/aboutus/About";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="work" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {/* <About /> */}
      {/* <Work /> */}
    </div>
  );
}

export default App;
