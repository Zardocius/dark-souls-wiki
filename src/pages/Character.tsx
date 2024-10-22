import WIP from "../elements/wip";

const Character = () => {
  return (
    <div>
      <WIP />
      <div className="container">
        <div className="box">
          <h1>Characters</h1>
          <hr />

          <div className="content">
            <h2>Future Content Overview</h2>
            <p>
              The "Characters" section will explore all the key NPCs that exist
              in the world of Dark Souls, along with player customization
              options. You'll be able to learn more about their backstories, how
              they interact with the world, and what choices you can make that
              impact their fates. Expect to see:
            </p>

            <ul>
              <li>
                <strong>NPCs and Lore:</strong> Detailed profiles of each NPC,
                their roles in the world, their lore, and interactions with the
                player.
              </li>
              <li>
                <strong>Player Choices:</strong> A guide to the choices you can
                make with NPCs and the consequences of those decisions in the
                game.
              </li>
              <li>
                <strong>Player Creation:</strong> Information on how to create
                your character, from selecting appearance options to setting up
                your stats.
              </li>
              <li>
                <strong>Classes and Builds:</strong> In-depth breakdowns of each
                class, their starting stats, equipment, and ideal builds.
              </li>
            </ul>

            <p>
              This section will be continuously updated with more character
              profiles and insights. Stay tuned for more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Character;
