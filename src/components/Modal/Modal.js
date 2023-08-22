import React, { useState, useEffect } from 'react';
import './Modal.css';
import PostClients from '../../hooks/PostClient';
import axios from 'axios';

export default function Modal(props) {

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name != '' && tel != '' && email != ''){
            setError('')
            setLoading(true)
            await PostClients({
                name: name,
                phone_number: tel,
                email_adress: email
            })
            setLoading(false)
            setName('')
            setTel('')
            setEmail('')
            props.setShowModal(false)
            window.location.href = 'https://api.whatsapp.com/send?phone=05511947090583&text=Olá! Gostaria de fazer um orçamento.'
        }else{
            setError('Complete todos os campos.')
        }
    };

    const phoneMask = (value) => {
        if (!value) return '';
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        return value;
      };
    
      function handleTelChange(e) {
        const inputValue = e.target.value;
        if (inputValue.length <= tel.length) {
          setTel(inputValue);
        } else {
          const formattedValue = phoneMask(inputValue);
          setTel(formattedValue);
        }
      }

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
                        maxLength="55"
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
                            placeholder='ex. (11)99999-9999'
                            className='inp'
                            maxLength="15"
                            value={tel}
                            onChange={(e) => handleTelChange(e)}
                        />
                    </div>
                    <div className='relative'>
                        <p className="text-sm sm:text-base md:text-lg">
                        E-mail
                        </p>
                        <input
                        type='email'
                        maxLength="55"
                        placeholder='Insira seu e-mail'
                        className='inp'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {
                        error != '' ? (
                            <div className='mt-4'>
                                <p className='text-red-600'>
                                    {error}
                                </p>
                            </div>
                        ):null
                    }
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
                        disabled = {loading ? true : false}
                        onClick={(e) => handleSubmit(e)}
                    >
                        {loading ? "Enviando..." : "Enviar"}
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
