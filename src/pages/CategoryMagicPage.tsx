import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MagicCategory, Magic } from "../types"; // Ensure you import the correct types
import "../css/pages/CategoryWeaponsPage.scss";

type CategoryMagicPageProps = {
  magicIndex: MagicCategory[];
};

const CategoryMagicPage: React.FC<CategoryMagicPageProps> = ({
  magicIndex,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const [magicsData, setMagicData] = useState<Magic[]>([]);
  const [error, setError] = useState<string | null>(null);

  const category = magicIndex.find((cat) => cat.slug === slug);

  useEffect(() => {
    const fetchMagicData = async () => {
      if (category) {
        try {
          const promises = category.spells.map(async (magic) => {
            console.log(`Fetching weapon data for: ${magic.slug}`); // Log the slug being fetched
            const response = await fetch(`/magicData/${magic.slug}.json`); // Adjust the path as needed
            if (!response.ok) {
              throw new Error(
                `Failed to fetch weapon data for ${magic.slug}: ${response.status} ${response.statusText}`
              );
            }
            const data = await response.json();
            console.log(`Successfully fetched data for: ${magic.slug}`); // Log success
            return data.base; // Assuming you're using the base data
          });

          const fetchedMagicData = await Promise.all(promises);
          setMagicData(fetchedMagicData);
        } catch (error) {
          console.error(`Error fetching weapon data: ${error}`); // Log error with message
          setError("Failed to load weapon data.");
        } finally {
        }
      }
    };

    fetchMagicData();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="container">
      <div className="box">
        <div className="category-root">
          <h2>{category.category}</h2>
          <ul className="category-weapon-list">
            {category.spells.map((magic, index) => {
              const magicData = magicsData[index]; // Get the corresponding weapon data by index
              const atlas = magic.imageAtlas; // Assuming the weapon has an ImageAtlas

              return (
                <li key={magic.slug} className="category-weapon-item">
                  <Link to={`/spells/${magic.slug}`} className="weapon-link">
                    <div className="weapon-details">
                      <span className="category-weapon-name">{magic.Name}</span>
                    </div>
                  </Link>
                  <div className="category-statimage">
                    <Link to={`/spells/${magic.slug}`} className="weapon-link">
                      <div className="weapon-image-container">
                        {atlas ? (
                          <div
                            className="weapon-image"
                            style={{
                              backgroundImage: `url(${magic.imageAtlas.imageSource})`,
                              backgroundPosition: `-${magic.imageAtlas.posX}px -${magic.imageAtlas.posY}px`,
                              width: `${magic.imageAtlas.width}px`,
                              height: `${magic.imageAtlas.height}px`,
                            }}
                          ></div>
                        ) : (
                          <img
                            src={`/images/items/weapons/${magic.slug}.png`} // Fallback image
                            alt={magic.Name}
                            className="weapon-image"
                          />
                        )}
                      </div>
                    </Link>
                    <div className="weapon-stats">
                      <table className="weapon-stats-table">
                        <thead>
                          <tr>
                            <th colSpan={5}>
                              Attack Power / Damage Reduction (%)
                            </th>
                            <th colSpan={2}>Effects</th>
                            <th colSpan={3}>
                              Durability / Weight - Attack Type
                            </th>
                          </tr>
                          <tr>
                            <th>Physical</th>
                            <th>Magic</th>
                            <th>Fire</th>
                            <th>Lightning</th>
                            <th>Critical</th>
                            <th>Icons</th>
                            <th>Icons</th>
                            <th>Durability</th>
                            <th>Weight</th>
                            <th>Attack Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{magicData?.maxQuantity}</td>
                          </tr>
                          <tr>
                            <td colSpan={5}></td>{" "}
                            {/* Empty space for alignment */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryMagicPage;
