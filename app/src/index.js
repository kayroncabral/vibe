import React from 'react'
import ReactDOM from 'react-dom'

import 'typeface-roboto'

import * as serviceWorker from 'src/serviceWorker'

import Router from 'src/router'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()