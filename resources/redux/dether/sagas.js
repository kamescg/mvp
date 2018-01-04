
/* ------------------------- External Dependencies -------------------------- */
const path = require('path')
const fs = require('fs')

const entity = 'dether'
const entityUppercase = 'DETHER'

const reduxOperators = [
 // DetherJS
 'GET_TELLERS_ALL',
 'GET_TELLER',
 'GET_TELLER_BALANCE',
 'GET_TELLERS_IN_ZONE',
 'GET_USER',
 // DetherUser
 'ADD_SELL_POINT',
 'DELETE_SELL_POINT',
 'GET_ADDRESS',
 'GET_BALANCE',
 'GET_INFO',
 'SEND_TO_BUYER',
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

    yield put(${entity}${name}Success({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(${entity}${name}Failure({payload: e, metadata}))
  }
}
`
  console.log(t)
})

console.log(`export default function* DepartmentSaga() {
  yield [`)

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let t = `   takeEvery(${entityUppercase}_${i}_REQUEST, ${name.charAt(0).toLowerCase(0) + name.slice(1) }),`
  console.log(t)
})

console.log(`  ];
}
`)