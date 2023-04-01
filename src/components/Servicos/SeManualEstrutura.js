import React from 'react'
import eixo from '../../assets/eixo2.png'
import guia from '../../assets/guia2.png'
import soleira from '../../assets/soleira2.png'
import cavalete from '../../assets/cavalete2.png'
import etiqueta from '../../assets/etiqueta2.png'
import fechadura from '../../assets/fechadura2.png'
import fita from '../../assets/fita2.png'
import mola from '../../assets/mola2.png'
import tipos from '../../assets/image 41.png'

const SeManualEstrutura = () => {

    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de retirar uma dúvida'
    }


  return (
    <div className='w-full h-full bg-zinc-900'>

      <div className='h-[150px] w-full bg-red-900 p-10'>
        <h1 className='text-center text-2xl md:text-5xl text-white text-bold'>ESTRUTURA DA PORTA</h1>
      </div>

      <div className='grid md:grid-cols-2 max-w-[1000px]  m-auto  p-10 text-center justify-center items-center '>
        
      <div className='h-[569px] max-w-[427px] w-[300px] md:w-full  flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>EIXO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={eixo} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>GUIAS</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={guia} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>MOLA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={mola} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-sm md:max-w-[400px] '>
                    <h1 className='text-white text-2xl'>FITA LATERAL</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={fita} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>SOLEIRA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={soleira} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>ETIQUETA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={etiqueta} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>CAVALETE</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={cavalete} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[427px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>FECHADURA LATERAL</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={fechadura} alt='Texto alt' />
       </div>
            

      </div>
      
      <div className='flex flex-col p-10 items-center'>

      <img className='w-[300px] md:w-[40%] md:h-[50%] h-[300px] rounded-b-xl pointer-events-none justify-center' src={tipos} alt='Texto alt' />

            <p className='text-white p-20'>Disponibilizamos a opção de chapa inox para todos os perfis de lâminas.
Atendemos grandes marcas, construtoras, <br></br> arquitetos e engenheiros para projetos de todos os tipos e tamanhos. <br></br> São 30 anos de história e mais de 200.000 projetos concluídos com sucesso.
Quer garantir qualidade e segurança no seu projeto? <br></br> Entre em contato com a nossa equipe e faça uma cotação sem compromisso. Será um grande prazer atendê-lo.
s</p>
            <div className='flex pr-4 pt-8 justify-center items-center '>
                <button className='px-8 py-3 ' onClick={handleClick}>ENTRE EM CONTATO AGORA</button>
            </div>
      </div>

    </div>
  )
}

export default SeManualEstrutura
