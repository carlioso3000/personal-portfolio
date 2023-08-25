import ProjectCard from '../project-card/projectCard';
import Title from '../commons/title';
import FadeIn from '../fade-in/fadeIn';
import imgage1 from '../../images/img1.png'
import './projects.css';


function Projects() {
  return (
    <div className='projects-page-container'>
      <div className='projects-title-container'>
        <Title
        text={"ALL MY PROJECTS"}
        color={"var(--secondary-color)"}
        font={"VT323"}
        size={"58px"}
        />
      </div>

      
      <FadeIn delay={350}>
      <div className='projects-container'>
        <ProjectCard
        title={'Pokemon Pokedex'}
        imgSrc={imgage1}
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
      </div>
      </FadeIn>
    </div>
  )
}

export default Projects;