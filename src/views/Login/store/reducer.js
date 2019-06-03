import types from './types'
import {getToken, setToken} from "../../../utils"

const defaultState = {
  token: getToken()
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case types.SET_TOKEN:
      const token = action.token
      newState.token = token
      setToken(token)
      return newState
    default:
      return state
  }
}
