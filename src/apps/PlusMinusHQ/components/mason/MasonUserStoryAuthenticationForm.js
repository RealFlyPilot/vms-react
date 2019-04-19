import React, { Component } from 'react'
import Mason, { Canvas, Login } from 'mason-library'

export class MasonUserStoryAuthenticationForm extends Component {
  componentDidMount () {
    Mason({
      apiKey: 'NO8T+JFectJjCFuzFjJX27g6U0ARiUmafFsK0/+zMTE=',
      projectId: '5c9c2d3574202c00038e83b9' // Differennt Project ID than Mikes
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
      <Canvas id='5caa4f4a47fe490003907c3d' />
      //   <Login
      //     id='5caa4f4a47fe490003907c3d'
      //     willSendData={form => {
      //       console.log('TCL: MikesForm -> render -> form', form)
      //       debugger
      //       const {
      //         data: { password }
      //       } = form
      //       if (password && password.length >= 8) {
      //         return form
      //       }
      //       return false
      //     }}
      //     didReceiveData={user => {
      //       console.log('TCL: JobRequestForm -> render -> user', user)
      //     }}
      //   />
    )
  }
}
