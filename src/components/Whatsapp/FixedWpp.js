import React, {useState} from 'react'
import logoimg from '../../assets/whatsapp.png'

const FixedWpp = () => {
    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=11982096911&text=Olá! Gostaria de retirar uma dúvida'
    }

    return (
        <div class='fixed bottom-0 w-full  z-40   '>
                <img className='bottom-0 my-12 float-right mx-10 cursor-pointer object-fill h-20 w-20  rounded-full ' src={logoimg} alt='logo' onClick={handleClick}/>
        </div>
    )
}

export default FixedWpp