import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [themeToggle, setThemeToggle] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = themeToggle === "light" ? "dark" : "light";
    setThemeToggle(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  const getThemeClass = () => (themeToggle === "dark" ? "dark" : "light");

  const themeClass = getThemeClass();
  const htmlTag = document.documentElement;

  // Función para cambiar el tema
  function toggleThemeChange(theme) {
    htmlTag.setAttribute("data-theme", theme);
  }

  useEffect(() => {
    toggleThemeChange(themeClass);
  }, [themeClass]);

  return (
    <ThemeContext.Provider value={{ themeToggle, toggleTheme, getThemeClass }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
