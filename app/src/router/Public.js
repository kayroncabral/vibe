import React from 'react'
import { Route } from 'react-router-dom'

import PropTypes from 'prop-types'

const PublicRoute = ({ component: Component, ...props }) => {
  return (
    <Route {...props}>
      <Component />
    </Route>
  )
}

PublicRoute.propTypes = {
  component: PropTypes.func
}

export default PublicRoute
