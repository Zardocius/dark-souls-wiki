import React from "react";
import { Link } from "react-router-dom";
import { WeaponCategory } from "../types"; // Adjust path according to your file structure
import "../css/pages/Eguipment.scss";

type EquipmentProps = {
  weaponIndex: WeaponCategory[]; // Use the imported type for weaponIndex
};

const Equipment: React.FC<EquipmentProps> = ({ weaponIndex }) => {
  console.log("Weapon Index in Equipment:", weaponIndex); // Debugging line

  return (
    <div>
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
                  <img
                    src={`/images/items/weapons/${category.weapons[0].slug}.png`} // First weapon's image
                    alt={category.category}
                    className="category-icon"
                  />
                  <span className="category-text">{category.category}</span>{" "}
                  {/* Category name below icon */}
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
                      <img
                        src={`/images/items/weapons/${weapon.slug}.png`}
                        alt={weapon.Name}
                        className="weapon-image"
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
