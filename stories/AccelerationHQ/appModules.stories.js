import { setupGraphiQL } from '@storybook/addon-graphql'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
// import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
// import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'
import { jobsModuleStoryRoot, appModuleStoryRoot } from '../roots'

const graphiql = setupGraphiQL({ url: 'http://localhost:4000' })

storiesOf('GraphQL Demo', module).add(
  'get user info',
  graphiql(`{
    user(id: "1") {
      name
    }
  }`)
)

storiesOf(appModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(jobsModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add()
