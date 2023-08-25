import { useState } from 'react';
import './project-card.css';

function ProjectCard({ imgSrc, imgAlt, tags, title }) {
  const [hover, setHover] = useState(false);

  return (
    <div className='card-container'>
      <div className='card-img'>
        <img
          src={imgSrc}
          alt={imgAlt}
          onMouseEnter={()=> setHover(true)}
          onMouseLeave={()=> setHover(false)}
          />

          {hover && (
            <div className='tags-container'>
              {tags.map((tag, index)=>(
                <span 
                key={index} 
                className='tag'
                >
                  {tag}
                  </span>
              ))}
            </div>
          )};
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='card-button-container'>
          <button className='card-button'>Demo</button>
          <button className='card-button'>GitHub</button>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;