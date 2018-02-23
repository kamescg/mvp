import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/uport/identity/card-default',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'uPort | Identity Card',
  description: 'Credentials Request',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
