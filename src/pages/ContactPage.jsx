import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import styles from "./ContactPage.module.css";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";

const discordLink = "https://discord.gg/p2byDUhDAz";
const emailAddress = "irvinehackerfab@gmail.com";

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Say Hello" title="Contact Us" />
      <Reveal as={motion.div} className={styles.ContactContainer}>
        <p className={styles.ContactText}>
          Feel free to reach out to us via email at irvinehackerfab@gmail.com!
          Look out for application announcements and general meeting updates in our{" "}
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className="EmphasisLink">
            Discord
          </a>
          .
        </p>
        <div className={styles.Channels}>
          <a href={`mailto:${emailAddress}`} className={styles.Channel}>
            <span className={styles.ChannelIcon} aria-hidden="true">
              <FiMail />
            </span>
            <span className={styles.ChannelBody}>
              <span className={styles.ChannelLabel}>Email</span>
              <span className={styles.ChannelValue}>{emailAddress}</span>
            </span>
            <FiArrowUpRight className={styles.ChannelArrow} aria-hidden="true" />
          </a>
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className={styles.Channel}>
            <span className={styles.ChannelIcon} aria-hidden="true">
              <FaDiscord />
            </span>
            <span className={styles.ChannelBody}>
              <span className={styles.ChannelLabel}>Discord</span>
              <span className={styles.ChannelValue}>Announcements & meetings</span>
            </span>
            <FiArrowUpRight className={styles.ChannelArrow} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </>
  );
}

export default ContactPage;
