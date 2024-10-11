import React, { useState, useEffect } from "react";
import "../css/elements/GoToTopButton.scss"; // Assuming you use SCSS or CSS

const GoToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="go-to-top-button">
          ↑
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
