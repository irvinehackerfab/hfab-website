import React from "react";
import styles from "./Subteam.module.css";
import Footer from "../Footer.jsx";
import team_photo from "../assets/new_team_photo.jpg";


function Subteam() {
  function hanndleLinkClick() {

  }
  return (
    <>
      <div className="PageContainer">
        <div className="TextContainer">
          <h1>Subteams</h1>
          <p className="BodyText">
            Our club is constantly developing exciting projects across multiple teams. We offer hands-on engineering project experience, giving members the opportunity to tackle open-ended problems and contribute to open-source technologies that make a global impact. With our welcoming and collaborative philosophy, we’ll help you find the subteam that’s the perfect fit for you!
          </p>
        </div>
      </div>

      <div className={`${styles.TableOfContents}`}>
        <div className="TextContainer">
          <p className="BoldBodyText">
            Here is our list of our subteams, click on each one to learn more!
          </p>
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("tube-furnace")}>
            1. Tube Furnace
          </p>
          <p className={`${styles.LinkBodyText}`}>
            2. Spin Coater
          </p>
          <p className={`${styles.LinkBodyText}`}>
            3. Litho-Stepper
          </p>
          <p className={`${styles.LinkBodyText}`}>
            4. Sputtering
          </p>
          <p className={`${styles.LinkBodyText}`}>
            5. Thermal Evaporation
          </p>
          <p className={`${styles.LinkBodyText}`}>
            6. Research and Development
          </p>
          <h1></h1>
        </div>
      </div>

      <div className="TextContainer">
        <h1>Tube Furnace</h1>
      </div>
      <div className={`${styles.SubteamContainer}`} id="tube-furnace">
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