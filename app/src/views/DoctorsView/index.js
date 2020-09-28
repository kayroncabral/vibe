import React from 'react'

import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Rating from '@material-ui/lab/Rating'

import Calendar from 'src/components/Calendar'

import useStyles from 'src/views/DoctorsView/styles'

const DoctorsView = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth='md'>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid container item xs spacing={2}>
              <Grid item xs='auto'>
                <Avatar className={classes.avatar} variant='square' />
              </Grid>
              <Grid item xs>
                <Typography variant='h6'>Dr. Alan Ost</Typography>
                <Typography color='textSecondary'>
                  Dermatologista (Tratamentos estéticos faciais, Tratamentos
                  estéticos corporais, Queda de cabelo, Psoríase e
                  imunobiológico), Especialista em medicina estética
                  (Tricologia, Tratamentos de rugas, Toxina botulínica,
                  Rejuvenescimento)
                </Typography>
                <Box display='flex'>
                  <Rating value={5} readOnly />
                  <Typography>108 opiniões</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Divider orientation='vertical' />
            </Grid>
            <Grid container item xs spacing={2} justify='center'>
              <Grid item>
                <Calendar />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

DoctorsView.propTypes = {}

DoctorsView.defaultProps = {}

export default DoctorsView
