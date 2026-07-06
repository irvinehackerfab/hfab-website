import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import HowToContribute from "./pages/HowToContribute";
import Subteam from "./pages/Subteam";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/HowtoContribute" element={<HowToContribute />} />
          <Route path="/HowToContribute" element={<HowToContribute />} />
          <Route path="/ContactUs" element={<ContactPage />} />
          <Route path="/Subteams" element={<Subteam />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
