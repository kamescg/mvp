
/* ------------------------- External Dependencies -------------------------- */
const path = require('path')
const fs = require('fs')

const entity = 'rxdb'
const entityUppercase = 'RXDB'

const reduxOperators = [
  'FIREBASE_READ',
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
console.log(`import {`)

reduxOperators.map(i=> {
  let t = `RXDB_${i}_REQUEST,\nRXDB_${i}_SUCCESS,\nRXDB_${i}_FAILURE,`
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
    const documentInserted = yield call(${nameFunction}Async, payload, metadata)
    yield put({type: ${entityUppercase}_${i}_SUCCESS})
  } catch(e) {
    yield put({type: ${entityUppercase}_${i}_FAILURE})
  }
}
async function ${nameFunction}Async(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].${externalApi}({...payload})
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