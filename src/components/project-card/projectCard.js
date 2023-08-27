import { BiFolder } from "react-icons/bi";
import './project-card.scss';

function ProjectCard({ icon, tags, title, description, url}) {
  return (
    <div className='card-container'>
      <div className='card-body'>
        <header>
          <div className='details'>
            <BiFolder />
          </div>
          <div className='external-links'>
            {icon.map((Icon, index) => (
              <a
                key={index}
                href={url && url[index]}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon />
              </a>
            ))}
          </div>
        </header>
        <body>
          <div className='card-title'>
            <h2>{title}</h2>
          </div>
          <div className='card-description'>
            <p>{description}</p>
          </div>
        </body>
        <footer>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  )
};

export default ProjectCard;