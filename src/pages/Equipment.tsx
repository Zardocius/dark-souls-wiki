import React from "react";
import { Link } from "react-router-dom";
import { WeaponCategory } from "../types"; // Adjust path according to your file structure
import "../css/pages/Eguipment.scss";
import Goto from "../elements/Gogo";

type EquipmentProps = {
  weaponIndex: WeaponCategory[]; // Use the imported type for weaponIndex
};

const Equipment: React.FC<EquipmentProps> = ({ weaponIndex }) => {
  console.log("Weapon Index in Equipment:", weaponIndex); // Debugging line

  return (
    <div>
      <Goto />
      <div className="container">
        <div className="box">
          <h2>Weapon Categories</h2>
          {/* Navigation Bar */}
          <nav className="category-navbar">
            <div className="navbar-container">
              {weaponIndex.map((category, index) => (
                <a
                  key={index}
                  href={`#category-${index}`}
                  className="category-nav-link"
                >
                  <div
                    className="category-icon"
                    style={{
                      backgroundImage: `url(${category.weapons[0].imageAtlas.imageSource})`, // Use the first weapon's atlas image
                      backgroundPosition: `-${category.weapons[0].imageAtlas.posX}px -${category.weapons[0].imageAtlas.posY}px`, // Adjust for the first weapon's image
                      width: `${category.weapons[0].imageAtlas.width}px`,
                      height: `${category.weapons[0].imageAtlas.height}px`,
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
        {weaponIndex.length === 0 ? (
          <div>No weapons available.</div>
        ) : (
          weaponIndex.map((category, index) => (
            <div
              key={index}
              id={`category-${index}`}
              className="eguipment-category-container"
            >
              <h2>
                <Link
                  to={`/category/${category.slug}`}
                  className="category-link"
                >
                  {category.category}
                </Link>
              </h2>
              <ul className="eguipment-weapon-list">
                {category.weapons.map((weapon, idx) => (
                  <li key={idx} className="eguipment-weapon-item">
                    <Link
                      to={`/weapons/${weapon.slug}`}
                      className="weapon-link"
                    >
                      <div
                        className="weapon-image"
                        style={{
                          backgroundImage: `url(${weapon.imageAtlas.imageSource})`, // Use the weapon's atlas image
                          backgroundPosition: `-${weapon.imageAtlas.posX}px -${weapon.imageAtlas.posY}px`, // Adjust for the weapon's image
                          width: `${weapon.imageAtlas.width}px`,
                          height: `${weapon.imageAtlas.height}px`,
                        }}
                      />
                      <span className="weapon-name">{weapon.Name}</span>
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

export default Equipment;
