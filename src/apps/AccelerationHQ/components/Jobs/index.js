import React, { Component } from 'react'

export class Jobs extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return <div>Jobs</div>
  }
}
