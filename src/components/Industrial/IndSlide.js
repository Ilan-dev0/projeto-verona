import { useEffect, useRef, useState, React } from 'react' 
import { motion } from 'framer-motion'
import image1 from '../../assets/industrial1.png'
import image2 from '../../assets/industrial2.png'
import image3 from '../../assets/industrial3.png'

const images = [image1, image2, image3, image2, image3, image1]

const IndSlide = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])


  return (
    <div className='mt-44 w-full m-0-auto flex-column  align-center justify-center bg-zinc-900'>
    <div className='w-full m-0-auto w-full flex  align-center justify-center bg-zinc-900 pt-10'>
        </div>
            <div className='p-10 sm:pl-40 sm:pr-40 pb-20 w-full justify-center align-center m-0-auto text-center'>
            <p className='text-white text-justify sm:text-start font-light text-lg tracking-wider'>Tamanho não é documento quando se trata de portas de aço em São Paulo, com nosso sistema de portas de aço de enrolar automáticas, você pode vencer grandes larguras e alturas sem colunas de divisão e ainda ter uma economia incrível de espaço, combinada com uma estética imponente. A indústria que precisa de portas de aço automáticas e portas de aço manuais, também precisa que elas garantam sua proteção e suporte grande fluxo de funcionamento, contando com um sistema de qualidade que reflita a dimensão da empresa.</p>
        </div>
        
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
                        <motion.div className='min-h-[200px] min-w-[400px] p-[14px] ' key={image}>
                            <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>


    </div>
  )
}

export default IndSlide
