import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head'
import NProgress from "nprogress"
import '../../styles/globals.scss'
import Footer from '../components/Commons/Footer'
import Navbar from '../components/Commons/Navbar'
import Router from "next/router"
import React from 'react'


const theme = createTheme ({
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#fff'
    },
  },
});

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);      
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A Cred Estados é uma empresa sólida que se destaca no mercado financeiro por oferecer excelentes serviços e produtos de crédito consignado e pessoal, representando os principais bancos e instituições financeiras.

          Nosso objetivo é oferecer para nossos clientes as melhores soluções em crédito.
          
          Estamos sempre em busca de novas tecnologias, condições diferenciadas e o principal: um atendimento de qualidade para nossos clientes."
        />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
