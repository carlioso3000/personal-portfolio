import { useState } from 'react';
import './project-card.css';

function ProjectCard({ imgSrc, imgAlt, tags }) {
  const [hover, setHover] = useState(false);


  return (
    <div className='card-container'>
      <img 
      src={imgSrc}
      alt={imgAlt}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
      />

      {hover && (
        <div className='tags-container'>
          {tags.map((tag, index)=>(
            <span key={index} className='tag'>{tag}</span>
          ))}
        </div>
      )}
      
    </div>
  )
};

export default ProjectCard;