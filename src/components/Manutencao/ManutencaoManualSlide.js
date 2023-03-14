import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/imgAc1.png'
import image2 from '../../assets/imgAc2.png'
import image3 from '../../assets/imgAc3.png'

const images = [image1, image2, image3, image2, image3, image1]

const ManutencaoManualSlide = () => {


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
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:text-2xl'>Não é qualquer negócio que alcança os 30 anos de história sendo referência do segmento em qualidade e segurança.</p>
                <p className='text-white text-justify sm:text-start mt-10 font-light sm:text-lg sm:text-2xl'>
Após anos de pesquisa de mercado, experiências desafiadoras e projetos bem sucedidos, adquirimos um conhecimento detalhado sobre os nossos produtos e todos seus processos de fabricação, permitindo também oferecer os melhores serviços de manutenção.</p>
                <p className='text-white text-justify sm:text-start mt-10 font-light sm:text-lg sm:text-2xl'>Se você estiver precisando de qualquer tipo de serviço de manutenção de portas de aço manual, entre em contato com a nossa equipe e faça um orçamento sem compromisso.</p>
            <div className='hidden md:flex pr-4 pt-8'>
                <button className='px-8 py-3 ' onClick={handleClick}>Faça um orçamento</button>
            </div>
            </div>
           
        </div>
            
    </div>
  )
}

export default ManutencaoManualSlide