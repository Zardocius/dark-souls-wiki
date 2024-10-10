import "../css/pages/Main.scss";

const Main = () => {
  const progressPercentage = 20;

  return (
    <div>
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
            </ul>
            <p>
              This wiki is an ongoing project, with core features designed to
              meet the requirements of the Omnia web development assignment.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="roadmap-section">
            <h2>Development Roadmap</h2>
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
                <li className="in-progress">👷 Weapon Pages</li>
                <li className="in-progress">👷 Responsive Design</li>
                <li className="pending">📅 Adding Armors to Equipment</li>
                <li className="pending">📅 Spell Site</li>
                <li className="pending">📅 World Site</li>
                <li className="pending">📅 Information Site</li>
                <li className="pending">📅 Character Site</li>
                <li className="pending">📅 Search and Filter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
