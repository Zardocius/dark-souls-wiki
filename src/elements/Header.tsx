import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="HeaderIcon">
        <img src="/android-chrome-192x192.png"></img>
      </div>
      <div className="HeaderTexts">
        <div className="HeaderName">
          <span>Dark Souls Wiki</span>
        </div>
        <div className="HeaderLinks">
          <Link to="/">Frontpage</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/spells">Spells</Link>
          <Link to="/world">World</Link>
          <Link to="/info">Information</Link>
          <Link to="/character">Character</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
