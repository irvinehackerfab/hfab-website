import React, { useMemo } from "react";
import Footer from "../Footer";
import styles from "./Home.module.css";
import home_picture from "../assets/home_picture.jpg";
import { Link } from "react-router-dom";
import { getNextMeeting, formatDate } from "../utils/meetings";

function Home() {
 // const nextDate = useMemo(() => getNextMeeting(), []);
 // const eventDate = formatDate(nextDate);
 // const eventTime = "5:00-6:30pm";
  //const eventType = "General Meeting";
  //const eventLocation = "ISEB 1430";
  //const eventDescription = "Join us for our weekly meeting!";

  return (
    <>
      <div className={`${styles.homePageContainer}`}>
        <div className={`${styles.homePageTextContent}`}>
          <h1>UCI HACKER FAB</h1>
          <p>Join the future of semiconductor manufacturing and design!</p>
          <Link className={`${styles.learnMoreButton}`} to={"/HowtoContribute"}>
            Learn More
          </Link>
        </div>
        <img
          id={`${styles.homePageImage}`}
          src={home_picture}
          alt="picture with the dean"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
