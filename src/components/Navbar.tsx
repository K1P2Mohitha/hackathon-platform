import { useState, useEffect } from "react";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  return (
    <nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #333",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#050816",
    backdropFilter: "blur(10px)",
    
  }}
>
      <h2>🚀 HackSprint 2026</h2>

      <div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
    alignItems: "center",
    zIndex: 9999,
  }}
>
        {(!isMobile || menuOpen) && (
  <div
    style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      alignItems: "center",
      boxShadow: "0 0 15px rgba(124,58,237,0.4)",
      marginTop: isMobile ? "60px" : "0",
      position: isMobile ? "absolute" : "static",
      top: "10px",
      right: "0px",
      zIndex: 9999,
      background: "#050816",
      padding: "15px",
      borderRadius: "10px"
    }}
  >
    <a
  href="#home"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
  }}
>
  Home
</a>
    <a
  href="#tracks"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    transition: "0.3s"
  }}
>
  Tracks
</a>
    <a
  href="#timeline"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    transition: "0.3s"
  }}
>
  Timeline
</a>
    <a
  href="#prizes"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    transition: "0.3s"
  }}
>
  Prizes
</a>
    <a
  href="#faq"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    transition: "0.3s"
  }}
>
  FAQ
</a>
  </div>
)}
{isMobile && (
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    style={{
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: "24px",
      cursor: "pointer"
    }}
  >
    ☰
  </button>
)}
      </div>
    </nav>
    
  );
}

export default Navbar;