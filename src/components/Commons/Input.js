import React, { useCallback, useState } from 'react';
import {
	TextField,
	FormHelperText,
	Theme,
	TextFieldProps,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import { SxProps } from '@mui/system';
import { useField } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import NumberFormat from 'react-number-format';


const FinancialInput = React.forwardRef(
  function FinancialInput(props, ref) {
    const { onChange, ...other } = props;

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
          });
        }}
        thousandSeparator='.'
				decimalSeparator=','
				decimalScale={2}
        isNumericString
        prefix="R$ "
      />
    );
  },
);

const FinancialInputField = (props) => {
  const [field, meta, helpers] = useField({ name: props.name });
  const { helperText } = props;

	const getHelperText = useCallback(() => {
		if (Boolean(meta.touched) && Boolean(meta.error)) {
			return meta.error;
		}

		if (props.helperText) {
			return props.helperText;
		}
	}, [meta.error, meta.touched, props.helperText]);

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

const Input= (props) => {
  const [field, meta, helpers] = useField({ name: props.name });
  const { helperText } = props;

	const getHelperText = useCallback(() => {
		if (Boolean(meta.touched) && Boolean(meta.error)) {
			return meta.error;
		}

		if (props.helperText) {
			return props.helperText;
		}
	}, [meta.error, meta.touched, props.helperText]);

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


export default {
	FinancialInputField: React.memo(FinancialInputField),
  Input: React.memo(Input),
};