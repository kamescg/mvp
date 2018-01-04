/* ------------------------- ENTITY -------------------------- */

const entity = 'shapeshift'
const entityUppercase = 'SHAPESHIFT'

const reduxOperators = [
  'GET_COUNT',
  'GET_DEPOSIT_LIMIT',
  'GET_EXCHANGE_RATE',
  'GET_MARKET_INFO',
  'GET_RECENT',
  'GET_STATUS',
  'GET_TRANSACTIONS',
  'START_SHIFT',
  'STATUS_SHIFT',
]
console.log(`import {`)
reduxOperators.map(i=> {
  let actions = `${entityUppercase}_${i}_REQUEST,\n${entityUppercase}_${i}_SUCCESS,\n${entityUppercase}_${i}_FAILURE,`
  console.log(actions)
})
console.log(`} from './actions'`)
console.log(`
import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {
`)

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")

const reduce = `
      case ${entityUppercase}_${i}_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case ${entityUppercase}_${i}_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case ${entityUppercase}_${i}_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }
`
  console.log(reduce)
})
  console.log(`
    default:
      return state
  }
}
  `)
