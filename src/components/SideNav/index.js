import React, {Component} from 'react'
import {connect} from "react-redux"
import {changeCollapsed} from "../../store/actions"
import {Layout, Menu, Icon, Button} from 'antd'
import './index.scss'

const {Sider} = Layout
const {SubMenu} = Menu

class SideMenu extends Component {
  render() {
    return (
        <Sider
            className="side"
            breakpoint="lg"
            collapsed={this.props.collapsed}
            onBreakpoint={broken => {
              this.props.onBreakpoint(broken)
            }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
    )
  }
}

const mapStateToProps = state => ({
  collapsed: state.collapsed
})

const mapDispatchToProps = dispatch => ({
  onBreakpoint(collapsed) {
    dispatch(changeCollapsed(collapsed))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
