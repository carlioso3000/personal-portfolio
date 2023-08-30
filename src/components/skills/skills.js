
import TechBox from '../technologie-box/techBox';
import FadeIn from '../fade-in/fadeIn';
import './skills.css';
import Title from '../commons/title.js'
import { AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNode } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";



function Skills() {
  return (
    <div className='technologies-page-container'>
    <div className='technologies-title-container'>
      <Title 
        text={"ALL MY SKILLS"}
        color={"var(--secondary-color)"}
        font={"VT323"}
        size={"58px"}
      />
    </div>
      <FadeIn delay={500}>
        <div className='technologies-box-container'>
          <TechBox
            icon={<BiLogoJavascript />}
            text={"JAVASCRIPT"} 
          />
          <TechBox
            icon={<AiFillHtml5 />}
            text={"HTML5"} 
          />
          <TechBox
            icon={<FaCss3Alt />}
            text={"CSS"} 
          />
          <TechBox
            icon={<FaReact />}
            text={"REACT.JS"} 
          />
          <TechBox
          icon={<TbBrandRedux />}
          text={"REDUX"} 
          />
          <TechBox
            icon={<FaNode />}
            text={"NODE.JS"}
          />
          <TechBox
          icon={<FaBootstrap />}
          text={"BOOTSTRAP"} 
          />
          <TechBox
            icon={<AiOutlineAntDesign />}
            text={"AntDesign"}
          />
          <TechBox
            icon={<BiLogoTailwindCss />}
            text={"TailwindCSS"}
          />
        </div>
      </FadeIn>
    </div>
  )
}

export default Skills;