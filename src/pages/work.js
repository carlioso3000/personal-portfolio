import { Link } from 'react-router-dom';


function Work() {
  return (
    <div>
      <h1>Esta es la pagina interna Work.</h1>
      <Link to='/'><button>Volver a home</button></Link>
    </div>
  )
}

export default Work;