import { Outlet, useLocation } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MaskTexture from "./components/MaskTexture";
import styles from "./Layout.module.css";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const MotionMain = motion.main;

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.appShell}>
        <NavBar />
        {!isHome && <MaskTexture />}
        <MotionMain
          className={styles.main}
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </MotionMain>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default Layout;
