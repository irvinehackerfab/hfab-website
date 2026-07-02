import Footer from "../Footer";
import styles from "./HowToContribute.module.css";
import zotfunder from "../assets/zotfunder.png";
function HowToContribute() {
  const zotfunderLink = "https://zotfunder.give.uci.edu/project/48587";
  return (
    <>
      <div className="PageContainer">
        <div className="TextContainer">
          <h1>How to Contribute</h1>
        </div>
      </div>
      <div className={`${styles.HowContainer}`}>
        <div className={`${styles.HowTextContainer}`}>
          <p className="BoldBodyText">
            How can I join Hacker Fab?
          </p>
          <p className="BodyText">
           Look out for application announcements and general meeting updates in our Discord: 
          </p>
          <p className="BoldBodyText">
            How can support Hacker Fab?
          </p>
          <p className="BodyText">
           We are currently working towards enhancing our donation infrastructure for the 2026-2027 school year. In the meantime, feel free to email irvinehackerfab@gmail.com for more information.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HowToContribute;