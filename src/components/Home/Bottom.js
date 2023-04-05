import React from 'react'
import authfit from '../../assets/aufit.png'
import adapt from '../../assets/adapt.png'
import farmais from '../../assets/famais.png'
import asec from '../../assets/asec.png'



const Bottom = () => {
  
  function handleClick() {
    window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de fazer um orçamento.'
}

  return (
    <div className='w-screen h-max-[610px] h-full bg-white'>
      <div className='p-10'>
        <h1 className='text-zinc-900 text-center text-4xl text-bold '>QUEM SÃO ELES</h1>
      </div>

      <div className='md:flex flex-row justify-between items-center p-10 m-10 border-t-4 border-b-4'>
        <img className='w-[250px] h-[90px]' src={adapt} />
        <img className='w-[250px] h-[100px]' src={farmais} />
        <img className='w-[250px] h-[100px]' src={asec} />
        <img className='w-[250px] h-[100px]' src={authfit} />
      </div>
          
          <div className='md:px-12  md:mb-20 mb-20 justify-center  px-14 sm:flex sm:justify-items-start'>
            <button onClick={handleClick} className='  rounded-none px-16 py-4 mt-8 text-red-900 bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-red-99'>QUERO COMEÇAR MEU PROJETO AGORA</button>
          </div>

    </div>
  )
}

export default Bottom
