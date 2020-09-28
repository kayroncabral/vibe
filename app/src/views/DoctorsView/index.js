import React from 'react'

import PropTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Doctor from 'src/components/Doctor'

import useStyles from 'src/views/DoctorsView/styles'

const DoctorsView = ({ loading, doctors }) => {
  const classes = useStyles()

  const renderDoctor = (doctor) => (
    <Grid key={doctor.id} item>
      <Doctor doctor={doctor} />
    </Grid>
  )

  return (
    <Container className={classes.root} maxWidth='md'>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {doctors.map(renderDoctor)}
        </Grid>
      )}
    </Container>
  )
}

DoctorsView.propTypes = {
  loading: PropTypes.bool,
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}

DoctorsView.defaultProps = {}

export default DoctorsView
