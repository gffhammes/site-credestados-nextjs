import Head from 'next/head'
import FgtsHeader from '../components/Fgts/FgtsHeader'
import FgtsSimulador from '../components/Fgts/FgtsSimulador'
import FgtsCondicoes from '../components/Fgts/FgtsCondicoes'
import FgtsVantagens from '../components/Fgts/FgtsVantagens'
import FgtsFAQ from '../components/Fgts/FgtsFAQ'

export default function Index() {
  return (
    <>
      <Head>
        <title>Saque FGTS | CredEstados</title>
      </Head>
      <main id="page__fgts">
        <FgtsHeader />
        <FgtsSimulador />
        {/* <img
          src={'/images/pattern-01.webp'}
          className='padrao padrao-01'
          alt="CredEstados"
        /> */}
        <FgtsCondicoes />
        {/* <img
          src={'/images/pattern-02.webp'}
          className='padrao padrao-02'
          alt="CredEstados"
        /> */}
        <FgtsVantagens />
        <FgtsFAQ />
      </main>
    </>
  )
}
