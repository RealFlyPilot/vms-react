import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Amplify, { Auth, Hub } from 'aws-amplify'
import aws_exports from './aws-exports'
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react/dist/Auth'
import App from './App'
Amplify.configure(aws_exports)

const federated = {
  google_client_id: process.env.GOOGLE_CLIENT_ID
}

ReactDOM.render(
  <Authenticator hide={[SignOut, Greetings]} federated={federated}>
    <App />
  </Authenticator>,
  document.getElementById('root')
)

serviceWorker.unregister()
