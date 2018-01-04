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

/* ------------------------- GENERATE BOILERPLATE -------------------------- */
reduxOperators.map(i=> {
  let t = `\nexport const ${entityUppercase}_${i}_REQUEST = '${entityUppercase}_${i}_REQUEST'\nexport const ${entityUppercase}_${i}_SUCCESS = '${entityUppercase}_${i}_SUCCESS'\nexport const ${entityUppercase}_${i}_FAILURE = '${entityUppercase}_${i}_FAILURE'`
  console.log(t)
})

reduxOperators.map(i=> {
let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
let generatedActions = 
`// ${entity} :: ${name} |  ${entityUppercase}_${i}
export const ${entity}${name}Request = ({payload = {}, metadata = {}}) => ({
  type: ${entityUppercase}_${i}_REQUEST,
  payload,
  metadata
})

export const ${entity}${name}Success = ({payload = {}, metadata = {}}) => ({
  type: ${entityUppercase}_${i}_SUCCESS,
  payload,
  metadata
})

export const ${entity}${name}Failure = ({payload = {}, metadata = {}}) => ({
  type: ${entityUppercase}_${i}_FAILURE,
  payload,
  metadata
})
`
console.log(generatedActions)
})