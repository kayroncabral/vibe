import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import DoctorsContainer from 'src/containers/DoctorsContainer'
import HomeContainer from 'src/containers/HomeContainer'
import MySchedulesContainer from 'src/containers/MySchedulesContainer'
import SchedulesContainer from 'src/containers/SchedulesContainer'

import theme from 'src/router/theme'

import { Paths } from 'src/utils/enums'

const AppRouter = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path={Paths.home.value}>
            <HomeContainer />
          </Route>
          <Route exact path={Paths.doctors.value}>
            <DoctorsContainer />
          </Route>
          <Route exact path={Paths.schedules.value}>
            <SchedulesContainer />
          </Route>
          <Route exact path={Paths.mySchedules.value}>
            <MySchedulesContainer />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default AppRouter
