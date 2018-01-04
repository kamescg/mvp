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