// src/contexts/ThemeContext.jsx

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Save theme preference in localStorage (so next visit bhi yaad rahe)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-vh-100 ${
          theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
