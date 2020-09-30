import React from 'react'

import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Button from 'src/components/Button'
import CreateAppointmentForm from 'src/components/forms/CreateAppointmentForm'

import useStyles from './styles'

const CreateAppointmentDiaolg = ({ open, loading, onClose, onSubmit }) => {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Dialog
      className={classes.root}
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth='sm'
    >
      <DialogTitle>Criar consulta</DialogTitle>
      <DialogContent>
        <CreateAppointmentForm
          onSubmit={onSubmit}
          actions={(invalid, pristine, submitting) => (
            <DialogActions>
              <Button color='secondary' onClick={onClose}>
                Cancelar
              </Button>
              <Button
                type='submit'
                color='primary'
                loading={loading || submitting}
                disabled={invalid || pristine}
              >
                Finalizar consulta
              </Button>
            </DialogActions>
          )}
        />
      </DialogContent>
    </Dialog>
  )
}

CreateAppointmentDiaolg.propTypes = {
  open: PropTypes.bool,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
}

CreateAppointmentDiaolg.defaultProps = {
  open: false,
  loading: false,
  onClose: () => {},
  onSubmit: () => {}
}

export default CreateAppointmentDiaolg
