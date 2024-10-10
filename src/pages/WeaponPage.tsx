// src/pages/WeaponPage.tsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WeaponIndex, Weapon } from "../types"; // Make sure to import the types
import "../css/pages/WeaponPage.scss";

const WeaponPage: React.FC<{ weaponIndex: WeaponIndex }> = ({
  weaponIndex,
}) => {
  const { weaponSlug } = useParams<{ weaponSlug: string }>();
  const [weaponData, setWeaponData] = useState<Weapon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeapon = async () => {
      try {
        const response = await fetch(`/weaponData/${weaponSlug}.json`); // Adjust the path as needed
        if (!response.ok) {
          throw new Error(
            `Failed to fetch weapon data: ${response.statusText}`
          );
        }
        const data = await response.json();
        setWeaponData(data.base); // Assuming you're using the base data
      } catch (error) {
        console.error(error);
        setError("Failed to load weapon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeapon();
  }, [weaponSlug]);

  // Find the weapon in the weaponIndex
  const weaponCategory = weaponIndex.find((category) =>
    category.weapons.some((weapon) => weapon.slug === weaponSlug)
  );

  if (loading) {
    return <div>Loading weapon data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weaponData) {
    return <div>Weapon not found.</div>; // Handle case where weapon data is not found
  }

  return (
    <div className="container">
      <div className="box">
        <div className="weaponPage-Top">
          <div className="weaponPage-topTexts">
            <h1>{weaponData.Name}</h1>
            {weaponCategory ? (
              <h2>
                Category:
                <Link
                  to={`/category/${weaponCategory.slug}`}
                  className="category-link"
                >
                  {weaponCategory.category}
                </Link>
              </h2>
            ) : null}{" "}
            {/* Safely access category */}
          </div>
          <div>
            <img
              src={`/images/items/weapons/${weaponData.slug}.png`} // Construct the image path
              alt={weaponData.Name} // Use weapon name for alt text
            />
          </div>
        </div>
        <div className="weaponPage-MidPage">
          <p>
            {weaponData.description
              ? weaponData.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span> // Adding a line break for each line
                ))
              : "No description available"}
          </p>
          <div className="weaponPage-Requirements">
            <p>Requirements</p>
            <table>
              <tr>
                <th>Str</th>
                <th>Dex</th>
                <th>Fai</th>
                <th>Mag</th>
              </tr>
              <tr>
                <th>{weaponData.properStrength}</th>
                <th>{weaponData.properAgility}</th>
                <th>{weaponData.properFaith}</th>
                <th>{weaponData.properMagic}</th>
              </tr>
            </table>
          </div>
        </div>
        <p>Weight: {weaponData.weight || "N/A"}</p>
        <p>Durability: {weaponData.durability || "N/A"}</p>
        {/* Add any additional weapon details you want to display here */}
        <p>Physical Damage:{weaponData.attackBasePhysics}</p>
        <p>Magic Damage:{weaponData.attackBaseMagic}</p>
        <p>Fire Damage:{weaponData.attackBaseFire}</p>
        <p>Lightning Damage:{weaponData.attackBaseThunder}</p>
      </div>
    </div>
  );
};

export default WeaponPage;
