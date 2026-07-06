import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactPage.module.css";
import Reveal from "../components/Reveal";

const discordLink = "https://discord.gg/p2byDUhDAz";

function ContactPage() {
  return (
    <>
      <div className="PageContainer">
        <Reveal as={motion.div} className="TextContainer">
          <h1>Contact Us</h1>
        </Reveal>
      </div>
      <Reveal as={motion.div} className={styles.ContactContainer}>
        <p>
          Feel free to reach out to us via email at irvinehackerfab@gmail.com!
          Look out for application announcements and general meeting updates in our{" "}
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className="EmphasisLink">
            Discord
          </a>
          .
        </p>
      </Reveal>
    </>
  );
}

export default ContactPage;
