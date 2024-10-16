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
    <>
      {/* Full version (visible on larger screens) */}
      <div id="ThemeToggleFull">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* Mobile version (visible on smaller screens) */}
      <div id="ThemeToggleMobile">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default ThemeToggleButton;
