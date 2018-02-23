/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { BottomToolbar } from 'ory-editor-ui'
import { AutoComplete } from 'material-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import GradientOptions from 'static/forms/editor/optionsGradient'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'

const handleChangeAutoComplete = (onChange, key) => (e, value) => {
  return onChange({ [key]: e.value || e })
}
const handleChange = (onChange, key) => (e, value) => {
  return onChange({ [key]: value })
}

export default (props) =>
<Flex direction={['column']} >
<AutoComplete
  component={AutoComplete}
  dataSource={GradientOptions}
  floatingLabelText="Gradient"
  filter={AutoComplete.fuzzyFilter}
  menuStyle={{maxHeight: '280px' }}
  openOnFocus
  fullWidth
  onNewRequest={handleChangeAutoComplete(props.onChange, 'backgroundGradient')}
/>
<TextField
  hintText="0-1"
  floatingLabelText="Gradient Opacity"
  value={props.state.backgroundGradientOpacity}
  onChange={handleChange(props.onChange, 'backgroundGradientOpacity')}
/>
</Flex>