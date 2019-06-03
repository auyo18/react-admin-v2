import React, {Component} from 'react'

// 设置标题  - 高阶组件
export default (DecoratedComponent) => {
  return class NewComponent extends Component {

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}
