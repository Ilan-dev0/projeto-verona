import React from 'react'

const Doubt = () => {
  return (
    <div className='w-screen h-max-[900px] h-full bg-zinc-900 md:flex flex-col'>
      <div className='p-10'>
        <h1 className='py-4 px-2 text-white text-center text-bold md:text-3xl text-2xl'>CHEGOU ATÉ AQUI COM DÚVIDA?</h1>
        <h2 className='text-white text-center md:text-1xl'>Aqui estão 5 motivos para você tirar o projeto do papel com a Verona</h2>
        
      </div>
      <div className='p-12 sm:p-20 sm:pl-48 w-full justify-center align-center m-0-auto '>
                <ul className='list-decimal '>
                    <li className='pt-0  border-solid border-x-1 border-white'>
                    30 anos no mercado aprimorando a qualidade do produto e experiência de compra do cliente
                    </li>
                    <li className='pt-0 border-solid border-y-1 border-white'>
                    Fábrica própria com a melhor matéria prima e mão de obra do mercado
                    </li>
                    <li className='pt-0 border-solid border-y-1 border-white'>
                    Mais de 200.000 projetos de sucesso, comerciais, industriais e residenciais dos mais variados tipos e tamanhos
                    </li>
                    <li className='pt-0 border-solid border-y-1 border-white'>
                    Atendimento personalizado com time de especialistas
                    </li>
                    <li className='pt-0 border-solid border-y-1 border-white'>
                    Política de qualidade rigorosa que oferece treinamentos de capacitação e segurança aos profissionais a cada três meses                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Doubt
