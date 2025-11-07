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
            Come to our general meetings! We usually have one every week on Fridays from 5-6:30 pm at ISEB 1310.  Also, join our discord for up-to-date information on our events!  Also, check out our subteams! They are a great way to gain experience in semiconductor manufacturing and meet new people
          </p>
          <p className="BoldBodyText">
            How can I be really cool?
          </p>
          <p className="BodyText">
            Great Question! Check out our ZotFunder. We have a lot of ongoing projects right now that need funding.  Any donations would be greatly appreciated!
          </p>
        </div>
        <div className={`${styles.HowMediaContainer}`}>
          <a href={zotfunderLink} target="_blank" rel="noopener noreferrer">
            <img src={zotfunder} alt="ZotFunder Picture" />
          </a>
          <p>
            Click the image to go to our ZotFunder page!
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HowToContribute;