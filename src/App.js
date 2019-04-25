import React, { Component } from 'react'

import AccelerationHQ from './apps/AccelerationHQ'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import PlusMinusHQ from './apps/PlusMinusHQ'
import { ApolloProvider } from 'react-apollo'

import { client } from './GraphQLClient'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                return <PlusMinusHQ {...this.props} />
              }}
            />
            <Route
              exact
              path='/app/acceleration'
              render={() => {
                return <AccelerationHQ {...this.props} />
              }}
            />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}
