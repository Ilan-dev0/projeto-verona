import React from 'react'
import img1 from '../../assets/img1.jpg'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import project1 from '../../assets/20.png'
import project2 from '../../assets/26.png'
import project3 from '../../assets/3.png'


const Projects = () => {
  return (
    <div className='w-screen h-max-[940px] h-full bg-red-800 '>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row text-center items-center justify-center'>
            <h1 className='py-4 px-2 text-white text-bold md:text-3xl text-2xl'>ALGUNS DOS NOSSOS PROJETOS</h1>
        </div>

        <div className='md:flex flex-row   p-10 text-center justify-center items-center md:space-x-10'>
            <img className='md:max-w-sm   max-h-[260px] h-full   border rounded-3xl border-transparent mt-5  ' src={project1} />

            <img className='md:max-w-sm   max-h-[260px]   border   rounded-3xl border-transparent mt-5  ' src={project2} />

            <img className='md:max-w-sm   max-h-[260px] h-full   border rounded-3xl border-transparent mt-5  ' src={project3} />
        </div>
      </div>
    </div>
  )
}

export default Projects
