import { Box, Container, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import AuxilioBrasilForm from '../src/components/AuxilioBrasil/AuxilioBrasilForm'

const bulletPoints = [
  'Garanta já o seu consignado com as <strong>melhores taxas</strong> do mercado',
  'Valor liberado em sua conta',
  'Parcelas descontadas diretamente do seu beneficio, sem necessidade de <strong>nenhum pagamento de boleto</strong>',
]

export default function AuxilioBrasil() {
  return (
    <>
      <Head>
        <title>Auxílio Brasil | CredEstados</title>
      </Head>
      <main
        className='page__auxilio-brasil'
        style={{
          backgroundImage: 'url(/images/auxilio-brasil.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            height: '100%',
            top: 0,
            width: '100%',
            background: 'rgba(0, 0, 0, 0.8)'
          }}
        />
        <Container sx={{ minHeight: '90vh', display: 'flex', position: 'relative', px: '2rem' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ m: 'auto', py: 10 }} alignItems='center' spacing={{ xs: 5, lg: 15 }}>            
            <Stack spacing={3} sx={{ color: 'white' }}>
              <Typography  sx={{ maxWidth: { xs: '35ch', md: '30ch' } }} variant='h1' fontSize={{ xs: '1.5rem', md: '2rem'}} fontWeight={700}>Empréstimo Consignado <strong style={{ color: 'var(--primary)', fontSize: '4rem' }}>AUXÍLIO BRASIL</strong></Typography>
              <Stack sx={{ maxWidth: '60ch'}} spacing={2}>   
                {bulletPoints.map(item => {
                  return (
                    <Stack direction='row' key={item} spacing={1}>
                      <Typography fontSize={18}>✅</Typography>
                      <Typography fontSize={18} dangerouslySetInnerHTML={{ __html: item }} />
                    </Stack>
                  )
                })}
              </Stack>
            </Stack>
            <AuxilioBrasilForm />
          </Stack>
        </Container>
      </main>
    </>
  )
}