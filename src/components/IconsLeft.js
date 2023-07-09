import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail, AiOutlineChrome, AiFillChrome } from "react-icons/ai";
import '../styles/icons-left.css';

function IconsLeft() {
  return(
    <div className='icons-left'>
      <ul className='icons-list'>
        <li><a><AiFillGithub /></a></li>
        <li><a><AiFillLinkedin /></a></li>
        <li><a><AiTwotoneMail /></a></li>
        <li><a><AiFillChrome /></a></li>
      </ul>
    </div>
  )
}

export default IconsLeft;