import { useEffect, useRef, useState, React } from 'react' 
import { motion } from 'framer-motion'
import image1 from '../../assets/residencial1.png'
import image2 from '../../assets/residencial2.png'
import image3 from '../../assets/residencial3.png'

const images = [image1, image2, image3, image2, image3, image1]

const ResSlide = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])


  return (
    <div className='mt-44 w-full m-0-auto   flex-column  align-center justify-center bg-zinc-900'>
    <div className='w-full m-0-auto w-full flex  align-center justify-center bg-zinc-900 pt-10'>
        </div>
            <div className='p-10 sm:pl-40 sm:pr-40 pb-20 w-full justify-center align-center m-0-auto text-center'>
            <p className='text-white text-justify sm:text-start font-light text-lg tracking-wider'>A praticidade e o design de uma porta de aço de enrolar se tornaram indispensáveis no dia-a-dia de muitas residências e uma especialidade da Verona Portas de Aço. Para a garagem, um closet ou para a dispensa, a porta de aço de enrolar para residência vem conquistando cada vez mais espaço nos projetos. Tendo a sua disposição diversas opções de sistemas, lâminas, acessórios e acabamentos, o engenheiro, arquiteto ou cliente final, se vê com a possibilidade de infinitas combinações. Seja para um ambiente interno ou externo, quando se quer poupar espaço garantindo ainda segurança e estética, com certeza a porta de aço de enrolar é a melhor opção.Pensando nisso, a Verona Portas de Aço conta com profissionais capacitados para entender e te auxiliar em seus projetos, oferecendo inclusive acessórios de portas de aço automáticas, reformas de portas de aço, acessórios de portas de aço manuais e manutenção de portas de aço, buscando sempre atender todas as necessidades do cliente com a melhor solução no mercado de portas de aço.</p>
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

export default ResSlide
