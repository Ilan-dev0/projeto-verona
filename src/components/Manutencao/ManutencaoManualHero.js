import React, {useState} from 'react';
import background from '../../assets/manutencao.png'
import rec from '../../assets/rec.png'

//<h1 className='text-white text-center text-5xl text-bold absolute  left-10 top-20'>MANUTENÇÃO DE PORTAS DE AÇO</h1>

const ManutencaoHero = () => {

    return (
      <div className=' h-[120px] w-full m-0-auto'>
        <div className='h-[120px] w-full bg-zinc-100 m-0'></div>
        <div style={{backgroundImage: `url(${background})`}} className='m-0 h-[205px] w-full bg-center bg-cover duration-500 absolute'>
          <div style={{backgroundImage: `url(${rec})`}} className='m-0 h-[205px] w-full bg-center bg-cover duration-500 absolute '>
          <h1 className='text-white text-center text-3xl text-bold absolute left-10 top-28 sm:top-28 sm:left-40 sm:text-4xl'>MANUTENÇÃO DE PORTAS DE AÇO MANUAISS</h1>
         </div>
        </div>
      </div>
    )
}

export default ManutencaoHero