import React from 'react'
import logoimg from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='w-screen h-max-[665px] h-full bg-red-800'>
      <div className='border-b-2  grid md:grid-cols-2 max-w-[1000px] m-auto p-10 text-center justify-between items-center'>
        
            <div className='py-5 text-center items-center '>
              <h1 className='flex px-4 py-2 items-center text-white text-2xl font-bold text-center'>FALE CONOSCO</h1>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>R. REVERENDO JOSÉ CARLOS NOGUEIRA 104 - PQ. MANDI</p>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>11 3924-5606 / 11 3924-0692</p>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>11 98209-6911 / 11 99549-1069 </p>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>94784-4066 / 94709-0583</p>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>VENDAS@VERONAPORTASDEACO.COM.BR</p>
            </div>
            <div className='py-5 text-center items-center '>
              <h1 className='flex px-4 py-2 items-center text-white text-2xl font-bold text-center'>INFORMAÇÕES DA EMPRESA</h1>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>ATENDIMENTO DE:</p>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>SEGUNDA Á SEXTA-FEIRA, DAS 8H ÁS 18HS.</p>
              <p className='text-zinc-300 text-1xl py-2  text-start md:ml-4'>SINTA-SE A VONTADE PARA ENTRAR EM CONTATO PARA QUALQUER PROJETO, NÓS TEREMOS O PRAZER EM ESCLARECER DÚVIDAS.</p>
            </div>
        </div>    

            <div className=' flex flex-col items-center justify-center p-10'>
                <img className='w-[220px] h-[100px] ' src={logoimg} />
                <p className='text-zinc-300 text-1xl py-2  text-start  mt-4'>DESENVOLVIDO POR </p>
            </div>
    </div>
  )
}

export default Footer
