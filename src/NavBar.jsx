// Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/hf_logo_text.png";
import styles from "./NavBar.module.css";
function NavBar() {
  // state variable to keep track of what page we're on
  // the li changes design based on if it's on the page
  const location = useLocation();
  // background color changes based on if we're on home page or not
  // the home paege has a white background, other pages have blue
  const headerStyle = {
    backgroundColor: location.pathname !== "/" ? "var(--primary-blue)" : "white"};
  const listStyle = (navBarItem) =>{
    console.log(location.pathname);
    console.log(navBarItem);
    if (location.pathname === "/") {
      return `${styles.navbarListItem}`;
    }
    else if (location.pathname === `/${navBarItem}`) {
      return `${styles.navbarListItem}`;
    }
    else{
      return `${styles.navbarListItemSelected}`;
    }
  };
  return (
    <header style={headerStyle}>
      {/* Logo Image */}
      
      <div className = {`${styles.logoContainer}`}>
        <img className={`${styles.navbarLogo}`} src={logo} alt="Irvine Hacker Fab"></img>
        <h3 className={`${styles.tagline}`}>Zot! Zot! Zot!</h3>
      </div>
      <nav>
        {/* list of navigation links */}
        <ul className={`${styles.navBarList}`}>
          {/*If the list item is selected, it will be white, if not selected, it will be blue*/}
          {/*The exception is the home page, on the home page, the home page navitem will be blue, the others will be white*/}
          <Link className={`${styles.navbarListItemSelected}`}to={"/"}>Home</Link>
          <Link className={listStyle("About")}to={"/About"}>About</Link>
          <Link className={listStyle("Subteams")}to={"/Subteams"}>Subteams</Link>
          <Link className={listStyle("HowtoContribute")}to={"/HowtoContribute"}>How to Contribute</Link>
          <Link className={listStyle("Resources")}to={"/Resources"}>Resources</Link>
          <Link className={listStyle("ContactUs")}to={"/ContactUs"}>Contact Us</Link>
          

        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
