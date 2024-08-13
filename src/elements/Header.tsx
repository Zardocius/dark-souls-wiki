import { Link } from "react-router-dom";

const Header = () => {
  return (
    <footer>
      <Link to="/">Frontpage</Link>
      <Link to="/equipment">Equipment</Link>
      <Link to="/spells">Spells</Link>
      <Link to="/world">World</Link>
      <Link to="/info">Information</Link>
      <Link to="/character">Character</Link>
    </footer>
  );
};
export default Header;
