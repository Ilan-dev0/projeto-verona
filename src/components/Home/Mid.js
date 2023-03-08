import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,  } from 'react-icons/bs';
import {RxDotFilled, RxDot} from 'react-icons/rx';
import {FaStore, FaIndustry} from 'react-icons/fa'
import {GiHouse} from 'react-icons/gi'
import imgbg from '../../assets/imgbg.png'


const Mid = () => {
  return (

    
    <div className='w-screen h-max-[940px] h-full bg-zinc-900 '>
      <div className='w-full h-max-[940px] h-full bg-zinc-900'>
          <div className='py-12'>
            <h1 className='text-white md:text-5xl font-bold text-center '>SEGMENTOS DE ATUAÇÃO</h1>
          </div>


          <div className='grid md:grid-cols-3 max-w-[1000px] m-auto  p-10 text-center justify-center items-center '>
            <div className='py-5 text-center items-center justify-between flex flex-col '>
              <h1 className='flex  items-center text-white text-2xl font-bold text-center'> <FaStore className='h-10 mr-3' color={'white'} size={40}/> Comercial</h1>
              <p className='text-zinc-300 text-1xl py-2  text-center ml-4 mt-5'>Clássicas na proteção dos comerciantes, sejam para rua ou shopping, a porta de enrolar para comercio é essencial dos pequenos á grandes projetos.</p>
              <a href='/Comercial'><button className='rounded-none px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>DETALHES</button></a>
            </div>


            <div className='py-5 text-center items-center justify-between flex flex-col ml-2'>
              <h1 className='flex  items-center text-white text-2xl font-bold text-center'> <GiHouse className='h-10 mr-3'  color={'white'} size={40}/> Residencial</h1>
              <p className='text-zinc-300 text-1xl py-2  text-center ml-2 mt-5'>A praticidade de uma porta de aço de enrolar se tornou indispensável no dia-a-dia de muitas residências e uma especialidade da Verona.</p>
              <a href='/Residencial'><button className='rounded-none px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>DETALHES</button></a>

            </div>

            <div className='py-5 text-center items-center justify-between flex flex-col ml-2'>
              <h1 className='flex  items-center text-white text-2xl font-bold text-center'><FaIndustry className='h-10 mr-3' color={'white'} size={40}/> Industrial</h1>
              <p className='text-zinc-300 text-1xl py-2  text-center ml-2 mt-5'>A indústria que precisa de portas de aço automáticas e portas de aço manuais, também precisa que elas garantam sua proteção.</p>
              <a href='/Industrial'><button className='rounded-none px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>DETALHES</button></a>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Mid
