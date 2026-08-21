// pages/consultarclt.js
//
// ============================================================
// REDIRECIONAMENTO WHATSAPP — CredEstados
// Para projetos Next.js usando Pages Router (pasta /pages na
// raiz, SEM pasta /app). Se o projeto usa App Router, use o
// outro arquivo entregue (app-router/app/consultarclt/route.js)
// em vez deste.
// ============================================================
//
// URL final: credestados.com.br/consultarclt
//
// Sem banco de dados: usa o relógio do servidor como ponteiro de
// rotação — a cada ROTATION_INTERVAL_SECONDS, avança para a
// próxima conexão da lista, ciclando continuamente.

const CONNECTIONS = [
  { number: '554797880347', label: 'Conexão 1' },
  { number: '554797401341', label: 'Conexão 2' },
  { number: '554797401253', label: 'Conexão 3' },
]

const DEFAULT_MESSAGE =
  '(RCS) Olá! Quero verificar o valor disponível no meu CLT.'
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

  // Impede qualquer cache (navegador, Vercel Edge Network, CDN) de
  // guardar essa resposta. Essencial: sem isso, o mesmo problema de
  // cache que travou o site da SimCred acontece aqui também.
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, max-age=0'
  )

  return {
    redirect: {
      destination: target,
      permanent: false, // 302
    },
  }
}

// Componente nunca chega a renderizar — getServerSideProps sempre
// redireciona antes. Existe só porque o Next.js exige um default
// export de página.
export default function ConsultarCLT() {
  return null
}
