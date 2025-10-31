// Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/hf_logo_text.png";
import "./NavBar.css";
function NavBar() {
  // state variable to keep track of what page we're on
  // the li changes design based on if it's on the page
  const location = useLocation();
  // background color changes based on if we're on home page or not
  // the home paege has a white background, other pages have blue
  const headerStyle = {
    backgroundColor: location.pathname !== "/" ? "var(--primary-blue)" : "white"};
  const listStyle = (navBarItem) =>{
    return location.pathname === "/" ? "navbarListItem" : location.pathname === `/${navBarItem}` ? "navbarListItem": "navbarListItemSelected"
  };
  return (
    <header style={headerStyle}>
      {/* Logo Image */}
      <div id = "logoContainer">
        <img id="navbarLogo" src={logo} alt="Irvine Hacker Fab"></img>
        <h1>Cool club tagline</h1>
      </div>
      <nav>
        {/* list of navigation links */}
        <ul id="navBarList">
          {/*If the list item is selected, it will be white, if not selected, it will be blue*/}
          {/*The exception is the home page, on the home page, the home page navitem will be blue, the others will be white*/}
          <li className={"navbarListItemSelected"}><Link to={"/"}>Home</Link></li>
          <li className={listStyle("About")}><Link to={"/About"}>About</Link></li>
          <li className={listStyle("Subteams")}><Link  to = {"/Subteams"}>Subteams</Link></li>
          <li className={listStyle("HowtoContribute")}><Link to = {"/HowtoContribute"}>How To Contribute</Link></li>
          <li className={listStyle("Resources")}><Link to = {"/Resources"}>Resources</Link></li>
          <li className={location.pathname === "/ContactUs" ? "navbarListItemSelected" : "navbarListItem"}><Link to = {"/ContactUs"}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
