import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import Home from './views/home'
import NotFound from './views/NotFound'
import {Layout} from 'antd'

const App = () => (
    <Router>
      <Layout>
        <SideNav />
        <Layout>
          <TopNav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Layout>
    </Router>
)

export default App
