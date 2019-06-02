import types from './types'

const defaultState = {
  collapsed: false
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case types.CHANGE_COLLAPSED:
      console.log(action.collapsed)
      newState.collapsed = action.collapsed
      return newState
    default:
      return state
  }
}
