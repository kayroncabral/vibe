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

const formatSpecializations = (specialization) => {
  const specializations = specialization.subspecializations
    .map((subspecializations) => subspecializations.name)
    .join(', ')
  return `${specialization.name} (${specializations})`
}

const Doctor = ({ loading, doctor, onSchedule }) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const prefix = doctor.sex === Sex.MALE ? 'Dr. ' : 'Dra. '
  const hasSchedules = !!doctor.schedules.length

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
              <Typography
                className={classes.caption}
                color='textSecondary'
                gutterBottom
              >
                Número de registro: {doctor.crm}
              </Typography>
              <Typography color='textSecondary' gutterBottom>
                {doctor.specializations.map(formatSpecializations).join(', ')}
              </Typography>
              <Box display='flex' alignItems='flex-end'>
                <Rating value={5} readOnly />
                <Typography className={classes.caption} color='textSecondary'>
                  108 opiniões
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Divider orientation='vertical' />
          </Grid>
          <Grid
            container
            item
            xs
            spacing={2}
            justify='center'
            alignItems='center'
          >
            {hasSchedules ? (
              <>
                <Grid item xs={12}>
                  <Collapse in={expanded} collapsedHeight={220}>
                    <CardContent>
                      <Calendar
                        loading={loading}
                        schedules={doctor.schedules}
                        onSchedule={onSchedule}
                      />
                    </CardContent>
                  </Collapse>
                </Grid>
                <Grid item xs={12}>
                  <Divider light />
                </Grid>
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
              </>
            ) : (
              <Typography color='textSecondary'>
                Não há horários dispoíveis
              </Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Doctor.propTypes = {
  loading: PropTypes.bool,
  doctor: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    crm: PropTypes.string,
    specializations: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        subspecializations: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string
          })
        )
      })
    ),
    schedules: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string,
        status: PropTypes.string
      })
    )
  }),
  onSchedule: PropTypes.func
}

Doctor.defaultProps = {
  onSchedule: () => {}
}

export default Doctor
