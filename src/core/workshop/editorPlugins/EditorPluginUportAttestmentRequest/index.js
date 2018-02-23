import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/uport/attestment',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'uPort | Attestment Request',
  description: 'Generate Attestment',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
