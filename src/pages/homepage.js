import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Terminal from '../components/terminal/Terminal'
import IconsLeft from '../components/IconsLeft';
import EmailRight from '../components/EmailRight';
import FadeIn from '../components/fade-in/fadeIn'
import './homepage.css';





function HomePage() {

  return (
    <div>
    <div className='scan'></div>
    <FadeIn delay={350}>
      <Nav />
    </FadeIn>
    <FadeIn delay={350}>
      <IconsLeft />
      <EmailRight />
    </FadeIn>
    <FadeIn delay={450}>
      <Hero />
    </FadeIn>
    <FadeIn delay={1500}>
      <Terminal />
    </FadeIn>
  </div>
  )
}

export default HomePage;