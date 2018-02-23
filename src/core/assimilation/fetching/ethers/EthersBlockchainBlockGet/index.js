/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import EthersBlockchainBlockCard from 'assimilation/display/ethers/EthersBlockchainBlockCard'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersBlockchainGetBlockRequest } from 'assimilation/symbiosis/actions'
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return <div>:(</div> 
    this.props.ethersBlockchainGetBlockRequest(this.props.blockNumber)
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainGetBlockRequest({
        payload: {
          block: this.props.blockNumber,
        },
        metadata: {
          delta: `BlockchainBlockGet|${this.props.delta}`
        }
      })
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `blockchain|block|${props.blockNumber}`) : fromEthers.getDeltaData(state, `blockchain|block|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'blockchain|block')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetBlockRequest: (blockNumber)=>dispatch(ethers.blockchainBlock('REQUEST')(
    blockNumber,
    {
      delta: `blockchain|block|${blockNumber}`
    }
  )),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(EthersBlockchainBlockCard);