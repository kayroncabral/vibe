import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from '@apollo/client'
import client from 'src/apollo'
import * as serviceWorker from 'src/serviceWorker'

import Router from 'src/router'

import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
