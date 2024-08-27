import { useEffect, useState } from "react";
import { weaponsData } from "../types"; // Make sure this matches the structure of your JSON data

const Equipment = () => {
  const [weapons, setWeapons] = useState<weaponsData[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await import(`../contents/DarkSoulsWeapons.json`);
      setWeapons(data.default as weaponsData[]);
    }

    getData();
  }, []); // Empty dependency array ensures this only runs on mount

  return (
    <div>
      <p>equipment</p>
      <div>
        <p>Weapons</p>
        <ul>
          {weapons.map((item, index) => (
            <li key={index}>
              <a href={`/equipment/${item.slug}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Equipment;
