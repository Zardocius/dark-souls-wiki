import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WeaponCategory, Weapon } from "../types"; // Ensure you import the correct types
import "../css/pages/CategoryWeaponsPage.scss";

type CategoryWeaponsPageProps = {
  weaponIndex: WeaponCategory[];
};

const CategoryWeaponsPage: React.FC<CategoryWeaponsPageProps> = ({
  weaponIndex,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const [weaponsData, setWeaponsData] = useState<Weapon[]>([]);
  const [error, setError] = useState<string | null>(null);

  const category = weaponIndex.find((cat) => cat.slug === slug);

  useEffect(() => {
    const fetchWeaponsData = async () => {
      if (category) {
        try {
          const promises = category.weapons.map(async (weapon) => {
            console.log(`Fetching weapon data for: ${weapon.slug}`); // Log the slug being fetched
            const response = await fetch(`/weaponData/${weapon.slug}.json`); // Adjust the path as needed
            if (!response.ok) {
              throw new Error(
                `Failed to fetch weapon data for ${weapon.slug}: ${response.status} ${response.statusText}`
              );
            }
            const data = await response.json();
            console.log(`Successfully fetched data for: ${weapon.slug}`); // Log success
            return data.base; // Assuming you're using the base data
          });

          const fetchedWeaponsData = await Promise.all(promises);
          setWeaponsData(fetchedWeaponsData);
        } catch (error) {
          console.error(`Error fetching weapon data: ${error}`); // Log error with message
          setError("Failed to load weapon data.");
        } finally {
        }
      }
    };

    fetchWeaponsData();
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
            {category.weapons.map((weapon, index) => {
              const weaponData = weaponsData[index]; // Get the corresponding weapon data by index
              const atlas = weapon.imageAtlas; // Assuming the weapon has an ImageAtlas

              return (
                <li key={weapon.slug} className="category-weapon-item">
                  <Link to={`/weapons/${weapon.slug}`} className="weapon-link">
                    <div className="weapon-details">
                      <span className="category-weapon-name">
                        {weapon.Name}
                      </span>
                    </div>
                  </Link>
                  <div className="category-statimage">
                    <Link
                      to={`/weapons/${weapon.slug}`}
                      className="weapon-link"
                    >
                      <div className="weapon-image-container">
                        {atlas ? (
                          <div
                            className="weapon-image"
                            style={{
                              backgroundImage: `url(${weapon.imageAtlas.imageSource})`,
                              backgroundPosition: `-${weapon.imageAtlas.posX}px -${weapon.imageAtlas.posY}px`,
                              width: `${weapon.imageAtlas.width}px`,
                              height: `${weapon.imageAtlas.height}px`,
                            }}
                          ></div>
                        ) : (
                          <img
                            src={`/images/items/weapons/${weapon.slug}.png`} // Fallback image
                            alt={weapon.Name}
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
                            <td>{weaponData?.attackBasePhysics || "N/A"}</td>
                            <td>{weaponData?.attackBaseMagic || "N/A"}</td>
                            <td>{weaponData?.attackBaseFire || "N/A"}</td>
                            <td>{weaponData?.attackBaseThunder || "N/A"}</td>
                            <td>{weaponData?.attackBaseRepel || "N/A"}</td>
                            <td>{weaponData?.spAttribute || "N/A"}</td>
                            <td>{weaponData?.residentSpEffectId || "N/A"}</td>
                            <td>{weaponData?.durability || "N/A"}</td>
                            <td>{weaponData?.weight || "N/A"}</td>
                            <td>{weaponData?.slug || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>{weaponData?.physGuardCutRate || "N/A"}</td>
                            <td>{weaponData?.magGuardCutRate || "N/A"}</td>
                            <td>{weaponData?.fireGuardCutRate || "N/A"}</td>
                            <td>{weaponData?.thunGuardCutRate || "N/A"}</td>
                            <td>{weaponData?.blowGuardCutRate || "N/A"}</td>
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

export default CategoryWeaponsPage;
