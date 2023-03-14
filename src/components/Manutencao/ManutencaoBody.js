import React from 'react'

const ManutencaoBody = () => {



    return(
        <>        
        <div className='m-0-auto w-full flex-column align-center justify-center bg-red-800'>
            
            
    </div>

        <div className='m-0-auto w-full flex-column align-center justify-center bg-red-800'>
            <div className='pt-8 flex justify-center items-center w-full h-full'>
                <h1 className='text-white text-lg sm:text-5xl font-bold mr-2 ml-2 text-center'>
                    MANUTENÇÃO EM PORTAS AUTOMÁTICAS 
                </h1>
            </div>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl'>É um sistema que dificilmente apresenta defeitos. Quando acontece, é necessário uma visita técnica para identificar a origem do problema.</p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>Mesmo sendo um sistema muito eficiente, existem algumas boas práticas capazes de ajudar a conservá-lo por mais tempo, além de prevenir acidentes e evitar grandes prejuízos. </p>
            </div>
        </div>

        <div className='m-0-auto w-full flex-column align-center justify-center bg-zinc-900'>
            <div className='pt-8 pb-8 flex justify-center items-center w-full h-full'>
                <h1 className='text-white text-lg sm:text-5xl font-bold mr-2 ml-2 p-10 text-center'>
                Foi pensando em você que preparamos uma lista para te ajudar a prevenir prejuízos
                </h1>
            </div>
        </div>

        <div className='m-0-auto w-full flex-column align-center justify-center bg-zinc-900'>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <ul className='list-disc '>
                    <li className='pt-0'>
                    Atente-se sempre à presença de ruídos incomuns;
                    </li>
                    <li className='pt-0'>
                    Verifique a lubrificação das guias a cada seis meses; 
                    </li>
                    <li className='pt-0'>
                    Solicite uma revisão geral a cada dois anos;
                    </li>
                    <li className='pt-0'>
                    Para limpeza das lâminas de aço galvanizadas, utilize um pano úmido, ou em manchas mais graves, um pano umedecido com Thinner;
                    </li>
                    <li className='pt-0'>
                    Evite abrir e fechar a porta sem supervisão. Observe o funcionamento até o fim para garantir 
                    </li>
                </ul>
            </div>
            
        </div>
    

        <div className='m-0-auto w-full flex-column align-center justify-center bg-red-800'>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl'>Se algum problema acontecer, conte com a gente independentemente do caso, o melhor caminho sempre será solicitar ajuda de um suporte profissional. </p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>Além de realizar o diagnóstico, os técnicos da Verona executam o trabalho utilizando o maquinário e ferramentas adequadas e seguindo todos os protocolos de segurança, sempre pensando em amenizar ao máximo seus prejuízos. </p>
                <div className='hidden md:flex '>
                <a href='https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de retirar uma dúvida'><button className='rounded-none px-20 py-2 mt-10 text-white bg-transparent hover:bg-zinc-900 hover:border-zinc-900 hover:text-white border-white'>PRECISO FAZER MANUTENÇÃO</button></a>
                </div>
            </div>
        </div>
    </>
    )
}

export default ManutencaoBody