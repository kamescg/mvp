import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuEthereumWallet } from 'static/menus'
export default props => <div>{MenuEthereumWallet.map(item=> <MenuAsideItem dimensions={40} {...props} {...item}/> )}</div>