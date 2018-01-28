/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, defaultProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
// Store
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersBlockchainGetBlockRequest } from 'assimilation/symbiosis/actions'
import ethers from 'assimilation/symbiosis/ethers/actions'

// Display
import EthersBlockchainBlockCard from 'assimilation/display/ethers/EthersBlockchainBlockCard'
import EthersBlockchainBlockTransactions from 'assimilation/display/ethers/EthersBlockchainBlockTransactions'
/* ---------------------------- Module Package ------------------------------ */
/*---* Recompose *---*/
/*-* Default Props *-*/
const DefaultProps = defaultProps({
  chainId: 1,
  global: true
})

/*-* Lifecycle *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return null 
    this.props.ethersBlockchainBlockRequest({
      blockNumber: this.props.blockNumber,
      provider: this.props.provider
    })
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainBlockRequest({
        blockNumber: this.props.blockNumber,
        provider: this.props.provider
      })
    }
    if (this.props.provider != prevProps.provider) {
      if(!this.props.blockNumber) return null
      this.props.ethersBlockchainBlockRequest({
        blockNumber: this.props.blockNumber,
        provider: this.props.provider
      })
    }
  }
})


/*---* Redux *---*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `block|${props.blockNumber}`) : fromEthers.getDeltaData(state, `block|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'BlockchainBlockNumber'),
    provider: props.provider ? props.provider : fromEthers.getProvider(state)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainBlockRequest: (request)=>dispatch(ethers.blockchainBlock('REQUEST')(
    request.blockNumber,
    {
      delta: `block|${props.blockNumber}`,
      network: {
        chainId: props.chainId,
        global: props.global,
        provider: request.provider
      }
    },  
    )),
})

const Ethers = props => {
  return {
    block: <EthersBlockchainBlockCard {...props} />,
    tx: <EthersBlockchainBlockTransactions {...props} />,
  }[props.foundry]
}

export default compose(
  DefaultProps,
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Ethers);