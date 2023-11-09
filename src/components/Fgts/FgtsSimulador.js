import React from 'react';
import SectionTitle from '../Commons/SectionTitle';
import Simulador from './Simulador'

function FgtsSimulador() {
  return (
    <section className='padding--default bg--light-grey' id='fgts-simulador'>
      <div className="container">
        <SectionTitle title='Veja quanto você pode retirar do seu fundo de garantia' subTitle='SIMULAR SAQUE' alignment='align--left'/>        
        <div className="text">
          <p>
            Antecipe as parcelas anuais do seu Saque-Aniversário.<br/>
            Informe seu saldo e o seu aniversário e conheça as condições.
          </p>
        </div>
        <Simulador />
      </div>     
    </section>
  )
}

export default FgtsSimulador
