import Head from 'next/head'
import EmprestimoHeader from '../components/Emprestimo/EmprestimoHeader'
import EmprestimoSobre from '../components/Emprestimo/EmprestimoSobre'
import EmprestimoCategorias from '../components/Emprestimo/EmprestimoCategorias'
import EmprestimoOpcoes from '../components/Emprestimo/EmprestimoOpcoes'

export default function Index() {
  return (
    <>
      <Head>
        <title>Empréstimo Consignado | CredEstados</title>
      </Head>
      <main className="page__emprestimo">
        <EmprestimoHeader />
        <EmprestimoSobre />
        {/* <img
          src={'/images/pattern-01.webp'}
          className='padrao padrao-01'
          alt="CredEstados"
        /> */}
        <EmprestimoCategorias />
        {/* <img
          src={'/images/pattern-02.webp'}
          className='padrao padrao-02'
          alt="CredEstados"
        /> */}
        <EmprestimoOpcoes />
      </main>
    </>
  )
}
