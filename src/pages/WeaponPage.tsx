// src/pages/WeaponPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WeaponIndex, Weapon } from '../types'; // Make sure to import the types

const WeaponPage: React.FC<{ weaponIndex: WeaponIndex }> = ({ weaponIndex }) => {
  const { weaponSlug } = useParams<{ weaponSlug: string }>();
  const [weaponData, setWeaponData] = useState<Weapon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeapon = async () => {
      try {
        const response = await fetch(`/weaponData/${weaponSlug}.json`); // Adjust the path as needed
        if (!response.ok) {
          throw new Error(`Failed to fetch weapon data: ${response.statusText}`);
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
  const weaponCategory = weaponIndex.find(category =>
    category.weapons.some(weapon => weapon.slug === weaponSlug)
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
    <div>
      <h1>{weaponData.Name}</h1>
      {weaponCategory ? <h2>Category: {weaponCategory.category}</h2> : null} {/* Safely access category */}
      <p>Description: {weaponData.description || 'No description available'}</p>
      <p>Weight: {weaponData.weight || 'N/A'}</p>
      <p>Durability: {weaponData.durability || 'N/A'}</p>
      {/* Add any additional weapon details you want to display here */}
      <img
                    src={`/images/items/weapons/${weaponData.slug}.png`} // Construct the image path
                    alt={weaponData.Name} // Use weapon name for alt text
                    style={{ width: '50px', height: '50px', marginLeft: '10px' }} // Adjust the size as needed
                  />
    </div>
  );
};

export default WeaponPage;
