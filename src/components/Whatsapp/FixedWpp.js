import React, {useState} from 'react'
import logoimg from '../../assets/whatsapp.png'

const FixedWpp = () => {
    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=05511982096911&text=Olá! Gostaria de retirar uma dúvida'
    }

    return (
        <div class='fixed bottom-[44px] right-[5px] h-[290px] w-[40px] flex justify-center z-50 cursor-pointer'>
                <img className='fixed bottom-[32px] right-[50px] w-[40px] h-[40px] z-50 flex flex-col justify-center items-center rounded-full' src={logoimg} alt='logo' onClick={handleClick}/>
        </div>
    )
}

export default FixedWpp