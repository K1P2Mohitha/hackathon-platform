function Prizes() {
  const prizes = [
    {
      medal: "🥇",
      title: "Winner",
      amount: "Goodies"
    },
    {
      medal: "🥈",
      title: "Runner Up",
      amount: "Goodies"
    },
    {
      medal: "🥉",
      title: "Second Runner Up",
      amount: "Goodies"
    }
  ];

  return (
    <section id="prizes"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        scrollMarginTop: "120px"
      }}
    >
      <h2>🏆 Prize Pool</h2>

      <div
      className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        {prizes.map((prize) => (
          <div
            key={prize.title}
            style={{
              background: "#111827",
              width: "250px",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 0 20px rgba(124,58,237,0.2)"
            }}
          >
            <h1>{prize.medal}</h1>
            <h3>{prize.title}</h3>
            <h2>{prize.amount}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prizes;