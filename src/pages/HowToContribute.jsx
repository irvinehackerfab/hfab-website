import { motion } from "framer-motion";
import styles from "./HowToContribute.module.css";
import Reveal from "../components/Reveal";

const discordLink = "https://discord.gg/p2byDUhDAz";

function HowToContribute() {
  return (
    <>
      <div className="PageContainer">
        <Reveal as={motion.div} className="TextContainer">
          <h1>How to Contribute</h1>
        </Reveal>
      </div>
      <Reveal as={motion.div} className={styles.HowContainer}>
        <div className={styles.HowTextContainer}>
          <p className="BoldBodyText">
            How can I join Hacker Fab?
          </p>
          <p className="BodyText">
            Look out for application announcements and general meeting updates in our{" "}
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="EmphasisLink">
              Discord
            </a>
          </p>
        </div>
        <div className={styles.HowTextContainer}>
          <p className="BoldBodyText">
            How can support Hacker Fab?
          </p>
          <p className="BodyText">
           We are currently working towards enhancing our donation infrastructure for the 2026-2027 school year. In the meantime, feel free to email irvinehackerfab@gmail.com for more information.
          </p>
        </div>
      </Reveal>
    </>
  );
}

export default HowToContribute;
