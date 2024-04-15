import React from 'react'
import { Button } from '../Commons/Button'

function FgtsHeader() {
  return (
    <section id="fgts-header">
      <div className="container">
        <img
          className="header-img"
          src={'/images/saque-fgts.webp'}
          alt="Saque FGTS"
        />
        <h1>
          Antecipe as parcelas do seu FGTS com as melhores taxas e{' '}
          <strong>receba seu dinheiro em poucas horas</strong>
        </h1>
        <Button variant="contained" href="#fgts-simulador">
          Simular agora
        </Button>
      </div>
    </section>
  )
}

export default FgtsHeader
