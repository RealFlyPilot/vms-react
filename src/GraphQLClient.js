import React from 'react'

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  }),
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      )
    }
    if (networkError) console.log(`[Network error]: ${networkError}`)
  },
  cache: new InMemoryCache()
})
