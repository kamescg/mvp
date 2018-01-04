/* ------------------------- ENTITY -------------------------- */
const entity = 'coinhive'
const entityUppercase = 'COINHIVE'

const reduxOperators = [
  'INITIALIZE',
  'START',
  'STOP',
  'THREAD_COUNT_GET',
  'THREAD_COUNT_SET',
  'THREAD_AUTO_SET',
  'THREAD_AUTO_GET',
  'HASH_TOTAL',
  'HASH_AVERAGE',
  'HASH_ACCEPTED',
  'TOKEN_GET',
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
