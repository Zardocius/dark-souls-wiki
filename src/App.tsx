import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.scss";
import Main from "./pages/Main";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Equipment from "./pages/Equipment";
import Spells from "./pages/Spells";
import World from "./pages/World";
import Information from "./pages/Information";
import Character from "./pages/Character";
import WeaponPage from "./pages/Weapon";
import { useEffect, useState } from "react";
import { weaponsData } from "./types";

function App() {
  const [weapons, setWeapons] = useState<weaponsData[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await import(`./contents/DarkSoulsWeapons.json`);

      setWeapons(data.default as weaponsData[]);
    }

    getData();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/world" element={<World />} />
        <Route path="/info" element={<Information />} />
        <Route path="/character" element={<Character />} />
        <Route
          path="/equipment/:ID"
          element={weapons !== undefined && <WeaponPage data={weapons} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
