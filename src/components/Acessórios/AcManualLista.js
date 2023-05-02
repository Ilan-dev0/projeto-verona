import React from 'react'
import cadeado from '../../assets/cadeado.png'
import portinhola from '../../assets/portinhola.png'
import pintura from '../../assets/pintura.jpg'


const AcManualLista = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>

      <div className='h-[150px] w-full bg-red-900 p-10'>
        <h1 className='text-center text-2xl md:text-5xl text-white text-bold'>ACESSÓRIOS</h1>
      </div>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2  max-w-[1000px]  m-auto  p-10 text-center  items-center '>
        
        
      <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-18 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>CADEADO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Já que segurança nunca é demais, a Verona oferece os melhores cadeados do mercado.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={cadeado} alt='Texto alt' />
       </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-18 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>PORTINHOLA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Ideal para comércios, possibilita a entrada e saída de pessoas enquanto a porta estiver fechada. Sabendo do risco de se ter uma abertura adicional, a Verona realiza a fabricação das portinholas com estruturas reforçadas e perfeitamente encaixadas às lâminas da porta de aço.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={portinhola} alt='Texto alt' />
        </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-18 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>PINTURA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Todas as lâminas, soleira e guias laterais são revestidas por uma película de polímero termo-endurecível colorido (pó de poliéster), oferecendo maior durabilidade na pintura e permitindo diferentes possibilidades de personalização.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none object-cover' src={pintura} alt='Texto alt' />
        </div>
        

      </div>

    </div>
  )
}

export default AcManualLista
