/* ------------------------- External Dependencies -------------------------- */

const entity = 'dether'
const entityUppercase = 'DETHER'

const reduxOperators = [
 // DetherJS
 'GET_TELLERS_ALL',
 'GET_TELLER',
 'GET_TELLER_BALANCE',
 'GET_TELLERS_IN_ZONE',
 'GET_USER',
 // DetherUser
 'ADD_SELL_POINT',
 'DELETE_SELL_POINT',
 'GET_ADDRESS',
 'GET_BALANCE',
 'GET_INFO',
 'SEND_TO_BUYER',
]
console.log(`import {`)
reduxOperators.map(i=> {
  let t = `${entityUppercase}_${i}_REQUEST,\n${entityUppercase}_${i}_SUCCESS,\n${entityUppercase}_${i}_FAILURE,`
  console.log(t)
})
console.log(`} from './actions'`)
console.log(`
import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {
`)

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")

const l = `
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
  console.log(l)
})
  console.log(`
    default:
      return state
  }
}
  `)

// reduxOperators.map(i=> {
//   let t = `${entityUppercase}_${i}_REQUEST,\n ${entityUppercase}_${i}_SUCCESS,\n${entityUppercase}_${i}_FAILURE,`
//   console.log(t)
// })

