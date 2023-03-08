import React, {useState} from 'react';
import background from '../../assets/bgmanual.png'
import rec from '../../assets/rec.png'

const SeManualHero = () => {
  return (
      <div className=' h-[205px] w-full m-0-auto'>
        <div className='h-[190px] w-full bg-zinc-100 m-0'></div>
        <div style={{backgroundImage: `url(${background})`}} className='m-0 h-[205px] w-full bg-center bg-cover duration-500 absolute'>
          <div style={{backgroundImage: `url(${rec})`}} className='m-0 h-[205px] w-full bg-center bg-cover duration-500 absolute '>
          <h1 className='text-white text-center text-5xl text-bold absolute  left-10 top-20'>PORTAS DE AÇO MANUAIS</h1>
         </div>
        </div>
        
      </div>
  )
}

export default SeManualHero
