import '../styles/hero.css';
import Title from './commons/title.js';

function Hero() {
  return (
    <section id='hero-section' className="hero">
      <Title
      text={"Hi, my name is"} 
      font={"monospace"}
      color={"var(--color1)"}
      />

      <h2 className='hero-subtitle'>Carlos Cabrera.</h2>
      <h3 className='hero-description'>Javascript Web developer</h3>
      <div className='hero-text-container'>
        <p className='hero-text'>
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <div className='call-to-action'>
        <button type='button' className='btn'>Lets work together!</button>
      </div>
    </section>
  )
}

export default Hero;