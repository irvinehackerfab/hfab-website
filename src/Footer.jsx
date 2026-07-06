import { FaInstagram, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
    const discordLink = "https://discord.gg/p2byDUhDAz";
    const instagramLink = "https://www.instagram.com/uci.hfab/";
    const gitHubLink = "https://github.com/irvinehackerfab";
    const linkedinLink = "https://www.linkedin.com/company/irvine-hacker-fab/posts/?feedView=all";
    const emailAddress = "irvinehackerfab@gmail.com";

    return (
        <>
            {/* Footer */}
            <div className={styles.Footer}>
                <div className={styles.socialContainer}>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.socialButton} />
                    </a>
                    <a href={discordLink} target="_blank" rel="noopener noreferrer">
                        <FaDiscord className={styles.socialButton} />
                    </a>
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.socialButton} />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.socialButton} />
                    </a>
                </div>
                <h1 className={styles.bodyText}>Irvine Hacker Fab</h1>
                <a href={`mailto:${emailAddress}`} className={styles.bodyText}>
                    {emailAddress}
                </a>
            </div>


        </>
    );
}

export default Footer;
