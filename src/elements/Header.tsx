import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/elements/Header.scss";
import ThemeToggleButton from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const themeContext = useContext(ThemeContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };
  if (!themeContext) {
    return null;
  }
  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };
  const { theme } = themeContext;

  return (
    <header className="container">
      <div className="box">
        <div>
          <div className="header-top">
            <div className="header-icon">
              <Link to="/" onClick={handleLinkClick}>
                <img src="/android-chrome-192x192.png" alt="Logo" />
              </Link>
            </div>
            <div className="header-texts">
              <div className="header-name">
                <Link to="/" onClick={handleLinkClick}>
                  <span>Dark Souls Wiki</span>
                </Link>
                <div id="ThemeToggleFull">
                  <ThemeToggleButton />
                </div>
              </div>
              <div className={`header-links ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link to="/equipment" onClick={handleLinkClick}>
                  Equipment
                </Link>
                <Link to="/spells" onClick={handleLinkClick}>
                  Spells
                </Link>
                <Link to="/world" onClick={handleLinkClick}>
                  World
                </Link>
                <Link to="/info" onClick={handleLinkClick}>
                  Information
                </Link>
                <Link to="/character" onClick={handleLinkClick}>
                  Character
                </Link>
                <Link to="/misc" onClick={handleLinkClick}>
                  Misc
                </Link>
                <div id="ThemeToggleMobile">
                  <ThemeToggleButton />
                  <p>
                    {theme === "light"
                      ? "Switch to Dark Mode"
                      : "Switch to Light Mode"}
                  </p>
                </div>
              </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              &#9776; {/* Hamburger icon */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
