
import styles from "./Subteam.module.css";
import Footer from "../Footer.jsx";
import team_photo from "../assets/new_team_photo.jpg";
import { useRef } from "react";
// the subteam page, with sections for each subteam
function Subteam() {
  // a way to reference each subteam section for scrolling, so far, only tube furnace
  const subTeamRefs = {
    tubeFurnace: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  // function to handle clicking on the table of contents links, scrolling to the correct section
  function handleLinkClick(section) {
    const element = subTeamRefs[section].current;
    const offset = 200;
    
    //needs an offset to account for the navbar
    window.scrollTo({
      top: window.scrollY + element.getBoundingClientRect().top - offset,
      behavior: "smooth"
    });

  }
  return (
    <>
      {/* Intro Section */}
      <div className="PageContainer">
        <div className="TextContainer">
          <h1>Subteams</h1>
          <p className="BodyText">
            Our club is constantly developing exciting projects across multiple teams. We offer hands-on engineering project experience, giving members the opportunity to tackle open-ended problems and contribute to open-source technologies that make a global impact. With our welcoming and collaborative philosophy, we’ll help you find the subteam that’s the perfect fit for you!
          </p>
        </div>
      </div>
      {/* Table of Contents */}
      <div className={`${styles.TableOfContents}`}>
        <div className="TextContainer">
          <p className="BoldBodyText">
            Here is our list of our subteams, click on each one to learn more!
          </p>
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("tubeFurnace")}>
            1. Tube Furnace
          </p><br />
          <p className={`${styles.LinkBodyText}`}>
            2. Spin Coater
          </p><br />
          <p className={`${styles.LinkBodyText}`}>
            3. Litho-Stepper
          </p><br />
          <p className={`${styles.LinkBodyText}`}>
            4. Sputtering
          </p><br />
          <p className={`${styles.LinkBodyText}`}>
            5. Thermal Evaporation
          </p><br />
          <p className={`${styles.LinkBodyText}`}>
            6. Research and Development
          </p>
          <h1></h1>
        </div>
      </div>
      {/* Tube Furnace Section */}
      <div className="TextContainer" ref={subTeamRefs.tubeFurnace}>
        <h1>Tube Furnace</h1>
      </div>
      <div className={`${styles.SubteamContainer}`}>
        <div className={`${styles.SubteamTextContainer}`}>
          <p className="BoldBodyText">
            What do we do?
          </p>
          <p className="BodyText">
            idk
          </p>
          <p className="BoldBodyText">
            What are we working on?
          </p>
          <p className="BodyText">
            idk
          </p>
        </div>
        <div className={`${styles.SubteamMediaContainer}`}>
          <div className={`${styles.SubteamMediaRow}`}>
            <img src={team_photo} alt="Team Photo" />
            <img src={team_photo} alt="Team Photo" />
          </div>
          <div className={`${styles.SubteamMediaRow}`}>
            <img src={team_photo} alt="Team Photo" />
            <img src={team_photo} alt="Team Photo" />
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default Subteam;