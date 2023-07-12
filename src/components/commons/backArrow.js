import {AiFillHome} from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../../styles/back-arrow.css'

function BackArrow() {
  return (
    <div className="back-arrow-container">
      <Link to="/"><AiFillHome /></Link>
      <span>Home</span>
    </div>
  )
}

export default BackArrow;