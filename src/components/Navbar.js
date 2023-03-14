import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import logoimg from '../assets/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[160px] z-10 bg-zinc-900 fixed drop-shadlow-lg '>
        <div className='p-5 flex justify-center items-center w-full h-full'>
            <div className='flex items-center border-b-2 p-4'>
                <a href='/'><img className='h-20 sm:w-33 cursor-pointer mr-4 ' src={logoimg} alt='logo' /></a>
                <ul className='hidden md:flex pl-10 z-40'>
                    <li className='hover:text-red-900 hover:bg-white group'>
                        <a href='/'>HOME</a>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group'>
                        <a className='font-family' href='/empresa'>EMPRESA</a>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group'>
                        <p className='cursor-pointer'>SERVIÇOS	</p>
                        <ul className='group-hover:block hover:block right-160 top-[147px] absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/SeAuto'>PORTAS DE AÇO AUTOMÁTICAS</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/SeManual'>PORTAS DE AÇO MANUAIS</a></li>
                        </ul>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group'>
                        <p className='cursor-pointer'>ACESSÓRIOS	</p>
                        <ul className='group-hover:block hover:block right-160 top-[147px] absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/AcAuto'>ACESSÓRIOS AUTOMÁTICOS</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/AcManual'>ACESSÓRIOS MANUAIS</a></li>
                        </ul>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group'>
                        <p className='cursor-pointer'>MANUTENÇÃO</p>
                        <ul className='group-hover:block hover:block right-160 top-[147px] absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/Manutencao'>MANUTENÇÃO AUTOMÁTICA</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/ManutencaoManual'>MANUTENÇÃO MANUAL</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
            <div className='md:hidden cursor-pointer' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-10 text-white' /> : <XIcon className='w-10 text-white' /> }
            </div>            
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-900 w-full  px-10'}>
                    <li className='border-b-2 border-white w-full'>
                        <a href='/'>HOME</a>
                    </li>
                    <li className='border-b-2 border-white w-full'>
                        <a href='/empresa'>EMPRESA</a>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group h-[90px] border-b-2 border-white '>
                        <p className='cursor-pointer'>SERVIÇOS	</p>
                        <ul className='group-hover:block hover:block absolute   hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/SeAuto'>PORTAS DE AÇO AUTOMÁTICAS</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/SeManual'>PORTAS DE AÇO MANUAIS</a></li>
                        </ul>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group h-[90px] border-b-2 border-white '>
                        <p className='cursor-pointer'>ACESSÓRIOS</p>
                        <ul className='group-hover:block hover:block absolute  hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/AcAuto'>ACESSÓRIOS AUTOMÁTICOS</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/AcManual'>ACESSÓRIOS MANUAIS</a></li>
                        </ul>
                    </li>
                    <li className='hover:text-red-900 hover:bg-white group'>
                        <p className='cursor-pointer'>MANUTENÇÃO</p>
                        <ul className='group-hover:block hover:block right-160 top-[147px] absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/Manutencao'>MANUTENÇÃO AUTOMÁTICA</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/ManutencaoManual'>MANUTENÇÃO MANUAL</a></li>
                        </ul>
                    </li>
        </ul>

    </div>
  )
}

export default Navbar
