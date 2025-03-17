import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
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
    <button className="dark-mode-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
    </button>
  );
};

export default DarkModeToggle;
