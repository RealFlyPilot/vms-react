import * as React from 'react'
import Amplify, { Auth, Hub } from 'aws-amplify'

// import { withAuthenticator, withOAuth, withFederated } from 'aws-amplify-react'
import { Authenticator, withAuthenticator } from 'aws-amplify-react/dist/Auth'

import { Button, RaisedContainer, Note } from 'react-zeit-components'

const LoginButton = props => (
  <Button color='secondary' onClick={props.signIn}>
    Sign In
  </Button>
)

export class Login extends React.Component {
  state = {
    signedIn: false
  }
  componentDidMount () {
    console.log(this.props)
    console.log(Authenticator)
  }

  handleAuthStateChange = data => {
    console.log('TCL: App -> handleAuthStateChange -> data', data)
    Auth.currentAuthenticatedUser().then(data => {
      console.log('TCL: Login -> data', data)
    })
  }
  render () {
    const federated = {
      google_client_id:
        '60702670011-g6lf5t95d093pn5at4tbla0garkga6jj.apps.googleusercontent.com' // Enter your google_client_id here
    }

    return (
      <RaisedContainer>
        <Note>Welcome to PlusMinus HQ</Note>
      </RaisedContainer>
    )
  }
}

// google auth api key: AIzaSyDkQAXh0ByWLWX26docwqw2vskdZX1JbcA
