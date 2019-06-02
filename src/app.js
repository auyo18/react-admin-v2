import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import {Layout} from 'antd'

const App = props => (
    <Router>
      <Layout>
        <SideNav />
        <Layout>
          <TopNav />
          {
            renderRoutes(props.route.routes)
          }
        </Layout>
      </Layout>
    </Router>
)

export default App
