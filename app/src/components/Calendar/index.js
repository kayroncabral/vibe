import React from 'react'

import clsx from 'clsx'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

const Calendar = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid
        className={classes.grid}
        container
        item
        xs
        spacing={2}
        direction='column'
      >
        <Grid container item justify='center'>
          <Grid item xs={12}>
            <Typography align='center'>Hoje</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.caption}
              align='center'
              color='textSecondary'
            >
              28 Set
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Button
            className={clsx({ [classes.disabled]: true })}
            color='primary'
            size='small'
            disabled
          >
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button
            className={clsx({ [classes.disabled]: true })}
            color='primary'
            size='small'
            disabled
          >
            Teste
          </Button>
        </Grid>
      </Grid>
      <Grid
        className={classes.grid}
        container
        item
        xs
        spacing={2}
        direction='column'
      >
        <Grid container item justify='center'>
          <Grid item xs={12}>
            <Typography align='center'>Amanhã</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.caption}
              align='center'
              color='textSecondary'
            >
              29 Set
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
      </Grid>
      <Grid
        className={classes.grid}
        container
        item
        xs
        spacing={2}
        direction='column'
      >
        <Grid container item justify='center'>
          <Grid item xs={12}>
            <Typography align='center'>Quarta</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.caption}
              align='center'
              color='textSecondary'
            >
              30 Set
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
      </Grid>
      <Grid
        className={classes.grid}
        container
        item
        xs
        spacing={2}
        direction='column'
        justify='center'
      >
        <Grid container item justify='center'>
          <Grid item xs={12}>
            <Typography align='center'>Quinta</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.caption}
              align='center'
              color='textSecondary'
            >
              1 Out
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
        <Grid container item justify='center'>
          <Button variant='outlined' color='primary' size='small'>
            Teste
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

Calendar.propTypes = {}

Calendar.defaultProps = {}

export default Calendar
