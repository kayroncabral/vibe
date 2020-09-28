import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Doctor from 'src/components/Doctor'

import useStyles from 'src/views/DoctorsView/styles'

const DoctorsView = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth='md'>
      <Grid container spacing={2}>
        <Grid item>
          <Doctor />
        </Grid>
        <Grid item>
          <Doctor />
        </Grid>
        <Grid item>
          <Doctor />
        </Grid>
      </Grid>
    </Container>
  )
}

DoctorsView.propTypes = {}

DoctorsView.defaultProps = {}

export default DoctorsView
