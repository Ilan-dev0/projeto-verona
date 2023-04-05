import React from 'react'
import eixo from '../../assets/6.png'
import guia from '../../assets/guia2.png'
import soleira from '../../assets/soleira2.png'
import kit from '../../assets/kit.png'
import tipos from '../../assets/image 38.png'

const SeAutoEstrutura = () => {

  function handleClick() {
    window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de fazer um orçamento.'
}

  return (
    <div className='w-full h-full bg-zinc-900'>

      <div className='h-[150px] w-full bg-red-900 p-10'>
        <h1 className='text-center text-5xl text-white text-bold'>ESTRUTURA</h1>
      </div>

      <div className='grid md:grid-cols-2 max-w-[1000px]  m-auto  p-10 text-center justify-center items-center '>
        
      <div className='h-[569px] max-w-[380px] w-[300px] md:w-full  flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>EIXO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Um tubo reforçado, é o centro do funcionamento da porta de enrolar. Esse é o elemento estrutural principal que define a resistência da porta em vencer grandes vãos. </p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={eixo} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full  flex flex-col   '>
            
            <div className='border-white md:mt-0 mt-12 border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>GUIAS</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Fundamentais na segurança, são responsáveis pela condução da porta de enrolar automática. Quanto mais fundas e mais grossas, maior a segurança.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={guia} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[300px] md:w-full  flex flex-col md:mt-0 mt-28  '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-20 md:px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>SOLEIRA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Resistente e durável, garante um perfeito acabamento entre a porta de aço e o piso, além de ser um dos elementos principais de segurança, dificultando ainda mais as tentativas de arrombamento. </p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={soleira} alt='Texto alt' />
       </div>

       <div className='h-[569px] max-w-[380px] w-[200px] md:w-full md:mt-0 mt-28  flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-18 md:px-20 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>KIT DE AUTOMAÇÃO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Formado pela testeira, motor, botoeira, central de comando e dois controles, é responsável pelo funcionamento das portas de aço automáticas elétricas.</p>
                </div>
            </div>

            <img className='w-[100%] h-[300px] rounded-b-xl pointer-events-none' src={kit} alt='Texto alt' />
       </div>
       
      </div>

      <div className='flex flex-col p-10 items-center'>

      <img className='w-[300px] md:w-[60%] md:h-[60%] h-[300px] mt-28 rounded-b-xl pointer-events-none justify-center' src={tipos} alt='Texto alt' />

            <p className='text-white text-left sm:text-start font-light  text-1xl md:tracking-wider py-10 md:p-20'>Disponibilizamos a opção de chapa inox para todos os perfis de lâminas. <br></br> 
Atendemos grandes marcas, construtoras,arquitetos e engenheiros para projetos de todos os tipos e tamanhos. <br></br> São 30 anos de história e mais de 200.000 projetos concluídos com sucesso. <br></br>
Quer garantir qualidade e segurança no seu projeto? Entre em contato com a nossa equipe e faça uma cotação sem compromisso. Será um grande prazer atendê-lo.</p>
            <div className='flex pr-4 pt-8 justify-center items-center '>
                <button className='px-8 py-3 ' onClick={handleClick}>ENTRE EM CONTATO AGORA</button>
            </div>
      </div>

    </div>
  )
}

export default SeAutoEstrutura
