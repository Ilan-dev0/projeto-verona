import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/img4.png'
import image2 from '../../assets/img5.png'
import image3 from '../../assets/img6.png'

const images = [image1, image2, image3, image2, image3, image1]

const SeAutoSlide = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div className='mt-44 w-full m-0-auto   flex-column  align-center justify-center bg-zinc-900'>
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
                        <motion.div className='min-h-[100px] min-w-[340px] sm:min-w-[400px]  p-[14px]' key={image}>
                            <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
            <div className='p-10 sm:pl-40 sm:pr-40 pb-20 w-full justify-center align-center m-0-auto text-center'>
            <p className='text-white text-justify sm:text-start font-light text-lg tracking-wider'>A aplicação das portas de aço automáticas de enrolar está voltada para as Indústrias, Comércios, Centros Logísticos, Hangares, Shoppings Center, e agora também para Residências, em novos projetos que a utilizam inclusive em ambientes internos, suprindo todo o segmento com uma solução simples e eficaz nos quesitos espaço, ergonomia e, principalmente, manutenção.</p>
            <p className='text-white text-justify sm:text-start font-light text-lg tracking-wider'>Grandes clientes fazem parte de nossa história, atestando a qualidade que a nossa empresa oferece ao mercado nacional quando o assunto é a instalação de portas de aço automáticas.s</p>
            </div>
    </div>
  )
}

export default SeAutoSlide
