import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Form, Formik } from 'formik';
import Input from '../Commons/Input';
import { Button } from '../Commons/Button';
import {useWhatsApp} from '../../hooks/useWhatsApp'

const AuxilioBrasilForm = () => {
  const whatsapp = useWhatsApp();
  
  const validate = (values) => {
    const errors = {};
      
    if (!values.name) {
      errors.name = 'Obrigatório';
    }

    if (values.phone.length < 10) {
      errors.phone = 'O telefone deve ter pelo menos 10 dígitos';
    } else if (values.phone.length > 11) {
      errors.phone = 'O telefone deve ter no máximo 11 dígitos';
    }

    if (!values.phone) {
      errors.phone = 'Obrigatório';
    }
 
   return errors;
  }

  const handleSubmit = (values) => {
    const name = values.name;
    const phone = values.phone;
    const message = `Olá, tenho interesse no *Empréstimo Auxílio Brasil!* Meu nome é ${name} e meu telefone é ${phone}.`; 
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/55${whatsapp}?text=${encodedMessage}`;
    window.open(link, "_blank");
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
            <Input.PhoneInputField
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