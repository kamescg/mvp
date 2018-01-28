import actions, {
  PROVIDER_CHANGE
} from './actions'
import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata, batch, entity} ) => {
  if(!!(metadata && metadata.delta) && entity === 'ethers') {
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: {
          REQUESTED: undefined,
          SUCCESS: true,
          FAILURE: false
        }[batch],
        data: payload
      }
    }
  } else{
    switch (type) {
      case actions.PROVIDER_CHANGE:
      return {
        ...state,
        provider: payload
      }
      default:
        return state
    }
  }
}
  