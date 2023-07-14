import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project-card/projectCard';
import IconsLeft from '../../components/IconsLeft.js';
import EmailRight from '../../components/EmailRight.js';
import BackHomePage from '../../components/commons/backHomePage';
import Title from '../../components/commons/title';

import './projects.css';


function Projects() {
  return (
    <div className='projects-page-container'>
      <IconsLeft />
      <EmailRight />
      
      {/*<Link to='/'><button>Volver a home</button></Link>*/} 

      <div className='projects-title-container'>
        <BackHomePage />
        <Title
        text={"ALL MY PROJECTS"}
        color={"var(--secondary-color)"}
        font={"VT323"}
        size={"58px"}
        />
      </div>

      
      <div className='projects-container'>
        <ProjectCard 
        imgSrc={'/pokedex.png'}
        imgAlt={'Pokedex preview'}
        tags={['JAVASCRIPT', 'HTML5', 'CSS3', 'REACT', 'BOOTSTRAP', 'SASS']}
        />
        <ProjectCard 
        imgSrc={'/pokedex.png'}
        imgAlt={'Pokedex preview'}
        tags={['JAVASCRIPT', 'HTML5', 'CSS3', 'REACT']}
        />
        <ProjectCard 
        imgSrc={'/pokedex.png'}
        imgAlt={'Pokedex preview'}
        tags={['JAVASCRIPT', 'HTML5', 'CSS3', 'REACT']}
        />
        <ProjectCard 
        imgSrc={'/pokedex.png'}
        imgAlt={'Pokedex preview'}
        tags={['JAVASCRIPT', 'HTML5', 'CSS3', 'REACT']}
        />
        <ProjectCard 
        imgSrc={'/pokedex.png'}
        imgAlt={'Pokedex preview'}
        tags={['JAVASCRIPT', 'HTML5', 'CSS3', 'REACT']}
        />
      </div>
    </div>
  )
}

export default Projects;