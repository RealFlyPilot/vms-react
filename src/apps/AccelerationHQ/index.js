import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    fontFamily: ['"Lato"', 'sans-serif'].join(',')
  }
})

export default class AccelerationHQ extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Main />
        <HashRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path='/app/acceleration' component={Main} />
              <Route exact path='/app/acceleration/dashboard' component={Dashboard} />
              <Route exact path='/app/acceleration/signup' component={Signup} />
              <Route exact path='/app/acceleration/wizard' component={Wizard} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}
