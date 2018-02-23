/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { AutoComplete} from 'material-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import ColorOptions from 'static/forms/editor/optionsColor'

/* ------------------------- Internal Dependencies -------------------------- */
const handleChangeAutoComplete = (onChange, key) => (e, value) => {
  return onChange({ [key]: e.value || e })
}
const handleChange = (onChange, key) => (e) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ [key]: target.value })
  }
}

/* ---------------------------- Export Component ---------------------------- */
export default (props) =>
<Flex direction={['column']}  >
<AutoComplete
  dataSource={ColorOptions}
  floatingLabelText="Background"
  filter={AutoComplete.fuzzyFilter}
  openOnFocus
  textFieldStyle={{color: '#FFF'}}
  style={{color: '#FFF !important', margin: 0 }}
  menuStyle={{color: '#FFF', maxHeight: '220px' }}
  fullWidth
  onNewRequest={handleChangeAutoComplete(props.onChange, 'background')}
/>
<AutoComplete
  dataSource={ColorOptions}
  floatingLabelText="Color"
  filter={AutoComplete.fuzzyFilter}
  openOnFocus
  textFieldStyle={{color: '#FFF'}}
  style={{color: '#FFF !important', margin: 0 }}
  menuStyle={{color: '#FFF', maxHeight: '220px' }}
  fullWidth
  onNewRequest={handleChangeAutoComplete(props.onChange, 'color')}
/>
</Flex>