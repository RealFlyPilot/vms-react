import React, { Component } from 'react'
import { UserModelTable, VmsJobRequestorTable } from './bases'

export class AirTableAssetList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sections: [],
      screens: [],
      subSections: [],
      components: []
    }
  }
  componentDidMount () {}
  render () {
    return <div>Airtable</div>
  }
}
