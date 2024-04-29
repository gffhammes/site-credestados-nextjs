import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import { useField } from 'formik'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export default function DatePicker(props) {
  const [field, meta] = useField({ name: props.name })
  const windowWidth = useWindowWidth()

  const getHelperText = React.useCallback(() => {
    if (Boolean(meta.touched) && Boolean(meta.error)) {
      return meta.error
    }

    if (props.helperText) {
      return props.helperText
    }
  }, [meta.error, meta.touched, props.helperText])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        {windowWidth > 675 ? (
          <DesktopDatePicker
            {...props}
            {...field}
            label={props.label}
            inputFormat="dd/MM/yyyy"
            value={field.value}
            onChange={props.onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                color={props.color}
                id={props.id}
                name={props.name}
                inputProps={{
                  ...params.inputProps,
                  placeholder: 'dd/mm/aaaa',
                }}
                required={props.required}
                error={Boolean(meta.touched) && Boolean(meta.error)}
                helperText={getHelperText()}
              />
            )}
          />
        ) : (
          <MobileDatePicker
            {...props}
            {...field}
            label={props.label}
            inputFormat="dd/MM/yyyy"
            value={field.value}
            onChange={props.onChange}
            renderInput={(params) => (
              <TextField
                color={props.color}
                id={props.id}
                name={props.name}
                {...params}
              />
            )}
            error={Boolean(meta.touched) && Boolean(meta.error)}
            helperText={getHelperText()}
          />
        )}
      </Stack>
    </LocalizationProvider>
  )
}
