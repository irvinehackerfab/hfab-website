import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import old_team_photo from "../assets/old_team_photo.jpg";
import new_team_photo from "../assets/new_team_photo.jpg";
import LithoStepperIntro from "../assets/subteam_imgs/LithoStepperIntronew.jpg";
import SpinCoaterIntro from "../assets/subteam_imgs/SpinCoaterIntronew.jpg";
import ThermalEvapIntro from "../assets/subteam_imgs/ThermalEvapIntronew.jpg";
import logo from "../assets/hf_logo.png";
import aurnob from "../assets/aurnob.jpg";
import misaki from "../assets/misaki.jpg";
import joey from "../assets/joey.jpg";
import Reveal from "../components/Reveal";
import { staggerContainer, staggerItem } from "../components/motionVariants";

const BOARD_MEMBERS = [
  { name: 'Iurii', role: 'President', year: '2nd Year', image: logo, isPlaceholder: true },
  { name: 'Aurnob', role: 'VP', year: '3rd Year', image: aurnob },
  { name: 'Rassul', role: 'Thermal Evap Lead', year: '3rd Year', image: logo, isPlaceholder: true },
  { name: 'Joseph', role: 'Lithostepper Lead', year: '2nd Year', image: joey },
  { name: 'Bella', role: 'Spin Coater Lead', year: '2nd Year', image: logo, isPlaceholder: true },
  { name: 'Misaki', role: 'Social', year: '4th Year', image: misaki },
];

const BUILT_TOOLS = [
  {
    title: "Lithostepper",
    description: "A projector-based photolithography stepper on a 3D-printed XYZ stage, patterning at ~50 µm",
    image: LithoStepperIntro,
  },
  {
    title: "Spin Coater",
    description: "A 10,000 RPM spin coater with touchscreen control and data logging, built for under $200",
    image: SpinCoaterIntro,
  },
  {
    title: "Thermal Evaporation",
    description: "A vacuum chamber reaching ≤4×10⁻³ Torr for thermal evaporation and sputtering",
    image: ThermalEvapIntro,
  },
];

function About() {
  return (
    <>
      {/* Page Title */}
      <div className="PageContainer">
        <Reveal as={motion.div} className="TextContainer">
          <h1>About us</h1>
        </Reveal>
      </div>

      {/* Our Mission */}
      <Reveal as={motion.div} className={styles.SplitSection}>
        <div className={styles.SplitText}>
          <h2 className={styles.SectionHeading}>Our Mission</h2>
          <p className="BodyText">
            The United States faces a shortage of tens of thousands of trained semiconductor engineers and technicians by the end of the decade, yet most students never touch a fabrication process before graduate school, because cleanroom access is scarce, expensive, and gated.
          </p>
          <p className="BodyText">
            Irvine Hacker Fab exists to close that gap. We fabricate real semiconductor devices using low-cost tools we design and build ourselves, without a cleanroom. Every tool, process, and result is openly documented, so any school can replicate our work. We train fabrication engineers years earlier in their careers than the traditional pathway allows.
          </p>
        </div>
        <div className={styles.SplitImage}>
          <img src={old_team_photo} alt="Irvine Hacker Fab members at a general meeting" />
        </div>
      </Reveal>

      {/* Who We Are */}
      <Reveal as={motion.div} className={`${styles.SplitSection} ${styles.SplitReverse}`}>
        <div className={styles.SplitText}>
          <h2 className={styles.SectionHeading}>Who We Are</h2>
          <p className="BodyText">
            We are the West Coast's largest student-led semiconductor fabrication team, with over 50 members at UC Irvine. We operate a makeshift fab, and we are a chapter of the global Hacker Fab initiative founded by Sam Zeloof at Carnegie Mellon, a network of 7+ university chapters building open-source fabrication capability worldwide.
          </p>
        </div>
        <div className={styles.SplitImage}>
          <img src={new_team_photo} alt="Irvine Hacker Fab team photo" />
        </div>
      </Reveal>

      {/* What We've Built */}
      <div className={styles.BuiltSection}>
        <Reveal as={motion.div} className={styles.BuiltHeader}>
          <h2 className={styles.SectionHeading}>What We've Built</h2>
          <p className="BodyText">Our tool set includes:</p>
        </Reveal>

        <Reveal
          as={motion.div}
          className={styles.BuiltTiles}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {BUILT_TOOLS.map((tool) => (
            <motion.div key={tool.title} className={styles.BuiltTile} variants={staggerItem}>
              <h3 className={styles.BuiltTileTitle}>{tool.title}</h3>
              <p className="BodyText">{tool.description}</p>
              <img src={tool.image} alt={tool.title} className={styles.BuiltTileImage} />
            </motion.div>
          ))}
        </Reveal>

        <Reveal as={motion.p} className={`BoldBodyText ${styles.BuiltFooter}`}>
          We have already spin-coated and patterned a full wafer as proof of concept. Every design is contributed back to the global Hacker Fab open-source library.
        </Reveal>
      </div>

      {/* Where We're Going */}
      <Reveal as={motion.div} className={styles.FutureSection}>
        <h2 className={styles.SectionHeading}>Where We're Going</h2>
        <p className="BodyText">
          This year, we cross from tools to devices. Our de-risked, three-quarter roadmap moves from validated test structures to a working Schottky diode, our first fabricated device, then to an RF rectenna, and finally to our trophy goal: a ZnO thin-film transistor, fabricated end-to-end on student-built equipment. Each milestone is measurable, dated, and documented in the open.
        </p>
        <Link to="/HowtoContribute" className={styles.SupportButton}>
          Learn How You Can Help
        </Link>
      </Reveal>

      {/* Board Member Content */}
      <div className={`${styles.BoardMembersContainer}`}>
        <div className="TextContainer">
          <h1>Board Members</h1>
        </div>
        <Reveal
          as={motion.div}
          className={styles.BoardMembersIconContainer}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {BOARD_MEMBERS.map((member, index) => (
            <motion.div key={index} className={styles.boardCard} variants={staggerItem}>
              <img
                src={member.image}
                alt={member.name}
                className={member.isPlaceholder ? styles.BoardImagePlaceholder : styles.BoardImage}
              />
              <h3 className = {`${styles.member}`}>{member.name}</h3>
              <p className = {`${styles.year}`}>{member.year}</p>
              <p className = {`${styles.role}`}>{member.role}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </>
  );
}

export default About;
