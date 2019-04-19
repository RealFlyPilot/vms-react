import React, { Component } from 'react'

import AccelerationHQ from './apps/AccelerationHQ'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import PlusMinusHQ from './apps/PlusMinusHQ'

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
  componentDidUpdate (prevProps, prevState) {
    console.log('TCL: App -> componentDidUpdate -> prevProps', prevProps)
    console.log('TCL: App -> componentDidUpdate -> new props', this.props)
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <PlusMinusHQ {...this.props} />
            }}
          />
          {/* <Route exact path='/hq/acceleration' component={PlusMinusHQ} /> */}

          {/* <Route exact path='/hq/styleguide' component={AccelerationHQ} /> */}
          <Route
            exact
            path='/app/acceleration'
            render={() => {
              return <AccelerationHQ {...this.props} />
            }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
