import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact Us" element={<Footer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

