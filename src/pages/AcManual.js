import React from 'react'
import AcManualHero from '../components/Acessórios/AcManualHero'
import AcManualLista from '../components/Acessórios/AcManualLista'
import AcManualSlide from '../components/Acessórios/AcManualSlide'
import Footer from '../components/Home/Footer'

const AcManual = () => {
  return (
    <div>
      <AcManualHero />
      <AcManualSlide />
      <AcManualLista />
      <Footer />
    </div>
  )
}

export default AcManual
