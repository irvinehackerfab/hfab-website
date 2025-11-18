import React from "react";
import styles from "./Resources.module.css";
import Footer from "../Footer";
import resources_youtube from "../assets/resources_youtube.jpg";
import resources_github from "../assets/resources_github.jpg";
import resources_gitbook from "../assets/resources_gitbook.jpg";

function Resources() {
  return (
    <>
      <div className="PageContainer">
        <div className="TextContainer">
          <h1>Resources</h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className={`${styles.ResourcesCardsContainer}`}>
        {/* GitHub Card */}
        <div className={`${styles.ResourceCard}`}>
          <a href="https://github.com/hacker-fab" target="_blank" rel="noopener noreferrer">
            <img
              src={resources_github}
              alt="GitHub"
              className={`${styles.ResourceCardImage}`}
            />
            <h2 className={`${styles.ResourceLabel}`}>GitHub</h2>
            <p className={`${styles.ResourceDescription}`}>
              Access our code repositories and open-source projects.
            </p>
          </a>
        </div>

        {/* YouTube Card */}
        <div className={`${styles.ResourceCard}`}>
          <a href="https://www.youtube.com/@SamZeloof" target="_blank" rel="noopener noreferrer">
            <img
              src={resources_youtube}
              alt="YouTube"
              className={`${styles.ResourceCardImage}`}
            />
            <h2 className={`${styles.ResourceLabel}`}>YouTube</h2>
            <p className={`${styles.ResourceDescription}`}>
              Watch tutorials, project demos, and club updates.
            </p>
          </a>
        </div>

        {/* Gitbook Card */}
        <div className={`${styles.ResourceCard}`}>
          <a href="https://docs.hackerfab.org/home/" target="_blank" rel="noopener noreferrer">
            <img
              src={resources_gitbook}
              alt="Gitbook"
              className={`${styles.ResourceCardImage}`}
            />
            <h2 className={`${styles.ResourceLabel}`}>Gitbook</h2>
            <p className={`${styles.ResourceDescription}`}>
              Read our documentation and guides for projects and processes.
            </p>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resources;
