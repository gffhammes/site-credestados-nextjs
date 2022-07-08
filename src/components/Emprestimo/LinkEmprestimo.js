import React from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const LinkEmprestimo = ({ text }) => {
  const whatsapp = useWhatsApp();

  function formatLink() {
    const rawText = `Olá! Gostaria de uma simulação de empréstimo para ${text}!`;    
    const formatedText = encodeURIComponent(rawText);
    return `https://wa.me/55${whatsapp}?text=${formatedText}`;
  }

  return (
    <a className='link-emprestimo' target='_blank' href={formatLink()} rel="noreferrer">
      {text}
    </a>
  )
};

export default LinkEmprestimo
