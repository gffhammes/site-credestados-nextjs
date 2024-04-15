import React from 'react'
import { Button } from '../Commons/Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'

function EmprestimoHeader() {
  const whatsapp = useWhatsApp()

  return (
    <section id="emprestimo-header">
      <div className="container">
        <img
          className="header-img"
          src={'/images/emprestimo-consignado.webp'}
          alt="Empréstimo consignado"
        />
        <h1>
          Você <strong>beneficiário do Loas/BPC,</strong> garanta o seu
          consignado agora conosco
        </h1>
        <Button
          variant="contained"
          href={`https://wa.me/55${whatsapp}?text=${encodeURI('Olá, gostaria de uma simulação de empréstimo!')}`}
          target="_blank"
          startIcon={<i className="fab fa-whatsapp" />}
        >
          Simular
        </Button>
        {/* <Button onClick={() => window.open(`https://wa.me/55${whatsapp}?text=${encodeURI("Olá, gostaria de uma simulação de empréstimo!")}`, "_blank")} buttonSize='btn--large'><i class="fab fa-whatsapp"/> Simular</Button> */}
      </div>
    </section>
  )
}

export default EmprestimoHeader
