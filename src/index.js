import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from "./utils"
import {Provider} from 'react-redux'
import store from './store'
import routes from './router/routes'
import './assets/styles/index.scss'

ReactDom.render(
    <Provider store={store}>
      <Router>
        {
          renderRoutes(routes)
        }
      </Router>
    </Provider>,
    document.getElementById('app'))
