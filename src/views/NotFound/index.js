import React from 'react'
import withTitle from '../../hoc/withTitle'
import {Layout} from 'antd'

const {Content} = Layout

const NotFound = () => (
    <Content className="main-wrapper">
      <div>404, this is page is not fount</div>
    </Content>
)

export default withTitle(NotFound)
