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
reduxOperators.map(i=> {
  let t = `\nexport const ${entityUppercase}_${i}_REQUEST = '${entityUppercase}_${i}_REQUEST'\nexport const ${entityUppercase}_${i}_SUCCESS = '${entityUppercase}_${i}_SUCCESS'\nexport const ${entityUppercase}_${i}_FAILURE = '${entityUppercase}_${i}_FAILURE'`
  console.log(t)
})


reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let t = `// ${entity} :: ${name} |  ${entityUppercase}_${i}
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
  console.log(t)
})

// reduxOperators.map(i=> {
//   let t = `${entityUppercase}_${i}_REQUEST,\n ${entityUppercase}_${i}_SUCCESS,\n${entityUppercase}_${i}_FAILURE,`
//   console.log(t)
// })