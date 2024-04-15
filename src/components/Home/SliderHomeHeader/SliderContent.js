import React from 'react'
import Slide from './Slide'

const slides = [
  {
    text: 'Antecipe o seu FGTS e receba seu dinheiro em poucas horas',
    imgPath: 'hero-01',
    buttonText: 'Saber mais',
    buttonTarget: 'fgts',
  },
  {
    text: 'Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m',
    imgPath: 'hero-02',
    buttonText: 'Saber mais',
    buttonTarget: '/',
  },
  {
    text: 'Empréstimos consignados com as melhores taxas do mercado',
    imgPath: 'hero-03',
    buttonText: 'Saber mais',
    buttonTarget: 'emprestimo',
  },
]

const SliderContent = ({ translate, width }) => {
  return (
    <div
      className="slider-content"
      style={{
        height: 'calc(100vh - var(--menu-height))',
        transform: `translateX(-${translate}px)`,
        display: 'flex',
        width: `${width}px`,
      }}
    >
      {slides.map((slide, index) => {
        return (
          <Slide
            h1={slide.text}
            imgPath={slide.imgPath}
            buttonText={slide.buttonText}
            buttonTarget={slide.buttonTarget}
            slideIndex={index}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default SliderContent
