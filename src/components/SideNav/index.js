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
          <div className="logo">
            聚力创意
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu key="sub3" title={
              <span>
                <Icon type="video-camera" />
                <span>分类管理</span>
              </span>}>
              <Menu.Item key="7">添加分类</Menu.Item>
              <Menu.Item key="8">分类管理</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>文章管理</span>
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
