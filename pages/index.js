import Head from 'next/head'
import Image from 'next/image'
import { SliderHomeHeader } from '../src/components/Home/SliderHomeHeader/SliderHomeHeader'
import QuemSomos from '../src/components/Home/QuemSomos'
import Diferenciais from '../src/components/Home/Diferenciais'
import Parceiros from '../src/components/Home/Parceiros'

export default function Index() {
  return (
    <>
      <Head>
        <title>CredEstados</title>
      </Head>
      <main className='page__home'>
        <SliderHomeHeader/>
        <QuemSomos />
        <Diferenciais />
        <Parceiros/>
    </main>
    </>
  )
}
