import React, {useState} from 'react';
import background from '../../assets/acbg.png'
import rec from '../../assets/rec.png'

const AcAutoHero = () => {
  return (
      <div className=' h-[205px] w-full m-0-auto'>
        <div className='h-[100px] w-full bg-zinc-900 m-0'></div>
        <div style={{backgroundImage: `url(${background})`}} className='m-0 h-[205px] w-full bg-center bg-cover duration-500 absolute'>
          <div style={{backgroundImage: `url(${rec})`}} className='m-0 h-[205px] w-full bg-center bg-cover duration-500 absolute '>
          <h1 className='text-white text-center text-3xl sm:text-5xl absolute text-bold sm:left-40 top-20'>ACESSÓRIOS PARA PORTAS DE AÇO AUTOMÁTICAS</h1>
         </div>
        </div>
        
      </div>
  )
}

export default AcAutoHero
