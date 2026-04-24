import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to Zyreon 🚀</h1>
        <p>Build modern web apps with clean UI and powerful performance.</p>
        <button style={styles.button}>Get Started</button>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Fast</h3>
          <p>Lightning fast performance with optimized code.</p>
        </div>

        <div style={styles.card}>
          <h3>Responsive</h3>
          <p>Looks great on all devices.</p>
        </div>

        <div style={styles.card}>
          <h3>Modern</h3>
          <p>Built with latest React features.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Zyreon. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "#fff",
  },
  button: {
    padding: "10px 20px",
    marginTop: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    padding: "50px 20px",
  },
  card: {
    width: "250px",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111",
    color: "#fff",
  },
};

export default Home;