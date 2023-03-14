import React from 'react'

import project1 from '../../assets/20.png'
import project2 from '../../assets/26.png'
import project3 from '../../assets/3.png'
import project4 from '../../assets/51.png'
import project5 from '../../assets/9.png'
import project6 from '../../assets/8.png'



const Projects = () => {
  return (
    <div className='w-screen h-max-[940px] h-full bg-red-800 '>
      <div className='flex flex-col justify-center m-auto '>
        <div className='flex flex-row text-center items-center justify-center'>
            <h1 className='py-4 px-2 text-white text-bold md:text-3xl text-2xl'>ALGUNS DOS NOSSOS PROJETOS</h1>
        </div>

        <div class="flex min-h-screen items-center justify-center p-10 ">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project1} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">???</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project2} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Lojas Magic Feet</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project3} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Hocca Bar</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project4} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Lojas Artwalk</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project5} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">Authentic Feet</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project6} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">???</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
              </div>
            </div>
            
          </div>

      </div>
    </div>
  )
}

export default Projects
