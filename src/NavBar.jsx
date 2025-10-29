// Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/hf_logo_text.png";
import "./NavBar.css";
function NavBar() {
  // state variable to keep track of what page we're on
  // the li changes design based on if it's on the page
  const location = useLocation();
  return (
    <header>
      {/* Logo Image */}
      <img id="navbarLogo" src={logo} alt="Irvine Hacker Fab"></img>
      <nav>
        {/* list of navigation links */}
        <ul id="navBarList">
          {/* If the current path matches the link path, apply the 'selected' style (change to blue)*/}
          <li className={location.pathname === "/" ? "navbarListItemSelected" : "navbarListItem"}><Link to={"/"}>Home</Link></li>
          <li className={location.pathname === "/About" ? "navbarListItemSelected" : "navbarListItem"}><Link to={"/About"}>About</Link></li>
          <li className={location.pathname === "/Subteams" ? "navbarListItemSelected" : "navbarListItem"}><Link  to = {"/Subteams"}>Subteams</Link></li>
          <li className={location.pathname === "/HowtoContribute" ? "navbarListItemSelected" : "navbarListItem"}><Link to = {"/HowtoContribute"}>How To Contribute</Link></li>
          <li className={location.pathname === "/Resources" ? "navbarListItemSelected" : "navbarListItem"}><Link to = {"/Resources"}>Resources</Link></li>
          <li className={location.pathname === "/ContactUs" ? "navbarListItemSelected" : "navbarListItem"}><Link to = {"/ContactUs"}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
