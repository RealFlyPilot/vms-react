// import { setupGraphiQL } from '@storybook/addon-graphql'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
// import { ApolloProvider } from 'react-apollo'
// import { client } from '../../src/GraphQLClient'

import centered from '@storybook/addon-centered/react'
import Jobs from '../../src/apps/AccelerationHQ/components/Jobs'
// import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
// import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'
import { jobsModuleStoryRoot, appModuleStoryRoot } from '../roots'
// import apolloStorybookDecorator from 'apollo-storybook-react'
import { allAirtableData, jobData } from './data'
import Iframe from 'react-iframe'

storiesOf(appModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(jobsModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .add('Stories of Jobs Module', () => (
    <div
      style={{
        height: '100vh',
        overflow: 'scroll',
        padding: '30px',
        width: '100vw',
        position: 'relative',
        display: 'flex'
      }}
    >
      <div style={{ width: '25%' }}>
        <Jobs data={jobData} />
      </div>
      <div style={{ width: '75%' }}>
        <Iframe
          url='http://acceleration.plusminussays.com/#g=1'
          width='100%'
          height='100%'
          id='wireframe'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%'
          }}
        />
      </div>
    </div>
  ))
