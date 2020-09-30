import React from 'react'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Doctor from 'src/components/Doctor'
import Loading from 'src/components/Loading'

import useStyles from 'src/views/DoctorsView/styles'

import { Paths } from 'src/utils/enums'

const DoctorsView = ({
  doctorsLoading,
  scheduleLoading,
  doctors,
  onSchedule
}) => {
  const classes = useStyles()

  const history = useHistory()

  const mySchedulesClick = (event) => {
    history.push(Paths.mySchedules.value)
  }

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
        <>
          <Box display='flex' justifyContent='flex-end' mb={2}>
            <Button
              variant='contained'
              color='primary'
              onClick={mySchedulesClick}
            >
              Meus agendamentos
            </Button>
          </Box>
          <Grid container spacing={2}>
            {doctors.map(renderDoctor)}
          </Grid>
        </>
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
