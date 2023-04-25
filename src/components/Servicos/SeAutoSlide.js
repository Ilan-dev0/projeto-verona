import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/8.png'
import image2 from '../../assets/110.png'
import image3 from '../../assets/48.png'
import image4 from '../../assets/magic.png'

const images = [image1, image2, image3, image4]

const SeAutoSlide = () => {

    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de fazer um orçamento.'
    }

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div className='mt-20 w-full m-0-auto   flex-column  align-center justify-center bg-zinc-900'>
        <div className='w-full m-0-auto  flex  align-center justify-center bg-zinc-900 pt-10'>
            <motion.div ref={carousel} className='cursor-grab overflow-hidden max-w-[1200px]' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className='flex'
                drag="x"
                dragConstraints={{ right:0, left: -width}}
                initial={{ x: 100 }}
                animate={{ x:0 }}
                trasition={{ duration: 0.8 }}
                >
                    {images.map(image =>(
                        <motion.div className='h-[500px] min-w-[340px] sm:min-w-[400px]  p-[14px]' key={image}>
                            <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
            <div className='p-10 sm:pl-40 sm:pr-40 pb-10 w-full justify-center align-center m-0-auto text-center'>
            <p className='text-white sm:text-start font-light text-lg tracking-wider'>A aplicação das portas de aço automáticas de enrolar está voltada para as Indústrias, Comércios, Centros Logísticos, Hangares, Shoppings Center, e agora também para Residências, em novos projetos que a utilizam inclusive em ambientes internos, suprindo todo o segmento com uma solução simples e eficaz nos quesitos espaço, ergonomia e, principalmente, manutenção.</p>
            <p className='text-white sm:text-start font-light text-lg tracking-wider'>Grandes clientes fazem parte de nossa história, atestando a qualidade que a nossa empresa oferece ao mercado nacional quando o assunto é a instalação de portas de aço automáticas.s</p>
            </div>

            <div className='flex justify-center justify-items-center sm:flex sm:justify-items-start'>
            <button onClick={handleClick} className=' mb-10 rounded-none px-16 py-4 mt-8 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>QUERO FAZER UM ORÇAMENTO</button>
            </div>
    </div>
  )
}

export default SeAutoSlide
