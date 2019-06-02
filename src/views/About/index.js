import React, {Component} from 'react'
import withTitle from '../../hoc/withTitle'
import {Layout, Button} from 'antd'

const {Content} = Layout

class About extends Component {
  render() {
    return (
        <Content className="main-wrapper">
          this is About
          <Button type="primary">Primary</Button>
        </Content>
    )
  }
}

export default withTitle(About)
