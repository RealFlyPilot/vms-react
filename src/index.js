import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Amplify, { Auth, Hub } from 'aws-amplify'
import aws_exports from './aws-exports'

// import { withAuthenticator, withOAuth, withFederated } from 'aws-amplify-react'
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react/dist/Auth'
Amplify.configure(aws_exports)

const federated = {
  google_client_id:
    '60702670011-g6lf5t95d093pn5at4tbla0garkga6jj.apps.googleusercontent.com' // Enter your google_client_id here
}

ReactDOM.render(
  <Authenticator hide={[SignOut, Greetings]} federated={federated}>
    <App />
  </Authenticator>,
  document.getElementById('root')
)

serviceWorker.unregister()
