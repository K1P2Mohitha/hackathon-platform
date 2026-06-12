function Timeline() {
  const events = [
    { icon: "📅", title: "Registration Opens", date: "June 23" },
    { icon: "⏳", title: "Registration Closes", date: "July 3" },
    { icon: "🚀", title: "Hackathon Starts", date: "July 5" },
    { icon: "🏆", title: "Final Presentation", date: "July 15" }
  ];

  return (
    <section id="timeline"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        scrollMarginTop: "120px"
      }}
    >
      <h2>📅 Timeline</h2>

      <div
      className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        {events.map((event) => (
          <div
            key={event.title}
            style={{
              background: "#111827",
              width: "220px",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 0 15px rgba(124,58,237,0.15)"
            }}
          >
            <h3>{event.icon}</h3>
            <h4>{event.title}</h4>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;