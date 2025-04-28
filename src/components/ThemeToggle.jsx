// src/components/ThemeToggle.jsx

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-primary d-flex align-items-center gap-2"
      style={{
        fontSize: "1.2rem",
        padding: "8px 12px",
        borderRadius: "50px",
        transition: "all 0.3s ease",
      }}
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
      <span style={{ fontSize: "14px" }}>
        {theme === "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export default ThemeToggle;
