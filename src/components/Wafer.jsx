// Decorative silicon wafer: a die grid clipped to a circle with a flat.
// Pure SVG, scales with its container.
const DIES = [];
for (let row = 0; row < 12; row++) {
  for (let col = 0; col < 12; col++) {
    const x = 20 + col * 30;
    const y = 20 + row * 30;
    const cx = x + 13 - 200;
    const cy = y + 13 - 200;
    if (Math.hypot(cx, cy) < 165) DIES.push({ x, y, lit: (row * 7 + col * 3) % 11 === 0 });
  }
}

function Wafer({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wafer-sheen" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#3e78d6" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#24457f" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0a0c10" stopOpacity="0" />
        </radialGradient>
        <clipPath id="wafer-clip">
          <path d="M119.3 372 A190 190 0 1 1 280.7 372 Z" />
        </clipPath>
      </defs>
      <path d="M119.3 372 A190 190 0 1 1 280.7 372 Z" fill="url(#wafer-sheen)" />
      <g clipPath="url(#wafer-clip)">
        {DIES.map((d) => (
          <rect
            key={`${d.x}-${d.y}`}
            x={d.x}
            y={d.y}
            width="26"
            height="26"
            rx="2"
            fill={d.lit ? "#f5c518" : "#7c9bd6"}
            fillOpacity={d.lit ? 0.55 : 0.08}
            stroke={d.lit ? "#f5c518" : "#7c9bd6"}
            strokeOpacity={d.lit ? 0.8 : 0.28}
          />
        ))}
      </g>
      <path d="M119.3 372 A190 190 0 1 1 280.7 372 Z" fill="none" stroke="#7c9bd6" strokeOpacity="0.35" />
      <line x1="119.3" y1="372" x2="280.7" y2="372" stroke="#f5c518" strokeOpacity="0.7" strokeWidth="2" />
    </svg>
  );
}

export default Wafer;
