import React from 'react'
import Footer from '../components/Home/Footer'
import SeManualEstrutura from '../components/Servicos/SeManualEstrutura'
import SeManualHero from '../components/Servicos/SeManualHero'
import SeManualSlider from '../components/Servicos/SeManualSlider'

const SeManual = () => {
  return (
    <div>
      <SeManualHero />
      <SeManualSlider />
      <SeManualEstrutura />
      <Footer />
    </div>
  )
}

export default SeManual
