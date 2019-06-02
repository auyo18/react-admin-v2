import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import NotFound from '../views/NotFound'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        title: '首页',
        key: 'Home'
      },
      {
        path: '/about',
        component: About,
        title: '关于我们',
        key: 'About'
      },
      {
        component: NotFound,
        title: '找不到当前页面',
        key: 'NotFound'
      }
    ]
  }
]

export default routes
