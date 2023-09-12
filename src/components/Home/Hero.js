import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,  } from 'react-icons/bs';
import {RxDotFilled, RxDot} from 'react-icons/rx';
import {FaStore, FaIndustry} from 'react-icons/fa'
import {GiHouse} from 'react-icons/gi'
import imgbg from '../../assets/imgbg.png'
import Modal from '../Modal/Modal';
import { motion } from 'framer-motion';
import slide1 from '../../assets/11.png'
import slide2 from '../../assets/7.png'
import slide3 from '../../assets/11.png'
import slide4 from '../../assets/13.png'

const slides = [
  {
    url: slide1
  },
  {
    url: slide2
  },
  {
    url: slide3
  },
  {
    url: slide4
  },
]

  


const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1 ;
  //   const newIndex = isLastSlide ? 0 :currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };



  // const autoSlide = () => {
  //   const currentIndex 
  // }
 
setInterval(()=> {
  if(currentIndex === 3){
  setCurrentIndex(0)
  }
  else{
    setCurrentIndex(currentIndex+1)
  }
},100000)

  function handleClick() {
    window.location.href = 'https://wa.me//5511947090583?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!'
}

  return (
    <>
      <div className=' w-screen  relative group'>
        <div className=' h-[620px] md:h-[900px] w-full relative group '>
          <div className="bg-black bg-opacity-80  h-[620px] md:h-[900px] w-full absolute pt-60 p-10 md:pb-0 md:pr-0 md:pl-0">
            <h1 className='text-white text-2xl sm:text-6xl font-bold  text-center md:mt-32 '>30 ANOS TRANSFORMANDO <br></br>AÇO EM <span className='text-red-700'>SEGURANÇA</span></h1>
            <div className='md:px-10  md:mb-20 px-14 justify-center sm:flex sm:justify-items-start'>
              <motion.button 
              initial={{ scale: 1.0 }}
              animate={{ scale: [1.0, 1.2, 1.0]  }}
              transition={{ duration: 2, repeat: Infinity }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick} 
              id="button"
              className=' rounded-none px-16 py-4 mt-8 text-white bg-green-500 hover:border-green-800 hover:text-white border-green-400'>
              FAÇA SEU ORÇAMENTO
              </motion.button>
            </div>
          </div>
          <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full  bg-center bg-cover duration-500'></div>
        </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  )
}

export default Hero