import React from "react";
import "./About.module.css";
import team_photo from "../assets/new_team_photo.jpg";
import Footer from "../Footer";
import styles from "./About.module.css";
import logo from "../assets/hf_logo.png";
import anthony from "../assets/anthony.jpg"
import aurnob from "../assets/aurnob.jpg"
import dylan from "../assets/dylan.jpg"
import misaki from "../assets/misaki.jpg"
import joey from "../assets/joey.jpg"
import brycen from "../assets/brycen.jpg"
import albert from "../assets/albert.jpg"
function About() {
  // Board member data
  const BoardMembers = [
    { name: 'Iurii', role: 'President', year: '2nd Year', image: logo },
    { name: 'Aurnob', role: 'VP', year: '3rd Year', image: aurnob },
    { name: 'Rassul', role: 'Thermal Evap Lead', year: '3rd Year', image: logo },
    { name: 'Joseph', role: 'Lithostepper Lead', year: '2nd Year', image: joey },
    { name: 'Brycen', role: 'Resin Printer Lead', year: '2nd Year', image: brycen },
    { name: 'Bella', role: 'Spin Coater Lead', year: '2nd Year', image: logo },
    { name: 'Misaki', role: 'Social', year: '4th Year', image: misaki },

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
           Irvine Hacker Fab is the West Coast's largest student-led semiconductor fabrication team, with over 50 members at UC Irvine. We operate a makeshift fab: a dry lab and a fume-hood wet lab, with no cleanroom. We are a chapter of the global Hacker Fab initiative, founded by Sam Zeloof at Carnegie Mellon. Our mission is to make hands-on semiconductor fabrication accessible without a cleanroom, training the next generation of fabrication engineers to help address the current U.S. shortage of trained semiconductor technicians and engineers.
          </p>
          <p className="BoldBodyText">What do we do?</p>
          <p className="BodyText">
            We design, build, and validate our own fabrication tools in-house. Completed builds include a projector-based photolithography stepper capable of ~50 µm patterning, a 10,000 RPM spin coater, and ≤4×10⁻³ torr vacuum chamber setup for thermal evaporation. For the 2026–2027 season, our roadmap includes a thermal evaporation system, a characterization bench, and our first fabricated devices: a Schottky diode, with a thin-film transistor as the stretch goal. 
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