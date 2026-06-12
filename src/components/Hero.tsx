import { useEffect, useState } from "react";

function Hero()  {
    const targetDate = new Date("2026-07-03T23:59:59").getTime();

const [timeLeft, setTimeLeft] = useState("");

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );
    const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );

    setTimeLeft(
      `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`
    );
  }, 1000);

  return () => clearInterval(timer);
}, [targetDate]);
  return (
    <section id="home"
      style={{
        textAlign: "center",
        padding: "120px 20px"
      }}
    >
      <h1
        style={{
          fontSize: "clamp(42px, 8vw, 72px)",
          marginBottom: "20px"
        }}
      >
        🚀 HackSprint 2026
      </h1>

      <h2
  style={{
    color: "#c084fc",
    marginBottom: "15px"
  }}
><br></br>
  Build. Innovate. Impact.
</h2>

      <p>
        India's Biggest Student Innovation Hackathon
      </p>
        <div
  style={{
    marginTop: "20px",
    color: "#f59e0b",
    fontWeight: "bold",
    fontSize: "32px",
    
    
  }}
>
  Registration Closes In...!!!!
</div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
    flexWrap: "wrap"
  }}
>
  {timeLeft.split(":").map((item, index) => (
    <div
      key={index}
      style={{
        background: "#050816",
        border: "1px solid #7c3aed",
        borderRadius: "12px",
        padding: "20px",
        minWidth: "90px",
        boxShadow: "0 0 15px rgba(124,58,237,0.3)"
      }}
    >
      <h2 style={{ margin: 0 }}>{item.trim()}</h2>
    </div>
  ))}
</div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        <div style={{
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "30px"
}}>
  <button
    style={{
      padding: "14px 32px",
      borderRadius: "12px",
      border: "none",
      background: "#7c3aed",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold"
    }}
  >
    Register Now
  </button>

  <button
    style={{
      padding: "14px 32px",
      borderRadius: "12px",
      border: "1px solid #7c3aed",
      background: "transparent",
      color: "white",
      fontSize: "16px",
      cursor: "pointer"
    }}
  >
    Rulebook
  </button>
</div>
      </div>
    </section>
  );
}

export default Hero;