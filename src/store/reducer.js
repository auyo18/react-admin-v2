import {combineReducers} from 'redux'
import TopNavReducer from '../components/TopNav/store/reducer'
import LoginReducer from '../views/Login/store/reducer'

const reducer = combineReducers({
  topNav: TopNavReducer,
  login: LoginReducer
})

export default reducer
