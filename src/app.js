import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from "./utils"
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import {Layout} from 'antd'

const authed = false

const App = (props) => {
  console.log(props)
  return (
    <Router>
      <Layout>
        <SideNav/>
        <Layout>
          <TopNav/>
          {
            renderRoutes(props.route.routes)
          }
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
