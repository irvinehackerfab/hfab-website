// Navbar.jsx
import React from "react";
import {Link} from "react-router-dom";
function NavBar() {
  return (
    <header style={{ background: "lightblue", padding: "1rem" }}>
      <div >UCI Hacker Fab</div>
      <nav>
        <ul >
          <li ><Link  to = {"/"}>Home</Link></li>
          <li ><Link to = {"/About"}>About</Link></li>
          <li ><Link  to = {"/Subteam"}>Subteam</Link></li>
          <li ><Link to = {"/HowtoContribute"}>How To Contribute</Link></li>
          <li ><Link to = {"/Resources"}>Resources</Link></li>
          <li ><Link to = {"/ContactPage"}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
