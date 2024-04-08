import React from 'react';
import { Formik } from 'formik';
import DatePicker from '../Commons/DatePicker';
import Input from '../Commons/Input'
import { Button } from '../Commons/Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';

const isValidDate = function(date) {
  return (!isNaN(date.getTime()))
}

export default function Simulador() {
  const whatsapp = useWhatsApp();
  const minValue = 400;

  const validate = (values) => {
    const errors = {};
    
   if (!values.saldo) {
     errors.saldo = 'Obrigatório';
   } else {
     if (values.saldo < minValue) {
      errors.saldo = `Valor mínimo: R$ ${minValue}`;
     }
   }

   if (!values.aniversario) {
    errors.aniversario = 'Obrigatório';
  } else {
    if (!isValidDate(values.aniversario)) {
      errors.aniversario = 'Data inválida';
    }
  }


  if(!values.auth) {
    errors.auth = 'Obrigatório'
  }
 
   return errors;
  }

  const handleSubmit = (values) => {
    const aniversario = values.aniversario.toLocaleDateString('pt-br');
    const saldo = parseInt(values.saldo).toLocaleString('pt-br');
    const message = `Olá, gostaria de uma simulação para antecipação do FGTS! Meu saldo é de *R$ ${saldo}* e meu aniversário é no dia *${aniversario}*.`;
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/55${whatsapp}?text=${encodedMessage}`;
    window.open(link, "_blank");
  }


  return (
    <div id='fgts-form' className="card-simulacao-fgts shadow-2">
      <div className="card-header">            
        <i className="fas fa-piggy-bank"></i>
        <h3>Saque FGTS</h3>
      </div>
      <div className="card-body">
        <Formik
          initialValues={{ saldo: '', aniversario: null, auth: false }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {
            ({ setFieldValue, handleSubmit, values ,errors}) => (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: '1rem', marginTop: '1.5rem' }}>                  
                <Input.FinancialInputField
                  name='saldo'
                  id="saldo"
                  label="Saldo FGTS"
                  variant="outlined"
                  color='primary'
                  value={values.saldo}
                  required
                />

                <DatePicker
                  name='aniversario'
                  id="aniversario"
                  label="Seu aniversário"
                  variant="outlined"
                  color='primary'
                  onChange={(value) => {
                    setFieldValue('aniversario', value);
                  }}
                  required
                />

                <FormControl
                  error={errors.auth}
                >
                  <FormControlLabel    
                        name='auth'
                        color='default'
                    label="Ao informar meus dados, eu concordo que a CredEstados entre em contato comigo."
                    onChange={(value,checked) => {
                      setFieldValue('auth', checked);
                    }}
                    value={values.auth}
                    control={
                      <Checkbox
                      />}
                      sx={{color: '#444'}}
                  />

                  {errors.auth && <FormHelperText color='error'>{errors.auth}</FormHelperText>}
                </FormControl>

                
                <Button variant="outlined" color='primary' type='submit' fullWidth >Simular</Button>
              </form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}