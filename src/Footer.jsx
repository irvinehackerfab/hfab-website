import { FaInstagram, FaDiscord, FaGithub} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import styles from "./Footer.module.css"
function Footer() {
    const discordLink = "https://discord.gg/p2byDUhDAz";
    const instagramLink = "https://www.instagram.com/uci.hfab/";
    const gitHubLink = "https://github.com/irvinehackerfab";
    const mailLink = "irvinehackerfab@gmail.com"
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mailLink}`;
    const linkTreeLink = "https://linktr.ee/IrvineHackerFab?fbclid=PAZXh0bgNhZW0CMTEAAac_6Bug9u7huxEPeX3qgwWg3h8uP4Y9Y2oZP4DeIv7vDJJ16qKBxogOCIhpxQ_aem_qt6oMqUrW0fsw9oy6V3oDA";
    return (
        <>
            <div className={`${styles.Footer}`}>
                <div className={`${styles.socialContainer}`}>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={`${styles.socialButton}`} />
                    </a>
                    <a href={discordLink} target="_blank" rel="noopener noreferrer">
                        <FaDiscord className={`${styles.socialButton}`} />
                    </a>
                    <a href={`${gitHubLink}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={`${styles.socialButton}`} />
                    </a>
                    <a href={`${linkTreeLink}`} target="_blank" rel="noopener noreferrer">
                        <CiCircleMore className={`${styles.socialButton}`} />
                    </a>
                </div>
                <h1 className = {`${styles.bodyText}`}>UCI Facker Hab 2025</h1>
            </div>
        </>
    );
}

export default Footer; 