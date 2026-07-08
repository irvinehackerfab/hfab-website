import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./Subteam.module.css";
import Reveal from "../components/Reveal";
import { PROCESSES, STATUS } from "../data/processStatus";

function StatusPill({ status }) {
  const def = STATUS[status];
  if (!def) return null;
  return (
    <span className={styles.StatusPill} style={{ "--pill-color": def.color }}>
      {def.label}
    </span>
  );
}

function ProcessImage({ image, imageAlt, className }) {
  const [failed, setFailed] = useState(false);
  if (!image || failed) {
    return (
      <div className={className} aria-hidden={!imageAlt}>
        <span className={styles.ImagePlaceholderLabel}>IMAGE</span>
      </div>
    );
  }
  return (
    <img
      src={image}
      alt={imageAlt || ""}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function ProcessRow({ process, isOpen, onToggle }) {
  const panelId = `process-panel-${process.id}`;
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.Row}>
      <button
        type="button"
        className={styles.RowHeader}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <svg
          className={`${styles.Chevron} ${isOpen ? styles.ChevronOpen : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 6 L16 12 L8 18" />
        </svg>
        <span className={styles.CellName}>{process.name}</span>
        <span className={styles.CellCategory}>{process.category}</span>
        <span className={styles.CellStatus}>
          <StatusPill status={process.status} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            className={styles.PanelWrapper}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.Panel}>
              <p className={styles.PanelDescription}>{process.description}</p>
              <ProcessImage
                image={process.image}
                imageAlt={process.imageAlt}
                className={styles.PanelImage}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Subteam() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") setOpenId(null);
  }

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

      {/* Process Status Table */}
      <div className={styles.TableWrapper} onKeyDown={handleKeyDown}>
        <Reveal as={motion.div} viewport={{ once: true, margin: "-80px" }}>
          <div className={styles.Panel_Outer}>
            <div className={styles.HeaderBar}>
              <span className={styles.HeaderBracket} aria-hidden="true">
                [
              </span>
              <span className={styles.HeaderLabel}>Process Status</span>
              <span className={styles.HeaderBracket} aria-hidden="true">
                ]
              </span>
            </div>

            <div className={styles.ColumnHeaderRow}>
              <span className={styles.ColumnSpacer} aria-hidden="true" />
              <span className={styles.ColumnHeaderName}>Subteam</span>
              <span className={styles.ColumnHeaderCategory}>Category</span>
              <span className={styles.ColumnHeaderStatus}>Status</span>
            </div>

            <div className={styles.RowsContainer}>
              {PROCESSES.map((process) => (
                <ProcessRow
                  key={process.id}
                  process={process}
                  isOpen={openId === process.id}
                  onToggle={() => toggle(process.id)}
                />
              ))}
            </div>
          </div>

          <div className={styles.Legend}>
            {Object.entries(STATUS).map(([key, def]) => (
              <span key={key} className={styles.LegendItem}>
                <span
                  className={styles.LegendSwatch}
                  style={{ "--pill-color": def.color }}
                  aria-hidden="true"
                />
                {def.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}

export default Subteam;
