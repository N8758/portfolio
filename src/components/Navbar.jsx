import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import NileshLogo from "../assets/Nileshlogo.png"; // ✅ Import logo
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <nav className="sidebar">
      {/* ✅ Optimized Logo */}
      <div className="logo-container">
        <img src={NileshLogo} alt="Nilesh Logo" className="logo-image" />
      </div>

      {/* ✅ Navigation Menu - Compact & Simple */}
      <ul className="menu">
        <li><Link to="/" className="nav-link">🏠 Home</Link></li>
        <li><Link to="/education" className="nav-link">🎓 Education</Link></li>
        <li><Link to="/projects" className="nav-link">💻 Projects</Link></li>
        <li><Link to="/skills" className="nav-link">⚡ Skills</Link></li>
        <li><Link to="/experience" className="nav-link">🛠 Experience</Link></li>
        <li><Link to="/resume" className="nav-link">📄 Resume</Link></li>
        <li><Link to="/contact" className="nav-link">📞 Contact</Link></li>
      </ul>

      {/* ✅ Compact Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
        {darkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
      </button>
    </nav>
  );
};

export default Navbar;
