import React, {Component} from 'react'
import {connect} from "react-redux"
import {Layout, Icon, Menu, Dropdown, Avatar} from 'antd'
import './index.scss'
import {changeCollapsed} from "../../store/actions"
import {logout} from "../../views/Login/store/actions"

const {Header} = Layout

class TopNav extends Component {
  render() {
    return (
        <Header className="header" style={{background: '#fff', padding: 0}}>
          <span
              className="trigger"
              onClick={() => {
                this.props.onBreakpoint(!this.props.collapsed)
              }}>
            <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </span>
          <div className="right">
            <Dropdown overlay={<Menu>
              <Menu.Item>
                <Icon type="user" />
                个人中心
              </Menu.Item>
              <Menu.Item>
                <Icon type="setting" />
                个人设置
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item onClick={() => {
                this.props.logout()
                this.props.history.push('/login')
              }}>
                <Icon type="logout" />
                退出登录
              </Menu.Item>
            </Menu>}>
              <div className="info">
                <Avatar className="avatar"
                        src="http://image.julipay.com/0d7ae4df-e127-9279-09f2-353bd0188eed?imageView2/1/w/200/h/200" />
                <span className="name">JaMie</span>
                <Icon type="caret-down" />
              </div>
            </Dropdown>
          </div>
        </Header>
    )
  }
}

const mapStateToProps = state => ({
  collapsed: state.topNav.collapsed
})

const mapDispatchToProps = dispatch => ({
  onBreakpoint(collapsed) {
    dispatch(changeCollapsed(collapsed))
  },
  logout() {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
