import '@/styles/components/footer.scss'

const Footer = () => {
  return (
    <div className='footerBlocks'>
      <div className="infoRow">
        <h4>Community</h4>
        <ul>
          <li>
            <a href="https://www.reddit.com/r/darksouls/">Dark Souls Reddit</a>
          </li>
          <li>
            <a href="https://discord.gg/fromsoftware">Discord Server</a>
          </li>
        </ul>
        <h4>Other Wikis</h4>
        <ul>
          <li>
            <a href="http://darksouls.wikidot.com/">Wikidot Dark Souls Wiki</a>
          </li>
          <li>
            <a href="https://darksouls.wiki.fextralife.com/">
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
      <div className="infoRow">
        <h4>Open Source</h4>
        <p>
          This wiki is open source.{" "}
          <a href="https://github.com/Zardocius/dark-souls-wiki">
            View on GitHub
          </a>
        </p>
      </div>
      <div className="infoRow">
      <h4>License</h4>
        <p>
          This site is a fan-made project and is not affiliated with Bandai
          Namco Entertainment or FromSoftware.
        </p>
        <p>© 2024 Dark Souls Wiki Project. Licensed under the MIT License.</p>
      </div>
    </div>
  );
};

export default Footer;
