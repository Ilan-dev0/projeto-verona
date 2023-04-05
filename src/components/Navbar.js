import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import logoimg from '../assets/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div>
      <nav className="w-full bg-zinc-900 fixed top-0 left-0 right-0 z-10  p-3">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <a href='/'><img className='md:h-20 h-14 md:w-33 cursor-pointer mr-4 ' src={logoimg} alt='logo' /></a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className='md:hidden cursor-pointer' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-8 text-white' /> : <XIcon className='w-8 text-white' /> }
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                nav ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:py-8 text-center border-b-2 md:border-b-0  hover:text-red-900 hover:bg-white group">
                  <a href='/'>HOME</a>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 md:py-8 text-center  border-b-2 md:border-b-0  hover:text-red-900 hover:bg-white group">
                  <a href='/empresa'>EMPRESA</a>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 md:py-8 text-center  border-b-2 md:border-b-0   hover:text-red-900 hover:bg-white group">
                  <p className='cursor-pointer'>SERVIÇOS	</p>
                        <ul className='group-hover:block hover:block right-0 md:right-[16.2rem] top-[360px] md:top-[95px]  absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/SeAuto'>PORTAS DE AÇO AUTOMÁTICAS</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/SeManual'>PORTAS DE AÇO MANUAIS</a></li>
                        </ul>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 md:py-8 text-center  border-b-2 md:border-b-0    hover:text-red-900 hover:bg-white group">
                  <p className='cursor-pointer'>ACESSÓRIOS</p>
                        <ul className='group-hover:block hover:block right-0 md:right-[7.1rem] top-[430px] md:top-[95px] absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/AcAuto'>ACESSÓRIOS AUTOMÁTICOS</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/AcManual'>ACESSÓRIOS MANUAIS</a></li>
                        </ul>
                </li>
		<li className="pb-6 text-xl text-white py-2 px-6 md:py-8 text-center  border-b-2 md:border-b-0  hover:text-red-900 hover:bg-white group">
                  <p className='cursor-pointer'>MANUTENÇÃO</p>
                        <ul className='group-hover:block hover:block right-0 md:right-[2.2rem] top-[495px] md:top-[95px] absolute hidden bg-red-900 text-white w-[400px] h-[129px]'>
                            <li className='border-b-2 py-5 hover:bg-white hover:text-red-900'><a href='/Manutencao'>MANUTENÇÃO AUTOMÁTICA</a></li>
                            <li className='hover:bg-white py-5 hover:text-red-900'><a href='/ManutencaoManual'>MANUTENÇÃO MANUAL</a></li>
                        </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
