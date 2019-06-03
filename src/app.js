import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from "./utils"
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import {Layout} from 'antd'

const App = (props) => {
  return (
      <Router>
        <Layout>
          <SideNav />
          <Layout>
            <TopNav history={props.history} />
            {
              renderRoutes(props.route.routes)
            }
          </Layout>
        </Layout>
      </Router>
  )
}

export default App
