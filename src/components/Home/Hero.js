import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,  } from 'react-icons/bs';
import {RxDotFilled, RxDot} from 'react-icons/rx';
import {FaStore, FaIndustry} from 'react-icons/fa'
import {GiHouse} from 'react-icons/gi'
import imgbg from '../../assets/imgbg.png'

const slides = [
  {
    url: 'https://cdn.discordapp.com/attachments/900426265402687498/1079812947951493262/29.png'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/900426265402687498/1079811965263826964/8.png'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/900426265402687498/1079811965913931776/9.png'
  }
]

  


const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1 ;
    const newIndex = isLastSlide ? 0 :currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  function handleClick() {
    window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de fazer um orçamento.'
}

  return (
    <div className=' w-screen  relative group'>
      <div className=' h-[820px] w-full relative group'>
        <div className="bg-black bg-opacity-80 h-[820px] w-full absolute pt-80 sm:pt-80">
          <h1 className='text-white text-3xl sm:text-7xl font-bold text-center sm:text-start sm:pl-60'>VERONA PORTAS DE AÇO</h1>
          <p className='text-zinc-300 text-1xl pt-4 sm:text-2xl sm:pl-60 text-center sm:text-start' >“Há 30 anos, transformando aço em segurança.”</p>
          <p className='text-zinc-300 text-1xl pt-4 italic sm:pl-60 text-center sm:text-start'> A Verona é referência desde 1993 porque sabe que segurança não é brincadeira. É pré-requisito de fábrica.</p>
          <p className='text-zinc-300 text-1xl italic sm:pl-60 text-center sm:text-start'>Matéria-prima mais resistente, maquinário moderno e suporte profissionalizado são alguns dos diferenciais que <br></br> encantam nossos clientes em três décadas de história.</p>
          <div className='grid justify-items-center sm:flex sm:justify-items-start'>
            <button onClick={handleClick} className=' sm:ml-60 rounded-none px-16 py-4 mt-8 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>FAÇA SEU ORÇAMENTO</button>
          </div>
        </div>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full  bg-center bg-cover duration-500'></div>
        {/* Seta da esquerda */}
        <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Seta da direita */}
        <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* Pontos */}
        <div className='flex  justify-center absolute top-[95%] right-1 left-1'>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default Hero