import React from "react";
import styles from "./ContactPage.module.css";
import contact_page_image from "../assets/contact_page_image.jpg";
import Footer from "../Footer";

function ContactPage() {
  return (
    <>
      <div className="PageContainer" style={{ background: "var(--primary-blue)" }}>
        <div className={styles.ContactContainer}>
          <div className="TextContainer" id={styles.contactTextContainer}>
            <h1 style={{ textAlign: "center" }}>Contact Us</h1>
            <p>
              Feel free to reach out to us via email at irvinehackerfab@gmail.com! 
              Look out for application announcements and general meeting updates in our Discord.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
