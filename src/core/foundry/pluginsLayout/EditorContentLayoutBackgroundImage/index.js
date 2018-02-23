/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import TextField from 'material-ui/TextField'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'

const handleChange = (onChange, key) => (e, value) => {
  return onChange({ [key]: value })
}

const handleChangeAutoComplete = (onChange, key) => (e, value) => {
  return onChange({ [key]: e.value || e })
}

/* ---------------------------- Export Component ---------------------------- */
export default (props) =>
<Flex direction={['column']} >
<TextField
  hintText="http://example.com/image.png"
  floatingLabelText="Image (URL)"
  value={props.state.backgroundImage}
  onChange={handleChange(props.onChange, 'backgroundImage')}
/>
<TextField
  hintText="0-1"
  floatingLabelText="Image Opacity"
  value={props.state.backgroundImageOpacity}
  onChange={handleChange(props.onChange, 'backgroundImageOpacity')}
/>
</Flex>