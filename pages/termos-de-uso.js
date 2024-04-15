import Head from 'next/head'
import { Container, Stack, Typography } from '@mui/material'

export default function Index() {
  return (
    <>
      <Head>
        <title>Termos de Uso | CredEstados</title>
      </Head>
      <main>
        <Stack gap={8} sx={{ py: 8 }}>
          <Container>
            <Stack gap={2}>
              <Typography variant="h1" fontSize={48}>
                Termos de Uso
              </Typography>
              <Typography sx={{ maxWidth: '600px' }}>{smallText}</Typography>
            </Stack>
          </Container>
          <Container maxWidth="md">
            <Typography whiteSpace="pre-wrap">{fullText}</Typography>
          </Container>
        </Stack>
      </main>
    </>
  )
}

const smallText =
  'Olá! Que bom contar com seu interesse! Antes de usar nossos serviços, tire um tempo para ler nossos Termos de Uso e Serviços e conhecer as regras que regem nossa relação com você. Abaixo esclareceremos alguns pontos que julgamos importantes. Caso persista alguma dúvida acerca de quaisquer pontos discutidos ou não neste documento, por favor, não hesite em contatar-nos pelo endereço de e-mail: contato@credestados.com.br'

const fullText = `1. DEFINIÇÕES
CRED ESTADOS: FONTANELLA SERVIÇOS LTDA, sociedade empresarial de responsabilidade limitada, inscrita no CNPJ sob o n°. 37.111.025/0001-72, com sede na cidade de Balneário Camboriú/SC, na Av. Atlântica – no 1530 – Sala 05 - Centro – CEP: 88.330-009.
CLIENTE: pessoa física com interesse na contratação de crédito.
DESTINATÁRIO FINAL: pessoa física informada pelo CLIENTE como final na cadeia de recebimento dos serviços.
PARTES: Cliente e Cred Estados
 
2. ACEITAÇÃO
Bem-vindo ao https://www.credestados.com.br/. Este website é controlado e operado pela Cred Estados, empresa localizada na Av Atlântica, 1530 – Sala 05 – Centro – Balneário Camboriú - SC
No presente documento (“Termos de Uso”) você encontrará detalhes sobre as normas relativas ao uso do website e de nossas aplicações. Por favor, leia atentamente as condições descritas neste documento. O acesso, navegação ou utilização de nosso website é a sua declaração de aceitação aos termos e condições aqui propostos.
Você poderá verificar as disposições destes Termos e da Política de Privacidade a qualquer momento por meio do nosso site.
Estes Termos se aplicam a todos os visitantes, usuários e outros que acessam ou usam o Serviço.
Antes de utilizar o site, você deverá ler atentamente todo o conteúdo deste documento e, caso esteja de acordo, poderá prosseguir com seu uso; eventualmente, para certas atividades de tratamento de dados pessoais relativas às funcionalidades e à
disponibilização de aplicações, produtos e serviços, poderá ser solicitado seu consentimento livre, informado e inequívoco. Caso tenha qualquer dúvida em relação a este documento entre em contato conosco e, se você não estiver de acordo com estes Termos de Uso deverá descontinuar o seu acesso.
 
3. O QUE FAZEMOS?
A Cred Estados é uma empresa privada que promove o cadastro de propostas para conectar os CLIENTES com as Instituições Financeiras.
 
4. OBJETO
A Cred Estados por meio deste website, proporciona informações gerais sobre a empresa, suas ações e seus produtos. APESAR DOS ESFORÇOS ENVIDADOS PARA MANTER A PRECISÃO E ATUALIZAÇÃO DAS INFORMAÇÕES DISPONIBILIZADAS, A CRED ESTADOS NÃO PODE GARANTIR OU ASSUMIR QUALQUER RESPONSABILIDADE QUANTO A SUA CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA, NÃO SENDO, PORTANTO, RESPONSÁVEL POR PREJUÍZOS, PERDAS OU DANOS OCORRIDAS PELA VISITA AO SITE. VOCÊ É RESPONSÁVEL POR VERIFICAR A CONFIABILIDADE DAS INFORMAÇÕES ANTES DE TOMAR ALGUMA DECISÃO OU PRATICAR ALGUM ATO.
 
5. ELEGIBILIDADE: DECLARAÇÃO DE MAIORIDADE
Como condição para acesso e uso das funcionalidades exclusivas deste website e todos os serviços a ele relacionados, você declara ser maior de 18 (dezoito) anos e, que fez a leitura completa e atenta das regras deste documento, expressando livremente a sua concordância com os termos aqui estipulados.
 
6. UTILIZAÇÃO DO SITE
A nossa página está disponível na Internet, por onde você pode acessar seus conteúdos e ver todas as espécies de serviços e produtos ofertados pela empresa. Para tanto, a CRED ESTADOS sempre solicitará a você algumas permissões para o ideal
funcionamento das plataformas durante sua sessão de uso. Em alguns casos, será necessário que você se cadastre.
Desta forma, ao aceitar estes Termos, você reconhece ser o único responsável pelo fornecimento de informações e dados pessoais corretos para o cadastro, eximindo a CRED ESTAODS de toda e qualquer responsabilidade relativa a eventuais informações falsas e/ou
inexatas, bem como por eventuais danos e prejuízos decorrentes de tais informações causadas a você, a terceiros ou a própria CRED ESTADOS.
Neste mesmo sentido, você reconhece que, excepcionalmente, caso a CRED ESTADOS verifique qualquer erro ou inconsistência nas informações fornecidas, o acesso e utilização das plataformas pode ficar prejudicada, até que a irregularidade seja corrigida por você, nos casos possíveis.
Por fim, ao aceitar os presentes Termos, você se declara de que é o único e exclusivo responsável pelas informações fornecidas quando de seu acesso à plataforma, responsabilizando-se perante terceiros, por danos ou prejuízos decorrentes de informações incorretas, incompletas ou inverídicas inseridas.
 
7. PROPRIEDADE INTELECTUAL
A CRED ESTADOS, salvo disposição em sentido contrário, é a detentora dos direitos autorais de toda a informação disponibilizada no website, bem como de todos os direitos de propriedade intelectual e direitos conexos. Fica vedada a utilização do nome, marca ou logotipo pertencente à CRED ESTADOS, exceto e somente quando houver a prévia, expressa e escrita autorização.
Você poderá fazer download, imprimir, ou armazenar informações e materiais disponibilizados neste website para o seu uso particular, exclusivamente, e desde que mantenha intactas todas as notificações de direitos autorais e outras notificações de propriedade. Você não tem permissão para fazer uso das informações, no todo ou em parte, para ganhos comerciais.
 
8. LINKS PARA SITES E APLICATIVOS DE TERCEIROS
A plataforma pode conter links para sites e aplicações de terceiros. Note que, dentro destes sites e aplicações, você estará sujeito a outros Termos de Uso e a outras Políticas de Privacidade.
Nossos Termos não são válidos nos sites e aplicações de terceiros. A existência de links não implica em relação de endosso ou de patrocínio da CRED ESTADOS junto a estes terceiros, e a CRED ESTADOS não tem responsabilidade com relação a estes.
 
9. LIMITAÇÃO DE RESPONSABILIDADE
Para o correto funcionamento deste website se torna indispensável o acesso e tráfego de dados entre terminais de seu computador ou dispositivo móvel e os servidores que hospedam este website. Portanto, a CRED ESTADOS não garante e nem se responsabiliza pela disponibilidade integral e ininterrupta dos serviços aqui disponibilizados, não possuindo, pois, nenhuma ingerência e não sendo responsável por eventuais no acesso a este website.
SOB NENHUMA CIRCUNSTÂNCIA, A CRED ESTADOS SERÁ CONSIDERADA RESPONSÁVEL OU RESPONSABILIZADA DE QUALQUER FORMA, POR QUAISQUER RECLAMAÇÕES, DANOS, PERDAS, DESPESAS, CUSTOS OU RESPONSABILIDADES DE QUALQUER NATUREZA RESULTANTE OU DECORRENTE DIRETA OU INDIRETAMENTE DO USO OU DA INCAPACIDADE DE USO DESTE.
Este website também pode conter links para outros sites da Internet. Como não temos controle sobre sites de terceiros, você reconhece e concorda que a CRED ESTADOS não é responsável por qualquer conteúdo ou material nesses sites. Você ainda reconhece e concorda que a CRED ESTADOS não será responsável ou responsabilizada, direta ou indiretamente, por quaisquer
danos ou perdas causados ou sofridos, em razão do uso ou confiança em informações ou materiais obtidos de sites de terceiros.
 
10. PRIVACIDADE
A utilização de alguns serviços oferecidos no website implica a necessidade do fornecimento de dados de caráter pessoal, os quais serão processados nos termos da nossa Política de Privacidade
A CRED ESTADOS adota todas as medidas de segurança técnicas e administrativas para a proteção de dados pessoais, nos termos da legislação aplicável e vigente, no que tange à privacidade e proteção de dados pessoais, caso você tenha alguma dúvida, poderá redireciona-la ao nosso comitê de Privacidade através do e-mail:  lgpd@credestados.com.br
 
11. DURAÇÃO E FINALIZAÇÃO DE SERVIÇOS
Os conteúdos disponibilizados neste website têm uma duração indefinida. No entanto, a CRED ESTADOS está facultada a terminar, interromper, ou suspender unilateralmente, a qualquer momento e sem necessidade de aviso prévio, o fornecimento do conteúdo ou do próprio website, sem prejuízo do disposto no presente documento.
 
12. LEGISLAÇÃO E FORO
Estes Termos de Uso serão regidos e interpretados de acordo com a legislação brasileira, independentemente dos conflitos dessas leis com leis de outros estados ou países, sendo competente o Foro da Comarca de Balneário Camboriú - SC, com exclusão de qualquer outro, para dirimir qualquer dúvida decorrente destes Termos de Uso. O usuário consente, expressamente, com a competência desse juízo com exclusão de qualquer outro, por mais privilegiado que seja.
 
13. DISPOSIÇÕES FINAIS
Os presentes Termos de Uso podem ser atualizados sem prévio aviso ao usuário, sendo mantida neste website sempre a versão mais atualizada e em vigor dos Termos de Uso. Por isto, recomendamos que você consulte a presente Política de Privacidade periodicamente para verificar eventuais alterações.
`
