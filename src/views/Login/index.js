import React, {Component} from 'react'
import withTitle from '../../hoc/withTitle'
import {Button} from 'antd'

class Login extends Component {
  login = () => {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const storage = window.localStorage
    storage.__TOKEN__ = 'TOKEN'
    console.log(from)
    this.props.history.push(from)
  }

  render() {
    return (
      <div>
        this is login
        <Button type="primary" onClick={this.login}>登录</Button>
      </div>
    )
  }
}

export default withTitle(Login)
