// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Check localStorage for a saved theme on initial load
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Set the data-theme attribute for CSS
    document.documentElement.setAttribute("data-theme", newTheme);
    // Save the theme to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
