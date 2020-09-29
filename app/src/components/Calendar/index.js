import React, { useState } from 'react'

import clsx from 'clsx'
import { isToday, isTomorrow, parseISO, format } from 'date-fns'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Button from 'src/components/Button'
import useStyles from 'src/components/Calendar/styles'

import { groupByDate } from 'src/utils/date'
import { ScheduleStatus } from 'src/utils/enums'

const Calendar = ({ loading, schedules, onSchedule }) => {
  const classes = useStyles()
  const [selectedId, setSelectedId] = useState()

  const handleSchedule = (schedule) => (event) => {
    setSelectedId(schedule.id)
    onSchedule(schedule)
  }

  const groups = groupByDate(schedules, 'date')

  const renderSchedule = (schedule, index) => {
    const booked = schedule.status === ScheduleStatus.BOOKED
    const selected = selectedId === schedule.id

    return (
      <Grid key={index} container item justify='center'>
        <Button
          className={clsx({
            [classes.disabled]: booked
          })}
          variant={booked ? 'text' : 'outlined'}
          color='primary'
          size='small'
          loading={selected && loading}
          disabled={booked}
          onClick={handleSchedule(schedule)}
        >
          {format(parseISO(schedule.date), 'HH:mm')}
        </Button>
      </Grid>
    )
  }

  const renderDay = (key) => {
    let formatted
    if (isToday(parseISO(key))) {
      formatted = 'Hoje'
    } else if (isTomorrow(parseISO(key))) {
      formatted = 'Amanhã'
    } else {
      formatted = format(parseISO(key), 'eee')
    }

    return (
      <Grid
        key={key}
        className={classes.grid}
        container
        item
        xs
        spacing={2}
        direction='column'
      >
        <Grid container item justify='center'>
          <Grid item xs={12}>
            <Typography align='center'>{formatted}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.caption}
              align='center'
              color='textSecondary'
            >
              {format(parseISO(key), 'dd MMM')}
            </Typography>
          </Grid>
        </Grid>
        {groups[key].map(renderSchedule)}
      </Grid>
    )
  }

  return (
    <Grid className={classes.root} container spacing={2}>
      {Object.keys(groups).map(renderDay)}
    </Grid>
  )
}

Calendar.propTypes = {
  loading: PropTypes.bool,
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      status: PropTypes.string
    })
  ),
  onSchedule: PropTypes.func
}

Calendar.defaultProps = {
  loading: false,
  onSchedule: () => {}
}

export default Calendar
