/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import TextField from 'material-ui/TextField'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
const handleChange = (onChange, key) => (e) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ [key]: target.value })
  }
}

/* ---------------------------- Export Component ---------------------------- */
export default (props) =>
<Flex direction={['column']} >
  <TextField
    floatingLabelText="Width"
    inputStyle={{ color: '#FFF' }}
    floatingLabelStyle={{ color: 'charcoal' }}
    hintStyle={{ color: '#FFF' }}
    value={props.state.w}
    onChange={handleChange(props.onChange, 'w')}
  />
  <TextField
    floatingLabelText="Height"
    inputStyle={{ color: '#FFF' }}
    floatingLabelStyle={{ color: 'charcoal' }}
    hintStyle={{ color: '#FFF' }}
    value={props.state.mh}
    onChange={handleChange(props.onChange, 'mh')}
  />
</Flex>