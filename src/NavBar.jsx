import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/hf_logo_text.png";
import styles from "./NavBar.module.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/About" },
  { label: "Subteams", to: "/Subteams" },
  { label: "Contribute", to: "/HowtoContribute" },
  { label: "Contact", to: "/ContactUs" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.headerScrolled : ""}`}>
      <div className={styles.bar}>
        <NavLink to="/" className={styles.logoContainer} onClick={() => setMenuOpen(false)}>
          <img className={styles.navbarLogo} src={logo} alt="Irvine Hacker Fab" />
        </NavLink>

        <button
          type="button"
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.navBarList}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `${styles.navbarListItem} ${isActive ? styles.navbarListItemActive : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
