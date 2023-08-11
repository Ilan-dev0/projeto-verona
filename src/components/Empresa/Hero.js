import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,  } from 'react-icons/bs';
import {RxDotFilled, RxDot} from 'react-icons/rx';


const slides = [
  {
    url: 'https://cdn.discordapp.com/attachments/884191786074009640/1088176574903357460/305.jpg'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/884191786074009640/1088176572453888050/718-B.png'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/884191786074009640/1088176574219694191/313.jpg'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/884191786074009640/1088176573271773294/315.png'
  },
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
      <div className=' h-[820px] w-full relative group'>
        
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
