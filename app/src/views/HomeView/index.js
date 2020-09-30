import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from 'src/views/HomeView/styles'

import { Paths, Tokens } from 'src/utils/enums'

const HomeView = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleDoctorClick = (key) => (event) => {
    const token = Tokens[key]
    localStorage.setItem('token', token)
    history.push(Paths.schedules.value)
  }

  const handlePatientClick = (key) => (event) => {
    const token = Tokens[key]
    localStorage.setItem('token', token)
    history.push(Paths.doctors.value)
  }

  return (
    <Container className={classes.root} maxWidth='sm'>
      <Typography variant='h4' paragraph>
        Entrar como
      </Typography>
      <Grid container spacing={2}>
        <Grid container item xs spacing={2}>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleDoctorClick('luoril')}
            >
              Dr. Luoril
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleDoctorClick('adaninndîr')}
            >
              Dra. Adaninndîr
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleDoctorClick('olfidi')}
            >
              Dr. Olfidi
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleDoctorClick('beinsei')}
            >
              Dra. Beinsei
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs spacing={2}>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              onClick={handlePatientClick('inaya')}
            >
              Paciente Inaya
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              onClick={handlePatientClick('marsha')}
            >
              Paciente Marsha
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeView
