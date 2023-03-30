import React from 'react'

const Mapa = () => {
  return (
    <div className=' h-full w-full'>
        <div className='p-20 w-full h-full bg-zinc-900 justify-center '>
            <div className='md:p-10 space-y-10'>
                <p className='text-white text-justify sm:text-start font-light text-xs md:tracking-wider'>Localizada na região norte de São Paulo, conquistou a confiança dos clientes por utilizar em suas fabricações as melhores matérias primas do mercado, maquinário de última geração e tendo à disposição uma equipe especializada em soluções comerciais, industriais e residenciais.</p>
                <p className='text-white text-justify sm:text-start font-light text-xs md:tracking-wider'>Um de nossos grandes diferenciais é ter uma rigorosa política de qualidade que oferece treinamentos de capacitação e segurança ao time técnico a cada três meses. Assim, seguimos atualizados quanto às novidades do mercado e sempre à frente dos nossos concorrentes.</p>
                <p className='text-white text-justify sm:text-start font-light text-xs md:tracking-wider'>
A Verona Portas de Aço conta com uma infraestrutura completa para atender os clientes em São Paulo e nos estados da região Sul e Sudeste. Aqui você irá comprar com uma empresa consolidada e validada no mercado, que passa a anos por consecutivas evoluções técnicas e aprimoramentos. Obra é coisa séria e a Verona é especialista. </p>
                <p className='text-white text-justify sm:text-start font-light text-xs md:tracking-wider'>Tudo o que você precisa para garantir a máxima proteção no seu projeto.</p>
                <p className='text-white text-justify sm:text-start font-light text-xs md:tracking-wider'>Para mais informações sobre os produtos, serviços ou para fazer uma cotação sem compromisso, clique no botão abaixo e fale agora mesmo com a nossa equipe!</p>
            
            </div>
            <div className='md:p-10 py-10  grid md:grid-cols-2  m-auto  text-center justify-between items-center'>
                <div className='w-max-sm md:h-[500px] h-[100%] '>
                    <h1 className='text-white text-bold text-3xl text-start mb-8'>Mapa de presença</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3368101595493!2d-46.6814219!3d-23.484375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef99f3bb1b6db%3A0xb5b7c61abab7d8d6!2sVERONA%20PORTAS%20DE%20A%C3%87O!5e0!3m2!1spt-BR!2sbr!4v1677197729043!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{border: "0"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='flex flex-col max-w-[300px] justify-center text-center align-middle w-max-sm mt-28 md:mt-0 md:ml-20'>
                    <h1 className='text-white text-bold text-3xl text-center mb-2 mt-20'>ÁREAS DE ATUAÇÃO</h1>
                    <a href='/Comercial'><button className=' md:px-40 px-12 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>COMERCIAL</button></a>
                    <a href='/Residencial'><button className=' md:px-40 px-12 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>RESIDENCIAL</button></a>
                    <a href='/Industrial'><button className=' md:px-40 px-12 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>INDUSTRIAL</button></a>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Mapa