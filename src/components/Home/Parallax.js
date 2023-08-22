import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { motion } from 'framer-motion';

const Parallax = () => {

  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal)
  }

  return (
    <div className='w-screen h-max-[610px] h-full bg-white'>
      <div className='p-10'>
        <h1 className='text-zinc-900 text-center text-2xl md:text-4xl text-bold '>OS CONCORRENTES VENDEM PORTAS DE AÇO</h1>
        <h2 className='text-zinc-900 text-center text-2xl md:text-4xl text-bold '>NÓS VENDEMOS SEGURANÇA</h2>
          <p className='text-zinc-800 text-1xl italic text-center  pt-5'>Para tirar dúvidas ou fazer um orçamento sem compromisso <br></br> entre em contato com a nossa equipe agora mesmo.</p>
          <div className='md:px-10  md:mb-20    px-14 justify-center sm:flex sm:justify-items-start'>
            <motion.button 
            initial={{ scale: 1.0 }}
            animate={{ scale: [1.0, 1.2, 1.0]  }}
            transition={{ duration: 2, repeat: Infinity }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick} className='rounded-none px-16 py-4 mt-8 text-white bg-green-500 hover:border-green-800 hover:text-black border-green-400'>QUERO FALAR COM A VERONA!</motion.button>
          </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default Parallax
