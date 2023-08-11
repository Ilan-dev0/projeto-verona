import React from 'react'
import project1 from '../../assets/vm4.png'
import project2 from '../../assets/vm5.png'
import project3 from '../../assets/vm3.png'
import project4 from '../../assets/vm1.png'
import project5 from '../../assets/vm2.png'
import project6 from '../../assets/vm6.png'

const Reference = () => {

    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de fazer um orçamento.'
    }

  return (
    <div className='w-screen h-max-[940px] h-full bg-[#690005]'>
      <div className='flex flex-col justify-center m-auto '>
        <div className=' text-center items-center justify-center p-5 mt-10'>
            <h1 className='py-4 px-2 text-white text-bold md:text-3xl text-2xl'>POR QUE A VERONA É REFERÊNCIA EM SEGURANÇA?</h1>
            <h2 className='py-4  text-white text-bold '>Porque utilizamos a melhor matéria-prima do mercado.</h2>
        </div>

        <div class="flex min-h-screen items-center justify-center p-10  ">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project1} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Aço galvanizado</h1>
                  <p class="mb-20 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Maior durabilidade e resistente à umidade e corrosão</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project2} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Lâminas com chapas 22</h1>
                  <p class="mb-20 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A mais grossa com indicação técnica para a área</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project3} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Soleiras reforçadas</h1>
                  <p class="mb-20 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Tubo de 80x40, dificultado ainda mais os arrombamentos</p>
                </div>
              </div>

              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project4} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Eixos de 3mm</h1>
                  <p class="mb-20 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Entregando portas de grandes vãos fortes e resistentes.</p>
                </div>
              </div>

              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project5} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Guias fundas</h1>
                  <p class="mb-20 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> (100 a 120 mm) de alta resistência fabricadas em chapa 14</p>
                </div>
              </div>

              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project6} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Motores importados</h1>
                  <p class="mb-20 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">De alta potência, com atualização de tecnologia todo ano</p>
                </div>
              </div>

              

              

            </div>
            
          </div>
            <div className='md:px-12  md:mb-20 mb-20 justify-center  px-14 sm:flex sm:justify-items-start'>
            <button onClick={handleClick} className='  rounded-none px-16 py-4 mt-8 text-white bg-green-500 hover:border-green-800 hover:text-white border-green-400'>SOLICITAR ORÇAMENTO</button>
            </div>
      </div>
    </div>
  )
}

export default Reference
