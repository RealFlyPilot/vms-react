import React, { Component } from 'react'
import Mason, { Canvas, Register } from 'mason-library'

export class JobRequestForm extends Component {
  componentDidMount () {
    Mason({
      apiKey: 'NO8T+JFectJjCFuzFjJX27g6U0ARiUmafFsK0/+zMTE=',
      projectId: '5c9c243f3daee6000388027d'
    })
  }
  /*
Props
Mason features take a number of user-defined properties.
id - a 12 byte string from the Mason Builder export modal (required)
willFetchData - a function invoked before datasource fetching (optional)
willSendData - a function invoked before form submission (optional)
didReceiveData - a function invoked after form submission (optional)
 */
  render () {
    return (
      <Register
        id='5c9c339274202c00038e9001'
        willSendData={form => {
          console.log('TCL: MikesForm -> render -> form', form)
          debugger
          const {
            data: { password }
          } = form
          if (password && password.length >= 8) {
            return form
          }
          return false
        }}
        didReceiveData={user => {
          console.log('TCL: JobRequestForm -> render -> user', user)
        }}
      />
    )
  }
}
