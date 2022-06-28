import React from 'react';
import { getWhatsappByRoute } from '../../utils/whatsappConfig';
import { useRouter } from 'next/router';

export const LinkEmprestimo = ({ text }) => {
  const { pathname } = useRouter();
  const whatsapp = getWhatsappByRoute(pathname);

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
