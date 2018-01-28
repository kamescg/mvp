/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import {Route} from 'atomic'
import MenuAsideEthereumBlocks from 'smithing/menus/MenuAsideEthereumBlocks'
import MenuAsideEthereumNameSystem from 'smithing/menus/MenuAsideEthereumNameSystem'
import MenuAsideEthereumSmartContracts from 'smithing/menus/MenuAsideEthereumSmartContracts'
import MenuAsideEthereumWallet from 'smithing/menus/MenuAsideEthereumWallet'
import MenuAsidePlanetaryFileSystem from 'smithing/menus/MenuAsidePlanetaryFileSystem'
/* ------------------------------- Component -------------------------------- */
export default () => 
<Switch>
  {/* Ethereum Blocks */}
  <Route
    path="/dashboard/blocks"
    component={MenuAsideEthereumBlocks}
    w={240}
  />
  {/* Ethereum Blocks */}
  <Route
    path="/dashboard/wallet"
    component={MenuAsideEthereumWallet}
    w={240}
  />
  {/* Ethereum Blocks */}
  <Route
    path="/dashboard/smart-contract"
    component={MenuAsideEthereumSmartContracts}
    w={240}
  />
  {/* Ethereum Blocks */}
  <Route
    path="/dashboard/files"
    component={MenuAsidePlanetaryFileSystem}
    w={240}
  />
  {/* Ethereum Name System */}
  <Route
    path="/dashboard/ens"
    component={MenuAsideEthereumNameSystem}
    w={240}
  />
</Switch>
