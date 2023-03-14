import React from 'react'
import Footer from '../components/Home/Footer'
import ManutencaoManualSlide from '../components/Manutencao/ManutencaoManualSlide'
import ManutencaoManualHero from '../components/Manutencao/ManutencaoManualHero.js'
import ManutencaoManualBody from '../components/Manutencao/ManutencaoManualBody'

const ManutencaoManual = () => {
  return (
    <div>
      <ManutencaoManualHero />
      <ManutencaoManualSlide />
      <ManutencaoManualBody />
      <Footer />
    </div>
  )
}

export default ManutencaoManual
