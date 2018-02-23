import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/uport/credentials',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'uPort | Credentials Request',
  description: 'Credentials Request',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
