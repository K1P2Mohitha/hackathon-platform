function Judges() {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center"
      }}
    >
      <h2>👨‍⚖️ Judges</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            width: "220px"
          }}
        >
          <h3>👨‍💻 Rajesh Kumar</h3>
          <p>AI Researcher</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            width: "220px"
          }}
        >
          <h3>☁️ Priya Sharma</h3>
          <p>AWS Architect</p>
        </div>

        <div
        className="card"
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            width: "220px"
          }}
        >
          <h3>🚀 Arjun Reddy</h3>
          <p>Startup Founder</p>
        </div>
      </div>
    </section>
  );
}

export default Judges;