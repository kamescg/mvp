/* ------------------------- External Dependencies -------------------------- */

const entity = 'ethers'
const entityUppercase = 'ETHERS'

const reduxOperators = [
// # Wallet | https://docs.ethers.io/ethers.js/html/api-wallet.html#
  'NEW_WALLET',
  'WALLET_CREATE_RANDOM',
  'WALLET_CREATE_FROM_ENCRYPTED',
  'WALLET_CREATE_FROM_MENEMONIC',
  'WALLET_CREATE_FROM_BRAIN',

  'WALLET_ADDRESS',
  'WALLET_PRIVATE_KEY',
  'WALLET_GET_ADDRESS',
  'WALLET_SIGN',
  'WALLET_SIGN_MESSAGE',
  'WALLET_ENCRYPT',

  // REQUIRES PROVIDER
  'WALLET_GET_BALNCE',
  'WALLET_GET_TRANSACTION_COUNT',
  'WALLET_ESTIMATE_GAS',
  'WALLET_SEND_TRANSACTION',
  'WALLET_SEND',
  'WALLET_PARSE_TRANSACTION',
  'WALLET_VERIFY_MESSAGE',

  // # PROVIDER

  'NEW_PROVIDER_ETHERSCAN',
  'NEW_PROVIDER_JSON_RPC',
  'NEW_PROVIDER_INFURA',
  'NEW_PROVIDER_FALLBACK',
  'GET_PROVIDER_DEFAULT',

  'PROVIDER_NAME',
  'PROVIDER_CHAIN_ID',
  'PROVIDER_PROVIDERS',
  'PROVIDER_URL',
  'PROVIDER_SEND',
  'PROVIDER_API_TOKEN', // ETHERSCAN
  'PROVIDER_API_ACCESS_TOKEN', // INFURA

  // #Accounts Actions https://docs.ethers.io/ethers.js/html/api-providers.html#account-actions
  'ACCOUNT_GET_BALANCE',
  'ACCOUNT_GET_TRANSACTION_COUNT',
  'ACCOUNT_LOOKUP_ADDRESS',
  'ACCOUNT_RESOLVE_NAME',

  // Blockchain Status | https://docs.ethers.io/ethers.js/html/api-providers.html#id4
  'BLOCKCHAIN_GET_BLOCK_NUMBER',
  'BLOCKCHAIN_GET_GAS_PRICE',
  'BLOCKCHAIN_GET_BLOCK',
  'BLOCKCHAIN_GET_TRANSACTION',
  'BLOCKCHAIN_GET_TRANSACTION_RECEIPT',

  // ENS | https://docs.ethers.io/ethers.js/html/api-providers.html#ethereum-name-resolution
  'ENS_RESOLVE_NAME',
  'ENS_LOOKUP_ADDRESS',

  // Contract State | https://docs.ethers.io/ethers.js/html/api-providers.html#id4
  'CONTRACT_STATE_GET_CODE',
  'CONTRACT_STATE_GET_STORAGE_AT',
  'CONTRACT_STATE_GET_LOGS',
  
  // Events | https://docs.ethers.io/ethers.js/html/api-providers.html#id4
  'EVENTS_SET_ON',
  'EVENTS_SET_ONCE',
  'EVENTS_REMOVE_LISTENER',
  'EVENTS_REMOVE_ALL_LISTENERS',
  'EVENTS_GET_LISTNER_COUNT',
  'EVENT_RESET_BLOCK',

  // Contracts | https://docs.ethers.io/ethers.js/html/api-contract.html
  'NEW_CONTRACT',
  'CONTRACT_GET_FUNCTIONS',
  'CONTRACT_GET_ESTIMATE',
  'CONTRACT_GET_EVENTS',
  'CONTRACT_NEW_INSTANCE',
  'CONTRACT_DEPLOY_BYTECODE',
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