import {AiFillHome} from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../../styles/back-home-page.css'

function BackHomePage() {
  return (
    <div className="back-home-container">
      <Link to="/"><AiFillHome /></Link>
    </div>
  )
}

export default BackHomePage;