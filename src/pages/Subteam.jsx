import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Subteam.module.css";
import team_photo from "../assets/new_team_photo.jpg";

import SpinCoaterIntro from "../assets/subteam_imgs/SpinCoaterIntronew.jpg";
import TubeFurnaceIntro from "../assets/subteam_imgs/TubeFurnaceIntro.jpg";
import SputteringIntro from "../assets/subteam_imgs/SputteringIntro.jpg";
import ThermalEvapIntro from "../assets/subteam_imgs/ThermalEvapIntronew.jpg";
import LithoStepperIntro from "../assets/subteam_imgs/LithoStepperIntronew.jpg";
import Reveal from "../components/Reveal";

const SUBTEAMS = [
  {
    id: "tube-furnace",
    title: "Tube Furnace",
    image: TubeFurnaceIntro,
    background:
      "A tube furnace is used to heat materials to high temperatures in a controlled environment. It consists of a cylindrical chamber surrounded by heating elements. Samples are placed inside a tube, which allows for precise temperature control and even heat distribution. The furnace can operate in air or with specific gases to create desired chemical reactions. Tube furnaces are commonly used for material synthesis, annealing, and thermal processing in research and manufacturing.",
    skills:
      "Chemistry and Material Science, Embedded Software / PID control, Lab Testing, CAD / simulation, and Research.",
  },
  {
    id: "spin-coater",
    title: "Spin Coater",
    image: SpinCoaterIntro,
    background:
      "A spin coater is used to create thin, uniform films on flat surfaces. It works by placing a small amount of liquid on a substrate and spinning it at high speed. The centrifugal force spreads the liquid evenly while removing the excess. The coating thickness depends on factors like spin speed and liquid viscosity. Spin coating is widely used in electronics, optics, and materials research for precise film deposition.",
    skills: "CAD, PCB Design, Embedded Software, Lab Testing.",
  },
  {
    id: "litho-stepper",
    title: "Litho Stepper",
    image: LithoStepperIntro,
    background:
      "A lithography stepper is a machine used to transfer precise patterns onto a wafer during microfabrication. It projects light through a photomask and reduces the image to a smaller scale on the wafer surface coated with photoresist. By stepping the wafer in small increments, it can pattern multiple chips with high accuracy. This process is essential for creating integrated circuits and microdevices. Lithography steppers are key tools in semiconductor manufacturing for achieving fine, detailed features.",
    skills: "CAD, Embedded Software, and Lab Testing.",
  },
  {
    id: "sputtering",
    title: "Sputtering",
    image: SputteringIntro,
    background:
      "A sputtering system is used to deposit thin films of material onto a substrate. It works by bombarding a target material with high-energy ions, causing atoms to be ejected and settle onto the surface below. This process allows for precise control over film thickness and composition. Sputtering is commonly used to create coatings for electronics, optics, and sensors. It’s valued for producing durable, uniform, and high-quality thin films.",
    skills: "CAD, Embedded Software, Material Science, and Lab Testing.",
  },
  {
    id: "thermal-evaporation",
    title: "Thermal Evaporation",
    image: ThermalEvapIntro,
    background:
      "A thermal evaporator is used in semiconductor fabrication to deposit thin metal or dielectric layers on wafers. It works by heating a solid source material in a vacuum until it evaporates and coats the wafer surface. This allows for precise control over film thickness and purity, which is critical for device performance. The process is often used to create electrical contacts, interconnects, and reflective coatings. Thermal evaporation provides a simple and effective method for producing high-quality thin films in semiconductor manufacturing.",
    skills:
      "CAD / simulation, Software, Machining, PCB design, Embedded software, Power systems, Material Science, and Research.",
  },
  {
    id: "r-and-d",
    title: "R&D",
    fullTitle: "Research and Development",
    image: team_photo,
    background:
      "We have an R&D subteam that focuses on exploring new technologies and methods in semiconductor fabrication. This team conducts experiments, analyzes data, and develops innovative solutions to improve our processes and equipment. Members of the R&D subteam work closely with other subteams to implement their findings and drive continuous improvement within the club. The R&D subteam is essential for keeping our club at the forefront of semiconductor technology and fostering a culture of innovation. In addition, this team focuses on gathering funding.",
    skills: "Research, Technical Writing, Fundraising, and Presentation Skills.",
  },
];

