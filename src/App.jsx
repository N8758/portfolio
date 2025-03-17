import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

function App() {
  useEffect(() => {
    // Ensure dark mode is applied on page load
    if (localStorage.getItem("darkMode") === "enabled") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="Education" element={<Education />} />
        <Route path="/experience" element={<Experience />} /> {/* New Route */}

      </Routes>
    </div>
  );
}

export default App;
