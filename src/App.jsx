import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import HowToContribute from "./pages/HowToContribute";
import Resources from "./pages/Resources";
import Subteam from "./pages/Subteam";
import ContactPage from "./pages/ContactPage";
import Footer from "./Footer";

function App() {
  return (
    <Router basename="/hfab-website/">
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/HowtoContribute" element={<HowToContribute />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/ContactUs" element={<ContactPage />} />
          <Route path="/Subteams" element={<Subteam />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

