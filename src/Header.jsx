import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>React</h2>

      <nav>
        <ul style={styles.navLinks}>
        <Link to={'/'}><li>Home</li></Link>  
        <Link to={'/About'}><li>About</li></Link>  
        <Link to={'/Features'}><li>Features</li></Link>  
        <Link to={'/Contact'}><li>Contact</li></Link>  
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    cursor: "pointer",
  },
};

export default Header;