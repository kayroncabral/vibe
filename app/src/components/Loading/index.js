import React from 'react'

import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import useStyles from 'src/components/Loading/styles'

const Loading = ({ className, message, size, drawer }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <CircularProgress className={classes.progress} size={size} />
        {message && <Typography>{message}</Typography>}
      </Box>
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  size: PropTypes.number,
  drawer: PropTypes.bool
}

Loading.defaultProps = {
  size: 80,
  drawer: true
}

export default Loading
