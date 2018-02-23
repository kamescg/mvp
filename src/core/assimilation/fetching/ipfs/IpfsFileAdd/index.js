/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'
import { fromIpfs } from 'assimilation/symbiosis/selectors'
import ipfs from 'assimilation/symbiosis/ipfs/actions'
// Component
import Form from './form'

// Depreacted Store Department Request Style | fix this @kamescg
import { databaseWriteRequest } from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => {
  return {

  }
}


const mapDispatchToProps = (dispatch, props) => ({
  // Blockchain
  ipfsFileAdd: ()=>dispatch(ipfs.filesAdd('REQUEST')(
    null,
    {
      delta: 'ipfs|file|add'
    }
  )),
})


/* ----------------------------- Redux Form -------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  dispatch(ipfs.filesAdd('REQUEST')(
    null,
    {
      delta: 'ipfs|file|add'
    }
  ))
})

const validate = createValidator({
})

const config = {
  form: 'FormEnsScan',
  fields: [
    'ethBlockNumber',
    'countBackwards',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(Form);