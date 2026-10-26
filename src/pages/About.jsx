import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import styles from "./About.module.css";
import old_team_photo from "../assets/irt_picture.jpg";
import new_team_photo from "../assets/new_team_photo_2.png";
import LithoStepperIntro from "../assets/subteam_imgs_2/lithography.png";
import SpinCoaterIntro from "../assets/subteam_imgs_2/spincoater.png";
import ThermalEvapIntro from "../assets/subteam_imgs_2/thermalevap.jpg";
import logo from "../assets/hf_logo.png";
import aurnob from "../boardmembers/aurnob.jpg";
import misaki from "../boardmembers/misaki.jpg";
import joey from "../boardmembers/joey.png";
import iurii from "../boardmembers/iurii.jpg";
import isabel from "../boardmembers/isabel.jpg";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import { staggerContainer, staggerItem } from "../components/motionVariants";

const BOARD_MEMBERS = [
  { name: 'Iurii', role: 'President', year: '2nd Year', image: iurii },
  { name: 'Aurnob', role: 'Chief of Engineering', year: '3rd Year', image: aurnob },
  { name: 'Rassul', role: 'Thermal Evap Lead', year: '3rd Year', image: logo, isPlaceholder: true },
  { name: 'Joseph', role: 'Lithostepper Lead', year: '2nd Year', image: joey },
  { name: 'Isabel', role: 'Spin Coater Lead, Webmaster', year: '2nd Year', image: isabel },
  { name: 'Misaki', role: 'Social Lead', year: '4th Year', image: misaki },
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

// Milestones from the "Where We're Going" roadmap, in order.
const ROADMAP = [
  { title: "Test structures", note: "Validated" },
  { title: "Schottky diode", note: "Our first fabricated device" },
  { title: "RF rectenna" },
  { title: "ZnO thin-film transistor", note: "Trophy goal", goal: true },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="About us" />

      {/* Who We Are */}
      <Reveal as={motion.section} className={`${styles.SplitSection} ${styles.SplitTop}`}>
        <div className={styles.SplitText}>
          <span className="Eyebrow">01 · Who We Are</span>
          <h2 className={styles.SectionHeading}>Who We Are</h2>
          <p className={`BodyText ${styles.Lead}`}>
            We are the West Coast's largest student-led semiconductor fabrication team, with a community of over 300 members and 40+ researchers and interns at UC Irvine. We operate a makeshift fab, and we are a chapter of the global Hacker Fab initiative founded by Sam Zeloof at Carnegie Mellon, a network of 7+ university chapters building open-source fabrication capability worldwide.
          </p>
        </div>
        <div className={`${styles.SplitImage} ${styles.SplitImageWide}`}>
          <div className={styles.Frame}>
            <img src={new_team_photo} alt="Irvine Hacker Fab team photo" />
          </div>
        </div>
      </Reveal>

      {/* Our Mission */}
      <Reveal as={motion.section} className={`${styles.SplitSection} ${styles.SplitReverse}`}>
        <div className={styles.SplitText}>
          <span className="Eyebrow">02 · Our Mission</span>
          <h2 className={styles.SectionHeading}>Our Mission</h2>
          <p className="BodyText MutedText">
            The United States faces a shortage of tens of thousands of trained semiconductor engineers and technicians by the end of the decade, yet most students never touch a fabrication process before graduate school, because cleanroom access is scarce, expensive, and gated.
          </p>
          <p className="BodyText">
            Irvine Hacker Fab exists to close that gap. We fabricate real semiconductor devices using low-cost tools we design and build ourselves, without a cleanroom. Every tool, process, and result is openly documented, so any school can replicate our work. We train fabrication engineers years earlier in their careers than the traditional pathway allows.
          </p>
        </div>
        <div className={styles.SplitImage}>
          <div className={styles.Frame}>
            <img src={old_team_photo} alt="Irvine Hacker Fab members at a general meeting" />
          </div>
        </div>
      </Reveal>

      {/* What We've Built */}
      <section className={styles.BuiltSection}>
        <Reveal as={motion.div} className={styles.BuiltHeader}>
          <span className="Eyebrow">03 · Tools</span>
          <h2 className={styles.SectionHeading}>What We've Built</h2>
          <p className="BodyText MutedText">Our tool set includes:</p>
        </Reveal>

        <Reveal
          as={motion.div}
          className={styles.BuiltTiles}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {BUILT_TOOLS.map((tool, index) => (
            <motion.article key={tool.title} className={styles.BuiltTile} variants={staggerItem}>
              <div className={styles.BuiltTileMedia}>
                <img src={tool.image} alt={tool.title} className={styles.BuiltTileImage} />
                <span className={styles.BuiltTileIndex}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.BuiltTileBody}>
                <h3 className={styles.BuiltTileTitle}>{tool.title}</h3>
                <p className={styles.BuiltTileText}>{tool.description}</p>
              </div>
            </motion.article>
          ))}
        </Reveal>

        <Reveal as={motion.p} className={styles.BuiltFooter}>
          We have already spin-coated and patterned a full wafer as proof of concept. Every design is contributed back to the global Hacker Fab open-source library.
        </Reveal>
      </section>

      {/* Where We're Going */}
      <Reveal as={motion.section} className={styles.FutureSection}>
        <span className="Eyebrow">04 · Roadmap</span>
        <h2 className={styles.SectionHeading}>Where We're Going</h2>
        <p className="BodyText MutedText">
          This year, we cross from tools to devices. Our de-risked, three-quarter roadmap moves from validated test structures to a working Schottky diode, our first fabricated device, then to an RF rectenna, and finally to our trophy goal: a ZnO thin-film transistor, fabricated end-to-end on student-built equipment. Each milestone is measurable, dated, and documented in the open.
        </p>
        <ol className={styles.Roadmap}>
          {ROADMAP.map((step, index) => (
            <li key={step.title} className={`${styles.RoadmapStep} ${step.goal ? styles.RoadmapGoal : ""}`}>
              <span className={styles.RoadmapDot} aria-hidden="true" />
              <span className={styles.RoadmapIndex}>Step {index + 1}</span>
              <span className={styles.RoadmapTitle}>{step.title}</span>
              {step.note && <span className={styles.RoadmapNote}>{step.note}</span>}
            </li>
          ))}
        </ol>
        <Link to="/HowtoContribute" className="Btn BtnPrimary">
          Learn How You Can Help <FiArrowRight aria-hidden="true" />
        </Link>
      </Reveal>

      {/* Board Member Content */}
      <section className={styles.BoardMembersContainer}>
        <div className={styles.BoardHeader}>
          <span className="Eyebrow">05 · Leadership</span>
          <h2 className={styles.SectionHeading}>Board Members</h2>
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
              <div className={styles.BoardImageWrap}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={member.isPlaceholder ? styles.BoardImagePlaceholder : styles.BoardImage}
                />
              </div>
              <h3 className={styles.member}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.year}>{member.year}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>
    </>
  );
}

export default About;
