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
  const [loading, setLoading] = useState<boolean>(true); // New loading state

  useEffect(() => {
    const fetchWeapon = async () => {
      setLoading(true); // Set loading state to true
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
        setLoading(false); // Reset loading state
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

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render weapon not found if no data
  if (!weaponData) {
    return <div>Weapon not found. Please check the URL.</div>;
  }

  // Render the weapon page
  return (
    <div className="container">
      <div className="box">
        <div className="weaponPage-Top">
          <div className="weaponPage-topTexts">
            <h1>{weaponData.Name}</h1>
            {weaponCategory && (
              <h2>
                Category:
                <Link
                  to={`/category/${weaponCategory.slug}`}
                  className="category-link"
                >
                  {weaponCategory.category}
                </Link>
              </h2>
            )}
          </div>
          <div>
            {weaponInCategory?.imageAtlas ? ( // Access imageAtlas from the specific weapon
              <div
                className="weapon-image"
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
        </div>
        <div className="weaponPage-MidPage">
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
          <div className="weaponPage-Requirements">
            <p>Requirements</p>
            <table>
              <thead>
                <tr>
                  <th>Str</th>
                  <th>Dex</th>
                  <th>Fai</th>
                  <th>Mag</th>
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
  );
};

export default WeaponPage;
