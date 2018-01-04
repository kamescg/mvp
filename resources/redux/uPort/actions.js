/* ------------------------- External Dependencies -------------------------- */

const entity = 'uPort'
const entityUppercase = 'UPORT'

const reduxOperators = [
  'GET_WEB3',
  'GET_PROVIDER',
  'GET_CREDENTIALS',
  'GET_ADDRESS',
  'GET_ATTEST_CREDENTIALS',
  'INIT_CONTRACT',
  'SEND_TRANSACTION',
  'ADD_APP_PARAMETERS',
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