import React, { Component } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import { withAuthenticator, withOAuth, withFederated } from 'aws-amplify-react'

import { blue, indigo } from '@material-ui/core/colors'
// import { Login } from './components/Login'
import { Button, RaisedContainer, Note } from 'react-zeit-components'
import Routes from './routes'

const LoginButton = props => (
  <Button color='secondary' onClick={props.signIn}>
    Sign In
  </Button>
)

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

export default class App extends Component {
  state = {
    signedIn: false
  }
  componentDidMount () {
    console.log(this.props)
  }
  handleAuthStateChange = data => {
    console.log('TCL: App -> handleAuthStateChange -> data', data)
  }
  render () {
    return (
      <RaisedContainer>
        {this.props.authState == 'signedIn' ? (
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        ) : (
          <RaisedContainer>
            <Note>
              Welcome to PlusMinus HQ
              <br />
              <Button color='secondary' onClick={this.signIn}>
                Sign In
              </Button>
            </Note>
          </RaisedContainer>
        )}
      </RaisedContainer>
    )
  }
}
