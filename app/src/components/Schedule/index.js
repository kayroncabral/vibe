import React, { useState } from 'react'

import clsx from 'clsx'
import {
  parseISO,
  format,
  isToday,
  isTomorrow,
  differenceInHours
} from 'date-fns'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import AccountBoxIcon from '@material-ui/icons/AccountBox'
import CakeIcon from '@material-ui/icons/Cake'
import EventIcon from '@material-ui/icons/Event'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WcIcon from '@material-ui/icons/Wc'

import Button from 'src/components/Button'

import { ScheduleStatus, Sex } from 'src/utils/enums'

import useStyles from './styles'

const formatDate = (date) => {
  let formatted = (
    <>
      {' para '}
      <b>{format(parseISO(date), 'dd MMM \'às\' HH:mm')}</b>
    </>
  )

  if (isToday(parseISO(date))) {
    formatted = (
      <>
        {' para'}
        <b>
          {' hoje '}
          {format(parseISO(date), '\'às\' HH:mm')}
        </b>
      </>
    )
  } else if (isTomorrow(parseISO(date))) {
    formatted = (
      <>
        {' para'}
        <b>
          {' amanhã '}
          {format(parseISO(date), '\'às\' HH:mm')}
        </b>
      </>
    )
  }
  return formatted
}

const Schedule = ({
  schedule,
  cancelScheduleLoading,
  missingPatientLoading,
  onCancel,
  onMissing,
  onAppointment,
  onAppointmentSubmit
}) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleMissing = (event) => {
    onMissing(schedule)
  }

  const handleCancel = (event) => {
    onCancel(schedule)
  }

  const handleCreateAppointment = (event) => {
    onAppointment(schedule)
  }

  const prefix = schedule.doctor?.sex === Sex.MALE.value ? 'Dr. ' : 'Dra. '
  const booked = schedule.status === ScheduleStatus.BOOKED.value
  const appointmentDone =
    schedule.status === ScheduleStatus.APPOINTMENT_DONE.value
  const lessThan24Hours =
    differenceInHours(new Date(schedule.date), Date.now()) < 24

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs='auto'>
            <Avatar className={classes.avatar} variant='square' />
          </Grid>
          <Grid container item xs>
            {schedule.patient?.name && (
              <Grid item xs={12}>
                <Typography variant='h6'>{schedule.patient.name}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Box mb={1}>
                <Typography
                  className={classes.caption}
                  component='span'
                  color={booked || appointmentDone ? 'primary' : 'secondary'}
                >
                  {ScheduleStatus[schedule.status].label}
                </Typography>
                {booked && (
                  <>
                    <Typography
                      className={classes.caption}
                      component='span'
                      gutterBottom
                    >
                      {formatDate(schedule.date)}
                    </Typography>
                    {schedule.doctor && (
                      <Typography className={classes.caption} gutterBottom>
                        com{' '}
                        <b>
                          {prefix} {schedule.doctor?.name}
                        </b>
                      </Typography>
                    )}
                  </>
                )}
              </Box>
            </Grid>
            {schedule.status !== ScheduleStatus.BOOKED.value && (
              <Grid container>
                <EventIcon color='disabled' />
                <Typography
                  className={classes.subtitle}
                  varian='subtitle2'
                  gutterBottom
                >
                  {format(parseISO(schedule.date), 'dd/MM/yy \'às\' HH:mm')}
                </Typography>
              </Grid>
            )}
            {schedule.patient?.birthday && (
              <Grid container>
                <WcIcon color='disabled' />
                <Typography
                  className={classes.subtitle}
                  varian='subtitle2'
                  gutterBottom
                >
                  {Sex[schedule.patient.sex].label}
                </Typography>
              </Grid>
            )}
            {schedule.patient?.birthday && (
              <Grid container>
                <CakeIcon color='disabled' />
                <Typography
                  className={classes.subtitle}
                  varian='subtitle2'
                  gutterBottom
                >
                  {format(parseISO(schedule.patient.birthday), 'dd/MM/yy')}
                </Typography>
              </Grid>
            )}
            {schedule.patient?.federalTaxNumber && (
              <Grid container>
                <AccountBoxIcon color='disabled' />
                <Typography
                  className={classes.subtitle}
                  varian='subtitle2'
                  gutterBottom
                >
                  {schedule.patient.federalTaxNumber}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        {appointmentDone && (
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography className={classes.caption} color='textSecondary'>
                CID: {schedule.appointment?.icd}
              </Typography>
              <Typography>{schedule.appointment?.description}</Typography>
            </CardContent>
          </Collapse>
        )}
      </CardContent>
      {appointmentDone && <Divider variant='middle' />}
      <CardActions
        className={clsx(classes.actions, {
          [classes.center]: appointmentDone
        })}
      >
        {onCancel && booked && (
          <Button
            variant='outlined'
            color='secondary'
            size='small'
            loading={cancelScheduleLoading}
            disabled={lessThan24Hours}
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        )}
        {booked && (
          <>
            {onMissing && (
              <Button
                variant='outlined'
                color='secondary'
                size='small'
                loading={missingPatientLoading}
                onClick={handleMissing}
              >
                Ausente
              </Button>
            )}
            {onAppointment && onAppointmentSubmit && (
              <Button
                variant='contained'
                color='primary'
                size='small'
                onClick={handleCreateAppointment}
              >
                Iniciar consulta
              </Button>
            )}
          </>
        )}
        {appointmentDone && (
          <Button
            color='primary'
            size='small'
            endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={handleExpandClick}
          >
            {expanded ? 'Mostrar menos' : 'Mostrar mais'}
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

Schedule.propTypes = {
  schedule: PropTypes.shape({
    date: PropTypes.string,
    doctor: PropTypes.shape({
      name: PropTypes.string
    }),
    patient: PropTypes.shape({
      name: PropTypes.string,
      sex: PropTypes.string,
      birthday: PropTypes.string,
      federalTaxNumber: PropTypes.string
    }),
    appointment: PropTypes.shape({
      icd: PropTypes.string,
      description: PropTypes.string
    }),
    status: PropTypes.string
  }),
  missingPatientLoading: PropTypes.bool,
  cancelScheduleLoading: PropTypes.bool,
  onCancel: PropTypes.func,
  onMissing: PropTypes.func,
  onAppointment: PropTypes.func,
  onAppointmentSubmit: PropTypes.func
}

Schedule.defaultProps = {
  missingPatientLoading: false,
  cancelScheduleLoading: false
}

export default Schedule
