import React from 'react'

const Mapa = () => {
  return (
    <div className=' h-full w-full'>
        <div className='p-20 w-full h-full bg-zinc-900 justify-center'>
            <div className='pb-20  grid md:grid-cols-2  m-auto  text-center justify-between items-center'>
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
                <div className='flex flex-col max-w-[300px] justify-center text-center align-middle mt-28 md:mt-0 md:ml-20'>
                    <h1 className='text-white text-bold text-3xl text-center mb-2 mt-20'>ÁREAS DE ATUAÇÃO</h1>
                    <a href='/Comercial'><button className=' md:px-40 px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>COMERCIAL</button></a>
                    <a href='/Residencial'><button className=' md:px-40 px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>RESIDENCIAL</button></a>
                    <a href='/Industrial'><button className=' md:px-40 px-20 py-2 mt-4 text-white bg-transparent hover:bg-red-800 hover:border-red-800 hover:text-white border-white'>INDUSTRIAL</button></a>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Mapa