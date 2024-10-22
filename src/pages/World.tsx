import WIP from "../elements/wip";
const World = () => {
  return (
    <div>
      <WIP />
      <div className="container">
        <div className="box">
          <h1>World</h1>

          <hr></hr>
          <div className="content">
            <h2>Future Content Overview</h2>
            <p>
              Welcome to the "World" section. This area will provide detailed
              information about the game's world, including its enemies, places,
              and lore. Whether you're looking for lore dumps, information on
              bosses, or insights into the intricate world-building of Dark
              Souls, this section will have it all. Here's what you can expect
              in the future:
            </p>

            <ul>
              <li>
                <strong>Enemies:</strong> Detailed descriptions and stats of all
                enemies, including their weaknesses and strategies.
              </li>
              <li>
                <strong>Bosses:</strong> In-depth boss guides with tips, phases,
                and lore.
              </li>
              <li>
                <strong>Places:</strong> Maps, key locations, and secrets of
                each region in the game.
              </li>
              <li>
                <strong>Shortcuts:</strong> Critical shortcuts and how to unlock
                them to navigate the world efficiently.
              </li>
              <li>
                <strong>Lore:</strong> Comprehensive lore explanations,
                character backstories, and the history of the world.
              </li>
              <li>
                <strong>Infodumps:</strong> Summaries of alpha builds, patch
                notes, and behind-the-scenes development details.
              </li>
              <li>
                <strong>Videos:</strong> Curated links to the best videos and
                YouTube content explaining the depth of the Dark Souls world.
              </li>
            </ul>

            <p>
              Stay tuned for more updates as we continue building this section!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default World;
