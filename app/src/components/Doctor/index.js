import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Rating from '@material-ui/lab/Rating'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Calendar from 'src/components/Calendar'

import { Sex } from 'src/utils/enums'

import useStyles from './styles'

const Doctor = ({ doctor }) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const prefix = doctor.sex === Sex.MALE ? 'Dr. ' : 'Dra. '

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid container item xs spacing={2}>
            <Grid item xs='auto'>
              <Avatar className={classes.avatar} variant='square' />
            </Grid>
            <Grid item xs>
              <Typography variant='h6'>
                {prefix}
                {doctor.name}
              </Typography>
              <Typography color='textSecondary'>
                Dermatologista (Tratamentos estéticos faciais, Tratamentos
                estéticos corporais, Queda de cabelo, Psoríase e
                imunobiológico), Especialista em medicina estética (Tricologia,
                Tratamentos de rugas, Toxina botulínica, Rejuvenescimento)
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
            <Collapse in={expanded} collapsedHeight={220}>
              <CardContent>
                <Calendar />
              </CardContent>
            </Collapse>
            <Divider light />
            <CardActions className={classes.actions}>
              <Button
                color='primary'
                size='small'
                endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                onClick={handleExpandClick}
              >
                {expanded ? 'Mostrar menos' : 'Mostrar mais'}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Doctor.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string
  })
}

Doctor.defaultProps = {}

export default Doctor
