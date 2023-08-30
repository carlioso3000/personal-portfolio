import { commands } from "../../utils/terminalLogic/terminalLogic";

function CommandsLinks({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href={link} target="_blank">{link}</a>
        </li>
      ))}
    </ul>
  );
}

export default CommandsLinks;