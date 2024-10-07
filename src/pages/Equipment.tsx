import React from "react";
import { Link } from "react-router-dom";
import { WeaponCategory } from "../types"; // Adjust the path according to your file structure
import "../css/Eguipment.scss"

type EquipmentProps = {
  weaponIndex: WeaponCategory[]; // Use the imported type for weaponIndex
};

const Equipment: React.FC<EquipmentProps> = ({ weaponIndex }) => {
  console.log("Weapon Index in Equipment:", weaponIndex); // Debugging line

  return (
    <div>
      {weaponIndex.length === 0 ? (
        <div>No weapons available.</div>
      ) : (
        <div className="category-container">
          {weaponIndex.map((category, index) => (
            <div key={index} className="weapon-category">
              <h2>{category.category}</h2>
              <ul>
                {category.weapons.map((weapon, idx) => (
                  <li key={idx} className="weapon-item">
                    <Link to={`/weapons/${weapon.slug}`} className="weapon-link">
                      <img
                        src={`/images/items/weapons/${weapon.slug}.png`} // Construct the image path
                        alt={weapon.Name} // Use weapon name for alt text
                        className="weapon-image" // Optional: For styling
                      />
                      <span className="weapon-name">{weapon.Name}</span> {/* Move text under the image */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Equipment;
