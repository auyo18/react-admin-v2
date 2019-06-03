import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from "./store/actions"
import {Form, Icon, Input, Button} from 'antd'
import './index.scss'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(err => {
      if (!err) {
        this.props.login('token')
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        this.props.history.push(from)
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
        <div className="login">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <h2>聚力创意</h2>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{required: true, message: '请输入用户名!'}],
              })(
                  <Input
                      prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                      placeholder="用户名：任意字符串"
                  />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请输入密码!'}],
              })(
                  <Input
                      prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                      type="password"
                      placeholder="密码：任意字符串"
                  />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login(token) {
    dispatch(login(token))
  }
})

export default connect(null, mapDispatchToProps)(Form.create({name: 'normal_login'})(Login)
)
