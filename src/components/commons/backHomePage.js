import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../../styles/back-home-page.css'

function BackHomePage() {
  return (
    <div className="back-home-container">
      <Link to="/"><AiFillCaretLeft className="back-home-icon" style={{color: 'var(--tertiary-color)'}} 
      /></Link>
    </div>
  )
}

export default BackHomePage;