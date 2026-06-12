function Tracks() {
  const tracks = [
    {
      title: "🤖 AI & ML",
      desc: "Build GenAI, LLM and Computer Vision solutions"
    },
    {
      title: "🔐 Cyber Security",
      desc: "Protect systems and detect cyber threats"
    },
    {
      title: "🌍 Sustainability",
      desc: "Technology for a greener future"
    },
    {
      title: "🏥 Healthcare",
      desc: "Improve patient care and health services"
    },
    {
      title: "📚 Education",
      desc: "Transform learning experiences"
    },
    {
      title: "💰 FinTech",
      desc: "Innovate digital finance solutions"
    }
  ];

  return (
    <section
      id="tracks"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        scrollMarginTop: "120px"
      }}
    >
      <h2>🚀 Tracks</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        {tracks.map((track) => (
          <div
            key={track.title}
            className="card"
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "16px",
              width: "220px",
              height: "100px",
              cursor: "pointer",
              boxShadow: "0 0 15px rgba(124,58,237,0.15)",
              transition: "all 0.3s ease"
            }}
          >
            <h3>{track.title}</h3>

            <p
              style={{
                marginTop: "10px",
                color: "#9ca3af",
                fontSize: "14px",
                lineHeight: "1.5"
              }}
            >
              {track.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tracks;