import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from "./utils"
import {Provider} from 'react-redux'
import store from './store'
import routes from './router/routes'
import './assets/styles/index.scss'

const authed = false

ReactDom.render(
  <Provider store={store}>
    <Router>
      {
        renderRoutes(routes, authed)
      }
    </Router>
  </Provider>,
  document.getElementById('app'))
