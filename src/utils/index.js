import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

const LOGIN_PATH = '/login'

export const renderRoutes = (routes, authed) => (
  <Switch>
    {
      routes.map((route, index) => {
        return <Route
          path={route.path}
          key={route.key || index}
          exact={route.exact}
          render={props => {
            if (!route.auth || authed || route.path === LOGIN_PATH) {
              return <route.component {...props} route={route}/>
            }
            return <Redirect to={{pathname: LOGIN_PATH, state: {from: props.location}}}/>
          }}
        />
      })
    }
  </Switch>
)
