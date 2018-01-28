/* ------------------------- ENTITY -------------------------- */
const entity = 'coinhive'
const entityUppercase = 'COINHIVE'

const entityTypes = [
  'core',
  'threads',
  'hash',
  'token'
]

const actions = {
  core: [
    'initialize',
    'start',
    'stop'
  ],
  threads: [
    'count_get',
    'count_set',
    'auto_get',
    'auto_set',
  ],
  hash: [
    'total',
    'average',
    'accepted'
  ],
  token: [
    'get'
  ]

}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(`
import actions from ./actions
import { initialState } from './selectors'
export default (state = initialState, {type, payload, metadata}) => {
  if(batch) {
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: undefined
      }
    }
  }else{ 
  switch (type) {
`)
entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {

    let functionHeader = entityActions[0].toUpperCase() 
    const split = entityActions.slice(1).split("_")
    if (split[1]) {
      const split = entityActions.slice(1).split("_")
      functionHeader = functionHeader + split[0] +  capitalizeFirstLetter(split[1])
    } else {
      functionHeader = functionHeader + entityActions.slice(1)
    }


    const reduce = `
      case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }
`
console.log(reduce)
})
})
  console.log(`
    default:
      return state
  }
  }
}
  `)