import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CreateAppointmentDialog from 'src/components/dialogs/CreateAppointmentDialog'
import Filter from 'src/components/Filter'
import Loading from 'src/components/Loading'
import Schedule from 'src/components/Schedule'

import useStyles from 'src/views/SchedulesView/styles'

const SchedulesView = ({
  schedulesLoading,
  missingPatientLoading,
  createAppointmentLoading,
  schedules,
  onFilterApply,
  onMissingPatient,
  onCreateAppointment
}) => {
  const classes = useStyles()

  const [selectedSchedule, setSelectedSchedule] = useState(null)
  const [createAppointmentOpen, setCreateAppointmentOpen] = useState(false)

  const handleCreateAppointmentOpen = (schedule) => {
    setSelectedSchedule(schedule)
    setCreateAppointmentOpen(true)
  }

  const handleCreateAppointmentClose = () => {
    setSelectedSchedule(null)
    setCreateAppointmentOpen(false)
  }

  const handleMissingPatient = (schedule) => {
    onMissingPatient(schedule)
  }

  const handleCreateAppointmentSubmit = async (appointment) => {
    await onCreateAppointment(selectedSchedule, appointment)
    handleCreateAppointmentClose()
  }

  const renderSchedule = (schedule) => (
    <Grid key={schedule.id} item xs={12}>
      <Schedule
        schedule={schedule}
        missingPatientLoading={missingPatientLoading}
        onMissing={handleMissingPatient}
        onAppointment={handleCreateAppointmentOpen}
      />
    </Grid>
  )

  const hasSchedules = !!schedules.length

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Filter onApply={onFilterApply} />
      </Container>
      <Container className={classes.container} maxWidth='sm'>
        {schedulesLoading ? (
          <Loading />
        ) : (
          <Grid container spacing={2} justify='center' alignItems='center'>
            {hasSchedules ? (
              schedules.map(renderSchedule)
            ) : (
              <Typography color='textSecondary' aling='center'>
                Não há consultas
              </Typography>
            )}
          </Grid>
        )}
      </Container>
      <CreateAppointmentDialog
        open={createAppointmentOpen}
        loading={createAppointmentLoading}
        onSubmit={handleCreateAppointmentSubmit}
        onClose={handleCreateAppointmentClose}
      />
    </div>
  )
}

SchedulesView.propTypes = {
  schedulesLoading: PropTypes.bool,
  missingPatientLoading: PropTypes.bool,
  createAppointmentLoading: PropTypes.bool,
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      patient: PropTypes.shape({
        name: PropTypes.string
      }),
      status: PropTypes.string
    })
  ),
  onFilterApply: PropTypes.func,
  onMissingPatient: PropTypes.func,
  onCreateAppointment: PropTypes.func
}

SchedulesView.defaultProps = {
  schedulesLoading: false,
  missingPatientLoading: false,
  createAppointmentLoading: false,
  onFilterApply: () => {},
  onMissingPatient: () => {},
  onCreateAppointment: () => {}
}

export default SchedulesView
