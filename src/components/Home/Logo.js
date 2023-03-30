import React from 'react'
import logoimg from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='w-screen h-max-[435px] h-full bg-zinc-900 flex flex-row'>
      <div className='p-24 justify-center m-auto'>
        <img className='h-[220px] w-[480px] cursor-eventes-none   ' src={logoimg} alt='logo' />
      </div>

    </div>
  )
}

export default Logo
