import React from "react";

const Features = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>React Features & Uses ⚛️</h1>
        <p>
          Discover why React is one of the most popular libraries for building
          modern web applications.
        </p>
      </section>

      {/* Features Section */}
      <section style={styles.content}>
        <div style={styles.card}>
          <h2>Component-Based</h2>
          <p>
            React allows you to build reusable components, making your code
            cleaner and easier to maintain.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Virtual DOM</h2>
          <p>
            React uses a virtual DOM to improve performance by updating only the
            parts of the UI that change.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Hooks</h2>
          <p>
            Hooks like useState and useEffect let you manage state and lifecycle
            in functional components.
          </p>
        </div>
      </section>

      {/* Uses Section */}
      <section style={styles.content}>
        <div style={styles.card}>
          <h2>Web Applications</h2>
          <p>
            React is widely used to build dynamic and responsive web apps like
            dashboards and social media platforms.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Single Page Applications (SPA)</h2>
          <p>
            React helps create fast SPAs where content updates without reloading
            the entire page.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Mobile Apps</h2>
          <p>
            With React Native, you can build cross-platform mobile applications
            using React concepts.
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
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
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

export default Features;