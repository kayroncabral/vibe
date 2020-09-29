import React from 'react'

import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Filter from 'src/components/Filter'
import Loading from 'src/components/Loading'
import Schedule from 'src/components/Schedule'

import useStyles from 'src/views/SchedulesView/styles'

const SchedulesView = ({ loading, schedules, onFilterApply }) => {
  const classes = useStyles()

  const renderSchedule = (schedule) => (
    <Grid key={schedule.id} item xs={12}>
      <Schedule schedule={schedule} />
    </Grid>
  )

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Filter onApply={onFilterApply} />
      </Container>
      <Container className={classes.container} maxWidth='sm'>
        {loading ? (
          <Loading />
        ) : (
          <Grid container spacing={2}>
            {schedules.map(renderSchedule)}
          </Grid>
        )}
      </Container>
    </div>
  )
}

SchedulesView.propTypes = {
  loading: PropTypes.bool,
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      patient: PropTypes.shape({
        name: PropTypes.string
      }),
      status: PropTypes.string
    })
  ),
  onFilterApply: PropTypes.func
}

SchedulesView.defaultProps = {
  onFilterApply: () => {}
}

export default SchedulesView
