import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/ethereum/wallet/mnemonic',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Ethers | Wallet Mnemonic',
  description: 'Unlock Wallet from Mnemonic',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
