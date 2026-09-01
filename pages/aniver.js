const CONNECTIONS = [
  { number: '554797880347', label: 'Conexão 1' },
  { number: '554797401341', label: 'Conexão 2' },
  { number: '554797401253', label: 'Conexão 3' },
]

const DEFAULT_MESSAGE =
  '(RCS) Oi! Sou aniversariante e quero antecipar meu FGTS.'
const ROTATION_INTERVAL_SECONDS = 15

export async function getServerSideProps({ query, res }) {
  const customMessage =
    typeof query.msg === 'string' && query.msg.trim() !== ''
      ? query.msg
      : DEFAULT_MESSAGE

  const slot = Math.floor(Date.now() / 1000 / ROTATION_INTERVAL_SECONDS)
  const index = slot % CONNECTIONS.length
  const connection = CONNECTIONS[index]

  const target = `https://wa.me/${connection.number}?text=${encodeURIComponent(customMessage)}`

  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, max-age=0'
  )

  return {
    redirect: {
      destination: target,
      permanent: false,
    },
  }
}

export default function Aniver() {
  return null
}
