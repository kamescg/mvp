// @flow
import React from 'react'
import ImageIcon from 'material-ui/svg-icons/image/panorama'

import { iconStyle } from '../common.js'
import type { PropTypes } from '../index.js'

import ImageList from 'workshop/core/ImageList'

const Display = ({ state }: PropTypes) => state.src ? (
  <div>
    <img className="ory-plugins-content-image" src={state.src} />
    <ImageList data={["https://firebasestorage.googleapis.com/v0/b/multiculturalmarin.appspot.com/o/background%2FearthColors.jpg?alt=media&token=f5a08a3e-b2c3-4497-89f6-f9683abef2fe"]} />
  </div>
) : (
  <div>
    <div className="ory-plugins-content-image-placeholder">
      <ImageIcon style={iconStyle} />
    </div>
  </div>
)

export default Display
