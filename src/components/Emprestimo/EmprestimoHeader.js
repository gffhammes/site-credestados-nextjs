import React from 'react';
import Link from 'next/link';
import { Button } from '../Commons/Button';
import { getWhatsappByRoute } from '../../utils/whatsappConfig';
import { useRouter } from 'next/router';


function EmprestimoHeader() {
  const { pathname } = useRouter();
  const whatsapp = getWhatsappByRoute(pathname);

  return (
    <section id='emprestimo-header'>
      <div className="container">
        <img className='header-img' src={'/images/emprestimo-consignado.webp'} alt="Empréstimo consignado" />
        <h1>Garanta a sua <strong>margem de 5%</strong> agora conosco</h1>
        <Button
          variant='contained'
          href={`https://wa.me/55${whatsapp}?text=${encodeURI("Olá, gostaria de uma simulação de empréstimo!")}`}
          target='_blank'
          startIcon={<i className='fab fa-whatsapp' />}
        >
          Simular
        </Button>
        {/* <Button onClick={() => window.open(`https://wa.me/55${whatsapp}?text=${encodeURI("Olá, gostaria de uma simulação de empréstimo!")}`, "_blank")} buttonSize='btn--large'><i class="fab fa-whatsapp"/> Simular</Button> */}
      </div>
    </section>
  )
}

export default EmprestimoHeader