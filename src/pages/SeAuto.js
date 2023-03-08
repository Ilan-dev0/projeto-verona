import React from 'react'
import Footer from '../components/Home/Footer'
import SeAutoEstrutura from '../components/Servicos/SeAutoEstrutura'
import SeAutoHero from '../components/Servicos/SeAutoHero'
import SeAutoSlide from '../components/Servicos/SeAutoSlide'

const SeAuto = () => {
  return (
    <div>
      <SeAutoHero />
      <SeAutoSlide />
      <SeAutoEstrutura />
      <Footer />
    </div>
  )
}

export default SeAuto
