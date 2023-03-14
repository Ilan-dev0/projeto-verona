import React from 'react'
import client1 from '../../assets/jailton.png'
import client2 from '../../assets/leila.png'
import client3 from '../../assets/cris.png'
import bagulho from '../../assets/bagulho.png'

const Clients = () => {
  return (
    <div className='w-screen h-max-[1225px] h-full bg-zinc-900 md:flex flex-col '>
      <div className='p-10'>
        <h1 className='text-white text-center text-4xl text-bold'>NOSSOS CLIENTES APROVAM</h1>
      </div>
      <div className='md:flex  justify-center'>
        <div className='max-w-sm  max-h-[500px] h-full bg-white rounded-2xl py-9 m-10 flex-col flex items-center'>
          <img className='w-[200px] ' src={client1}/>
          <h1 className='text-center text-bold text-3xl'>Jailton</h1>
          <p className='text-center'>Lojas Magic Feet</p>
          <img className='w-[60px] ' src={bagulho}/>
          <p className='text-center md:text-2xl text-xl  max-w-[3000px]'>Parabéns, realmente foi ótimo o serviço prestado pra gente, resolveu com agilidade e seriedade as nossas lojas</p>
        </div>
        <div className='max-w-sm  max-h-[600px] h-full bg-white rounded-2xl py-9 m-10 flex-col flex items-center'>
          <img className='w-[200px] ' src={client2}/>
          <h1 className='text-center text-bold text-3xl'>Leila Nascimento</h1>
          <p className='text-center'>Lojas Camisaria Colombo</p>
          <img className='w-[60px] ' src={bagulho}/>
          <p className='text-center md:text-2xl max-w-[400px] text-xl'>Nós da Camisaria Colombo agradecemos e parabenizamos os profissionais da empresa Portas Verona pela excelência, dedicação e competência em seu atendimento.</p>
        </div>
        
        <div className='max-w-sm  max-h-[500px] h-full bg-white rounded-2xl py-9 m-10 flex-col flex items-center'>
        <img className='w-[200px] ' src={client3}/>
          <h1 className='text-center text-bold text-3xl'>Cristiane Lucas</h1>
          <p className='text-center'>Adapt Engenharia</p>
          <img className='w-[60px] ' src={bagulho}/>
          <p className='text-center text-2xl p-2  max-w-[300px]'>Empresa com pessoas competentes e pontuais.</p>
        </div>
      </div>
    </div>
  )
}

export default Clients
