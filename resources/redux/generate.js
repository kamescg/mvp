
/* ------------------------- External Dependencies -------------------------- */
const path = require('path')
const fs = require('fs')

const entity = 'rxdb'
const entityUppercase = 'RXDB'

const reduxOperators = [
  'COLLECTION_INSERT',
  'COLLECTION_NEW_DOCUMENT',
  'COLLECTION_UPSERT_ATOMIC',
  'COLLECTION_FIND',
  'COLLECTION_FIND_ONE',
  'COLLECTION_DUMP',
  'COLLECTION_IMPORT_DUMP',
  'COLLECTION_SYNC',
  'COLLECTION_REMOVE',
  'DOCUMENT_GET',
  'DOCUMENT_SET',
  'DOCUMENT_SAVE',
  'DOCUMENT_REMOVE',
  'DOCUMENT_UPDATE',
  'DOCUMENT_ATOMIC_UPDATE',
  'DATABASE_WAIT_FOR_LEADERSHIP',
  'DATABASE_DUMP',
  'DATABASE_IMPORT_DUMP',
  'DATABASE_REQUEST_IDLE_PROMISE',
  'DATABASE_DESTROY',
  'DATABASE_REMOVE',
  'DATABASE_CHECK_ADAPTER',
]

reduxOperators.map(i=> {
  let t = `\nexport const RXDB_${i}_REQUEST = 'RXDB_${i}_REQUEST'\nexport const RXDB_${i}_SUCCESS = 'RXDB_${i}_SUCCESS'\nexport const RXDB_${i}_FAILURE = 'RXDB_${i}_FAILURE'`
  console.log(t)
})

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let t = `// ${entity} :: ${name} |  ${entityUppercase}_${i}
export const ${entity}${name}Request = ({payload}) => ({
  type: ${entityUppercase}_${i}_REQUEST,
  payload
})

export const ${entity}${name}Success = ({payload}) => ({
  type: ${entityUppercase}_${i}_SUCCESS,
  payload
})

export const ${entity}${name}Failure = ({payload}) => ({
  type: ${entityUppercase}_${i}_FAILURE,
  payload
})
  `
  console.log(t)
})

// reduxOperators.map(i=> {
//   let t = `RXDB_${i}_REQUEST,\n RXDB_${i}_SUCCESS,\nRXDB_${i}_FAILURE,`
//   console.log(t)
// })