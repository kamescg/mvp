import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuEthereumBlocks } from 'static/menus'
export default props => <div>{MenuEthereumBlocks.map(item=> <MenuAsideItem dimensions={40} {...props} {...item}/> )}</div>