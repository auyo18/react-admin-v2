import React, {Component} from 'react'
import withTitle from '../../hoc/withTitle'
import {Layout, Button} from 'antd'

const {Content} = Layout

class Home extends Component {
  render() {
    return (
        <Content className="main-wrapper">
          this is home
          <Button type="primary">Primary</Button>
        </Content>
    )
  }
}

export default withTitle(Home)
