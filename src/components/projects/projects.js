import ProjectCard from '../project-card/projectCard';
import Title from '../commons/title';
import FadeIn from '../fade-in/fadeIn';
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
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
        icon={[ FiGithub, BiLinkExternal ]}
        url={['https://github.com/carlioso3000/react-pokedex-app', 'https://react-pokedex-app-omega.vercel.app']}
        title={'Fetching an API to create a functional Pokedex with React.js'}
        description={'A pokedex that uses an API to obtain data. I have made this application with javascript and React.Js'}
        tags={['JAVASCRIPT', 'HTML5', 'CSS3', 'REACT', 'BOOTSTRAP']}
        />
        <ProjectCard
        icon={[ FiGithub, BiLinkExternal ]}
        url={['https://github.com/carlioso3000/pomodoro-clock','https://pomodoro-clock-eight.vercel.app/']}
        title={'Integration of Redux in a Pomodoro clock'}
        description={'A 100% functional pomodoro clock that uses redux to manage the differents states of the app'}
        tags={['JAVASCRIPT', 'REACT', 'CSS3', 'HTML5', 'REDUX']}
        />
        <ProjectCard 
        icon={[ BiLinkExternal ]} 
        url={['https://nescritor.com/']}
        title={'Building a personal website in WordPress'}
        description={'We used wordpress tools to build a full functional and  responsive personal website for an important writer'}
        tags={['WORDPRESS', 'HTML5', 'CSS3']}
        />
        <ProjectCard 
        icon={[ BiLinkExternal ]}
        url={['https://fincamaranata.site/']}
        title={'Creating a corporate website for the agro-industrial sector'}
        description={'A pleasant, attractive and fully responsive corporate website for the agro-industrial and livestock sector'}
        tags={['WORDPRESS', 'HTML5', 'CSS3']}
        />
      </div>
      </FadeIn>
    </div>
  )
}

export default Projects;