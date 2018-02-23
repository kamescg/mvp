// @flow
import React from 'react'
import Display from '../Display'
import TextField from 'material-ui/TextField'
import type { PropTypes } from '../index.js'

import { BottomToolbar } from 'ory-editor-ui'

import ImageList from 'workshop/core/ImageList'

const handleChange = (onChange: Function) => (e: Event) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ src: target.src })
    return
  }
}

const handleImageClick = (onChange: Function) => (e: Event) => {
  const target = e.target
  if (target.src) {
    onChange({ src: target.src })
    return
  }
}


const Form = (props: PropTypes) => (
  <div>
    <Display {...props} />
    <BottomToolbar open={props.focused}>
      <ImageList data={props.images} handleOnClick={handleImageClick(props.onChange)}  />
      <TextField
        hintText="http://example.com/image.png"
        floatingLabelText="Image location (url)"
        inputStyle={{ color: 'white' }}
        floatingLabelStyle={{ color: 'white' }}
        hintStyle={{ color: 'grey' }}
        style={{ width: '512px' }}
        value={props.state.src}
        onChange={handleChange(props.onChange)}
      />
    </BottomToolbar>
  </div>
)

export default Form
