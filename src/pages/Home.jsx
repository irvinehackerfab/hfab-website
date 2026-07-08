import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import home_picture from "../assets/home_picture.jpg";
import logo from "../assets/hf_logo_text.png";
import Reveal from "../components/Reveal";
import { staggerContainer, staggerItem } from "../components/motionVariants";

const SECONDARY_LINKS = [
  { label: "Subteams", to: "/Subteams" },
  { label: "Contribute", to: "/HowtoContribute" },
  { label: "Contact", to: "/ContactUs" },
];

const METRICS = [
  {
    number: "50+",
    label: "members",
    description: "West Coast's largest student-led fab team",
  },
  {
    number: "9",
    label: "chapters",
    description: "in the global Hacker Fab network",
  },
  {
    number: "Calit2",
    label: "backing",
    description: "for funding and dry-lab access",
  },
];

function Home() {
  return (
    <>
      <div className={styles.hero} style={{ "--hero-image": `url(${home_picture})` }}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img className={styles.heroLogo} src={logo} alt="Irvine Hacker Fab" />
          <h1 className={styles.headline}>Semiconductor Education For All</h1>
          <p className={styles.tagline}>
            Irvine Hacker Fab is UC Irvine's student semiconductor fabrication team. We design and build our own fabrication tools, openly document everything, and are on track to fabricate our first working semiconductor device this year — entirely on equipment we made ourselves.
          </p>
          <Link className={styles.primaryCta} to="/About">
            See What We're Building
          </Link>
          <div className={styles.secondaryRow}>
            {SECONDARY_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={styles.secondaryTile}>
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <Reveal
        as={motion.div}
        className={styles.metricsRow}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {METRICS.map((metric) => (
          <motion.div key={metric.label} className={styles.metricTile} variants={staggerItem}>
            <span className={styles.metricNumber}>{metric.number}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
            <span className={styles.metricDescription}>{metric.description}</span>
          </motion.div>
        ))}
      </Reveal>

      <Reveal as={motion.div} className={styles.missionBand}>
        <span className={styles.missionEyebrow}>Mission</span>
        <p className={styles.missionText}>
          We exist to prove that hands-on semiconductor fabrication doesn't require a billion-dollar cleanroom, and to train the engineers the U.S. chip industry urgently needs.
        </p>
      </Reveal>
    </>
  );
}

export default Home;
