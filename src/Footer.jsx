import { FaInstagram, FaDiscord, FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"
function Footer() {
    const discordLink = "https://discord.gg/p2byDUhDAz";
    const instagramLink = "https://www.instagram.com/uci.hfab/";
    const gitHubLink = "https://github.com/hacker-fab/gitbook";
    const mailLink = "kevinli200555@gmail.com"
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mailLink}`;
    return (
        <>
            <div className="Footer">
                <div className="socialContainer">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="socialButton" />
                    </a>
                    <a href={discordLink} target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="socialButton" />
                    </a>
                    <a href={`${gitHubLink}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="socialButton" />
                    </a>
                </div>
                <h1 className = "bodyText">UCI Facker Hab 2025</h1>
            </div>
        </>
    );
}

export default Footer;