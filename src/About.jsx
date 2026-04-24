import React from "react";

const About = () => {
  return (
    <div>
      {/* About Hero */}
      <section style={styles.hero}>
        <h1>About React ⚛️</h1>
        <p>
          React is a powerful JavaScript library used to build fast, interactive
          user interfaces for web applications.
        </p>
      </section>

      {/* Content Section */}
      <section style={styles.content}>
        <div style={styles.card}>
          <h2>What is React?</h2>
          <p>
            React is an open-source JavaScript library developed by Facebook. It
            helps developers build UI components efficiently using a
            component-based architecture.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Why use React?</h2>
          <ul>
            <li>Reusable Components</li>
            <li>Fast Rendering with Virtual DOM</li>
            <li>Strong Community Support</li>
            <li>Easy to Learn and Scale</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2>Key Features</h2>
          <p>
            React uses JSX, supports hooks like useState and useEffect, and
            allows developers to manage state efficiently in modern web apps.
          </p>
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
    padding: "80px 20px",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    color: "#fff",
  },
  content: {
    padding: "50px 20px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111",
    color: "#fff",
  },
};

export default About;