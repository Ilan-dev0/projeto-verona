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
            <h1 className='text-white md:text-5xl font-bold text-center '>ATENDEMOS PROJETOS:</h1>
          </div>


          <div className='grid md:grid-cols-3 max-w-[1000px] m-auto  p-5 md:space-x-20'>
            <div className='py-5 text-center items-center justify-between flex flex-col '>
              <h1 className='flex  items-center text-white text-2xl font-bold text-center'> <FaStore className='h-10 mr-3' color={'white'} size={40}/> Comercial</h1>
              <p className='text-zinc-300 text-1xl py-2  text-center  mt-5'>A campeã de vendas e a melhor solução para projetos comerciais, as portas automáticas trazem segurança e estética, valorizando ainda mais a sua fachada.</p>
              <a href='/Comercial'><button className='rounded-none px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>DETALHES</button></a>
            </div>


            <div className='py-5 text-center items-center justify-between flex flex-col ml-2'>
              <h1 className='flex  items-center text-white text-2xl font-bold text-center'> <GiHouse className='h-10 mr-3'  color={'white'} size={40}/> Residencial</h1>
              <p className='text-zinc-300 text-1xl py-2  text-center  mt-5'>Para a garagem, dispensa ou até um closet, a porta de aço vem conquistando espaço nos projetos residenciais, por ocupar um espaço mínimo, unindo estética e funcionalidade.</p>
              <a href='/Residencial'><button className='rounded-none px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>DETALHES</button></a>

            </div>

            <div className='py-5 text-center items-center justify-between flex flex-col ml-2'>
              <h1 className='flex  items-center text-white text-2xl font-bold text-center'><FaIndustry className='h-10 mr-3' color={'white'} size={40}/> Industrial</h1>
              <p className='text-zinc-300 text-1xl py-2  text-center  mt-5'>Portas de aço galvanizado com estruturas reforçadas e sistemas capazes de suportar grandes fluxos de funcionamento, independente da altura e largura da fachada</p>
              <a href='/Industrial'><button className='rounded-none px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>DETALHES</button></a>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Mid
