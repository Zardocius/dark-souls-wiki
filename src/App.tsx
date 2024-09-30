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
import WeaponPage from "./pages/WeaponPage";

function App() {
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
        <Route path="/weapons/:weaponName" element={<WeaponPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
