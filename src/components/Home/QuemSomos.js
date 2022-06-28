import React from 'react';
import SectionTitle from '../Commons/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Commons/Button';
import { getWhatsappByRoute } from '../../utils/whatsappConfig';
import { useRouter } from 'next/router';

function QuemSomos() {
  const { pathname } = useRouter();
  const whatsapp = getWhatsappByRoute(pathname);

  return (
    <section className='padding--default' id='quem-somos'>
      <div className="container">
        <SectionTitle title='A empresa de crédito que está ao seu lado' subTitle='QUEM SOMOS' alignment='align--center'/>
        <img src={'/images/logo-completa.webp'} alt="Logo" />
        <div className="text-button">
          <p>A Cred Estados é uma <strong>empresa sólida</strong> que se destaca no mercado financeiro por oferecer <strong>excelentes serviços e produtos de crédito consignado e pessoal</strong>, representando os principais bancos e instituições financeiras.</p>
          <p>Nosso objetivo é oferecer para nossos clientes as <strong>melhores soluções em crédito.</strong></p>
          <p>Estamos sempre em busca de novas tecnologias, <strong>condições diferenciadas</strong> e o principal: um <strong>atendimento de qualidade</strong> para nossos clientes.</p>
          <Button
              variant='contained'
              href={`https://wa.me/55${whatsapp}`}
              target='_blank'
              startIcon={<i className='fab fa-whatsapp' />}
            >
              Fale conosco
          </Button>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos
