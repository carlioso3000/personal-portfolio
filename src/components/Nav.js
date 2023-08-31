import {useEffect, useState} from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail, AiFillChrome, AiFillHome } from "react-icons/ai";


function Nav() {
  const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos || currentScrollPos <= 100) {
        document.getElementById("nav").style.top = "0";
      } else {
        document.getElementById("nav").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const homeButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <nav className="nav" id="nav">
      <div className="logo">
        <div className="logo-square"></div>
      </div>
      <button className="open-menu">
        <FaHamburger onClick={handleMenuClick} className='hamburger-icon ' />
        <AiFillHome onClick={homeButtonClick} className='home-icon' />
      </button>
      {/* <div className={`nav-menu-container ${showMenu ? 'show' : ''}`}> */}
        <ul className={`main-menu ${showMenu ? 'show' : ''}`}>
          <li><Link to="/" onClick={handleMenuClick}>home</Link></li>
          <li><a href="#terminal-section" className="terminal-link" onClick={handleMenuClick}>Terminal</a></li>
          <li><a href="#skills-section" onClick={handleMenuClick}>Skills</a></li>
          <li><a href="#projects-section" onClick={handleMenuClick}>Projects</a></li>
          <li><a href="#" onClick={handleMenuClick}>contact</a></li>
          <button className='close-menu' onClick={handleMenuClick}><AiOutlineClose /></button>
          <span className='icons'>
            <a href='https://github.com/carlioso3000' target='_blank'><AiFillGithub /></a>
            <a href='https://www.linkedin.com/in/carlos-cabrera-323678113/' target='_blank'><AiFillLinkedin /></a>
            <a href='mailto:carliosogames@gmail.com' target='_blank'><AiTwotoneMail /></a>
            <a href='' target='_blank'><AiFillChrome /></a>
          </span>
        </ul>
      {/* </div> */}
    </nav>
  )
};

export default Nav;