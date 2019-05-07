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
import { AppModuleTreeView } from '../../src/apps/AccelerationHQ/components/AppModules/AppModuleTreeView'
// import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
// import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'
import { jobsModuleStoryRoot, appModuleStoryRoot } from '../roots'
// import apolloStorybookDecorator from 'apollo-storybook-react'
import { allAirtableData, jobData } from './data'
import Iframe from 'react-iframe'

storiesOf(appModuleStoryRoot, module).addDecorator(withKnobs).addDecorator(centered)

storiesOf(`${appModuleStoryRoot}/All`, module).addDecorator(withKnobs).addDecorator(centered).add('Tree View', () => (
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
		<AppModuleTreeView data={allAirtableData} />
	</div>
))
