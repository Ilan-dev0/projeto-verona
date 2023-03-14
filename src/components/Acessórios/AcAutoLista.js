import React from 'react'
import controle from '../../assets/controle.png'
import nobreak from '../../assets/nobreak.png'
import caixa from '../../assets/caixa.png'
import emergencia from '../../assets/emergencia.png'
import sae from '../../assets/sae.png'
import portinhola from '../../assets/portinhola.png'
import pintura from '../../assets/pintura.png'


const AcAutoLista = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>

      <div className='h-[150px] w-full bg-red-800 p-10'>
        <h1 className='text-center text-5xl text-white text-bold'>ACESSÓRIOS</h1>
      </div>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2  max-w-[1000px]  m-auto  p-10 text-center  items-center '>
        
      <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>CONTROLE</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Desenvolvido para trazer mais facilidade, o kit de acionamento portátil pode ser acionado até 50 metros de distância e conta com as funções: subir, descer, parar e travar.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={controle} alt='Texto alt' />
        </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>NO-BREAK</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Prepare-se para imprevistos e evite prejuízos utilizando o sistema inteligente que protege e mantém o funcionamento da porta de aço em casos de problemas de energia.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={nobreak} alt='Texto alt' />
        </div>
        
        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>CAIXA INOX</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Proteção contra acionamentos acidentais ou não autorizados. Acompanha chave e pode ser chumbada, ideal para lojas com grande movimentação. </p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={caixa} alt='Texto alt' />
        </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>PORTINHOLA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Ideal para comércios, possibilita a entrada e saída de pessoas enquanto o portão estiver fechado. Sabendo do risco de se ter uma abertura adicional, a Verona realiza a fabricação das </p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={portinhola} alt='Texto alt' />
        </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>PORTINHOLA DE EMERGÊNCIA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Possibilita o acesso ao sistema manual da porta em casos de falta de energia. Um acesso discreto e funcional, que enrola junto com a porta de aço. </p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={emergencia} alt='Texto alt' />
        </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col   '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>PINTURA ELETROESTÁTICA</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Todas as lâminas, soleira e guias laterais são revestidas por uma película de polímero termo-endurecível colorido (pó de poliéster), oferecendo maior durabilidade na pintura e permitindo diferentes possibilidades de personalização.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={pintura} alt='Texto alt' />
        </div>

        <div className='h-[569px] max-w-[427px] w-full   flex flex-col  mt-10 '>
            
            <div className='border-white  border-2 rounded-t-xl items-center text-center flex flex-col'>
                <div className='border-b-2 border-white p-2 px-28 max-w-[400px] '>
                    <h1 className='text-white text-2xl'>SISTEMA ANTI-ESMAGAMENTO</h1>
                </div>

                <div className='p-10'>
                <p className='text-white font-thin'>Sensor que se estende por toda a soleira e protegido por uma borracha, garantindo a parada imediata da porta de aço ao detectar qualquer objeto abaixo dela.</p>
                </div>
            </div>

            <img className='w-full h-[300px] rounded-b-xl pointer-events-none' src={sae} alt='Texto alt' />
        </div>
        
        

      </div>

    </div>
  )
}

export default AcAutoLista
