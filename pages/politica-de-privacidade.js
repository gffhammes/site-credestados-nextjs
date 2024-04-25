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
            <Stack gap={8}>
              <Stack gap={2}>
                <Typography variant="h1" fontSize={48}>
                  Nós cuidamos dos seus dados
                </Typography>

                <Typography sx={{ maxWidth: '600px' }}>{smallText}</Typography>
              </Stack>

              <Stack gap={2}>
                <Typography variant="h2" fontSize={32}>
                  Segurança da Informação
                </Typography>

                <Typography>{smallText2}</Typography>
              </Stack>

              <Stack gap={2}>
                <Typography variant="h2" fontSize={32}>
                  Lei Geral de Proteção de Dados
                </Typography>

                <Typography>{smallText3}</Typography>
              </Stack>
            </Stack>
          </Container>

          <Stack gap={4}>
            <Container>
              <Typography fontSize={24} fontWeight="bold">
                Política de Privacidade
              </Typography>
            </Container>

            <Container maxWidth="md">
              <Stack gap={8}>
                {termosDeUso.map((item, index) => (
                  <Stack key={index} gap={2}>
                    <Typography fontSize={24}>
                      {index + 1}. {item.title}
                    </Typography>

                    <Typography
                      whiteSpace="pre-wrap"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Container>
          </Stack>
        </Stack>
      </main>
    </>
  )
}

const smallText =
  'Sempre foi uma característica nossa trabalhar com transparência e responsabilidade, incluindo o uso de dados que recebemos. Reafirmamos o nosso compromisso de zelar e proteger os dados e a privacidade de todos, respaldado nas regras e normas estabelecidas pelas leis em vigor.'

const smallText2 =
  'Nossa Política de Segurança da Informação trata da melhoria contínua dos processos e serviços de tecnologia visando manter a confidencialidade, integridade e disponibilidade dos nossos serviços.'

const smallText3 = `Consideramos extremamente importante a privacidade de nossos visitantes e a segurança de suas informações pessoais, caso tenha alguma dúvida, não hesite em nos contatar através do e-mail: lgpd@credestados.com.br.

Por meio da presente Política de Privacidade visamos oferecer maior transparência e segurança com relação a todos os tratamentos de dados pessoais realizado pela Cred Estados, assim, indica como a Cred Estados realiza a coleta e o tratamento de informações obtidas do usuário e como usamos essas informações em todas nossas plataformas digitais.`

const termosDeUso = [
  {
    title: 'DEFINIÇÕES',
    text: `Toda vez que houver menção aos termos “Cred Estados”, “nós” ou “nossos” estaremos nos referindo à Cred Estados; bem como toda vez que houver menção aos termos “você”, “usuário”, “seu”, “sua”, estaremos nos referindo a você usuário, que está consentindo com esta Política de Privacidade e com os Termos de Uso para fazer uso e acesso à Plataforma.`,
  },
  {
    title: 'ESCOPO',
    text: `A Presente Política de Privacidade se aplica a todas as formas de tratamento de dados pessoais realizadas pela Cred Estados, relacionados às suas atividades empresariais, inclusive dados coletados e tratados por meio de seu website.

Em caso de discordância no todo ou em parte com o presente documento, recomenda-se a não utilização do website nem o preenchimento de quaisquer dados pessoais solicitados para esta finalidade.`,
  },
  {
    title: 'OBJETIVOS DA POLÍTICA DE PRIVACIDADE',
    text: `A presente Política de Privacidade (“Política”) tem como objetivo estabelecer as diretrizes para a coleta e demais tratamentos de dados pessoais, bem como fornecer informações essenciais aos titulares de dados, de forma clara e abrangente, com relação aos dados pessoais objeto de tratamento, suas bases legais, finalidade de tratamento, tipos de dados pessoais tratados, direitos básicos dos titulares, medidas de segurança adequadas tomadas no tocante à proteção da privacidade e dos dados pessoais, tendo como referência especialmente a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – “LGPD”) e o Marco Civil da Internet (Lei nº 12.965/2014).

Esta Política de Privacidade possui as seguintes finalidades:

✓ Garantir que você entenda quais são os dados pessoais que coletamos;
✓ Indicar as finalidades pelas quais os coletamos e utilizamos seus dados pessoais;
✓ Informar com quem compartilhamos os dados pessoais;
✓ Explicar como utilizamos os dados pessoais compartilhados;
✓ Esclarecer quais são os direitos dos titulares em relação aos seus dados pessoais coletados e tratados pela Cred Estados;
✓ Fornecer acesso a um canal de comunicação para dúvidas, informações, reclamações ou, ainda, para o exercício de direitos relacionados aos dados pessoais ou à presente Política;
✓ Informar os mecanismos de garantia da inviolabilidade à privacidade e da devida proteção dos dados pessoais.
`,
  },
  {
    title: 'INFORMAÇÕES COLETADAS',
    text: `As informações coletadas dependem em grande parte da interação que ocorre entre você e a Cred Estados, a maioria das quais pode ser categorizada de acordo com o seguinte:

4.1 Dados coletados para e por nossos usuários: ao usar nossos serviços, você pode importar para o nosso sistema informações pessoais que você coletou de seus clientes ou de outras pessoas. Não temos relacionamento direto com seus clientes ou qualquer outra pessoa que não seja você e, por esse motivo, você é responsável por garantir a permissão adequada para coletar e processar informações sobre esses indivíduos. Como parte de nossos serviços, podemos usar e incorporar nos recursos as informações que você forneceu, que coletamos de você ou sobre seus clientes.

4.2 Informações coletadas automaticamente: nossos servidores podem registrar automaticamente determinadas informações sobre como você usa nossa Plataforma, incluindo clientes e visitantes ocasionais. Os registros podem incluir informações como o endereço IP, o dispositivo e o tipo de navegador, o sistema operacional, as páginas ou os recursos do nossa Plataforma nos quais o usuário navegou e o tempo gasto nessas páginas ou recursos, com a frequência com que a Plataforma é usado por um usuário, termos de pesquisa, os links em nossa Plataforma nos quais um usuário clicou ou usou e outras estatísticas. Usamos essas informações para administrar a Plataforma e analisamos (e podemos envolver terceiros para analisá-las) para melhorar e aprimorar a Plataforma, expandindo seus recursos e funcionalidades e adaptando-as às necessidades e preferências de nossos usuários.

4.3 Informações pessoais sensíveis: sujeito ao parágrafo a seguir, solicitamos que você não nos envie ou divulgue informações pessoais sensíveis (por exemplo, informações relacionadas à origem racial ou étnica, opiniões políticas, religião ou outras crenças, saúde, vida sexual, características biométricas ou genéticas e, ainda, ou filiação sindical através da Plataforma.

4.3.1 Se você enviar ou divulgar qualquer informação pessoal sensível para nós (como quando você envia conteúdo gerado pelo usuário para a Plataforma), deve concordar com o processamento e uso dessas informações pessoais sensíveis de acordo com esta Política de Privacidade. Se você não consentir com o processamento e o uso de tais informações pessoais sensíveis, não deverá fornecê-las. Você pode usar seus direitos de proteção de dados, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018 -LGPD), para contestar ou restringir o processamento dessas informações pessoais sensíveis ou para excluir essas informações, conforme detalhado abaixo no título “Seus direitos e opções de Proteção de Dados “.
  `,
  },
  {
    title: 'OBJETIVO DA COLETA DE DADOS',
    text: `Para operações de serviço (i) operar, manter, administrar e melhorar o serviço prestado; (ii) para entender melhor suas necessidades e interesses e personalizar sua experiência com os serviços prestados; (iii) enviar informações sobre o produto por e-mail (iv) para responder às suas solicitações, perguntas e comentários relacionados ao nosso trabalho.

5.1 Para se comunicar com você: se você solicitar informações, registrar-se no nosso site ou participar de nossas pesquisas, promoções ou eventos, poderemos enviar-lhe comunicações de marketing relacionadas à Cred Estados na forma da lei, mas forneceremos a você a possibilidade de optar por não participar.

5.2 Cumprimento da lei: usamos suas informações pessoais conforme julgamos necessário ou apropriado para cumprir as leis aplicáveis, solicitações legais e processos legais, como para responder a intimações ou solicitações de autoridades governamentais.

5.2.1 Com o seu consentimento podemos usar ou compartilhar suas informações pessoais, por exemplo, quando você concorda em nos deixar postar seus depoimentos ou endossos em nossa Plataforma, você nos instrui a tomar uma ação específica em relação às suas informações pessoais ou você opta pelo marketing de terceiras comunicações.

5.2.2 Podemos criar dados anônimos a partir de suas informações pessoais e de outros indivíduos cujas informações pessoais coletamos. Transformamos informações pessoais em dados anônimos, excluindo as informações que os identificam pessoalmente, e usamos esses dados anônimos para nossos fins comerciais legais. Para conformidade, prevenção e segurança de fraudes. Usamos suas informações pessoais conforme julgamos necessário ou apropriado para (a) fazer cumprir os termos e condições que regem a Plataforma; (b) proteger nossos direitos, privacidade, segurança ou propriedade e / ou os seus ou de terceiros; e (c) proteger, investigar e impedir contra atividades fraudulentas, prejudiciais, não autorizadas, antiéticas ou ilegais. Para fornecer, apoiar e melhorar os serviços que oferecemos utilizamos dados que nossos clientes nos disponibilizam para permitir que utilizem os serviços e se comuniquem com seus clientes, isso também inclui, por exemplo, a agregação de informações do uso dos serviços ou a visita aos nossos sites e o compartilhamento dessas informações com terceiros para melhorar nossos serviços. Isso também pode incluir o compartilhamento de suas informações ou as informações que você nos fornece sobre seus clientes com terceiros, a fim de fornecer e apoiar nossos serviços ou disponibilizar certos recursos dos serviços. Quando temos que compartilhar informações pessoais com terceiros, tomamos medidas para proteger suas informações, exigindo que esses terceiros celebrem um contrato conosco que exija que eles usem as informações pessoais que transferimos para eles de uma maneira consistente com esta Política de Privacidade, necessárias ao cumprimento da Lei Geral de Proteção de Dados (Lei 13.709/2018 – LGPD).
  `,
  },
  {
    title: 'COMO COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS',
    text: `Não compartilhamos ou vendemos as informações pessoais que são fornecidas pelo cliente a outras organizações sem o seu consentimento expresso, de acordo com a previsão desta Política de Privacidade e com a previsão da LGPD (Lei 13.709/2018).

Divulgamos informações pessoais a terceiros nas seguintes circunstâncias:

6.1 Provedores de serviço. Podemos empregar empresas e indivíduos de terceiros para administrar e fornecer a Plataforma em nosso nome (como processamento de pagamento de contas e cartão de crédito, suporte ao cliente, hospedagem, entrega de e-mail e serviços de gerenciamento de banco de dados). Esses terceiros possuem permissão para usar suas informações pessoais apenas para executar essas tarefas de maneira consistente com esta Política de Privacidade e são obrigados a não as divulgar ou usá-las para qualquer outra finalidade.

6.2 Conselheiros profissionais. Podemos divulgar suas informações pessoais a consultores profissionais, como advogados, banqueiros, auditores e seguradoras, quando necessário no curso dos serviços profissionais que eles nos prestam e indispensáveis ao desenvolvimento das atividades da Cred Estados.

6.3 Transferências de negócios. À medida que desenvolvemos nossos negócios, podemos vender ou comprar negócios ou ativos. No caso de venda corporativa, fusão, reorganização, dissolução ou evento similar, as informações pessoais podem fazer parte dos ativos transferidos. Você reconhece e concorda que qualquer sucessor ou adquirente da Cred Estados (ou de seus ativos) continuará a ter o direito de usar suas informações pessoais e outras informações de acordo com os termos desta Política de Privacidade e da Lei 13.709/2018. Além disso, a Cred Estados também pode divulgar informações pessoais agregadas para descrever nossos serviços a potenciais adquirentes ou parceiros de negócios.

6.4 Cumprimento das leis e aplicação da lei; Proteção e segurança. a Cred Estados pode divulgar informações sobre você a autoridades governamentais ou policiais, ou partes privadas, conforme exigido por lei, e divulgar e usar as informações que julgarmos necessárias ou apropriadas para cumprir as leis aplicáveis, solicitações e processos legais, como: responder a intimações ou pedidos de autoridades governamentais; (b) fazer cumprir os termos e condições que regem a Plataforma; (d) proteger nossos direitos, privacidade, segurança ou propriedade e / ou os seus ou de terceiros; e (e) proteger, investigar e impedir contra atividades fraudulentas, prejudiciais, não autorizadas, antiéticas ou ilegais.
  `,
  },
  {
    title: 'OS SEUS DIREITOS E ESCOLHAS DE PROTEÇÃO DE DADOS',
    text: `De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
✓ Se você deseja acessar suas informações pessoais que a Cred Estados coleta, você pode fazê-lo a qualquer momento entrando em contato conosco usando os detalhes de contato fornecidos no cabeçalho “Como entrar em contato conosco” abaixo.
  `,
  },
  {
    title: 'RETENÇÃO DE INFORMAÇÃO',
    text: `Reteremos as informações pessoais que processamos em nome de nossos usuários pelo tempo necessário para fornecer nossos serviços ou por tempo indeterminado para cumprir nossas obrigações legais, resolver disputas, impedir abusos e fazer cumprir nossos acordos. Se exigido por lei, excluiremos as informações pessoais apagando-as do nosso banco de dados.`,
  },
  {
    title: 'TRANSFERÊNCIAS DE DADOS',
    text: `Suas informações pessoais podem ser armazenadas e processadas em qualquer país em que tenhamos instalações ou em que contratemos prestadores de serviços. Ao aceitar os termos desta Política de Privacidade, você reconhece e concorda com a transferência e o processamento de informações pessoais em servidores localizados fora do país em que você reside.

Nós nos reservamos o direito de acessar, ler, preservar e divulgar qualquer informação que acreditemos ser necessária para cumprir ou aplicar a lei ou ordem judicial na medida requerida pela legislação e regulamentação aplicáveis, a presente Política de Privacidade e quaisquer outros contratos ou termos com os quais os usuários concordaram, bem como proteger os direitos, propriedade ou segurança da Plataforma, e seus respectivos funcionários, prestadores de serviço, usuários, clientes e outros.`,
  },
  {
    title: 'COOKIES',
    text: `A Cred Estados com seus parceiros pode usar várias tecnologias para coletar e armazenar informações quando você usa nossos serviços, e isso pode incluir o uso de cookies e tecnologias de rastreamento semelhantes em nossa Plataforma, como pixels e web beacons, para analisar tendências, administrar a Plataforma, rastreie os movimentos dos usuários na Plataforma, publique anúncios direcionados e colete informações demográficas sobre nossa base de usuários como um todo. Os usuários podem controlar o uso de cookies no nível do navegador individual.

Para mais informações sobre o uso de cookies pela Cred Estados, acesse nossa Política de Cookies em nosso site.
  `,
  },
  {
    title: 'SEGURANÇA',
    text: `11.1 – Aviso de violação de segurança
Se uma violação de segurança causar uma invasão não autorizada em nosso sistema que afeta materialmente você ou seus clientes, a Cred Estados notificará você o mais breve possível e, posteriormente, informará a ação que tomamos em resposta, de acordo com o Plano de Resposta a Incidentes.

11.2 – Protegendo suas informações
Tomamos medidas razoáveis e apropriadas para proteger as Informações Pessoais contra perda, uso indevido e acesso não autorizado, divulgação, alteração e destruição, levando em consideração os riscos envolvidos no processamento e a natureza das Informações Pessoais.
Relembramos que a segurança de seus dados não depende exclusivamente de nós, de modo que você também deve estar sempre atento às nossas orientações:
• É importante que você proteja suas informações contra acessos não autorizados ao seu computador ou dispositivo móvel (celulares, tabletes, etc.), contas e senhas. Se houver uso de senha, esta deve ser sempre pessoal e intransferível, ou seja, ela não deve ser compartilhada com terceiros, nem mesmo familiares;
• Mantenha suas senhas em segurança e nunca as compartilhe com terceiros;
• Não utilize seu nome, data de nascimento, palavras comuns, números sequenciais (ex.: 12345) ou informações facilmente verificáveis sobre você nas suas senhas. Evite, também, senhas muito curtas;
• Evite utilizar a mesma senha para suas contas importantes ou outras Plataformas;
• Mantenha sempre o programa antivírus do seu computador atualizado. Caso você não tenha um antivírus, recomendamos que você instale um o quanto antes;
• Computadores compartilhados nem sempre são confiáveis. Sempre que acessar um site em um computador compartilhado, certifique-se que você encerrou sua navegação, ao terminar de acessar o site. A opção sair varia de site para site e pode estar disponibilizada nas páginas como “Logout”, “Encerrar sessão”, “Sair”, etc;
• Jamais permita que o navegador salve automaticamente a sua senha em dispositivos compartilhados. Mesmo em dispositivos particulares, não recomendamos permitir que o navegador memorize sua senha;
• Mantenha sempre seu navegador de internet atualizado conforme orientação do fabricante. O processo de atualização varia de acordo com seu navegador;
• Ao acessar a internet em lugares públicos, tome cuidado para que pessoas próximas não possam ver o que está fazendo, sua senha e seus dados pessoais;
• Certifique-se que você está utilizando uma conexão segura. Os navegadores de internet em geral exibem um cadeado ao lado do endereço do site no topo da janela (tecnologia SSL) para ilustrar que você está em um ambiente seguro. Você pode clicar no cadeado e obter maiores informações sobre o certificado e o próprio site antes de prosseguir. Apesar de o padrão ser a exibição de um cadeado ao lado do endereço do site, cada navegador de internet possui funcionalidades distintas e pode operar de diferentes formas. Caso você tenha dúvidas sobre esta funcionalidade, sugerimos que você consulte o manual de utilização do seu navegador de internet.
`,
  },
  {
    title: 'POLÍTICA DE PRIVACIDADE ONLINE',
    text: `Esta Política de Privacidade aplica-se apenas às nossas atividades online e é válida para os visitantes da nossa Plataforma e em relação às informações compartilhadas e / ou coletadas na Plataforma. Esta Política de Privacidade não se aplica a nenhuma informação coletada offline ou através de canais diferentes deste site.`,
  },
  {
    title: 'BASES LEGAIS PARA TRATAMENTO DE DADOS PESSOAIS',
    text: `Ao usar nossa Plataforma, você está ciente de nossa Política de Privacidade e com os seus respectivos termos. Em alguns casos, também podemos ter a obrigação legal de coletar informações pessoais de você. Se solicitarmos que você forneça informações pessoais para cumprir um requisito legal ou celebrar um contrato com você, deixaremos isso claro e o informaremos se o fornecimento de suas informações pessoais é obrigatório ou não (assim como das possíveis consequências se você não fornecer suas informações pessoais), de acordo com os incisos II e VI, do artigo 7º, da LGPD.
  
Da mesma forma, se coletarmos e usarmos suas informações pessoais com base em nossos interesses comerciais legítimos, esclareceremos a você quais são esses interesses comerciais legítimos, de acordo com o consentimento fornecido, nos termos dos artigos 7º, incisos I e IX, e 8º da LGPD.

Se você tiver dúvidas ou precisar de mais informações sobre a base legal em que coletamos e usamos suas informações pessoais, entre em contato conosco usando os detalhes de contato fornecidos no cabeçalho “Como entrar em contato conosco” abaixo.`,
  },
  {
    title: 'ALTERAÇÕES DE NOSSA POLÍTICA DE PRIVACIDADE',
    text: `Alterações nesta Política de Privacidade serão feitas quando necessário em resposta a alterações legais ou técnicas, ou, ainda, para desenvolvimentos comerciais. Quando atualizarmos nossa Política de Privacidade, tomaremos as medidas apropriadas para informá-lo, de acordo com o significado das alterações que fazemos.

A Cred Estados solicitará o seu consentimento para qualquer alteração relevante da Política de Privacidade, de acordo com as exigências da Lei Geral de Proteção de Dados (Lei 13.709/2018 -LGPD) e demais legislações aplicáveis.`,
  },
  {
    title:
      'COMO ENTRAR EM CONTATO COM NOSSO ENCARREGADO DE PROTEÇÃO DE DADOS (DPO)',
    text: `Se você desejar exercer seus direitos de titular, ou precisar de mais informações, e até mesmo tirar dúvidas sobre nossa política de privacidade, entre em contato com o nosso Encarregado de Proteção de Dados Pessoais:

    Carlos Eduardo Fontanella Cruz
    CPF: 08795984925
    E-mail:  carlos@credestados.com.br
    Última atualização: 24 de Abril de 2024.
    `,
  },
]
