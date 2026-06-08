function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #333",
        }}
      >
        <h2>🚀 HackSprint 2026</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#">About</a>
          <a href="#">Tracks</a>
          <a href="#">Timeline</a>
          <a href="#">Prizes</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1 style={{ fontSize: "64px" }}>🚀 HackSprint 2026</h1>

        <h2>Build. Innovate. Impact.</h2>

        <p>
          India's Next Generation National Level Hackathon
        </p>

        <button
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          Register Now
        </button>
      </section>
    </>
  );
}

export default App;