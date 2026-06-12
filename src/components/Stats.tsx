function Stats() {
  return (
    <section
      style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap"
      }}
    >
      <div style={{
        background:"#111827",
        padding:"25px",
        borderRadius:"20px",
        width:"200px",
        textAlign:"center",
        boxShadow:"0 0 20px rgba(124,58,237,0.2)"
      }}>
        <h2>5000+</h2>
        <p>Participants</p>
      </div>

      <div style={{
        background:"#111827",
        padding:"25px",
        borderRadius:"20px",
        width:"200px",
        textAlign:"center",
        boxShadow:"0 0 20px rgba(124,58,237,0.2)"
      }}>
        <h2>100+</h2>
        <p>Teams</p>
      </div>

      <div style={{
        background:"#111827",
        padding:"25px",
        borderRadius:"20px",
        width:"200px",
        textAlign:"center",
        boxShadow:"0 0 20px rgba(124,58,237,0.2)"
      }}>
        <h2>48 Hours</h2>
        <p>Hackathon</p>
      </div>

      <div style={{
        background:"#111827",
        padding:"25px",
        borderRadius:"20px",
        width:"200px",
        textAlign:"center",
        boxShadow:"0 0 20px rgba(124,58,237,0.2)"
      }}>
        <h2>₹1,00,000</h2>
        <p>Prize Pool</p>
      </div>
    </section>
  );
}

export default Stats;