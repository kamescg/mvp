/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
/* ------------------------- External Dependencies -------------------------- */

import Home from 'smithing/pages/dashboard/Home'
import Predictions from 'smithing/pages/dashboard/Predictions'
import Ethers from 'smithing/pages/dashboard/Ethers'
// Blocks
import EthereumBlocks from 'smithing/pages/dashboard/EthereumBlocks'
import EthereumBlocksHistory from 'smithing/pages/dashboard/EthereumBlocksHistory'
import EthereumBlocksGas from 'smithing/pages/dashboard/EthereumBlocksGas'
import EthereumContracts from 'smithing/pages/dashboard/EthereumContracts'

// Wallet
import EthereumWallet from 'smithing/pages/dashboard/EthereumWallet'

// Ethereum Name System
import EnsTools from 'smithing/pages/dashboard/EnsTools'
import EnsScan from 'smithing/pages/dashboard/EnsScan'

/* ------------------------------- Component -------------------------------- */

const DashboardMainRoutes = props => (
<div>
  
  <Route
    exact
    path='/dashboard'
    component={Ethers}
  />
  {/*---*--- Ethereum Name System ---*---*/}
  <Route
    exact
    path='/dashboard/ens'
    component={EnsTools}
  />
  <Route
    exact
    path='/dashboard/ens/scan'
    component={EnsScan}
  />
  

  {/*---*--- Ethereum Blocks ---*---*/}
  <Route
    path='/dashboard/blocks'
    component={EthereumBlocks}
  />
  <Route
    path='/dashboard/blocks/history'
    component={EthereumBlocksHistory}
  />
  <Route
    path='/dashboard/blocks/gas'
    component={EthereumBlocksGas}
  />

  {/*---*--- Wallet ---*---*/}
  <Route
    path='/dashboard/wallet'
    component={EthereumWallet}
  />
  {/*---*--- Wallet ---*---*/}
  <Route
    path='/dashboard/smart-contract'
    component={EthereumContracts}
  />
  {/*---*--- Predictions ---*---*/}
  <Route
    exact
    path='/dashboard/predictions'
    component={Predictions}
  />
 
</div>);


const mapStateToProps = (state, props) => ({
    authentication: {

    }
  }
)

export default connect(mapStateToProps)(DashboardMainRoutes)