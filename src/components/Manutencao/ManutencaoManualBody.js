import React from 'react'

const ManutencaoManualBody = () => {
  return (
    <div>
      <div className='m-0-auto w-full flex-column align-center justify-center bg-red-800'>
            <div className='pt-8 flex justify-center items-center w-full h-full'>
                <h1 className='text-white text-lg sm:text-5xl font-bold mr-2 ml-2 text-center'>
                    MANUTENÇÃO EM PORTAS MANUAIS
                </h1>
            </div>
            <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto'>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl'>Os itens que mais apresentam problemas nesse tipo de sistema são aqueles que exercem o maior esforço no longo prazo: as fitas laterais e as molas. </p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>A manutenção desses componentes deve ser feita após um ano da instalação, mesmo não apresentando qualquer tipo de problema, como medida preventiva.</p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>“A minha porta está fazendo estalos ao enrolar, prendendo e pesada para subir.” Provavelmente seu problema seja com as fitas laterais. </p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>“A minha porta está pesada e quando fecha não enrola direito.” Talvez seja um problema com as molas. </p>
                <p className='text-white text-justify sm:text-start font-light sm:text-lg sm:sm:text-2xl mt-10'>
Independentemente do caso, o melhor caminho sempre será solicitar ajuda de um suporte profissional. Além de realizar o diagnóstico, os técnicos da Verona executam o trabalho utilizando o maquinário e ferramentas adequadas e seguindo todos os protocolos de segurança. </p>
                    <div className='hidden md:flex '>
                <a href='https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de retirar uma dúvida'><button className='rounded-none px-20 py-2 mt-10 text-white bg-transparent hover:bg-zinc-900 hover:border-zinc-900 hover:text-white border-white'>PRECISO FAZER MANUTENÇÃO</button></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ManutencaoManualBody
