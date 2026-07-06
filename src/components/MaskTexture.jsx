import styles from "./MaskTexture.module.css";

// Fixed full-viewport layer. patternUnits="userSpaceOnUse" renders cells at a
// fixed 120px in real pixels, so the tile can never be stretched/sheared by
// viewport scaling. Do not add a viewBox or preserveAspectRatio here.
function MaskTexture() {
  return (
    <svg className={styles.fabBg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="fab-mask" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#7C9BD6" strokeOpacity="0.11" strokeWidth="1">
            <line x1="0" y1="30" x2="120" y2="30" />
            <line x1="90" y1="0" x2="90" y2="120" />
            <line x1="30" y1="30" x2="30" y2="90" />
            <line x1="30" y1="90" x2="90" y2="90" />
          </g>
          <g fill="#7C9BD6" fillOpacity="0.18">
            <rect x="88" y="28" width="4" height="4" />
            <rect x="28" y="28" width="4" height="4" />
            <rect x="28" y="88" width="4" height="4" />
            <rect x="88" y="88" width="4" height="4" />
          </g>
        </pattern>
        <pattern id="fab-accent" width="360" height="360" patternUnits="userSpaceOnUse">
          <g stroke="#F5C518" strokeOpacity="0.30" strokeWidth="1">
            <line x1="175" y1="185" x2="185" y2="185" />
            <line x1="180" y1="180" x2="180" y2="190" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#fab-mask)" />
      <rect width="100%" height="100%" fill="url(#fab-accent)" />
    </svg>
  );
}

export default MaskTexture;
