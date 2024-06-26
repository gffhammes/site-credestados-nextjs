import { React } from 'react'
import SectionTitle from '../Commons/SectionTitle'
import { Button } from '../Commons/Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { useWindowWidth } from '../../hooks/useWindowWidth'

function EmprestimoSobre() {
  const windowWidth = useWindowWidth()
  const whatsapp = useWhatsApp()

  return (
    <section className="padding--default bg--light-grey" id="emprestimo-sobre">
      <div className="container">
        <SectionTitle
          title="O que é o Emprestimo Consignado?"
          subTitle="SOBRE"
          alignment="align--left"
        />
        <p className="text-content">
          O empréstimo consignado é uma modalidade de crédito destinada a
          aposentados, pensionistas e servidores públicos. <br />
          <br />
          No consignado, o valor das parcelas de seu empréstimo é descontado
          automaticamente de sua folha de pagamento ou benefício do INSS.
        </p>
        <Button
          variant="contained"
          href={`https://wa.me/55${whatsapp}`}
          target="_blank"
          startIcon={<i className="fab fa-whatsapp" />}
        >
          Simular
        </Button>
        {/* <Button onClick={() => window.open(`https://wa.me/55${whatsapp}?text=${encodeURI("Olá, gostaria de uma simulação de empréstimo!")}`, "_blank")}> <i className="fab fa-whatsapp" /> Simular</Button> */}
      </div>
      <img
        className="img-content"
        src={
          windowWidth >= 960
            ? '/images/emprestimo-sobre-large.webp'
            : '/images/emprestimo-sobre.webp'
        }
        alt="Empréstimo consignado"
      />
    </section>
  )
}

export default EmprestimoSobre
