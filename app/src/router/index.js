import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import DoctorsContainer from 'src/containers/DoctorsContainer'
import MySchedulesContainer from 'src/containers/MySchedulesContainer'
import SchedulesContainer from 'src/containers/SchedulesContainer'

import Public from 'src/router/Public'
import theme from 'src/router/theme'

import { Paths } from 'src/utils/enums'

const AppRouter = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Public
            exact
            path={Paths.doctors.path}
            component={DoctorsContainer}
          />
          <Public
            exact
            path={Paths.schedules.path}
            component={SchedulesContainer}
          />
          <Public
            exact
            path={Paths.mySchedules.path}
            component={MySchedulesContainer}
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default AppRouter
