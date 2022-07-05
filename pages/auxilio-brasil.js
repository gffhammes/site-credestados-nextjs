import { Box, Container, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import AuxilioBrasilForm from '../src/components/AuxilioBrasil/AuxilioBrasilForm'

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
              <Stack sx={{ maxWidth: '40ch'}} spacing={2}>              
                <Typography fontSize={18}>Informe seus dados e entre para a fila de espera do <strong>Empréstimo Auxílio Brasil</strong></Typography>
                <Typography fontSize={18}>Empréstimos de até <strong>R$ 3 mil</strong></Typography>
                <Typography fontSize={18}><strong>Parcelas descontadas</strong> diretamente do Auxílio Brasil</Typography>
              </Stack>
            </Stack>
            <AuxilioBrasilForm />
          </Stack>
        </Container>
      </main>
    </>
  )
}