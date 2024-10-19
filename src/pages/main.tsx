import { Link } from "react-router-dom";
import "../css/pages/Main.scss";
import WIP from "../elements/wip";

const Main = () => {
  const progressPercentage = 25;

  return (
    <div>
      <WIP />
      <div className="container">
        <div className="box">
          <div className="welcomers">
            <div className="welcome-text">
              <h2>Welcome, Chosen Undead</h2>
              <p>
                Take a seat at our cozy wiki and explore the knowledge we've
                gathered.
              </p>
            </div>
            <img src="/images/front/giantdad.jpg" alt="Giant Dad" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="project-description">
            <h2>About This Project</h2>
            <p>
              This project is a fan-made Dark Souls Wiki, built using modern web
              technologies. The site has been created with:
            </p>
            <ul>
              <li>
                <strong>React:</strong> for building the user interface
              </li>
              <li>
                <strong>TypeScript:</strong> for ensuring type safety and
                scalable code
              </li>
              <li>
                <strong>SCSS:</strong> for efficient styling and better control
                over the layout
              </li>
              <li>
                <strong>Python:</strong> for processing game data and organizing
                files
              </li>
              <li>
                <strong>Vite:</strong> A fast development environment for modern
                web applications.
              </li>
              <li>
                <strong>
                  <a href="https://github.com/soulsmods/DSMapStudio">
                    DSMapStudio
                  </a>
                </strong>{" "}
                Suite of modding tools for Elden Ring, Sekiro, the Dark Souls
                series, Bloodborne, and Demon's Souls
              </li>
            </ul>
            <p>
              This wiki is an ongoing project, with core features designed to
              meet the requirements of the Omnia web development assignment.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box" id="roadmap">
          <div className="roadmap-section">
            <h2>Development Roadmap</h2>
            <p>
              More info about developement and upcoming things in{" "}
              <Link to="/Misc">Misc</Link>
            </p>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Goals List */}
            <div className="roadmap-list">
              <h3>Goals</h3>
              <ul>
                <li className="completed">
                  ✅ Project Setup & Initial Components
                </li>
                <li className="completed">✅ Routing & Page Structure</li>
                <li className="completed">
                  ✅ Optimized image Loading with Atlases
                </li>
                <li className="completed">✅ Dark Mode!</li>
                <li className="in-progress">🚧 Spell Pages</li>
                <li className="in-progress">🚧 Weapon Pages</li>
                <li className="in-progress">🚧 Responsive Design</li>
                <li className="pending">📅 Adding Armors to Equipment</li>
                <li className="pending">📅 Addittional Data and lore</li>
                <li className="pending">📅 World Site</li>
                <li className="pending">📅 Information Site</li>
                <li className="pending">📅 Character Site</li>
                <li className="pending">📅 Search and Filter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="updateLog">
            <h2>Update Log</h2>
            <p>Version: 1.0</p>
            <h3>Whats new?</h3>
            <ul>
              <li>Added Update Log!</li>
              <li>Smooth Dark / White mode!</li>
              <li>Spell data added!</li>
              <li>Spells can now be viewed from spells site!</li>
              <li>Updated sites Responsiveness!</li>
              <li>Fixed Bug with Anchor link</li>
              <li>Added some info of coming updates to sites</li>
              <li>Fixed some typos</li>
              <li>Added more wiki links</li>
              <li>Added Smol Knight :)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
