/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { List, ListItem } from 'material-ui/List';
/* ------------------------- Internal Dependencies -------------------------- */
import EditorContentLayoutSpacing from 'workshop/pluginsLayout/EditorContentLayoutSpacing'
import EditorContentLayoutSpacingMargin from 'workshop/pluginsLayout/EditorContentLayoutSpacingMargin'
import EditorContentLayoutSpacingPadding from 'workshop/pluginsLayout/EditorContentLayoutSpacingPadding'

/* ---------------------------- Export Component ---------------------------- */
export default props => 
<div>
<ListItem
  primaryText="Padding"
  primaryTogglesNestedList={true}
  initiallyOpen={true}
  style={{
    color: 'white',
    padding: 0,
  }}
  nestedListStyle={{
    color: 'white',
    padding: 0,
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
      children={<EditorContentLayoutSpacingPadding {...props} />}
    />,
  ]}
/>
<ListItem
  primaryText="Dimensions"
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
      children={<EditorContentLayoutSpacing {...props} />}
    />,
  ]}
/>
<ListItem
  primaryText="Margin"
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
      children={<EditorContentLayoutSpacingMargin {...props} />}
    />,
  ]}
/>
</div>