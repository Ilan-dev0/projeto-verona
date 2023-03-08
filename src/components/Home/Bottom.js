import React from 'react'
import authfit from '../../assets/aufit.png'
import adapt from '../../assets/adapt.png'
import farmais from '../../assets/famais.png'
import asec from '../../assets/asec.png'



const Bottom = () => {
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

    </div>
  )
}

export default Bottom
