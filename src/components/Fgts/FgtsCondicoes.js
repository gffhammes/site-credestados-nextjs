import SectionTitle from '../Commons/SectionTitle'
import { Button } from '../Commons/Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'

function FgtsCondicoes() {
  const whatsapp = useWhatsApp()

  const Condicoes = ({ text }) => {
    return (
      <div className="container--condicao">
        <i className="far fa-check-circle" />
        <p>{text}</p>
      </div>
    )
  }

  return (
    <section className="padding--default" id="fgts-condicoes">
      <div className="container">
        <SectionTitle
          title="Confira as condições para contratar a Antecipação Saque-Aniversário com FGTS"
          subTitle="CONDIÇÕES"
          alignment="align--left"
        />
        <div className="container--condicoes">
          <Condicoes text="Ser maior de 18 anos ou emancipado" />
          <Condicoes text="Ter situação regular com a Receita Federal" />
          <Condicoes text="Possuir conta corrente ou poupança" />
          <Condicoes text="Ter saldo do FGTS em conta ativa ou inativa" />
          <Condicoes text="Ser optante da modalidade Saque-Aniversário do FGTS" />
        </div>
        <Button
          variant="contained"
          href={`https://wa.me/55${whatsapp}?text=${encodeURI('Olá, gostaria de uma simulação de saque-aniversário do FGTS!')}`}
          target="_blank"
          startIcon={<i className="fab fa-whatsapp" />}
        >
          Simular
        </Button>
      </div>
    </section>
  )
}

export default FgtsCondicoes
