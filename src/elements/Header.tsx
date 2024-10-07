import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <header>
      <div className="HeaderIcon">
        <img src="/android-chrome-192x192.png" alt="Logo" />
      </div>
      <div className="HeaderTexts">
        <div className="HeaderName">
          <span>Dark Souls Wiki</span>
        </div>
        <div className={`HeaderLinks ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>Frontpage</Link>
          <Link to="/equipment" onClick={handleLinkClick}>Equipment</Link>
          <Link to="/spells" onClick={handleLinkClick}>Spells</Link>
          <Link to="/world" onClick={handleLinkClick}>World</Link>
          <Link to="/info" onClick={handleLinkClick}>Information</Link>
          <Link to="/character" onClick={handleLinkClick}>Character</Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </header>
  );
};

export default Header;
