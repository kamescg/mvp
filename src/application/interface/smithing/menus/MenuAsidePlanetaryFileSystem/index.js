import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuPlanetaryFileSystem } from 'static/menus'
export default props => <div>{MenuPlanetaryFileSystem.map(item=> <MenuAsideItem dimensions={40} {...props} {...item}/> )}</div>