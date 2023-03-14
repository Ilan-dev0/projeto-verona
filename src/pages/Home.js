import React from 'react'
import Bottom from '../components/Home/Bottom'
import Clients from '../components/Home/Clients'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero'
import Mid from '../components/Home/Mid'
import Projects from '../components/Home/Projects'


const Home = () => {
  return (
    <div>
      <Hero />
      <Mid />
      <Projects />
      <Clients />
      <Bottom />
      <Footer />
    </div>
  )
}

export default Home
