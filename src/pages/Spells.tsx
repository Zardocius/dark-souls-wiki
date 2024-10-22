import React from "react";
import { Link } from "react-router-dom";
import { MagicCategory } from "../types"; // Adjust path according to your file structure
import "../css/pages/Eguipment.scss";
import Goto from "../elements/Gogo";
import ScrollToTop from "../elements/ScrollToTop";
import WIP from "../elements/wip";

type EquipmentProps = {
  magicIndex: MagicCategory[]; // Use the imported type for magicIndex
};

const Spells: React.FC<EquipmentProps> = ({ magicIndex }) => {
  console.log("Weapon Index in Equipment:", magicIndex); // Debugging line
  return (
    <div>
      <WIP />
      <ScrollToTop />
      <Goto />
      <div className="container">
        <div className="box">
          <h2>Spell Categories</h2>
          {/* Navigation Bar */}
          <nav className="category-navbar">
            <div className="navbar-container">
              {magicIndex.map((category, index) => (
                <a
                  key={index}
                  href={`#category-${index}`}
                  className="category-nav-link"
                >
                  <div
                    className="category-icon"
                    style={{
                      backgroundImage: `url(${category.spells[0].imageAtlas.imageSource})`, // Use the first weapon's atlas image
                      backgroundPosition: `-${category.spells[0].imageAtlas.posX}px -${category.spells[0].imageAtlas.posY}px`, // Adjust for the first weapon's image
                      width: `${category.spells[0].imageAtlas.width}px`,
                      height: `${category.spells[0].imageAtlas.height}px`,
                    }}
                  />
                  <span className="category-text">{category.category}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Weapon Categories */}
      <div className="container">
        {magicIndex.length === 0 ? (
          <div>No spells available.</div>
        ) : (
          magicIndex.map((category, index) => (
            <div
              key={index}
              id={`category-${index}`}
              className="eguipment-category-container"
            >
              <h2>
                <Link
                  to={`/spell-category/${category.slug}`}
                  className="category-link"
                >
                  {category.category}
                </Link>
              </h2>

              <ul className="eguipment-weapon-list">
                {category.spells.map((magic, idx) => (
                  <li key={idx} className="eguipment-weapon-item">
                    <Link to={`/spells/${magic.slug}`} className="weapon-link">
                      <div
                        className="weapon-image"
                        style={{
                          backgroundImage: `url(${magic.imageAtlas.imageSource})`, // Use the weapon's atlas image
                          backgroundPosition: `-${magic.imageAtlas.posX}px -${magic.imageAtlas.posY}px`, // Adjust for the weapon's image
                          width: `${magic.imageAtlas.width}px`,
                          height: `${magic.imageAtlas.height}px`,
                        }}
                      />
                      <span className="weapon-name">{magic.Name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Spells;
