import ethers from 'assimilation/symbiosis/ethers/sagas'
import uPort from 'assimilation/symbiosis/uport/sagas'
import ipfs from 'assimilation/symbiosis/ipfs/sagas'

export default [
  ethers(),
  uPort(),
  ipfs(),
]