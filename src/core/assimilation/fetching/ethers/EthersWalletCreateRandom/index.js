/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { ProviderCard } from 'foundry'
import WalletGeneratedDisplay from 'assimilation/display/ethers/EthersWalletGeneratedDisplay'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersWalletCreateRandomRequest } from 'assimilation/symbiosis/actions'

import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersWalletCreateRandomRequest({
      metadata: {
        delta: `wallet|random`
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state,  `wallet|random`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersWalletCreateRandomRequest: ()=>dispatch(ethers.walletGenerateRandom('REQUEST')(
    null,
    {
      delta: `wallet|random`
    },
    
    )),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(WalletGeneratedDisplay);