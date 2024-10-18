import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MagicIndex, Magic } from "../types"; // Import types
import "../css/pages/WeaponPage.scss";

const SpellPage: React.FC<{ magicIndex: MagicIndex }> = ({
  magicIndex,
}) => {
  const { magicSlug } = useParams<{ magicSlug: string }>();
  const [magicData, setMagicData] = useState<Magic | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMagic = async () => {
      try {
        const response = await fetch(`/magicData/${magicSlug}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Log the fetched data structure for debugging
        console.log("Fetched weapon data:", data);

        // Check if data has the expected structure
        if (data && data.base) {
          setMagicData(data.base);
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

    fetchMagic();
  }, [magicSlug]);

  // Find the weapon category and the specific weapon
  const magicCategory = magicIndex.find((category) =>
    category.spells.some((magic) => magic.slug === magicSlug)
  );

  // Find the specific weapon within the category
  const magicInCategory = magicCategory?.spells.find(
    (magic) => magic.slug === magicSlug
  );

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render weapon not found if no data
  if (!magicData) {
    return;
  }

  // Render the weapon page
  return (
    <div className="container">
      <div className="box">
        <div className="weaponPage-Top">
          <div className="weaponPage-topTexts">
            <h1>{magicData.Name}</h1>
            {magicCategory && (
              <h2>
                Category:
                <Link
                  to={`/category/${magicCategory.slug}`}
                  className="category-link"
                >
                  {magicCategory.category}
                </Link>
              </h2>
            )}
          </div>
          <div>
            {magicInCategory?.imageAtlas ? ( // Access imageAtlas from the specific weapon
              <div
                className="weapon-image"
                style={{
                  backgroundImage: `url(${magicInCategory.imageAtlas.imageSource})`, // Correctly reference the image source
                  backgroundPosition: `-${magicInCategory.imageAtlas.posX}px -${magicInCategory.imageAtlas.posY}px`,
                  width: `${magicInCategory.imageAtlas.width}px`,
                  height: `${magicInCategory.imageAtlas.height}px`,
                }}
              />
            ) : (
              <div>No image available for this weapon.</div> // Improved error message
            )}
          </div>
        </div>
        <div className="weaponPage-MidPage">
          <p>
            {magicData.description
              ? magicData.description.split("\n").map((line, index) => (
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
                  <td>{magicData.maxQuantity|| "N/A"}</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>Weight: {magicData.mp || "N/A"}</p>

      </div>
    </div>
  );
};

export default SpellPage;
