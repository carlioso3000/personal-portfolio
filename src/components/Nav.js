import {useEffect} from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';



function Nav() {
	
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


  return(
    <nav className="nav" id="nav">
			<div className="logo">
				<div className="logo-square"></div>
			</div>

			<div className="nav-link-container">
				<ul>
					<li><Link to="/">home</Link></li>
          <li><a href="#terminal-section">Terminal</a></li>
					<li><a href="#skills-section">Skills</a></li>
					<li><a href="#projects-section">Projects</a></li>
					<li><a href="#">contact</a></li>
				</ul>
			</div>

		</nav>
  )
};

export default Nav;