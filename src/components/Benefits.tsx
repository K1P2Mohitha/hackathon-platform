function Benefits() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px"
      }}
    >
      <h2>✨ Why Participate?</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        {[
          ["🚀", "Innovation"],
          ["🤝", "Networking"],
          ["💼", "Career Growth"],
          ["🏆", "Recognition"]
        ].map(([icon, title]) => (
          <div
            className="card"
            key={title}
            style={{
              background: "#07112b",
              padding: "25px",
              width: "220px",
              borderRadius: "16px"
            }}
          >
            <h3>{icon}</h3>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;