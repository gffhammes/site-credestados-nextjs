import React from 'react'

export const getWhatsappByRoute = (route) => {
  let whatsapp;

  switch (route) {
    case '/fgts':
      whatsapp = '4791515234';
      break;

    default:
      whatsapp = '47997527024';
  }

  return whatsapp;
}