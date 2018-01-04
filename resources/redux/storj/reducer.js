/* ------------------------- External Dependencies -------------------------- */
const entity = 'storj'
const entityUppercase = 'STORJ'

const reduxOperators = [
  'KEY_PAIR_GENERATE',
  'KEY_PAIR_PUBLIC',
  'KEY_PAIR_PRIVATE',
  'KEY_PAIR_SIGN',
  'KEY_PAIR_GET_NODE_ID',
  'KEY_PAIR_GET_ADDRESS',
  'KEY_GENERATE',
  'KEY_REGISTER',
  'KEY_REMOVE',
  'KEYS_LIST',
  'ENCRYPTION_KEY_GENERATE',
  'FILE_GET',
  'FILE_CREATE',
  'FILE_DELETE',
  'FILES_LIST',
  'BUCKET_GET',
  'BUCKET_CREATE',
  'BUCKET_DELETE',
  'BUCKET_MAKE_PUBLIC',
  'BUCKETS_LIST',
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

