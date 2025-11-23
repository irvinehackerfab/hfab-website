import React from "react";
import "./About.module.css";
import team_photo from "../assets/new_team_photo.jpg";
import Footer from "../Footer";
import styles from "./About.module.css";
import logo from "../assets/hf_logo.png";
function About() {
  // Board members data, add more members as needed
  const BoardMembers = [
    { name: 'Albert', role: 'President, Lithostepper Lead', year: '', image: logo },
    { name: 'Anthony', role: 'Effective VP, Outreach, Spincoater Lead', year: '', image: logo },
    { name: 'Aurnob', role: 'Outreach, Sputtering Lead', year: '', image: logo },
    { name: 'Lucas', role: 'Tube Furnace Lead', year: '', image: logo },
    { name: 'Rassul', role: 'Thermal Evap Lead', year: '', image: logo },
    { name: 'Dylan', role: 'Media', year: '', image: logo },
    { name: 'Misaki', role: 'Social', year: '', image: logo },

  ];
  return (
    <>
    {/* Main About Us Content */}
      <div className="PageContainer">
        <div className="TextContainer">
        <h1>About us</h1>
        </div>
          <img className={`${styles.ContentContainter}`} src={team_photo} alt="Team Photo" />
        

        <div className="TextContainer">
          
          <p className="BoldBodyText">Who are we?</p>
          <p className="BodyText">
            The Irvine Hacker Fab is an interdisciplinary team dedicated to creating open-source solutions for microchip fabrication. As part of a broader network that includes CMU, OSU, UW, and MIT, we aim to democratize semiconductor manufacturing by developing innovative, cost-effective tools and materials.
          </p>
          <p className="BoldBodyText">What do we do?</p>
          <p className="BodyText">
            Like TSMC and Intel, we develop both the hardware and software behind chipmaking — but with a student-driven, DIY twist. From designing spin coaters and lithography systems to writing control software, our subteams work on real-world engineering challenges across disciplines. There’s something here for every major.
          </p>
        </div>
      </div>
      {/* Board Member Content */}
      <div className={`${styles.BoardMembersContainer}`}>
        <div className="TextContainer">
          <h1>Board Members</h1>
        </div>
        <div className={`${styles.BoardMembersIconContainer}`}>
          {BoardMembers.map((member, index) => (
            <div key={index} className={styles.boardCard}>
              <img src={member.image} alt={member.name} className={styles.BoardImage} />
              <h3 className = {`${styles.member}`}>{member.name}</h3>
              <p className = {`${styles.year}`}>{member.year}</p>
              <p className = {`${styles.role}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;