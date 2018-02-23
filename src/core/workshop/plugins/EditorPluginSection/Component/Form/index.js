/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
/* ------------------------- Internal Dependencies -------------------------- */
import { uiStyle, uiLayout, uiMedia, uiMobile } from 'assets/shapes'
import { Drawer } from 'particles'
import SVG from 'atoms/SVG'

// Editor Plugin Form Blocks
import PluginFormBackground from 'workshop/pluginForm/PluginFormBackground'
import PluginFormColor from 'workshop/pluginForm/PluginFormColor'
import PluginFormLayout from 'workshop/pluginForm/PluginFormLayout'

import { 
  Absolute, Flex, Box,
  HorizontalRule, Heading,
} from 'atomic'

import Display from '../Display'

const handleChange = (onChange, key) => (e, value) => onChange({ [key]: value })

export default props => 
<div>
{!props.state.open ? null :
<Drawer
  open={props.state.open}
  bs={1}
  br={'0 5px 5px 0'}
  bg='charcoal'
  color='white'
  overflow='hidden'
  position='left'
  z={200}
>
<Tabs>
  <Tab icon={<SVG svg={uiStyle} svgColor="white" w={25} />}>
  <Box p={15} >
    <PluginFormColor {...props} />
  </Box>
  </Tab>
  <Tab icon={<SVG svg={uiLayout} svgColor="white" w={25} />}>
  <Box p={15} >
    <PluginFormLayout {...props} />
  </Box>
  </Tab>
  <Tab icon={<SVG svg={uiMedia} svgColor="white" w={25} />}>
  <Box p={15} >
    <PluginFormBackground {...props} />
  </Box>
  </Tab>
  <Tab icon={<SVG svg={uiMobile} svgColor="white" w={25} />}>
    <Box p={15} >
      asd
    </Box>
  </Tab>
</Tabs>
</Drawer>
}
<Display {...props}/>
</div>