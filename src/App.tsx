import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
