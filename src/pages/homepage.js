import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Terminal from '../components/terminal/Terminal'
import IconsLeft from '../components/IconsLeft';
import EmailRight from '../components/EmailRight';




function HomePage() {
  return (
    <div>
      <div className='scan'></div>
      <Nav />
      <IconsLeft />
      <EmailRight />
      <Hero />
      <Terminal />

    </div>
  )
}

export default HomePage;