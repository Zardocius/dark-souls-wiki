import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WeaponIndex, Weapon } from "../types"; // Import types
import "../css/pages/WeaponPage.scss";

const WeaponPage: React.FC<{ weaponIndex: WeaponIndex }> = ({
  weaponIndex,
}) => {
  const { weaponSlug } = useParams<{ weaponSlug: string }>();
  const [weaponData, setWeaponData] = useState<Weapon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeapon = async () => {
      try {
        const response = await fetch(`/weaponData/${weaponSlug}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Log the fetched data structure for debugging
        console.log("Fetched weapon data:", data);

        // Check if data has the expected structure
        if (data && data.base) {
          setWeaponData(data.base);
        } else {
          throw new Error("Unexpected data structure: " + JSON.stringify(data));
        }
      } catch (error) {
        // Assert the type of error as Error
        const typedError = error as Error; // Type assertion here
        console.error("Error fetching weapon data:", typedError);
        setError("Failed to load weapon data. " + typedError.message);
      } finally {
      }
    };

    fetchWeapon();
  }, [weaponSlug]);

  // Find the weapon category and the specific weapon
  const weaponCategory = weaponIndex.find((category) =>
    category.weapons.some((weapon) => weapon.slug === weaponSlug)
  );

  // Find the specific weapon within the category
  const weaponInCategory = weaponCategory?.weapons.find(
    (weapon) => weapon.slug === weaponSlug
  );

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render weapon not found if no data
  if (!weaponData) {
    return;
  }

  // Render the weapon page
  return (
    <div className="container">
      <div className="box">
        <div className="WeaponPageMain">
          <div className="WeaponPageLeft">
            <div>
              <h1>{weaponData.Name}</h1>
              {weaponCategory && (
                <h3>
                  Category:
                  <Link
                    to={`/category/${weaponCategory.slug}`}
                    className="category-link"
                  >
                    {weaponCategory.category}
                  </Link>
                </h3>
              )}
            </div>
            <p>
              {weaponData.description
                ? weaponData.description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))
                : "No description available."}
            </p>
          </div>
          <div className="weaponPage-MidPage">
            <div className="WeaponPageRight">
              <div style={{ padding: "100px" }}>
                {weaponInCategory?.imageAtlas ? ( // Access imageAtlas from the specific weapon
                  <div
                    className="WeaponPageImage"
                    style={{
                      backgroundImage: `url(${weaponInCategory.imageAtlas.imageSource})`, // Correctly reference the image source
                      backgroundPosition: `-${weaponInCategory.imageAtlas.posX}px -${weaponInCategory.imageAtlas.posY}px`,
                      width: `${weaponInCategory.imageAtlas.width}px`,
                      height: `${weaponInCategory.imageAtlas.height}px`,
                    }}
                  />
                ) : (
                  <div>No image available for this weapon.</div> // Improved error message
                )}
              </div>
              <hr />
              <div className="WeaponPageRequirements">
                <h3>Requirements</h3>
                <table>
                  <thead>
                    <tr>
                      <th>str</th>
                      <th>dex</th>
                      <th>fth</th>
                      <th>int</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{weaponData.properStrength || "N/A"}</td>
                      <td>{weaponData.properAgility || "N/A"}</td>
                      <td>{weaponData.properFaith || "N/A"}</td>
                      <td>{weaponData.properMagic || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>Weight: {weaponData.weight || "N/A"}</p>
            <p>Durability: {weaponData.durability || "N/A"}</p>
            <p>Physical Damage: {weaponData.attackBasePhysics || "N/A"}</p>
            <p>Magic Damage: {weaponData.attackBaseMagic || "N/A"}</p>
            <p>Fire Damage: {weaponData.attackBaseFire || "N/A"}</p>
            <p>Lightning Damage: {weaponData.attackBaseThunder || "N/A"}</p>
          </div>
        </div>

        <div className="WeaponPageBottom"></div>
      </div>
    </div>
  );
};

export default WeaponPage;
<div></div>;
