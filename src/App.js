import React, { Component } from 'react'
import Amplify, { Auth, Hub } from 'aws-amplify'
import aws_exports from './aws-exports'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withAuthenticator, withOAuth, withFederated } from 'aws-amplify-react'
import { blue, indigo } from '@material-ui/core/colors'
import Routes from './routes'

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
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', 'sans-serif'].join(',')
  }
})

Amplify.configure(aws_exports)
// Auth.configure({
//   ...Auth,
//   mandatorySignIn: true
// })
class App extends Component {
  state = {
    signedIn: false
  }
  componentDidMount () {
    // Auth.federatedSignIn({ provider: 'Google' })
    console.log(this.props)
  }
  handleAuthStateChange = data => {
    console.log('TCL: App -> handleAuthStateChange -> data', data)
  }
  render () {
    const LoginButton = props => (
      <button onClick={props.googleSignIn}>Open Google</button>
    )
    const Federated = withFederated(LoginButton)
    const federated = {
      google_client_id:
        '60702670011-g6lf5t95d093pn5at4tbla0garkga6jj.apps.googleusercontent.com' // Enter your google_client_id here
    }
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {this.state.signedIn ? (
            <Routes />
          ) : (
            <Federated federated={federated} />
          )}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withOAuth(App)
