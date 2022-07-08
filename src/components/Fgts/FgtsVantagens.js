import React, {useState} from 'react';
import SectionTitle from '../Commons/SectionTitle';
import IconText from '../Commons/IconText';
import Link from 'next/link';
import { Button } from '../Commons/Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';

function FgtsVantagens() {
  const whatsapp = useWhatsApp();

  const vantagens = [
    {
      iconPath: '/images/icone-01.webp',
      title: 'Taxas a partir de 1,59% a.m.',
      text: 'Crédito pessoal com as melhores condições no mercado.',
    },
    {
      iconPath: '/images/icone-02.webp',
      title: 'Contrate a partir de R$ 300,00',
      text: 'Fácil contratação e pagamento rápido na conta, tudo digital.',
    },
    {
      iconPath: '/images/icone-07.webp',
      title: 'Menos dívidas',
      text: 'Zero parcelas mensais, o desconto é feito anualmente no FGTS.',
    },
    {
      iconPath: '/images/icone-06.webp',
      title: 'Sem consulta ao Serasa',
      text: 'Não consultamos o SPC/Serasa para liberar crédito (exceto crédito pessoal).',
    },
  ];

  return (
    <section className='padding--default bg--light-grey' id='fgts-vantagens'>
      <div className="container">
        <SectionTitle title='Conheça as vantagens da antecipação do Saque-Aniversário com a CredEstados' subTitle='VANTAGENS' alignment='align--left'/>        
        <div className="container--vantagens">

          {vantagens.map((item, index) => {
            return (
              <IconText
                key={index}
                iconPath={item.iconPath}
                title={item.title}
                text={item.text}
              />    
            )
          })}

        </div>
        <Button
          variant='contained'
          href={`https://wa.me/55${whatsapp}?text=${encodeURI("Olá, gostaria de uma simulação de saque-aniversário do FGTS!")}`}
          target='_blank'
          startIcon={<i className='fab fa-whatsapp' />}
        >
          Simular
        </Button>
      </div>
      <div className="container--img">
      </div>
    </section>
  )
}

export default FgtsVantagens
