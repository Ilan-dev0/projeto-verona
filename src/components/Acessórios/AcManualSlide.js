import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion'

import image1 from '../../assets/img18.png'
import image2 from '../../assets/img19.png'
import image3 from '../../assets/img17.png'

const images = [image1, image2, image3, image2, image3, image1]

const AcManualSlide = () => {
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
                        <motion.div className='min-h-[100px] min-w-[340px] sm:min-w-[400px] p-[14px] sm:min-w-[400px] p-[14px]' key={image}>
                            <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
            
    </div>
  )
}

export default AcManualSlide
