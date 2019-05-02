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
import { Jobs } from '../../src/apps/AccelerationHQ/components/Jobs'
// import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
// import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'
import { jobsModuleStoryRoot, appModuleStoryRoot } from '../roots'
// import apolloStorybookDecorator from 'apollo-storybook-react'
import { allAirtableData, jobData } from './data'

// import { withLiveEditScope } from 'storybook-addon-react-live-edit'

// import ExternalComponent from 'a-apackage'

// addDecorator(withLiveEditScope({ ExternalComponent }))

// const graphiql = setupGraphiQL({ url: 'http://localhost:4000' })

// const typeDefs = `
//    scalar JSON
//   type UserStories {
//     id: String
//     name: String
//   }
//   type AppModules {
//     id: String
//     name: String
//     views: [AppViews]
//   }
//   type AppViews {
//     id: String
//     name: String
//     appModules: [String]
//     components: [AppComponents]
//     actions: [String]
//   }
//   type AppComponents {
//     id: String
//     name: String
//     types: [String]
//     visualReference: [JSON]
//     developmentAlias: String
//     designAlias: String
//     status: [String]
//     views: [AppViews]
//     notes: String
//     designFile: [JSON]
//     component: String
//     invisionLibrary: String
//   }
//   type AppUserStories {
//     id: String
//     name: String
//   }
//   type AllAirtableData {
//     appModules: [AppModules]
//     appViews: [AppViews]
//     appComponents: [AppComponents]
//   }

//   type Query {
//     userStories: [UserStories]
//     appModules: [AppModules]
//     appModuleById: AppModules
//     helloWorld: String
//     appViews: [AppViews]
//     appComponents: [AppComponents]
//     appUserStories: [AppUserStories]
//     allAirtableData: AllAirtableData
//   }

// `

// const mocks = {
//   Query: () => {
//     return {
//       helloWorld: () => {
//         return 'Hello from Apollo!!'
//       }
//       // userStories: () => {},
//       // appModules: () => {},
//       // appViews: async () => {},
//       // appComponents: async () => {},
//       // appModuleById: () => jobData,
//       // appUserStories: async () => {},
//       // allAirtableData: () => allAirtableData
//     }
//   }
// }

// const APP_MODULE_BY_ID = gql`
//   query appModuleById {
//     name
//     id
//     views {
//       name
//       components {
//         name
//       }
//     }
//   }
// `

// const JobModuleWithQuery = ({ id }) => (
//   <Query
//     query={gql`
//       query hello {
//         helloWorld
//       }
//     `}
//   >
//     {({ loading, data }) => {
//       console.log('TCL: data', data)
//       return <Jobs data={data} />
//     }}
//   </Query>
// )

storiesOf(appModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(jobsModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .add('Stories of Jobs Module', <Jobs data={jobData} />)
// .apolloStorybookDecorator({
//   typeDefs,
//   mocks
// })

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
