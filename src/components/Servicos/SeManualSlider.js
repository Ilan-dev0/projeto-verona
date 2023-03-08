import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/img4.png'
import image2 from '../../assets/img5.png'
import image3 from '../../assets/img6.png'

const images = [image1, image2, image3, image2, image3, image1]

const SeManualSlide = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div className='mt-44 w-full m-0-auto min-w-[100vh]  flex-column  align-center justify-center bg-zinc-900'>
        <div className='w-full m-0-auto min-w-[100vh] flex  align-center justify-center bg-zinc-900 pt-10'>
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
                        <motion.div className='min-h-[200px] min-w-[400px] p-[14px] ' key={image}>
                            <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
            <div className='p-10 pl-48 pb-20 max-w-[1300px] justify-center align-center m-0-auto'>
            <p className='text-white text-start font-thin'>Suas lâminas de aço galvanizado associadas aos demais componentes, conferem às portas de aço manuais de enrolar, resistência, durabilidade e funcionalidade. Clássicas nas fachadas comerciais, hoje as portas de aço manuais são destaque em diversos projetos de interiores, com estilos que vão do clássico ao industrial.</p>
            <p className='text-white text-start mt-10 font-thin'>O custo de uma porta de aço de enrolar manual se torna muito mais acessível, sem perder a qualidade em acabamento e segurança.</p>
            <p className='text-white text-start mt-10 font-thin'>Simples e práticas, nossas portas de aço manuais saem da produção com a melhor matéria-prima do mercado.</p>
            </div>
    </div>
  )
}

export default SeManualSlide
