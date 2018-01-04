/* ------------------------- External Dependencies -------------------------- */

const entity = 'firestore'
const entityUppercase = 'FIRESTORE'

const reduxOperators = [
  'DOCUMENT_ADD',
  'DOCUMENT_EMPTY_ADD',
  'DOCUMENT_SET',
  'DOCUMENT_UPDATE',
  'DOCUMENT_GET',
  'DOCUMENT_ALL_GET',
  'DOCUMENT_FILTER_GET',
  'DOCUMENT_COMPOSE_GET',
  'DOCUMENT_DELETE',
  'DOCUMENT_FIELDS_DELETE',
  'QUERY',
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