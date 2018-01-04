/* ------------------------- External Dependencies -------------------------- */

const entity = 'entity'
const entityUppercase = 'ENTITY'

const reduxOperators = [
  'ADD',
  'EDIT',
  'DELETE',
  'PERSON_ADD',
  'PERSON_EDIT',
  'PERSON_DELETE',
  'ORGANIZATION_ADD',
  'ORGANIZATION_EDIT',
  'ORGANIZATION_DELETE',
  'PROJECT_ADD',
  'PROJECT_EDIT',
  'PROJECT_DELETE',
  'TASK_ADD',
  'TASK_EDIT',
  'TASK_DELETE',
  'RESOURCE_ADD',
  'RESOURCE_EDIT',
  'RESOURCE_DELETE',
  'BANNER_ADD',
  'FILE_ADD',
  'FILE_EDIT',
  'FILE_DELETE',
  'FILES_ADD',
  'IMAGE_ADD',
  'IMAGE_EDIT',
  'IMAGE_DELETE',
  'IMAGES_ADD',
]

reduxOperators.map(i=> {
  let t = `\nexport const ${entityUppercase}_${i}_REQUEST = '${entityUppercase}_${i}_REQUEST'\nexport const ${entityUppercase}_${i}_SUCCESS = '${entityUppercase}_${i}_SUCCESS'\nexport const ${entityUppercase}_${i}_FAILURE = '${entityUppercase}_${i}_FAILURE'`
  console.log(t)
})


reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")
  let t = `// ${entity} :: ${name} |  ${entityUppercase}_${i}
export const ${entity}${name}Request = ({payload, metadata}) => ({
  type: ${entityUppercase}_${i}_REQUEST,
  payload,
  metadata
})

export const ${entity}${name}Success = ({payload, metadata}) => ({
  type: ${entityUppercase}_${i}_SUCCESS,
  payload,
  metadata
})

export const ${entity}${name}Failure = ({payload, metadata}) => ({
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