import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

const LOGIN_PATH = '/login'
const TokenKey = 'J_TOKEN'

export const renderRoutes = routes => (
    <Switch>
      {
        routes.map((route, index) => {
          return <Route
              path={route.path}
              key={route.key || index}
              exact={route.exact}
              render={props => {
                if (getToken()) {
                  if (route.redirect) {
                    return <Redirect to={route.redirect} />
                  }
                  if (route.path === LOGIN_PATH) {
                    return <Redirect to='/' />
                  }
                  return <route.component {...props} route={route} />
                } else {
                  if (route.path === LOGIN_PATH) {
                    return <route.component {...props} route={route} />
                  }
                  return <Redirect to={{pathname: LOGIN_PATH, state: {from: props.location}}} />
                }
              }}
          />
        })
      }
    </Switch>
)

export const getToken = () => {
  const storage = window.localStorage
  return storage[TokenKey]
}

export const setToken = token => {
  const storage = window.localStorage
  storage[TokenKey] = token
}
