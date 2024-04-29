import Head from 'next/head'
import { SliderHomeHeader } from '../components/Home/SliderHomeHeader/SliderHomeHeader'
import QuemSomos from '../components/Home/QuemSomos'
import Diferenciais from '../components/Home/Diferenciais'
import Parceiros from '../components/Home/Parceiros'

export default function Index() {
  return (
    <>
      <Head>
        <title>CredEstados</title>
      </Head>
      <main className="page__home">
        <SliderHomeHeader />
        <QuemSomos />
        <Diferenciais />
        <Parceiros />
      </main>
    </>
  )
}