function Subteam() {
  const [expandedId, setExpandedId] = useState(null);
  const triggerRefs = useRef({});
  const previousExpandedId = useRef(null);
  const expandedTeam = SUBTEAMS.find((team) => team.id === expandedId) || null;

  function open(id) {
    setExpandedId(id);
  }

  function close() {
    setExpandedId(null);
  }

  // The trigger button unmounts the instant its card expands (its ref goes
  // null then), so focus can't be returned synchronously in the close
  // handler. Wait for the button to remount, then focus it.
  useEffect(() => {
    if (expandedId === null && previousExpandedId.current !== null) {
      triggerRefs.current[previousExpandedId.current]?.focus();
    }
    previousExpandedId.current = expandedId;
  }, [expandedId]);

  useEffect(() => {
    if (!expandedId) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [expandedId]);

  return (
    <>
      {/* Intro Section */}
      <div className="PageContainer">
        <Reveal as={motion.div} className="TextContainer">
          <h1>Subteams</h1>
          <p className="BodyText">
            Our club is constantly developing exciting projects across multiple teams. We offer hands-on engineering project experience, giving members the opportunity to tackle open-ended problems and contribute to open-source technologies that make a global impact. With our welcoming and collaborative philosophy, we’ll help you find the subteam that’s the perfect fit for you!
          </p>
        </Reveal>
      </div>

      {/* Subteam Cards */}
      <div className={styles.SubteamGridWrapper}>
        <Reveal
          as={motion.div}
          className={styles.SubteamCardsContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          {SUBTEAMS.map((team) => {
            if (team.id === expandedId) {
              return <div key={team.id} className={styles.SubteamCardPlaceholder} aria-hidden="true" />;
            }
            return (
              <motion.div
                key={team.id}
                layoutId={`subteam-card-${team.id}`}
                className={styles.SubteamCard}
              >
                <button
                  ref={(node) => {
                    triggerRefs.current[team.id] = node;
                  }}
                  type="button"
                  className={styles.SubteamCardHeader}
                  aria-expanded={false}
                  aria-controls={`subteam-panel-${team.id}`}
                  onClick={() => open(team.id)}
                >
                  <motion.img
                    layoutId={`subteam-image-${team.id}`}
                    src={team.image}
                    alt={team.title}
                    className={styles.SubteamCardImage}
                  />
                  <motion.h2 layoutId={`subteam-title-${team.id}`} className={styles.SubteamCardTitle}>
                    {team.title}
                  </motion.h2>
                  <span className={styles.SubteamCardChevron} aria-hidden="true">
                    +
                  </span>
                </button>
              </motion.div>
            );
          })}
        </Reveal>

        <AnimatePresence>
          {expandedTeam && (
            <motion.div key={expandedTeam.id} className={styles.SubteamOverlayRoot}>
              <motion.div
                className={styles.SubteamBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={close}
              />
              <motion.div
                layoutId={`subteam-card-${expandedTeam.id}`}
                className={`${styles.SubteamCard} ${styles.SubteamCardOverlay}`}
              >
                <button
                  type="button"
                  className={styles.SubteamCardHeader}
                  aria-expanded
                  aria-controls={`subteam-panel-${expandedTeam.id}`}
                  onClick={close}
                  autoFocus
                >
                  <motion.img
                    layoutId={`subteam-image-${expandedTeam.id}`}
                    src={expandedTeam.image}
                    alt={expandedTeam.title}
                    className={styles.SubteamCardImageExpanded}
                  />
                  <motion.h2 layoutId={`subteam-title-${expandedTeam.id}`} className={styles.SubteamCardTitle}>
                    {expandedTeam.title}
                  </motion.h2>
                  <span className={styles.SubteamCardChevron} aria-hidden="true">
                    −
                  </span>
                </button>

                <motion.div
                  id={`subteam-panel-${expandedTeam.id}`}
                  role="region"
                  className={styles.SubteamCardBody}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  {expandedTeam.fullTitle && <h3 className={styles.SubteamFullTitle}>{expandedTeam.fullTitle}</h3>}
                  <p className="BoldBodyText">Background Information</p>
                  <p className="BodyText">{expandedTeam.background}</p>
                  <p className="BoldBodyText">What skills are we looking for?</p>
                  <p className="BodyText">{expandedTeam.skills}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Subteam;
