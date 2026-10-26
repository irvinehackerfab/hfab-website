import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Home.module.css";
import home_picture from "../assets/home_picture.jpg";
import logo from "../assets/hf_logo_text.png";
import Reveal from "../components/Reveal";
import Wafer from "../components/Wafer";
import { staggerContainer, staggerItem } from "../components/motionVariants";

const SECONDARY_LINKS = [
  { label: "Subteams", to: "/Subteams" },
  { label: "Contribute", to: "/HowtoContribute" },
  { label: "Contact", to: "/ContactUs" },
];

const METRICS = [
  {
    number: "300+",
    label: "community members",
    description: "West Coast's largest student-led fab community",
  },
  {
    number: "40+",
    label: "researchers & interns",
    description: "building tools and processes hands-on",
  },
  {
    number: "Calit2",
    label: "funding",
    description: "for funding and dry-lab access",
  },
];

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Home() {
  return (
    <>
      <section className={styles.hero} style={{ "--hero-image": `url(${home_picture})` }}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.img variants={heroItem} className={styles.heroLogo} src={logo} alt="Irvine Hacker Fab" />
          <motion.h1 variants={heroItem} className={styles.headline}>
            Semiconductor Education <span className={styles.headlineAccent}>For All</span>
          </motion.h1>
          <motion.p variants={heroItem} className={styles.tagline}>
            Irvine Hacker Fab is UC Irvine's student semiconductor fabrication team. We design and build our own fabrication tools, openly document everything, and are on track to fabricate our first working semiconductor device this year — entirely on equipment we made ourselves.
          </motion.p>
          <motion.div variants={heroItem} className={styles.ctaRow}>
            <Link className="Btn BtnPrimary" to="/About">
              See What We're Building <FiArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div variants={heroItem} className={styles.secondaryRow}>
            {SECONDARY_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="Btn BtnGhost">
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Reveal
        as={motion.div}
        className={styles.metricsRow}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {METRICS.map((metric) => (
          <motion.div key={metric.label} className={styles.metricTile} variants={staggerItem}>
            <span className={styles.metricNumber}>{metric.number}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
            <span className={styles.metricDescription}>{metric.description}</span>
          </motion.div>
        ))}
      </Reveal>

      <section className={styles.missionBand}>
        <Reveal as={motion.div} className={styles.missionCopy}>
          <span className="Eyebrow">Mission</span>
          <p className={styles.missionText}>
            We exist to prove that hands-on semiconductor fabrication doesn't require a billion-dollar cleanroom, and to train the engineers the U.S. chip industry urgently needs.
          </p>
          <Link to="/About" className={styles.missionLink}>
            Read our story <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
        <motion.div
          className={styles.missionArt}
          initial={{ opacity: 0, rotate: -12, scale: 0.92 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Wafer className={styles.wafer} />
        </motion.div>
      </section>
    </>
  );
}

export default Home;
