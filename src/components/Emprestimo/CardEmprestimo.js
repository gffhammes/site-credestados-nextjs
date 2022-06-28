import React from 'react';
import { useRouter } from 'next/router';
import { getWhatsappByRoute } from '../../utils/whatsappConfig';


export const CardEmprestimo = ({ imgPath, text }) => {
  const { pathname } = useRouter();
  const whatsapp = getWhatsappByRoute(pathname);

  const urlWhatsApp = `https://wa.me/55${whatsapp}?text=${encodeURI(`Olá, gostaria de uma simulação de empréstimo para ${text.toLowerCase()}!`)}`;

  return (
    <a target='_blank' href={urlWhatsApp} rel="noreferrer">
      <div className="card-emprestimo shadow-2">
        <div className="cover" />
        <div className="hover"/>
        <img src={imgPath} alt={text}/>
        <h3>{text}</h3>
      </div>
    </a>
  )
};

export default CardEmprestimo
