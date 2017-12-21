import update from 'immutability-helper'
import { CHANGE_CURRENT_USER } from '../actions/index'

const defaultState = {
  user: {}
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_USER:
      return update(
        state, {
            $set: action.user
        }
      )
    default:
      return state
  }
}