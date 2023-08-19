import React, {useState} from 'react';
import eixo from '../../assets/eixo2.png'
import guia from '../../assets/guia2.png'
import soleira from '../../assets/soleira2.png'
import cavalete from '../../assets/cavalete2.png'
import etiqueta from '../../assets/etiqueta2.png'
import fechadura from '../../assets/fechadura2.png'
import fita from '../../assets/fita2.png'
import mola from '../../assets/mola2.png'
import tipos from '../../assets/image 41.png'
import Modal from '../Modal/Modal';

const SeManualEstrutura = () => {

    const [showModal, setShowModal] = useState(false)
    
    function handleClick() {
        setShowModal(!showModal)
    }


  return (
    <div className='w-full h-full bg-zinc-900'>

      <div className='h-[150px] w-full bg-red-900 p-10'>
        <h1 className='text-center text-2xl md:text-5xl text-white text-bold'>ESTRUTURA DA PORTA</h1>
      </div>

      <div className='grid md:grid-cols-2 max-w-[1000px]  m-auto  p-10 text-center justify-center items-center space-y-10 md:space-y-0'>
        
      <div className='h-[569px] max-w-[380px] w-[300px] md:w-full  flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>EIXO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>É o item responsável por enrolar as lâminas. No sistema manual, é caracterizado por suas molas. Um bom eixo significa melhor desempenho e durabilidade. </p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={eixo} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col mt-10 md:mt-0'>
                <div className='border-b-2  p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>GUIAS</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Fundamentais na segurança, são responsáveis por conduzir a porta de aço. </p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={guia} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>MOLA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Exerce a função de subir e descer a porta junto ao eixo. </p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={mola} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl '>FITA LATERAL</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Responsáveis por fixar as lâminas umas às outras e garantir que a porta seja conduzida perfeitamente pelas guias laterais.</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none object-cover' src={fita} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>SOLEIRA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Resistente e durável, garante um perfeito acabamento entre a porta de aço e o piso.</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={soleira} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>ETIQUETA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Responsáveis por garantir a fixação entre o eixo e as lâminas da porta de aço manual. </p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={etiqueta} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>CAVALETE</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Após ser fixado nas guias, é nele que o eixo da porta é fixado. Esse componente precisa ser resistente, estar alinhado e muito bem fixado.</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={cavalete} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full   flex flex-col   '>
            
            <div className='  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2  p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>FECHADURA LATERAL</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Item indispensável e presente em todas as nossas fabricações.</p>
                </div>
            </div>

            <img className='w-[300px] md:w-full h-[300px] rounded-b-xl pointer-events-none' src={fechadura} alt='Texto alt' />
       </div>
            

      </div>
      
      <div className='flex flex-col p-10 items-center'>

      <img className='w-[300px] md:w-[40%] md:h-[50%] h-[300px] rounded-b-xl pointer-events-none justify-center' src={tipos} alt='Texto alt' />

            <p className='text-white text-left sm:text-start font-light  text-1xl md:tracking-wider py-10 md:p-20 '>Disponibilizamos a opção de chapa inox para todos os perfis de lâminas.
Atendemos grandes marcas, construtoras, <br></br> arquitetos e engenheiros para projetos de todos os tipos e tamanhos. <br></br> São 30 anos de história e mais de 200.000 projetos concluídos com sucesso.
Quer garantir qualidade e segurança no seu projeto? <br></br> Entre em contato com a nossa equipe e faça uma cotação sem compromisso. Será um grande prazer atendê-lo.
s</p>
            <div className='flex pr-4 pt-5 justify-center items-center '>
                <button className='px-8 py-3 ' onClick={handleClick}>ENTRE EM CONTATO AGORA</button>
            </div>
      </div>
    <Modal
        showModal={showModal}
        setShowModal={setShowModal}
    />
    </div>
  )
}

export default SeManualEstrutura
