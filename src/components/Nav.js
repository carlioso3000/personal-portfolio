import '../styles/nav.css';



function Nav() {

  return(
    <nav className="nav">

			<div className="logo">
				<div className="logo-square"></div>
			</div>

			<div className="nav-link-container">
				<ol>
					<li><a href="#">About</a></li>
					<li><a href="#">Knowledge</a></li>
					<li><a href="#">Work</a></li>
					<li><a href="#">Contact</a></li>
				</ol>
			</div>

		</nav>
  )
};

export default Nav;