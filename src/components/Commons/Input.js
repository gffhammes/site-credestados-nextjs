import React, { useCallback } from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
import NumberFormat from 'react-number-format'

const FinancialInput = React.forwardRef(function FinancialInput(props, ref) {
  const { onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      isNumericString
      prefix="R$ "
    />
  )
})

const PhoneInput = React.forwardRef(function PhoneInput(props, ref) {
  const { onChange, value, ...other } = props
  const isMobilePhone = value.length === 11

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      format={isMobilePhone ? '(##) # ####-####' : '(##) ####-#####'}
      type="tel"
      isNumericString
    />
  )
})

const FinancialInputField = (props) => {
  const [field, meta] = useField({ name: props.name })

  const getHelperText = useCallback(() => {
    if (Boolean(meta.touched) && Boolean(meta.error)) {
      return meta.error
    }

    if (props.helperText) {
      return props.helperText
    }
  }, [meta.error, meta.touched, props.helperText])

  return (
    <TextField
      {...props}
      {...field}
      label={props.label}
      name={props.name}
      id={props.id}
      InputProps={{
        inputComponent: FinancialInput,
      }}
      variant="outlined"
      color={props.color}
      error={Boolean(meta.touched) && Boolean(meta.error)}
      helperText={getHelperText()}
    />
  )
}

const PhoneInputField = (props) => {
  const [field, meta] = useField({ name: props.name })

  const getHelperText = useCallback(() => {
    if (Boolean(meta.touched) && Boolean(meta.error)) {
      return meta.error
    }

    if (props.helperText) {
      return props.helperText
    }
  }, [meta.error, meta.touched, props.helperText])

  return (
    <TextField
      {...props}
      {...field}
      label={props.label}
      name={props.name}
      id={props.id}
      InputProps={{
        inputComponent: PhoneInput,
      }}
      variant="outlined"
      color={props.color}
      error={Boolean(meta.touched) && Boolean(meta.error)}
      helperText={getHelperText()}
    />
  )
}

const Input = (props) => {
  const [field, meta] = useField({ name: props.name })

  const getHelperText = useCallback(() => {
    if (Boolean(meta.touched) && Boolean(meta.error)) {
      return meta.error
    }

    if (props.helperText) {
      return props.helperText
    }
  }, [meta.error, meta.touched, props.helperText])

  return (
    <TextField
      {...props}
      {...field}
      label={props.label}
      name={props.name}
      id={props.id}
      variant="outlined"
      color={props.color}
      error={Boolean(meta.touched) && Boolean(meta.error)}
      helperText={getHelperText()}
    />
  )
}

const InputExport = {
  FinancialInputField: React.memo(FinancialInputField),
  PhoneInputField: React.memo(PhoneInputField),
  Input: React.memo(Input),
}

export default InputExport
