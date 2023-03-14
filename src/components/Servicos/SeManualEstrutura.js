import React from 'react'
import eixo from '../../assets/eixom.png'
import guia from '../../assets/guias.png'
import soleira from '../../assets/soleira.png'
import cavalete from '../../assets/cavalete.png'
import etiqueta from '../../assets/etiqueta.png'
import fechadura from '../../assets/fechadura.png'
import fita from '../../assets/fita.png'
import mola from '../../assets/mola.png'

const SeManualEstrutura = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>

      <div className='h-[150px] w-full bg-red-800 p-10'>
        <h1 className='text-center text-5xl text-white text-bold'>ESTRUTURA DA PORTA</h1>
      </div>

      <div className='grid md:grid-cols-2 max-w-[1000px]  m-auto  p-10 text-center justify-center items-center '>
        
      <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>EIXO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={eixo} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>GUIAS</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={guia} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>MOLA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={mola} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>FITA LATERAL</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={fita} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>SOLEIRA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={soleira} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>ETIQUETA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={etiqueta} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>CAVALETE</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={cavalete} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>FECHADURA LATERAL</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={fechadura} alt='Texto alt' />
       </div>

      </div>

    </div>
  )
}

export default SeManualEstrutura
