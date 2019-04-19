import React, { Component, Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import AccelerationHQ from '../AccelerationHQ'
import Sidebar from './components/Sidebar/Sidebar'
import Mason from './components/mason/Mason'
import { AirTableAssetList } from './components/airtable'
import { Avatar, Button, RaisedContainer, Note, Table, THead, TH, TBody, TR, TD } from 'react-zeit-components'
import './theme.zeit.scss'

class PlusMinusHQ extends Component {
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
    console.log(this.props)

    const { authData = null, authState = null } = this.props
    console.log('TCL: PlusMinusHQ -> render -> authData', authData)
    let user

    if (authState === 'signedIn') {
      const {
        attributes: { email, phone_number },
        username
      } = authData
      user = {
        username,
        email,
        phone_number
      }
    }

    return (
      // <BrowserRouter>
      <div
        style={{
          // minHeight: '80vh',
          height: '100%',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {this.props.authState === 'signedIn' ? (
          <Fragment>
            {user ? <Header user={user} /> : null}
            <main
              className='pm-hq main'
              style={{
                // minHeight: '80vh',
                height: '100%',
                width: '100%',
                display: 'flex'
                // flexDirection: 'column'
              }}
            >
              {user ? <Sidebar user={user} /> : null}
              <div
                className='pm-hq dashboard'
                style={{ padding: '50px', height: '100%', width: '100%', display: 'flex' }}
              >
                <div
                  className='dashboard-left'
                  style={{ padding: '50px', height: '-webkit-fill-available', width: '75%' }}
                />
                <RaisedContainer
                  className='dashboard-right'
                  style={{
                    padding: '50px',
                    height: '-webkit-fill-available',
                    width: '25%',
                    borderLeft: '1px solid #eee'
                  }}
                >
                  {user ? (
                    <Note label={`Welcome to PlusMinus HQ ${user.username}`}>
                      Please be patient while we're under construction
                    </Note>
                  ) : null}
                  <br />
                  <RaisedContainer>
                    <div>
                      <Note label='Project Log'>Activity</Note>
                    </div>
                  </RaisedContainer>
                  <RaisedContainer>
                    <Table>
                      <THead>
                        <TR>
                          <TH />
                          <TH>Project</TH>
                          <TH>Resource</TH>
                        </TR>
                      </THead>
                      <TBody>
                        <TR>
                          <TD>
                            <Avatar src='https://zeit.co/api/www/avatar/?u=evilrabbit&s=240' />
                          </TD>
                          <TD>StyleGuide Generator</TD>
                          <TD>Link</TD>
                        </TR>
                        <TR>
                          <TD>
                            <Avatar src='https://zeit.co/api/www/avatar/?u=evilrabbit&s=240' />
                          </TD>
                          <TD>
                            <Link to='/hq/airtable'>Airtable</Link>
                          </TD>
                          <TD>FAAS</TD>
                        </TR>
                        <TR>
                          <TD>
                            <Avatar src='https://zeit.co/api/www/avatar/?u=evilrabbit&s=240' />
                          </TD>
                          <TD>
                            <Link to='/hq/mason'>Mason</Link>
                          </TD>
                          <TD>FAAS</TD>
                        </TR>
                        <TR>
                          <TD>
                            <Avatar src='https://zeit.co/api/www/avatar/?u=evilrabbit&s=240' />
                          </TD>
                          <TD>
                            <Link to='/app/acceleration'>Acceleration</Link>
                          </TD>
                          <TD>AgileOne</TD>
                        </TR>
                      </TBody>
                    </Table>
                  </RaisedContainer>
                </RaisedContainer>
              </div>
            </main>

            <Switch>
              <Route exact path='/hq/acceleration' component={AccelerationHQ} />
              {/* <Route exact path='/hq/faas' component={AccelerationHQ} /> */}
              <Route exact path='/hq/mason' component={Mason} />
              <Route exact path='/hq/airtable' component={AirTableAssetList} />
              <Route exact path='/hq/styleguide' component={AccelerationHQ} />
              <Route exact path='/app/acceleration' component={AccelerationHQ} />
            </Switch>
          </Fragment>
        ) : null}
      </div>
      // </BrowserRouter>
    )
  }
}

export default PlusMinusHQ
