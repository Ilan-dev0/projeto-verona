import React from 'react'
import Footer from '../components/Home/Footer'
import ManutencaoSlide from '../components/Manutencao/ManutencaoSlide'
import ManutencaoHero from '../components/Manutencao/ManutencaoHero'
import ManutencaoBody from '../components/Manutencao/ManutencaoBody'

const Manutencao = () => {
  return (
    <div>
      <ManutencaoHero />
      <ManutencaoSlide />
      <ManutencaoBody />
      <Footer />
    </div>
  )
}

export default Manutencao
