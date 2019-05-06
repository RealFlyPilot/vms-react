import React, { Component } from 'react'
import { AirTableAssetList } from './components/airtable'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Wizard from './components/Wizard'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'
import './App.scss'

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
    console.log(this.props)

    return (
      <MuiThemeProvider theme={theme}>
        {/* <Main />
        <AirTableAssetList /> */}

        {/* <HashRouter> */}
        <ScrollToTop>
          <Route exact path='/app/acceleration' component={Main} />
          <Route path='/app/acceleration/sections/signup' component={Signup} />
          <Route path='/app/acceleration/sections/wizard' component={Wizard} />
        </ScrollToTop>
        {/* </HashRouter> */}
      </MuiThemeProvider>
    )
  }
}
