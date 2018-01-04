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
  let t = `  ${entityUppercase}_${i}_REQUEST,`
  console.log(t)
})

console.log(`} from './actions'`)

console.log(`import {`)
reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let nameFunction = name.charAt(0).toLowerCase(0) + name.slice(1)
  const t = `  ${entity}${name}Success,\n  ${entity}${name}Failure,`
  console.log(t)
})
console.log(`} from './actions'`)

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let nameSplit = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join(" ")
  let nameFunction = name.charAt(0).toLowerCase(0) + name.slice(1)

  let externalApi2 = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1))
  externalApi2.shift()
  const l = externalApi2.join("")
  const externalApi = l.charAt(0).toLowerCase(0) + l.slice(1)
  let t = `
/*---*--- ${nameSplit} ---*---*/
function* ${nameFunction}({payload, metadata}) {
  try {

    yield put(${entity}${name}Success({payload: {}, metadata}))
  } catch(e) {
    yield put(${entity}${name}Failure({payload: e, metadata}))
  }
}
`
  console.log(t)
})

console.log(`export default function* rxdbRootSaga() {
  yield [`)

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let t = `   takeEvery(${entityUppercase}_${i}_REQUEST, ${name.charAt(0).toLowerCase(0) + name.slice(1) }),`
  console.log(t)
})

console.log(`  ];
}
`)