import { 
  AiFillGithub, 
  AiFillLinkedin, 
  AiTwotoneMail,
  AiFillChrome } from "react-icons/ai";
import '../styles/icons-left.css';

function IconsLeft() {
  return(
    <div className='icons-left'>
      <ul className='icons-list'>
        <li><a href="https://github.com/carlioso3000" target="_blank"><AiFillGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/carlos-cabrera-323678113/" target="_blank"><AiFillLinkedin /></a></li>
        <li><a href="mailto:carliosogames@gmail.com" target="_blank"><AiTwotoneMail /></a></li>
        <li><a><AiFillChrome /></a></li>
      </ul>
    </div>
  )
}

export default IconsLeft;