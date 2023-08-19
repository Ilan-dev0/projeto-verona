import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/18.JPG'
import image2 from '../../assets/5.png'
import image3 from '../../assets/67.png'
import image4 from '../../assets/metal1.jpg'
import Modal from '../Modal/Modal';

const images = [image1, image2, image3, image4]

const SeManualSlide = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

    const [showModal, setShowModal] = useState(false)
    
    function handleClick() {
        setShowModal(!showModal)
    }

  return (
    <div className='mt-20 w-full m-0-auto   flex-column  align-center justify-center bg-zinc-900'>
        <div className='w-full m-0-auto  flex  align-center justify-center bg-zinc-900 pt-10'>
            <motion.div ref={carousel} className='cursor-grab overflow-hidden max-w-[1200px] h-[300px]' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className='flex'
                drag="x"
                dragConstraints={{ right:0, left: -width}}
                initial={{ x: 100 }}
                animate={{ x:0 }}
                trasition={{ duration: 0.8 }}
                >
                    {images.map(image =>(
                        <motion.div className='min-h-[100px] min-w-[340px] sm:min-w-[400px]   p-[14px] ' key={image}>
                            <img className='w-full h-[50%] rounded-xl pointer-events-none object-cover' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
            <div className='p-10 sm:pl-40 sm:pr-40 pb-10 w-full justify-center align-center m-0-auto text-center'>
            <p className='text-white  sm:text-start font-light text-lg tracking-wider'>Suas lâminas de aço galvanizado associadas aos demais componentes, conferem às portas de aço manuais de enrolar, resistência, durabilidade e funcionalidade. Clássicas nas fachadas comerciais, hoje as portas de aço manuais são destaque em diversos projetos de interiores, com estilos que vão do clássico ao industrial.</p>
            <p className='text-white  sm:text-start font-light text-lg tracking-wider'>O custo de uma porta de aço de enrolar manual se torna muito mais acessível, sem perder a qualidade em acabamento e segurança.</p>
            <p className='text-white  sm:text-start font-light text-lg tracking-wider'>Simples e práticas, nossas portas de aço manuais saem da produção com a melhor matéria-prima do mercado.</p>
            </div>

            <div className='flex justify-center justify-items-center sm:flex sm:justify-items-start'>
            <button id='button' onClick={handleClick} className=' mb-10 rounded-none px-2 md:px-16 py-4  text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>QUERO FAZER UM ORÇAMENTO</button>
            </div>
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
        />
    </div>
  )
}

export default SeManualSlide
