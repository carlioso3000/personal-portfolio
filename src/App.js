import './App.css';
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import IconsLeft from './components/IconsLeft';
import EmailRight from './components/EmailRight';
import Terminal from './components/terminal/Terminal';

function App() {
  return (
    <div className="app">
      <div className='scan'></div>
      <div className='main'>
      <Nav />
      <IconsLeft />
      <EmailRight />
      <Hero />
      <Terminal />
      </div>

    </div>
  );
}

export default App;
