import WIP from "../elements/wip";

const Information = () => {
  return (
    <div>
      <WIP />
      <div className="container">
        <div className="box">
          <h1>Information</h1>
          <hr />

          <div className="content">
            <h2>Future Content Overview</h2>
            <p>
              The "Information" section will be your go-to resource for in-depth
              details about the game's mechanics and the people behind its
              creation. This section will cover all the essential gameplay
              elements and provide insight into the developers' vision. Here’s
              what you can look forward to:
            </p>

            <ul>
              <li>
                <strong>Gameplay Mechanics:</strong> Detailed breakdowns of core
                mechanics like combat, leveling systems, weapon scaling, and
                other advanced strategies.
              </li>
              <li>
                <strong>Character Builds:</strong> Guides on optimizing
                character builds for different playstyles, from magic users to
                melee fighters.
              </li>
              <li>
                <strong>Game Development:</strong> Behind-the-scenes information
                about the game's creation, including design choices and
                development phases.
              </li>
              <li>
                <strong>Game Creators:</strong> Information about the creators,
                their previous works, and interviews about the philosophy behind
                the game’s design.
              </li>
              <li>
                <strong>General Info:</strong> A comprehensive overview of the
                game, its development history, and major updates.
              </li>
            </ul>

            <p>More content will be added here soon, so keep checking back!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
