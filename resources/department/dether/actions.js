/* ------------------------- ENTITY -------------------------- */
const entity = 'dether'
const entityTypes = [
  'teller',
  'tellers',
  'sell_point',
  'buyer'
]

const actions = {
  teller: [
    'get',
    'balance'
  ],
  tellers: [
    'get',
    'in_zone'
  ],
  sell_point: [
    'add',
    'delete'
  ],
  buyer: [
    'send'
  ]
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(`import {createRequestTypes, action} from '../utils'
const entity = ${entity}
export const actions = {`)
entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    return (
`${type.toUpperCase()}_${entityActions.toUpperCase()}: createRequestTypes('${type.toUpperCase()}_${entityActions.toUpperCase()}'),
`
    )

  })
  console.log(...actionsRendered)
})

entityTypes.map(type=>{

    let typeHeader = type[0]
    const split = type.slice(1).split("_")
    if (split[1]) {
      const split = type.slice(1).split("_")
      typeHeader = typeHeader + split[0] +  capitalizeFirstLetter(split[1])
    } else {
      typeHeader = typeHeader + type.slice(1)
    }


  const actionsRendered = actions[type].map(entityActions=> {
    let functionHeader = entityActions[0].toUpperCase() 
    const split = entityActions.slice(1).split("_")
    if (split[1]) {
      const split = entityActions.slice(1).split("_")
      functionHeader = functionHeader + split[0] +  capitalizeFirstLetter(split[1])
    } else {
      functionHeader = functionHeader + entityActions.slice(1)
    }
    return (
`${typeHeader}${functionHeader}: status => (payload, metadata) => action(actions.${type.toUpperCase()}_${entityActions.toUpperCase()}[status], payload, metadata, status, entity),
`
    )

  })
  console.log(...actionsRendered)
})
console.log(`}
export default actions
`)
