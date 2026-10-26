import { motion } from "framer-motion";
import { FiArrowUpRight, FiUsers, FiHeart } from "react-icons/fi";
import styles from "./HowToContribute.module.css";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import { staggerContainer, staggerItem } from "../components/motionVariants";

const discordLink = "https://discord.gg/p2byDUhDAz";
const zotfunderLink = "https://zotfunder.give.uci.edu/hackerfab";

function HowToContribute() {
  return (
    <>
      <PageHeader eyebrow="Get Involved" title="How to Contribute" />
      <Reveal
        as={motion.div}
        className={styles.HowContainer}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <motion.div className={styles.HowTextContainer} variants={staggerItem}>
          <span className={styles.IconBadge} aria-hidden="true">
            <FiUsers />
          </span>
          <p className="BoldBodyText">
            How can I join Hacker Fab?
          </p>
          <p className="BodyText MutedText">
            Look out for application announcements and general meeting updates in our{" "}
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="EmphasisLink">
              Discord
            </a>
            .
          </p>
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className={`Btn BtnGhost ${styles.CardAction}`}>
            Join our Discord <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
        <motion.div className={`${styles.HowTextContainer} ${styles.Featured}`} variants={staggerItem}>
          <span className={styles.IconBadge} aria-hidden="true">
            <FiHeart />
          </span>
          <p className="BoldBodyText">
            How can I support Hacker Fab?
          </p>
          <p className="BodyText MutedText">
            You can donate directly to Irvine Hacker Fab through our{" "}
            <a href={zotfunderLink} target="_blank" rel="noopener noreferrer" className="EmphasisLink">
              ZotFunder page
            </a>
            , UCI's official crowdfunding platform. Every contribution goes toward tools, materials, and hands-on fabrication experience for our members. For sponsorships or other ways to help, email irvinehackerfab@gmail.com.
          </p>
          <a href={zotfunderLink} target="_blank" rel="noopener noreferrer" className={`Btn BtnPrimary ${styles.CardAction}`}>
            Donate on ZotFunder <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
      </Reveal>
    </>
  );
}

export default HowToContribute;
