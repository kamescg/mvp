import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuEthereumSmartContracts } from 'static/menus'
export default props => <div>{MenuEthereumSmartContracts.map(item=> <MenuAsideItem dimensions={40} {...props} {...item}/> )}</div>