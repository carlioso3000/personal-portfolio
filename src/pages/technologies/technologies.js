import { Link } from 'react-router-dom';
import TechBox from '../../components/technologie-box/techBox';
import './technologies.css';
import Title from '../../components/commons/title.js'
import BackArrow from '../../components/commons/backArrow';
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaBootstrap, FaSass, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";


function Technologies() {
  return (
    <div className='technologies-page-container'>
      <div className='technologies-title-container'>
      <Title 
      text={"My Technical Skills"}
      color={"var(--primary-color)"}
      font={"monospace"}
      />
      </div>
      <div className='technologies-box-container'>
        <TechBox
        icon={<AiFillHtml5 />}
        text={"HTML5"} />
        <TechBox
        icon={<FaCss3Alt />}
        text={"CSS"} />
        <TechBox
        icon={<BiLogoJavascript />}
        text={"JAVASCRIPT"} />
        <TechBox
        icon={<FaBootstrap />}
        text={"BOOTSTRAP"} />
        <TechBox
        icon={<FaSass />}
        text={"SASS"} />
        <TechBox
        icon={<FaReact />}
        text={"REACT"} />
      </div>
      <div className='technologies-description'>
        <p>As a web developer, I have dedicated myself to learning and mastering the latest technologies in the field. My technical skills include proficiency in HTML, CSS, Bootstrap, SASS, React, and JavaScript. These technologies form the foundation of my development stack and enable me to build modern, responsive, and user-friendly web applications. I am constantly expanding my knowledge and staying up-to-date with the latest trends and best practices in web development</p>
        <p>In particular, I have focused on deepening my knowledge of React and JavaScript, as these two technologies can be a powerful combination for building dynamic and interactive web applications. React allows me to create reusable components and manage the state of my applications efficiently, while JavaScript provides the flexibility and functionality to implement complex features and logic. By combining these two technologies, I am able to develop robust and scalable web applications that meet the needs of my clients</p>
        <p>As a dedicated and passionate web developer, I am committed to continuous learning and growth. I am constantly exploring new technologies and expanding my skill set to stay at the forefront of the industry. By keeping up-to-date with the latest trends and best practices, I am able to deliver cutting-edge solutions to my clients and continue to grow as a developer. My passion for technology and my drive to learn and improve ensure that I am always pushing the boundaries of what is possible in web development</p>
      </div>
    </div>
  )
}

export default Technologies;