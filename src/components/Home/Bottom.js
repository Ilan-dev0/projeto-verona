import React from 'react'
import { useEffect, useRef, useState,  } from 'react' 
import { motion } from 'framer-motion'

import clients1 from '../../assets/LOGO CLIENTES/5ASEC.png'
import clients2 from '../../assets/famais.png'
import clients3 from '../../assets/LOGO CLIENTES/ADAPT.jpeg'
import clients4 from '../../assets/LOGO CLIENTES/AUTHENTINC FEET.png'
import clients5 from '../../assets/LOGO CLIENTES/CALVIN KLEIN JEANS.jpg'
import clients6 from '../../assets/LOGO CLIENTES/BAUDUCCO.png'
import clients7 from '../../assets/LOGO CLIENTES/ARAMIS.png'
import clients8 from '../../assets/LOGO CLIENTES/ARTWALK.png'
import clients9 from '../../assets/LOGO CLIENTES/AYRA.png'
import clients10 from '../../assets/LOGO CLIENTES/JOHNS.jpeg'
import clients11 from '../../assets/LOGO CLIENTES/PANDORA.png'
import clients12 from '../../assets/LOGO CLIENTES/OBOTICARIO.png'
import Modal from '../Modal/Modal';



const Bottom = () => {
  
  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -200,
      opacity: 0,
    }
  }

  const images = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8, clients9, clients10, clients11, clients12]

  const carousel = useRef();
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [showModal, setShowModal] = useState(false);

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
      }, [])

      function nextStep(){
        if (index === images.length - 1){
          setIndex(0)
        }
        setIndex(index + 1)
      }

  function handleClick() {
    setShowModal(!showModal)
}

  return (
    <div className='w-screen h-max-[610px] h-full bg-white'>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className='p-10'>
        <h1 className='text-zinc-900 text-center text-4xl text-bold '>QUEM SÃO ELES</h1>
      </div>

      <div className='flex align-center justify-center'>
        <motion.div ref={carousel} className='min-h-[20rem] width-[33%] overflow-hidden' whileTap={{cursor: "grabbing"}}>
            <motion.div className='cursor-grab flex ' whileTap={{cursor: "grabbing"}}
            drag="x"
            dragConstraints={{ right:0, left: -width}}
            initial={{ x: 100 }}
            animate={{ x: [0, -3200, 0, -3200]  }}
            transition={{ duration: 100, times: [0, 0.2, 1] }}
            
            >
                {images.map(image =>(
                    <motion.div className='min-h-[1rem] min-w-[25rem] p-10'  key={image}>
                        <motion.img variants={variants} 
                        animate="animate" 
                        initial='initial' 
                        exit='exit' 
                        className='w-full h-[90%] rounded-xl pointer-events-none object-contain'
                        src={image} alt='Texto alt' />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </div>
          
          <div className='md:px-12  md:mb-20 mb-20 justify-center  px-14 sm:flex sm:justify-items-start'>
            <button onClick={handleClick} className=' rounded-none px-16 py-4 mt-8 text-white bg-green-500 hover:border-green-800 hover:text-white border-green-400'>QUERO COMEÇAR MEU PROJETO AGORA</button>
          </div>

    </div>
  )
}

export default Bottom
