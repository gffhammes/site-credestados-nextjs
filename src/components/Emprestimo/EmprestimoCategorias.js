import React from 'react'
import SectionTitle from '../Commons/SectionTitle'
import CardEmprestimo from './CardEmprestimo'
import { Button } from '../Commons/Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'

const cards = [
  {
    imgPath: '/images/emprestimo-01.webp',
    text: 'APOSENTADOS INSS',
  },
  {
    imgPath: '/images/emprestimo-02.webp',
    text: 'PENSIONISTAS INSS',
  },
  {
    imgPath: '/images/emprestimo-03.webp',
    text: 'SERVIDORES PÚBLICOS',
  },
  {
    imgPath: '/images/emprestimo-04.webp',
    text: 'FORÇAS ARMADAS',
  },
  {
    imgPath: '/images/emprestimo-05.webp',
    text: 'CARTÃO DE CRÉDITO CONSIGNADO',
  },
  {
    imgPath: '/images/emprestimo-06.webp',
    text: 'PORTABILIDADE DE CRÉDITO',
  },
]

function EmprestimoCategorias() {
  const whatsapp = useWhatsApp()

  return (
    <section className="padding--default" id="emprestimo-categorias">
      <div className="container">
        <SectionTitle
          title="Temos a solução certa para você"
          subTitle="CATEGORIAS"
          alignment="align--left"
        />
        <div className="content">
          {cards.map((card, index) => {
            return (
              <CardEmprestimo
                imgPath={card.imgPath}
                text={card.text}
                key={index}
              />
            )
          })}
        </div>
        <Button
          variant="contained"
          href={`https://wa.me/55${whatsapp}`}
          target="_blank"
          startIcon={<i className="fab fa-whatsapp" />}
        >
          Simular
        </Button>
      </div>
    </section>
  )
}

export default EmprestimoCategorias
