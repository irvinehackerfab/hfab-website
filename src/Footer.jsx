import { FaInstagram, FaDiscord, FaGithub} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import "./Footer.css"
function Footer() {
    const discordLink = "https://discord.gg/p2byDUhDAz";
    const instagramLink = "https://www.instagram.com/uci.hfab/";
    const gitHubLink = "https://github.com/hacker-fab/gitbook";
    const linkTreeLink = "https://linktr.ee/IrvineHackerFab?fbclid=PAZXh0bgNhZW0CMTEAAac_6Bug9u7huxEPeX3qgwWg3h8uP4Y9Y2oZP4DeIv7vDJJ16qKBxogOCIhpxQ_aem_qt6oMqUrW0fsw9oy6V3oDA";
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
                    <a href={`${linkTreeLink}`} target="_blank" rel="noopener noreferrer">
                        <CiCircleMore className="socialButton" />
                    </a>
                </div>
                <h1 className = "bodyText">UCI Facker Hab 2025</h1>
            </div>
        </>
    );
}

export default Footer;