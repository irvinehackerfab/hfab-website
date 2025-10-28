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
          <Route path="/HowtoContribute" element={<About />} />
          <Route path="/Resources" element={<About />} />
          <Route path="/Subteams" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

