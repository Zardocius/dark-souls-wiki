import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MagicIndex, WeaponIndex } from "./types";
import CategoryWeaponsPage from "./pages/CategoryWeaponsPage";
import Information from "./pages/Information";
import WeaponPage from "./pages/WeaponPage";
import Equipment from "./pages/Equipment";
import Character from "./pages/Character";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Spells from "./pages/Spells";
import World from "./pages/World";
import Main from "./pages/main";
import Misc from "./pages/Misc";
import ImageTest from "./pages/imageTest";
import ScrollToTop from "./elements/ScrollToTop";

const App: React.FC = () => {
  const [weaponIndex, setWeaponIndex] = useState<WeaponIndex>([]);
  const [magicIndex, setMagicIndex] = useState<MagicIndex>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeaponIndex = async () => {
      try {
        const response = await fetch("/weaponIndex.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch weapon index: ${response.statusText}`
          );
        }
        const data = await response.json();
        setWeaponIndex(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load weapon index.");
      } finally {
        setLoading(false);
      }
    };
    const fetchMagicIndex = async () => {
      try {
        const response = await fetch("/spellIndex.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch weapon index: ${response.statusText}`
          );
        }
        const data = await response.json();
        setMagicIndex(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load magic index.");
      } finally {
        setLoading(false);
      }
    };
    fetchMagicIndex();
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
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/equipment"
          element={<Equipment weaponIndex={weaponIndex} />}
        ></Route>
        <Route
          path="/category/:slug"
          element={<CategoryWeaponsPage weaponIndex={weaponIndex} />}
        />{" "}
        {}
        <Route path="/spells" element={<Spells magicIndex={magicIndex} />} />
        <Route path="/world" element={<World />} />
        <Route path="/info" element={<Information />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/atlas-exporter" element={<ImageTest />} />
        <Route path="/character" element={<Character />} />
        <Route
          path="/weapons/:weaponSlug"
          element={<WeaponPage weaponIndex={weaponIndex} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
