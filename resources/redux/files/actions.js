/* ------------------------- ENTITY -------------------------- */
const entity = 'ipfs'
const entityUppercase = 'IPFS'

const entityTypes = [
  'files',
]

const actions = {
  files: [
    'add',
    'get',
    'create_stream',
    'cat',
  ]
}

entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    return (
`${type.toUpperCase()}_${entityActions.toUpperCase()}: createRequestTypes(${type.toUpperCase()}_${entityActions.toUpperCase()}),
`
    )

  })
  console.log(...actionsRendered)
})

entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    return (
`${type.toUpperCase()}_${entityActions.toUpperCase()}: {
  request: (payload, metadata) => action(requests.${type.toUpperCase()}_${entityActions.toUpperCase()}.REQUEST),
  success: (payload, metadata) => action(requests.${type.toUpperCase()}_${entityActions.toUpperCase()}.SUCCESS, payload, metadata),
  failure: (payload, metadata) => action(requests.${type.toUpperCase()}_${entityActions.toUpperCase()}.FAILURE, payload, metadata)
}
`
    )

  })
  console.log(...actionsRendered)
})
