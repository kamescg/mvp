/* ------------------------- ENTITY -------------------------- */
const entity = 'ipfs'
const entityUppercase = 'IPFS'

const reduxOperators = [
  'FILES_ADD',
  'FILES_CREATE_STREAM',
  'FILES_CAT',
  'FILES_GET',
  'BLOCK_GET',
  'BLOCK_PUT',
  'BLOCK_STATUS',
  'GRAPH_DAG_PUT',
  'GRAPH_DAG_GET',
  'GRAPH_DAG_TREE',
  'GRAPH_OBJECT_NEW',
  'GRAPH_OBJECT_PUT',
  'GRAPH_OBJECT_GET',
  'GRAPH_OBJECT_DATA',
  'GRAPH_OBJECT_LINKS',
  'GRAPH_OBJECT_STAT',
  'PUBSUB_SUBSCRIBE',
  'PUBSUB_UNSUBSCRIBE',
  'PUBSUB_PUBLISH',
  'PUBSUB_LS',
  'PUBSUB_PEERS',
  'SWARM_ADDRESS',
  'SWARM_CONNECT',
  'SWARM_DISCONNECT',
  'SWARM_PEERS',
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

