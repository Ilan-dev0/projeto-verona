import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/imgAc1.png'
import image2 from '../../assets/imgAc2.png'
import image3 from '../../assets/imgAc3.png'

const images = [image1, image2, image3, image2, image3, image1]

const ManutencaoSlide = () => {


    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de retirar uma dúvida'
    }

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div className='mt-44 w-full w-full flex align-center justify-center bg-zinc-900'>
        <div className='w-full w-full bg-zinc-900 pt-10 sm:pr-8'>
            <div className='flex align-center justify-center'>
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
                        <motion.div className='min-h-[100px] min-w-[340px] sm:min-w-[400px] p-[14px] ' key={image}>
                            <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            </div>
            
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                    <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:text-2xl'>Somente 27 anos de experiência em portas de aço de enrolar possibilita um diagnóstico sem falhas quando se trata das necessidades de nossos clientes.</p>
                    <p className='text-white text-justify sm:text-start mt-10 font-light sm:text-lg sm:text-2xl'>Na hora de consertar a porta surgem inúmeras dúvidas, entre em contato com a nossa central e esclareça todas elas, agende uma visita e receba um orçamento sem compromisso.</p>
                    <p className='text-white text-justify sm:text-start mt-10 font-light sm:text-lg sm:text-2xl'>Mas para começar a entender melhor a vida útil de sua porta de aço e os problemas, conheça a baixo alguns casos comuns e perguntas frequentes.</p>
                <div className='hidden md:flex pr-4 pt-8'>
                    <button className='px-8 py-3 ' onClick={handleClick}>Faça um orçamento</button>
                </div>
            </div>
            
        </div>
            
    </div>
  )
}

export default ManutencaoSlide