import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/ipfs/file/add',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'IPFS | File Add',
  description: 'Upload File',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
