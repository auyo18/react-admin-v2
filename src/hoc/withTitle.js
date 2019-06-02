import React, {Component} from 'react'

// 设置标题  - 高阶组件
export default (DecoratedComponent) => {
  return class NewComponent extends Component {
    componentWillMount() {
      document.title = `${this.props.route.title} - 聚力创意`
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}
