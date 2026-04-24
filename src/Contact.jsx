import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Contact Us 📩</h1>
        <p>Have questions? Get in touch with us.</p>
      </section>

      {/* Contact Form */}
      <section style={styles.container}>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
           <p>© 2026 REACT jS. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(to right, #11998e, #38ef7d)",
    color: "#fff",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
  },
  form: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#11998e",
    color: "#fff",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111",
    color: "#fff",
  },
};

export default Contact;