import { useState } from 'react';
import './project-card.css';

const tagColors = {
  HTML5: '#E96228',
  CSS3: '#2862E9',
  JAVASCRIPT: '#EFD81D',
  REACT: '#5ED3F3',
  BOOTSTRAP: '#8512F7',
  SASS: '#C86796'
};

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
            <span 
            key={index} 
            className='tag'
            >
              {tag}
              </span>
          ))}
        </div>
      )}
      
    </div>
  )
};

export default ProjectCard;