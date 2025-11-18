import React from "react";
import styles from "./Resources.module.css";
import Footer from "../Footer";

function Resources() {
  const gitbookLink = "https://docs.hackerfab.org/home/";

  return (
    <>
      {/* Page Container */}
      <div className={`${styles.ResourcesPageContainer}`}>
        {/* Header */}
        <div className={`${styles.ResourcesHeaderContainer}`}>
          <h1>Resources</h1>
        </div>

        {/* Cards Section */}
        <div className={`${styles.ResourcesCardsContainer}`}>
          {/* Empty card for spacing */}
          <div className={`${styles.ResourceCard}`}></div>

          {/* Gitbook Card */}
          <div className={`${styles.ResourceCard}`}>
            <p className={`${styles.ResourceLink}`}>
              <a href={gitbookLink} target="_blank" rel="noopener noreferrer">
                {gitbookLink}
              </a>
            </p>
            <h2 className={`${styles.ResourceLabel}`}>Gitbook</h2>
          </div>

          {/* Empty card for spacing */}
          <div className={`${styles.ResourceCard}`}></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resources;
