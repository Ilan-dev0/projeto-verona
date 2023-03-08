import React from 'react'

const ManutencaoBody = () => {



    return(
        <>        
        <div className='m-0-auto w-full flex-column align-center justify-center bg-red-800'>
            <div className='pt-8 flex justify-center items-center w-full h-full'>
                <h1 className='text-white text-lg sm:text-5xl font-bold mr-2 ml-2 text-center'>
                    MANUTENÇÃO EM PORTAS DE AÇO DE MANUAIS
                </h1>
            </div>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl'>Os itens mais comuns em apresentarem problemas com o tempo em portas de aço manuais são os que exercem mais esforço, as fitas laterais e as molas. A manutenção dessas partes pode ser necessária após um ano a um ano e meio de instalação e mesmo que depois desse tempo não se note sinais, é essencial uma vistoria preventiva.</p>
                <p className='text-white text-start mt-10 font-light sm:text-lg sm:sm:text-2xl'>“A minha porta está fazendo uns estalos ao enrolar, prendendo e pesada para subir.”
Provavelmente seu problema seja com as fitas laterais.</p>
                <p className='text-white text-start mt-10 font-light sm:text-lg sm:sm:text-2xl'>“A minha porta está pesada e quando fecha ela não enrola direito, o que pode ser?”
Neste caso, talvez seja um problema com suas molas</p>
            </div>
    </div>

        <div className='m-0-auto w-full flex-column align-center justify-center bg-zinc-900'>
            <div className='pt-8 flex justify-center items-center w-full h-full'>
                <h1 className='text-white text-lg sm:text-5xl font-bold mr-2 ml-2 text-center'>
                    MANUTENÇÃO EM PORTAS AUTOMÁTICAS EM GERAL
                </h1>
            </div>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl'>Este sistema dificilmente apresenta problemas, quando nota-se algum pode ser do mais simples ao mais trabalhoso. No caso das portas de enrolar automáticas é essencial uma visita para qualquer diagnóstico, fique sempre atento ás manutenções que são realizadas em sua porta, ela pode ser desregulada facilmente e perder eficácia em sua durabilidade.</p>
            </div>
        </div>

        <div className='m-0-auto w-full flex-column align-center justify-center bg-red-800'>
            <div className='pt-8 pb-8 flex justify-center items-center w-full h-full'>
                <h1 className='text-white text-lg sm:text-5xl font-bold mr-2 ml-2 text-center'>
                    O MELHOR JEITO É PREVENIR
                </h1>
            </div>
        </div>

        <div className='m-0-auto w-full flex-column align-center justify-center bg-zinc-900'>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl'>Fique sempre atento a presença de ruídos incomuns no funcionamento da porta de aço.</p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>Mantenha as guias da porta de aço lubrificadas, o ideal é verificar a lubrificação a cada seis meses, isso ajuda a ter um melhor funcionamento.</p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>Solicite uma revisão geral em sua porta de aço em períodos de dois anos, isso pode ajudar a prever danos e manter a sua porta de aço sempre em bom funcionamento.</p>
                <div className='hidden md:flex pr-4 pt-8'>
                    <button className='px-8 py-3 '>Veja todas as dicas</button>
                </div>
            </div>
            
        </div>
    
    </>
    )
}

export default ManutencaoBody