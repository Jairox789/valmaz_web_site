import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeToggle, setThemeToggle] = useState(false);

  const toggleTheme = () => {
    setThemeToggle(!themeToggle);
  };

  // Función para obtener la clase del tema
  const getThemeClass = () => (themeToggle ? "dark" : "light");

  const themeClass = getThemeClass();
  // Obtén una referencia a la etiqueta html
  const htmlTag = document.documentElement;

  // Función para cambiar el tema
  function toggleThemeChange(theme) {
    // Establece el valor del atributo data-theme en la etiqueta html
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
