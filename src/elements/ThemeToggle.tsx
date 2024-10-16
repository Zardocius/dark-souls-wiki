// src/components/ThemeToggleButton.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/elements/ThemeButton.scss"; // Import the CSS for the switch

const ThemeToggleButton: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggleButton;
