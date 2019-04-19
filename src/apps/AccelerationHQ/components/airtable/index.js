import React, { Component } from 'react'
import Airtable from 'airtable'

const toLowerCase = o => Object.keys(o).reduce((c, k) => ((c[k.toLowerCase()] = o[k]), c), {})
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
})

const VmsAirtableBase = Airtable.base('app5urNEIXdhPfZuj')

export class AirTableAssetList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  fetchAndSortData = async () => {
    const appModulesTable = VmsAirtableBase('App Modules')
    const appViewsTable = VmsAirtableBase('Views')
    const appComponentsTable = VmsAirtableBase('Components')
    const appUserStoriesTable = VmsAirtableBase('User stories')

    const picked = ({ id, fields }) => ({ id, ...fields })

    const userStories = await appUserStoriesTable
      .select()
      .all()
      .then(res => res.map(record => picked(record)))

    const appModules = await appModulesTable
      .select()
      .all()
      .then(res => res.map(record => picked(record)))

    const appViews = await appViewsTable
      .select()
      .all()
      .then(res => res.map(record => picked(record)))

    const appComponents = await appComponentsTable
      .select()
      .all()
      .then(res => res.map(record => picked(record)))

    return {
      userStories,
      appModules,
      appViews,
      appComponents
    }
  }

  componentDidMount () {
    this.fetchAndSortData().then(res => console.log(res))
  }
  render () {
    return <div>Airtable</div>
  }
}
