import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Terminal from '../components/terminal/Terminal'
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import IconsLeft from '../components/IconsLeft';
import EmailRight from '../components/EmailRight';
import FadeIn from '../components/fade-in/fadeIn'
import './homepage.css';
import Loader from '../components/loader/loader';





function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className='screen'>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <FadeIn delay={350}>
            <IconsLeft />
            <EmailRight />
          </FadeIn>
          <FadeIn delay={350}>
            <Nav />
          </FadeIn>
          <section id='hero-section'>
            <FadeIn delay={600}>
              <Hero />
            </FadeIn>
          </section>
          <section id='terminal-section'>
            <FadeIn delay={1500}>
              <Terminal />
            </FadeIn>
          </section>
          <section id='skills-section'>
            <Skills />
          </section>
          <section id='projects-section'>
            <Projects />
          </section> 
        </>
      )}
    </div>
  )
}

export default HomePage;


