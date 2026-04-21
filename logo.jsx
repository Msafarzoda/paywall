// Zehn logo — original mark: 3 stacked bars form a "Z" (rotated book pages / lines of text)
function ZehnLogo({ size = 34, color = "#03212E", bg = "linear-gradient(145deg,#82FF7F,#92F090)" }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.27,
      background: bg, display: "grid", placeItems: "center",
      boxShadow: "0 6px 22px rgba(130,255,127,.25)",
    }}>
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none">
        {/* Top bar (long, left-weighted like page edge) */}
        <rect x="3" y="4" width="18" height="2.6" rx="1.3" fill={color}/>
        {/* Diagonal stroke */}
        <rect x="3" y="10.7" width="18" height="2.6" rx="1.3" fill={color}
              transform="rotate(-32 12 12)"/>
        {/* Bottom bar */}
        <rect x="3" y="17.4" width="18" height="2.6" rx="1.3" fill={color}/>
      </svg>
    </div>
  );
}

function ZehnWordmark({ onDark = true, size = 34 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <ZehnLogo size={size}/>
      <span style={{ fontWeight: 800, fontSize: size * 0.6, letterSpacing: "-0.02em", color: onDark ? "var(--text)" : "var(--ink)" }}>
        zehn
      </span>
    </div>
  );
}

window.ZehnLogo = ZehnLogo;
window.ZehnWordmark = ZehnWordmark;
