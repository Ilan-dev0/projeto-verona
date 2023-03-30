import React from 'react'
import Bottom from '../components/Home/Bottom'
import Clients from '../components/Home/Clients'
import Doubt from '../components/Home/Doubt'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero'
import Logo from '../components/Home/Logo'
import Mid from '../components/Home/Mid'
import Projects from '../components/Home/Projects'
import Reference from '../components/Home/Reference'


const Home = () => {
  return (
    <div>
      <Hero />
      <Logo />
      <Reference />
      <Mid />
      <Projects />
      <Doubt />
      <Clients />
      <Bottom />
      <Footer />
    </div>
  )
}

export default Home
