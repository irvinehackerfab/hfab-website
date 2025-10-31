import React from "react";
import "./About.module.css";
import team_photo from "../assets/old_team_photo.jpg";
import Footer from "../Footer";
import styles from "./About.module.css";
function About() {
  return (
    <>
    <div className="PageContainer">
      <div className = {`${styles.ContentContainter}`}>
        <img src={team_photo} alt="Team Photo"/>
      </div>
      <div className="TextContainer">
        <h1>ABOUT US</h1>
        <p className = "BoldBodyText">Who are we?</p>
        <p className="BodyText">
          The Irvine Hacker Fab is an interdisciplinary team dedicated to creating open-source solutions for microchip fabrication. As part of a broader network that includes CMU, OSU, UW, and MIT, we aim to democratize semiconductor manufacturing by developing innovative, cost-effective tools and materials.
        </p>
        <p className = "BoldBodyText">What do we do?</p>
        <p className="BodyText">
          Like TSMC and Intel, we develop both the hardware and software behind chipmaking — but with a student-driven, DIY twist. From designing spin coaters and lithography systems to writing control software, our subteams work on real-world engineering challenges across disciplines. There’s something here for every major.
        </p>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default About;