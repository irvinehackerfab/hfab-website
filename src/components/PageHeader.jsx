import { motion } from "framer-motion";
import styles from "./PageHeader.module.css";

const MotionDiv = motion.div;

// Shared title block for interior pages: mono eyebrow, display title, optional lead.
function PageHeader({ eyebrow, title, children }) {
  return (
    <header className={styles.PageHeader}>
      <MotionDiv
        className={styles.Inner}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow && <span className="Eyebrow">{eyebrow}</span>}
        <h1 className={styles.Title}>{title}</h1>
        {children && <div className={styles.Lead}>{children}</div>}
      </MotionDiv>
    </header>
  );
}

export default PageHeader;
