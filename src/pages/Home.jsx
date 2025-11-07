import React from "react";
import Footer from "../Footer";
import styles from"./Home.module.css";
import { Link, useLocation } from "react-router-dom";
function Home() {
  const eventType = "General Meeting";
  const eventDate = "October 31st";
  const eventLocation = "ISEB 1430";
  const eventTime = "5:00-6:30pm";
  const eventDescription = "Happy Halloween!";
  return (
    <>
      <div className={`${styles.homePageContainer}`}>
        <div className={`${styles.homePageTextContent}`}>
          <h1>UCI HACKER FAB</h1>
          <p className = "">Join the future of semiconductor manufacturing and design!</p>
          <div className={`${styles.nextEventContainer}`}>
            <h2 className={`${styles.eventType}`}>Next Event: {eventType}</h2>
            <p className={`${styles.eventDate}`}>{eventDate}</p>
            <p className={`${styles.eventLocation}`}>{eventLocation}</p>
            <p className={`${styles.eventTime}`}>{eventTime}</p>
            <p className={`${styles.eventDescription}`}>{eventDescription}</p>
          </div>
          <Link className={`${styles.learnMoreButton}`}to={"/HowtoContribute"}>Learn More</Link>
        </div>
      </div>


      <Footer></Footer>
    </>
  );
}

export default Home;