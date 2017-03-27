import { TEMPLATE } from '../actions/actions'

function reducersApp (state, action) {
  switch (action.type) {
    case TEMPLATE:
      return {
        id: action.id,
        text: action.text
      }

    default:
      return state
  }
}

export default reducersApp
