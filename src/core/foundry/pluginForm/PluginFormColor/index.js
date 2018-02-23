/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { List, ListItem } from 'material-ui/List';
/* ------------------------- Internal Dependencies -------------------------- */
import { svg } from 'assets'
import { Drawer } from 'particles'
import SVG from 'atoms/SVG'
import EditorContentLayoutDefaults from 'workshop/pluginsLayout/EditorContentLayoutDefaults'
/* ---------------------------- Export Component ---------------------------- */
export default props => 
<ListItem
  primaryText="Color"
  initiallyOpen={true}
  primaryTogglesNestedList={true}
  value={1}
  style={{
    color: 'white',
    margin: 0,
  }}
  nestedItems={[
    <ListItem
      value={1}
      style={{
        color: 'white',
      }}
      innerDivStyle={{
        margin: 0,
      }}
      children={<EditorContentLayoutDefaults {...props} />}
    />,
  ]}
/>
     