import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project-card/projectCard';
import './projects.css';


function Projects() {
  return (
    <div className='projects-page-container'>
      <div className='projects-title-container'>
        <h1>All my projects.</h1>
      </div>

      <Link to='/'><button>Volver a home</button></Link>
      <div className='projects-container'>
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