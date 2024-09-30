import React, { useEffect, useState } from "react";
import { fetchWeapons } from "../api"; // Ensure this path is correct
import { Link } from "react-router-dom";

// Utility function to create slugs from weapon names
const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[\s']+/g, "-") // Replace spaces and single quotes with hyphens
    .replace(/[^\w-]+/g, "") // Remove any non-word characters except hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim(); // Trim any leading or trailing hyphens
};

type Weapon = {
  name: string;
  path: string;
};

const Equipment: React.FC = () => {
  const [weapons, setWeapons] = useState<Record<string, Weapon[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWeapons = async () => {
      setLoading(true); // Start loading
      try {
        const data = await fetchWeapons();
        setWeapons(data);
      } catch (error) {
        console.error("Error fetching weapons:", error);
        setError("Failed to load weapons");
      } finally {
        setLoading(false); // End loading regardless of success or error
      }
    };

    loadWeapons();
  }, []);

  if (loading) return <div>Loading weapons...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {Object.entries(weapons).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {items.map((weapon, index) => {
              // Generate slug and lowercase name for image path
              const slug = createSlug(weapon.name);
              const imagePath = `/images/items/weapons/${slug}.png`;

              return (
                <li key={index}>
                  <Link to={`/weapons/${slug}`}>{weapon.name}</Link>
                  <img
                    src={imagePath}
                    alt={weapon.name}
                    style={{ width: "50px", marginLeft: "10px" }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Equipment;
