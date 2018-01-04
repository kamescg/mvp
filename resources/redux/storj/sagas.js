
/* ------------------------- External Dependencies -------------------------- */
const path = require('path')
const fs = require('fs')

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