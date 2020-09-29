import React from 'react'

import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Doctor from 'src/components/Doctor'
import Loading from 'src/components/Loading'

import useStyles from 'src/views/DoctorsView/styles'

const DoctorsView = ({
  doctorsLoading,
  scheduleLoading,
  doctors,
  onSchedule
}) => {
  const classes = useStyles()

  const renderDoctor = (doctor) => (
    <Grid key={doctor.id} item>
      <Doctor
        loading={scheduleLoading}
        doctor={doctor}
        onSchedule={onSchedule}
      />
    </Grid>
  )

  return (
    <Container className={classes.root} maxWidth='md'>
      {doctorsLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          {doctors.map(renderDoctor)}
        </Grid>
      )}
    </Container>
  )
}

DoctorsView.propTypes = {
  doctorsLoading: PropTypes.bool,
  scheduleLoading: PropTypes.bool,
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  onSchedule: PropTypes.func
}

DoctorsView.defaultProps = {
  onSchedule: () => {}
}

export default DoctorsView
