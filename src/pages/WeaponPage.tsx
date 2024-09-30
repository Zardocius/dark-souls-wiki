// src/pages/WeaponPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for getting URL parameters
import { fetchWeaponByName } from "../api"; // Import your function to fetch individual weapon data

const WeaponPage: React.FC = () => {
  const { weaponName } = useParams<{ weaponName: string | undefined }>(); // Make weaponName possibly undefined
  const [weapon, setWeapon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadWeapon = async () => {
      if (weaponName) {
        // Check if weaponName is defined
        try {
          const weaponData = await fetchWeaponByName(weaponName); // Fetch weapon data using the name
          setWeapon(weaponData);
        } catch (error) {
          console.error("Error fetching weapon data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("Weapon name is undefined");
        setLoading(false); // Stop loading if weaponName is undefined
      }
    };

    loadWeapon(); // Call the function to load weapon data
  }, [weaponName]);

  if (loading) {
    return <div>Loading weapon data...</div>;
  }

  return (
    <div>
      <h2>{weapon?.name}</h2>
      <p>{weapon?.description}</p>
      {/* Display other weapon details here */}
    </div>
  );
};

export default WeaponPage;
