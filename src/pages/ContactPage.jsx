import React from "react";
import styles from "./ContactPage.module.css";
import contact_page_image from "../assets/contact_page_image.jpg";
import Footer from "../Footer";
import { useState } from "react";
function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const mailLink = "irvinehackerfab@gmail.com";
  return (
    <>
      <div className="PageContainer" style={{ background: "--var(primary-blue)" }}>
        <div className={`${styles.ContactContainer}`}>
          <div className="TextContainer" id={`${styles.contactTextContainer}`}>
            <h1>Contact Us</h1>
            <p>
              Feel free to reach out to us via email at irvinehackerfab@gmail.com! Check out our social media pages for the latest updates on our projects and events.
            </p>
          </div >
          <div className={`${styles.emailContainer}`}>
            <p id={`${styles.FirstNameText}`}>
              First Name
            </p>
            <input type="text" row="1" id={`${styles.firstNameInput}`} value={firstName} onChange={(e) => setFirstName(e.target.value)}>

            </input>
            <p id={`${styles.LastNameText}`}>
              Last Name
            </p>
            <input type="text" row="1" id={`${styles.LastNameInput}`} value={lastName} onChange={(e) => setLastName(e.target.value)}>

            </input>
            <p id={`${styles.subjectText}`}>
              Subject
            </p>
            <input type="text" row="1" id={`${styles.subjectInput}`} value={subject} onChange={(e) => setSubject(e.target.value)}>

            </input>
            <p id={`${styles.messageText}`}>
              Message
            </p>
            <textarea id={`${styles.messageInput}`} value={message} onChange={(e) => setMessage(e.target.value)}>

            </textarea>
            <a className={`${styles.submitLink}`} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mailLink}&su=${subject}&body=${encodeURIComponent("Dear Hacker Fab, \n" + message + "\n\n\nFrom,\n" + firstName + " " + lastName)}`} target="_blank">SUBMIT
            </a>

          </div>
          <img src={contact_page_image} alt="discord information" id = {`${styles.LinkImage}`}/>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default ContactPage;