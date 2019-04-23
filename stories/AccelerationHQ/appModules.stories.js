// import { setupGraphiQL } from '@storybook/addon-graphql'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import centered from '@storybook/addon-centered/react'
import { Jobs } from '../../src/apps/AccelerationHQ/components/Jobs'
// import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
// import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'
import { jobsModuleStoryRoot, appModuleStoryRoot } from '../roots'
import apolloStorybookDecorator from 'apollo-storybook-react'

// const graphiql = setupGraphiQL({ url: 'http://localhost:4000' })

const APP_MODULE_BY_ID = gql`
  query appModuleById($id: String) {
    appModuleById(id: $id) {
      name
      id
      views {
        name
        components {
          name
        }
      }
    }
  }
`

const JobModuleWithQuery = ({ id }) => (
  <Query query={APP_MODULE_BY_ID} variables={{ id: id }}>
    {({ loading, data }) => {
      console.log('TCL: data', data)
      return <Jobs data={data} />
    }}
  </Query>
)

storiesOf(appModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(jobsModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(apolloStorybookDecorator)
  .add('Stories of Jobs Module', <JobModuleWithQuery id={'recIUptV0QOlOPSVf'} />)

// storiesOf(jobsModuleStoryRoot, module)
//   .addDecorator(withKnobs)
//   .addDecorator(centered)
//   .add(
//     'Stories of Jobs Module',
//     graphiql(`{
//     appModuleById(id:"recIUptV0QOlOPSVf") {
//       name
//     }
//   }`)
//   )
