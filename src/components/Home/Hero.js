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

  return (
    <div className=' w-screen  relative group'>
      <div className=' h-[720px] w-full  relative group'>
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
