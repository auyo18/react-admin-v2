import React, {Component} from 'react'
import {connect} from "react-redux"
import {Layout, Icon} from 'antd'
import './index.scss'
import {changeCollapsed} from "../../store/actions"

const {Header} = Layout

class TopNav extends Component {

  render() {
    return (
        <Header className="header" style={{background: '#fff', padding: 0}}>
          <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => {
                this.props.onBreakpoint(!this.props.collapsed)
              }}
          />
        </Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
