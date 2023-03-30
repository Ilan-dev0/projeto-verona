import { useEffect, useRef, useState, React } from 'react' 
import { motion } from 'framer-motion'
import project1 from '../../assets/18.png'
import project2 from '../../assets/245.png'
import project3 from '../../assets/51.png'
import project4 from '../../assets/48.png'
import project5 from '../../assets/9.png'
import project6 from '../../assets/19.png'



const Projects = () => {

  const images = [project1, project2, project3, project4, project5, project6]

  const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div className='w-screen h-max-[940px] h-full bg-[#690005] '>
      <div className='flex flex-col justify-center m-auto '>
        <div className='flex flex-row text-center items-center justify-center'>
            <h1 className='py-4 px-2 text-white text-bold md:text-3xl text-2xl'>ALGUNS DOS NOSSOS PROJETOS</h1>
        </div>

        <div className='p-10 sm:pl-40 sm:pr-40 pb-20 w-full justify-center align-center m-0-auto text-center '>
        <p className='text-white text-justify sm:text-start font-light text-lg tracking-wider'>Clássicas na proteção dos comerciantes, sejam para rua ou shopping, a porta de enrolar para comercio é essencial dos pequenos á grandes projetos. Para o comerciante, lojista ou até proprietário que pretende valorizar seu imóvel para locação, a porta de aço de enrolar é certeza de praticidade, pouco espaço e segurança. Para poder garantir ao cliente modelos de portas de aço automáticas e portas de aço manuais fortes, trabalhamos com chapas de grande espessura e com as melhores travas e cadeados do mercado, porque é só trabalhando com uma matéria-prima excelente que se consegue ser sinônimo de resistência.
        </p>
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
                    <motion.div className='min-h-[100px] min-w-[340px] sm:min-w-[400px] p-[14px] sm:min-w-[400px] p-[14px]' key={image}>
                        <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Projects
