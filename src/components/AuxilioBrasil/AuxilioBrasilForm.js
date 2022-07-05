import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Form, Formik } from 'formik';
import Input from '../Commons/Input';
import { Button } from '../Commons/Button';

const AuxilioBrasilForm = () => {

  
  const validate = (values) => {
    const errors = {};
      
    if (!values.name) {
      errors.name = 'Obrigatório';
    }

    if (!values.phone) {
      errors.phone = 'Obrigatório';
    }

  //  if (!values.aniversario) {
  //   errors.aniversario = 'Obrigatório';
  // } else {
  //   if (!isValidDate(values.aniversario)) {
  //     errors.aniversario = 'Data inválida';
  //   }
  // }
 
   return errors;
  }

  const handleSubmit = (values, event) => {
    // const aniversario = values.aniversario.toLocaleDateString('pt-br');
    // const saldo = parseInt(values.saldo).toLocaleString('pt-br');
    // const message = `Olá, gostaria de uma simulação para antecipação do FGTS! Meu saldo é de *R$ ${saldo}* e meu aniversário é no dia *${aniversario}*.`;
    // const encodedMessage = encodeURIComponent(message);
    // const link = `https://wa.me/55${whatsapp}?text=${encodedMessage}`;
    // window.open(link, "_blank");
  }

  return (
    <Paper sx={{ width: { xs: '100%', md: '22rem' }, height: 'fit-content', borderRadius: 2, p: 3 }} elevation={10}>
      <Formik      
        initialValues={{ name: '', phone: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          <Stack spacing={3} >
            <Typography variant='h6' sx={{ color: '#363636b0' }}>Insira seus dados para entrar na fila de espera</Typography>
            <Input.Input
              name='name'
              id="name"
              label="Nome"
              variant="outlined"
              color='primary'
              required
            />
            <Input.Input
              name='phone'
              id="phone"
              label="Telefone"
              variant="outlined"
              color='primary'
              required
            />
            <Button variant="contained" color='primary' type='submit' fullWidth >Enviar</Button>
          </Stack>
        </Form>
      </Formik>
    </Paper>
  )
}

export default AuxilioBrasilForm