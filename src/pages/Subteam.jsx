
import styles from "./Subteam.module.css";
import Footer from "../Footer.jsx";
import team_photo from "../assets/new_team_photo.jpg";
import { useRef } from "react";
// the subteam page, with sections for each subteam
function Subteam() {
  // a way to reference each subteam section for scrolling, so far, only tube furnace
  const subTeamRefs = {
    tubeFurnace: useRef(null),
    spinCoater: useRef(null),
    lithoStepper: useRef(null),
    sputtering: useRef(null),
    thermalEvaporation: useRef(null),
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
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("spinCoater")}>
            2. Spin Coater
          </p><br />
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("lithoStepper")}>
            3. LithoStepper
          </p><br />
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("sputtering")}>
            4. Sputtering
          </p><br />
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("thermalEvaporation")}>
            5. Thermal Evaporation
          </p><br />
          <p className={`${styles.LinkBodyText}`} onClick={() => handleLinkClick("tubeFurnace")}>
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
            Background Information
          </p>
          <p className="BodyText">
            A tube furnace is used to heat materials to high temperatures in a controlled environment. It consists of a cylindrical chamber surrounded by heating elements. Samples are placed inside a tube, which allows for precise temperature control and even heat distribution. The furnace can operate in air or with specific gases to create desired chemical reactions. Tube furnaces are commonly used for material synthesis, annealing, and thermal processing in research and manufacturing.          </p>
          <p className="BoldBodyText">
            What skills are we looking for?
          </p>
          <p className="BodyText">
            Chemistry and Material Science, Embedded Software / PID control, Lab Testing, CAD / simulation, and Research.
          </p>
        </div>
        <div className={`${styles.SubteamMediaContainer}`}>
          <img src={team_photo} alt="Team Photo" />
        </div>
      </div>
      {/* Spin Coater Section */}
      <div className="TextContainer" ref={subTeamRefs.spinCoater}>
        <h1>Spin Coater</h1>
      </div>
      <div className={`${styles.SubteamContainer}`} >
        <div className={`${styles.SubteamTextContainer}`}>
          <p className="BoldBodyText">
            Background Information
          </p>
          <p className="BodyText">
            A spin coater is used to create thin, uniform films on flat surfaces. It works by placing a small amount of liquid on a substrate and spinning it at high speed. The centrifugal force spreads the liquid evenly while removing the excess. The coating thickness depends on factors like spin speed and liquid viscosity. Spin coating is widely used in electronics, optics, and materials research for precise film deposition.          </p>
          <p className="BoldBodyText">
            What skills are we looking for?
          </p>
          <p className="BodyText">
            CAD, Embedded Software, and Lab Testing.
          </p>
        </div>
        <div className={`${styles.SubteamMediaContainer}`}>
            <img src={team_photo} alt="Team Photo" />
        </div>
      </div>
      {/* Litho Stepper Section */}
      <div className="TextContainer" ref={subTeamRefs.lithoStepper}>
        <h1>LithoStepper</h1>
      </div>
      <div className={`${styles.SubteamContainer}`}>
        <div className={`${styles.SubteamTextContainer}`}>
          <p className="BoldBodyText">
            Background Information
          </p>
          <p className="BodyText">
            A lithography stepper is a machine used to transfer precise patterns onto a wafer during microfabrication. It projects light through a photomask and reduces the image to a smaller scale on the wafer surface coated with photoresist. By stepping the wafer in small increments, it can pattern multiple chips with high accuracy. This process is essential for creating integrated circuits and microdevices. Lithography steppers are key tools in semiconductor manufacturing for achieving fine, detailed features.          </p>
          <p className="BoldBodyText">
            What skills are we looking for?
          </p>
          <p className="BodyText">
            CAD, Embedded Software, and Lab Testing.
          </p>
        </div>
        <div className={`${styles.SubteamMediaContainer}`}>
          <img src={team_photo} alt="Team Photo" />
        </div>
      </div>
      {/* Sputtering Section */}
      <div className="TextContainer" ref={subTeamRefs.sputtering}>
        <h1>Sputtering</h1>
      </div>
      <div className={`${styles.SubteamContainer}`}>
        <div className={`${styles.SubteamTextContainer}`}>
          <p className="BoldBodyText">
            Background Information
          </p>
          <p className="BodyText">
            A sputtering system is used to deposit thin films of material onto a substrate. It works by bombarding a target material with high-energy ions, causing atoms to be ejected and settle onto the surface below. This process allows for precise control over film thickness and composition. Sputtering is commonly used to create coatings for electronics, optics, and sensors. It’s valued for producing durable, uniform, and high-quality thin films.
          </p>
          <p className="BoldBodyText">
            What skills are we looking for?
          </p>
          <p className="BodyText">
            CAD, Embedded Software, Material Science, and Lab Testing.
          </p>
        </div>
        <div className={`${styles.SubteamMediaContainer}`}>
          <img src={team_photo} alt="Team Photo" />
        </div>
      </div>
      {/* Thermal Evaporation */}
      <div className="TextContainer" ref={subTeamRefs.thermalEvaporation}>
        <h1>Thermal Evaporation</h1>
      </div>
      <div className={`${styles.SubteamContainer}`}>
        <div className={`${styles.SubteamTextContainer}`}>
          <p className="BoldBodyText">
            Background Information
          </p>
          <p className="BodyText">
            A thermal evaporator is used in semiconductor fabrication to deposit thin metal or dielectric layers on wafers. It works by heating a solid source material in a vacuum until it evaporates and coats the wafer surface. This allows for precise control over film thickness and purity, which is critical for device performance. The process is often used to create electrical contacts, interconnects, and reflective coatings. Thermal evaporation provides a simple and effective method for producing high-quality thin films in semiconductor manufacturing.          </p>
          <p className="BoldBodyText">
            What skills are we looking for?
          </p>
          <p className="BodyText">
            CAD / simulation, Software, Machining, PCB design, Embedded software, Power systems, Material Science, and Research.
          </p>
        </div>
        <div className={`${styles.SubteamMediaContainer}`}>
          <img src={team_photo} alt="Team Photo" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Subteam;