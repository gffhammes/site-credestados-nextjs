// app/_lib/whatsapp-redirect.js
//
// ============================================================
// REDIRECIONAMENTO WHATSAPP — CredEstados
// Módulo compartilhado entre todas as rotas de redirecionamento.
// Mesma arquitetura usada no SimCréd (PHP): cada grupo carrega
// suas próprias conexões e sua própria mensagem padrão. Aqui os
// grupos compartilham as mesmas 3 conexões (mesma BM, sem risco
// de cruzamento de dados), mas a rotação por tempo continua
// isolada por grupo — cada rota tem seu próprio ponteiro.
//
// Sem banco de dados: usa o relógio do servidor como ponteiro de
// rotação — a cada ROTATION_INTERVAL_SECONDS, avança para a
// próxima conexão da lista, ciclando continuamente.
// ============================================================

const GROUPS = {
  consultarclt: {
    connections: [
      { number: '554797880347', label: 'Conexão 1' },
      { number: '554797401341', label: 'Conexão 2' },
      { number: '554797401253', label: 'Conexão 3' },
    ],
    defaultMessage: '(RCS) Olá! Quero verificar o valor disponível no meu CLT.',
  },
  aniver: {
    connections: [
      { number: '554797880347', label: 'Conexão 1' },
      { number: '554797401341', label: 'Conexão 2' },
      { number: '554797401253', label: 'Conexão 3' },
    ],
    defaultMessage: '(RCS) Oi! Sou aniversariante e quero antecipar meu FGTS.',
  },
};

const ROTATION_INTERVAL_SECONDS = 15;

/**
 * Monta a resposta de redirecionamento para um grupo específico.
 * Usada pelo route.js de cada rota — cada uma passa seu próprio
 * groupKey, mantendo o handler de cada pasta com uma única linha.
 */
export function buildWhatsappRedirect(groupKey, request) {
  const group = GROUPS[groupKey];

  if (!group) {
    return new Response('Link inválido.', { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const customMessage = searchParams.get('msg');
  const message = customMessage && customMessage.trim() !== ''
    ? customMessage
    : group.defaultMessage;

  const slot = Math.floor(Date.now() / 1000 / ROTATION_INTERVAL_SECONDS);
  const index = slot % group.connections.length;
  const connection = group.connections[index];

  const target = `https://wa.me/${connection.number}?text=${encodeURIComponent(message)}`;

  return Response.redirect(target, 302);
}
