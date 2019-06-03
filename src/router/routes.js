import App from '../App'
import Login from '../views/Login'
import Home from '../views/Home'
import About from '../views/About'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    title: '登录',
    key: 'Login'
  },
  {
    component: App,
    auth: true,
    key: 'App',
    routes: [
      {
        path: '/',
        exact: true,
        redirect: '/home',
        key: 'Default'
      },
      {
        path: '/home',
        component: Home,
        exact: true,
        title: '首页',
        key: 'Home',
      },
      {
        path: '/about',
        component: About,
        exact: true,
        title: '关于我们',
        key: 'About',
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
