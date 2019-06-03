import types from "./types"

export const login = token => ({
  type: types.SET_TOKEN,
  token
})

export const logout = () => ({
  type: types.SET_TOKEN,
  token: ''
})
