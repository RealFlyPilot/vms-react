import React, { Component } from 'react'
import Amplify, { Auth, Api } from 'aws-amplify'
import aws_exports from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react'
import { Header } from 'semantic-ui-react'

Amplify.configure(aws_exports)
Auth.configure(Auth)
console.log('TCL: withAuthenticator', withAuthenticator)

class App extends Component {
  render () {
    return (
      <div>
        <Header as='h1'>Hello World!</Header>
      </div>
    )
  }
}

export default withAuthenticator(App, { includeGreetings: true })
