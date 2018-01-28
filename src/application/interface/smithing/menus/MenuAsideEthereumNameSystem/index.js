import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuEthereumNameSystem } from 'static/menus'
export default props => <div>{MenuEthereumNameSystem.map(item=> <MenuAsideItem dimensions={40} {...props} {...item}/> )}</div>