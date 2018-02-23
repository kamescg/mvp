/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import TextField from 'material-ui/TextField'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Heading from 'atoms/Heading'
const handleChange = (onChange, key) => (e) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ [key]: target.value })
  }
}

export default (props) =>
<Flex direction={['column']} >
<TextField
  floatingLabelText="Padding"
  inputStyle={{ color: '#FFF' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: '#FFF' }}
  value={props.state.p}
  onChange={handleChange(props.onChange, 'p')}
/>
<TextField
  floatingLabelText="Padding Vertical"
  inputStyle={{ color: '#FFF' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: '#FFF' }}
  value={props.state.py}
  onChange={handleChange(props.onChange, 'py')}
/>
<TextField
  floatingLabelText="Padding Horizontal"
  inputStyle={{ color: '#FFF' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: '#FFF' }}
  value={props.state.px}
  onChange={handleChange(props.onChange, 'px')}
/>
</Flex>