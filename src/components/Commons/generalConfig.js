
export const getWhatsappByRoute = (route) => {
  let whatsapp;

  switch (route) {
    case '/fgts':
      whatsapp = '4791515234';
      break;

    default:
      whatsapp = '48991725508';
  }

  return whatsapp;
}