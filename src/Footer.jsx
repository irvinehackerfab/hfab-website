import { Link } from "react-router-dom";
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "./assets/hf_logo_text.png";
import styles from "./Footer.module.css";

const discordLink = "https://discord.gg/p2byDUhDAz";
const instagramLink = "https://www.instagram.com/uci.hfab/";
const gitHubLink = "https://github.com/irvinehackerfab";
const linkedinLink = "https://www.linkedin.com/company/irvine-hacker-fab/posts/?feedView=all";
const emailAddress = "irvinehackerfab@gmail.com";

const SOCIALS = [
    { label: "Instagram", href: instagramLink, icon: <FaInstagram className={styles.socialButton} /> },
    { label: "Discord", href: discordLink, icon: <FaDiscord className={styles.socialButton} /> },
    { label: "GitHub", href: gitHubLink, icon: <FaGithub className={styles.socialButton} /> },
    { label: "LinkedIn", href: linkedinLink, icon: <FaLinkedin className={styles.socialButton} /> },
];

const PAGES = [
    { label: "Home", to: "/" },
    { label: "About", to: "/About" },
    { label: "Subteams", to: "/Subteams" },
    { label: "Contribute", to: "/HowtoContribute" },
    { label: "Contact", to: "/ContactUs" },
];

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Inner}>
                <div className={styles.Brand}>
                    <img src={logo} alt="" className={styles.Logo} />
                    <div>
                        <p className={styles.BrandName}>Irvine Hacker Fab</p>
                        <p className={styles.BrandTag}>Semiconductor Education For All</p>
                    </div>
                </div>

                <nav className={styles.Column} aria-label="Footer">
                    <span className={styles.ColumnTitle}>Explore</span>
                    {PAGES.map((page) => (
                        <Link key={page.to} to={page.to} className={styles.FooterLink}>
                            {page.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.Column}>
                    <span className={styles.ColumnTitle}>Connect</span>
                    <div className={styles.socialContainer}>
                        {SOCIALS.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={styles.socialLink}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <a href={`mailto:${emailAddress}`} className={styles.FooterLink}>
                        <FaEnvelope className={styles.InlineIcon} aria-hidden="true" />
                        {emailAddress}
                    </a>
                </div>
            </div>
            <div className={styles.BottomBar}>
                © {new Date().getFullYear()} Irvine Hacker Fab · UC Irvine
            </div>
        </footer>
    );
}

export default Footer;
