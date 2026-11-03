import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import PageMeta from "./components/PageMeta";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageMeta />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
