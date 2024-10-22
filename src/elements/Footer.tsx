import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <div className="footer-top">
            <div className="nav-links">
              <h4>Navigation</h4>
              <ul>
                <Link to="/">Home</Link>
                <Link to="/equipment">Equipment</Link>
                <Link to="/spells">Spells</Link>
                <Link to="/world">World</Link>
                <Link to="/info">Information</Link>
                <Link to="/character">Character</Link>
                <Link to="/misc">Misc</Link>
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
                  <a href="https://discord.gg/fromsoftware">Discord Server</a>
                </li>
              </ul>
              <h4>Other Wikis</h4>
              <ul>
                <li>
                  <a href="http://darksouls.wikidot.com/">
                    Wikidot Dark Souls Wiki
                  </a>
                </li>
                <li>
                  <a href="https://darksouls.wiki.fextralife.com/Dark+Souls+Wiki/">
                    Fextralife Dark Souls Wiki
                  </a>
                </li>
                <li>
                  <a href="https://darksouls.fandom.com/wiki/Dark_Souls_Wiki/">
                    Fandom Dark Souls Wiki
                  </a>
                </li>
              </ul>
            </div>
            <div className="open-source">
              <h4>Open Source</h4>
              <p>
                This wiki is open source.{" "}
                <a href="https://github.com/Zardocius/dark-souls-wiki">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              This site is a fan-made project and is not affiliated with Bandai
              Namco Entertainment or FromSoftware.
            </p>
            <p>
              © 2024 Dark Souls Wiki Project. Licensed under the MIT License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
