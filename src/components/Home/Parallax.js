import React from 'react'

const Parallax = () => {

    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de fazer um orçamento.'
    }

  return (
    <div className='w-screen h-max-[610px] h-full bg-white'>
      <div className='p-10'>
        <h1 className='text-zinc-900 text-center text-2xl md:text-4xl text-bold '>OS CONCORRENTES VENDEM PORTAS DE AÇO</h1>
        <h2 className='text-zinc-900 text-center text-2xl md:text-4xl text-bold '>NÓS VENDEMOS SEGURANÇA</h2>
          <p className='text-zinc-800 text-1xl italic text-center  pt-5'>Para tirar dúvidas ou fazer um orçamento sem compromisso <br></br> entre em contato com a nossa equipe agora mesmo.</p>
          <div className='md:px-10 md:ml-64 md:mb-20 mb-20   px-14 justify-items-center sm:flex sm:justify-items-start'>
            <button onClick={handleClick} className='  rounded-none px-10 md:px-16 py-4 mt-8 text-red-900 bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-red-99'>QUERO FALAR COM A VERONA!</button>
          </div>
      </div>
    </div>
  )
}

export default Parallax