/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import {Route} from 'atomic'
import MenuSmartContracts from 'smithing/menus/MenuSmartContracts'
/* ------------------------------- Component -------------------------------- */
export default () => 
<Switch>
  {/* Smart Contracts */}
  <Route
    path="/dashboard/smart-contract"
    component={MenuSmartContracts}
    w={240}
  />
</Switch>
