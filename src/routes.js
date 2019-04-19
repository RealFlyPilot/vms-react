import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import ScrollToTop from './apps/AccelerationHQ/components/ScrollTop'
import PlusMinusHQ from './apps/PlusMinusHQ'
import AccelerationHQ from './apps/AccelerationHQ'

export default props => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={PlusMinusHQ} />
        <Route exact path='/acceleration' component={AccelerationHQ} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
)
