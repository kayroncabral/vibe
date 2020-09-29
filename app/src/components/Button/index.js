import React from 'react'

import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import ButtonMaterial from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from 'src/components/Button/styles'

const Button = ({ children, loading, disabled, ...props }) => {
  const classes = useStyles()

  return (
    <Box>
      <ButtonMaterial {...props} disabled={disabled || loading}>
        {children}
        {loading && <CircularProgress className={classes.progress} size={24} />}
      </ButtonMaterial>
    </Box>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  loading: false
}

export default Button
