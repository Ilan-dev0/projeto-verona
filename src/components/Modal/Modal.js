import React, { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal(props) {

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Nome:', name);
        //console.log('Telefone:', tel);
        //console.log('Email:', email);
        
    };

    return (
        <>
        {props.showModal ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full max-w-md m-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Fazer orçamento
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-xl sm:text-2xl md:text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => props.setShowModal(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-xl sm:text-2xl md:text-3xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>

                    {/*body*/}
                    <div className="p-4">
                    <div className='relative mb-4'>
                        <p className="text-sm sm:text-base md:text-lg">
                        Nome
                        </p>
                        <input
                        type='text'
                        placeholder='Insira seu nome'
                        className='inp'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='relative mb-4'>
                        <p className="text-sm sm:text-base md:text-lg">
                        Telefone
                        </p>
                        <input
                        type='tel'
                        placeholder='Insira seu telefone'
                        className='inp'
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        />
                    </div>
                    <div className='relative'>
                        <p className="text-sm sm:text-base md:text-lg">
                        E-mail
                        </p>
                        <input
                        type='email'
                        placeholder='Insira seu e-mail'
                        className='inp'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase text-sm sm:text-base md:text-lg px-4 py-2 outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => props.setShowModal(false)}
                    >
                        Fechar
                    </button>
                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm sm:text-base md:text-lg px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Enviar
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
    );
}
