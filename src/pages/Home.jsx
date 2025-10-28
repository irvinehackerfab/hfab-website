import React from "react";
import Footer from "../Footer";
import "./Home.css";
function Home() {
  const eventType = "General Meeting";
  const eventDate = "October 31st";
  const eventLocation = "ISEB 1430";
  const eventTime = "5:00-6:30pm";
  const eventDescription = "Happy Halloween!";
  return (
    <>
      <div id="homePageContainer">
        <div id="homePageTextContent">
          <h1>UCI HACKER FAB</h1>
          <p id = "">Join the future of semiconductor manufacturing and design!</p>
          <div id="nextEventContainer">
            <h2 id="eventType">Next Event: {eventType}</h2>
            <p id="eventDate">{eventDate}</p>
            <p id="eventLocation">{eventLocation}</p>
            <p id="eventTime">{eventTime}</p>
            <p id="eventDescription">{eventDescription}</p>
          </div>
          <button id="learnMoreButton">
            Learn More
          </button>
        </div>
      </div>


      <Footer></Footer>
    </>
  );
}

export default Home;