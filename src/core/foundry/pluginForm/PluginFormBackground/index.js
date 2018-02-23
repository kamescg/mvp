/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { List, ListItem } from 'material-ui/List';
/* ------------------------- Internal Dependencies -------------------------- */
import EditorContentLayoutBackgroundGradient from 'workshop/pluginsLayout/EditorContentLayoutBackgroundGradient'
import EditorContentLayoutBackgroundImage from 'workshop/pluginsLayout/EditorContentLayoutBackgroundImage'
/* ---------------------------- Export Component ---------------------------- */
export default props => 
<div>
<ListItem
  primaryText="Image"
  primaryTogglesNestedList={true}
  initiallyOpen={true}
  style={{
    color: 'white',
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
      children={<EditorContentLayoutBackgroundImage {...props} />}
    />,
  ]}
/>
<ListItem
  primaryText="Gradient"
  primaryTogglesNestedList={true}
  style={{
    color: 'white',
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
      children={<EditorContentLayoutBackgroundGradient {...props} />}
    />,
  ]}
/>
</div>