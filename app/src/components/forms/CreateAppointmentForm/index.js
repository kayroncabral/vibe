import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'

import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import TextField from 'src/components/TextField'

import useStyles from './styles'

const validate = (values) => {
  const errors = {}

  if (!values.icd) {
    errors.icd = 'CID em branco'
  }

  if (!values.description) {
    errors.description = 'Descrição em branco'
  }

  return errors
}

const CreateAppointmentForm = ({ actions, onSubmit }) => {
  const classes = useStyles()

  const { form, handleSubmit, invalid, pristine, submitting } = useForm({
    onSubmit,
    validate
  })

  const icd = useField('icd', form)
  const description = useField('description', form)

  return (
    <form className={classes.root} autoComplete='off' onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item>
          <TextField {...icd} type='text' placeholder='CID' required />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...description}
            type='text'
            placeholder='Descrição'
            multiline
            rows={6}
            required
            fullWidth
          />
        </Grid>
      </Grid>
      {actions?.(invalid, pristine, submitting)}
    </form>
  )
}

CreateAppointmentForm.propTypes = {
  actions: PropTypes.func,
  onSubmit: PropTypes.func
}

CreateAppointmentForm.defaultProps = {
  actions: () => {},
  onSubmit: () => {}
}

export default CreateAppointmentForm
