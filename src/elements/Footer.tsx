const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="nav-links">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Lore</a>
            </li>
            <li>
              <a href="#">Weapons</a>
            </li>
            <li>
              <a href="#">Armor</a>
            </li>
            <li>
              <a href="#">Enemies</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">NPCs</a>
            </li>
          </ul>
        </div>
        <div className="community">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="https://www.reddit.com/r/darksouls/">
                Dark Souls Reddit
              </a>
            </li>
            <li>
              <a href="#">Discord Server</a>
            </li>
            <li>
              <a href="http://darksouls.wikidot.com/">Other Wikis</a>
            </li>
          </ul>
        </div>
        <div className="open-source">
          <h4>Open Source</h4>
          <p>
            This wiki is open source. <a href="#">View on GitHub</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          This site is a fan-made project and is not affiliated with Bandai
          Namco Entertainment or FromSoftware.
        </p>
        <p>© 2024 Dark Souls Wiki Project. All rights reserved.</p>
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};
export default Footer;
