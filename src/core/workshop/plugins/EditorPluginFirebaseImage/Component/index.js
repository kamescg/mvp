// @flow
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux'
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  withStateHandlers,
  renderComponent
} from 'recompose'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import type { ContentPluginProps } from 'ory-editor-core/lib/service/plugin/classes'
import { databaseReadRequest } from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'
/* ------------------------- Internal Dependencies -------------------------- */
import Display from './Display'
import Form from './Form'

export type PropTypes = ContentPluginProps<{ src: string, caption: string }>

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

const mapStateToProps = (stateEditor, props) => {
  const stateApp = window.store.getState()
  const images = fromDatabase.getDeltaData(stateApp, 'images')
  return {
    images: images
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  loadImages: (settings)=>window.store.dispatch(databaseReadRequest(settings)),
})


const Image = (props: PropTypes) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {props.readOnly ? <Display {...props} /> : <Form {...props} />}
  </MuiThemeProvider>
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Image);
