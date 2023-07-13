import './App.css';
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import IconsLeft from './components/IconsLeft';
import EmailRight from './components/EmailRight';
import Terminal from './components/terminal/Terminal';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Work from './pages/projects/projects.js';
import HomePage from './pages/homepage.js'
import Technologies from './pages/technologies/technologies.js';



function App() {
  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/technologies' element={<Technologies />} />
            <Route path='/work' element={<Work />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
