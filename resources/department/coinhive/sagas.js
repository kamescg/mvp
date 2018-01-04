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
    return (
`
export function * ${type}${functionHeader} ({payload, metadata}) {
  try {

    yield put(actions.${type}${functionHeader}("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.${type}${functionHeader}("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

`
    )

  })
  console.log(...actionsRendered)
})


console.log(`export default function* ${entity}Saga() {
  yield [`)

// reduxOperators.map(i=> {
//   let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
//   let t = `   takeEvery(requests.${type.toUpperCase()}_${entityActions.toUpperCase()}.REQUEST, ${name.charAt(0).toLowerCase(0) + name.slice(1) }),`
//   console.log(t)
// })

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
    return ( `   takeEvery(actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.REQUEST, ${type}${functionHeader }),\n`
    )

  })
  console.log(...actionsRendered)
})



console.log(`  ];
}
`)