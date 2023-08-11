import { useEffect, useRef, useState, React } from 'react' 
import { motion } from 'framer-motion'
import client1 from '../../assets/PROVA SOCIAL/JUNHO-23/10.jpg'
import client2 from '../../assets/PROVA SOCIAL/JUNHO-23/11.jpg'
import client3 from '../../assets/PROVA SOCIAL/JUNHO-23/9.jpg'
import bagulho from '../../assets/bagulho.png'
import client4 from '../../assets/PROVA SOCIAL/JUNHO-23/7.jpg'
import client5 from '../../assets/PROVA SOCIAL/JUNHO-23/5.jpg'
import client6 from '../../assets/PROVA SOCIAL/JUNHO-23/4.jpg'
import client7 from '../../assets/PROVA SOCIAL/JUNHO-23/3.jpg'
import client8 from '../../assets/PROVA SOCIAL/JUNHO-23/2.jpg'

const Clients = () => {

  const images = [client1, client2, client3, client4, client5, client6, client7, client8 ]

  const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div className='w-screen h-max-[1225px] h-full bg-zinc-900 md:flex flex-col pb-10'>
      <div className='p-10'>
        <h1 className='text-white text-center text-4xl text-bold'>NOSSOS CLIENTES APROVAM</h1>
      </div>
      <div className='md:flex  justify-center'>
      <motion.div ref={carousel} className='min-h-[20rem] width-[33%] overflow-hidden' whileTap={{cursor: "grabbing"}}>
            <motion.div className='cursor-grab  flex'
            drag="x"
            dragConstraints={{ right:0, left: -width}}
            initial={{ x: 100 }}
            animate={{ x:0 }}
            trasition={{ duration: 0.8 }}
            >
                {images.map(image =>(
                    <motion.div className='max-w-sm  max-h-[500px]  bg-red-900 rounded-2xl py-9 m-10 flex-col flex items-center min-h-[15rem] min-w-[30rem]'  key={image}>
                        <img className='w-full h-[100%] pointer-events-none object-contain' src={image} alt='Texto alt' />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
      
      </div>
    </div>
  )
} 

export default Clients
