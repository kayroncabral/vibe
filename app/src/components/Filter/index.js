import React, { useState } from 'react'

import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { format } from 'date-fns'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import { ScheduleStatus } from 'src/utils/enums'

import useStyles from './styles'

const now = format(new Date(), 'yyyy-MM-dd')

const Filter = ({ onApply }) => {
  const classes = useStyles()

  const [filter, setFilter] = useState({
    name: '',
    start: now,
    end: now,
    status: ''
  })

  const handleChange = (key) => (value) => {
    const newValue = value.target?.value ?? value
    setFilter((prevFilter) => ({ ...prevFilter, [key]: newValue }))
  }

  const handleApply = (event) => {
    const validatedFilter = { ...filter }

    if (!validatedFilter.name) validatedFilter.name = null
    if (!validatedFilter.status) validatedFilter.status = null

    onApply(validatedFilter)
  }

  return (
    <Grid
      className={classes.root}
      container
      spacing={2}
      justify='space-between'
      alignItems='flex-end'
    >
      <Grid item xs={6} md='auto'>
        <TextField
          label='Nome'
          value={filter.name}
          onChange={handleChange('name')}
        />
      </Grid>
      <Grid item xs={6} md='auto'>
        <FormControl>
          <InputLabel shrink>Status</InputLabel>
          <Select
            value={filter.status}
            autoWidth
            displayEmpty
            onChange={handleChange('status')}
          >
            <MenuItem value=''>
              <em>Nenhum</em>
            </MenuItem>
            <MenuItem value={ScheduleStatus.AVAILABLE.value}>
              {ScheduleStatus.AVAILABLE.label}
            </MenuItem>
            <MenuItem value={ScheduleStatus.BOOKED.value}>
              {ScheduleStatus.BOOKED.label}
            </MenuItem>
            <MenuItem value={ScheduleStatus.CANCELED.value}>
              {ScheduleStatus.CANCELED.label}
            </MenuItem>
            <MenuItem value={ScheduleStatus.APPOINTMENT_DONE.value}>
              {ScheduleStatus.APPOINTMENT_DONE.label}
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container item xs={12} md spacing={2}>
          <Grid item xs={6} md='auto'>
            <KeyboardDatePicker
              variant='inline'
              format='dd/MM/yyyy'
              label='De'
              value={filter.start}
              onChange={handleChange('start')}
              disableToolbar
              autoOk
            />
          </Grid>
          <Grid item xs={6} md='auto'>
            <KeyboardDatePicker
              variant='inline'
              format='dd/MM/yyyy'
              label='Até'
              value={filter.end}
              onChange={handleChange('end')}
              disableToolbar
              autoOk
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid item xs={12} md='auto'>
        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={handleApply}
        >
          Aplicar
        </Button>
      </Grid>
    </Grid>
  )
}

Filter.propTypes = {
  onApply: PropTypes.func
}

Filter.defaultProps = {
  onApply: () => {}
}

export default Filter
