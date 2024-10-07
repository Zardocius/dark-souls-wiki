// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./elements/Header"; // Assuming you have a Header component
import Footer from "./elements/Footer"; // Assuming you have a Footer component
import Main from "./pages/Main";
import Equipment from "./pages/Equipment";
import Spells from "./pages/Spells";
import World from "./pages/World";
import Information from "./pages/Information";
import Character from "./pages/Character";
import WeaponPage from "./pages/WeaponPage";
import { WeaponIndex } from "./types"; // Correct import
import "./css/App.scss";

const App: React.FC = () => {
  // Change weaponIndex to be of type WeaponIndex, not WeaponIndex[]
  const [weaponIndex, setWeaponIndex] = useState<WeaponIndex>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeaponIndex = async () => {
      try {
        const response = await fetch("/weaponIndex.json"); // Load weaponIndex.json from public folder
        if (!response.ok) {
          throw new Error(`Failed to fetch weapon index: ${response.statusText}`);
        }
        const data = await response.json();
        setWeaponIndex(data); // Set the fetched data to state
      } catch (error) {
        console.error(error);
        setError("Failed to load weapon index.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeaponIndex();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment" element={<Equipment weaponIndex={weaponIndex} />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/world" element={<World />} />
        <Route path="/info" element={<Information />} />
        <Route path="/character" element={<Character />} />
        <Route path="/weapons/:weaponSlug" element={<WeaponPage weaponIndex={weaponIndex} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
