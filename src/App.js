import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/homepage.js'



function App() {
  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/work' element={<Work />} /> Puedo usar esta ruta a futuro para paginas de proyectos individuales */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
