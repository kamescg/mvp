/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  withStateHandlers,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { fromDepartment } from 'store/departments/selectors'
import { departmentAction } from 'store/departments/actions'
import Form from 'forms/form'
/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const submission = _.pickBy(data, (value, key)=> key.startsWith("fieldRef"));
  dispatch(departmentAction(
    {
      payload: submission, 
      metadata: 
      {
        delta: 'DELTA'
      }
    }
  ))
})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

const config = {
  form: 'Form',
  fields: [

  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromDepartment.getDeltaData(state, `DELTA`),
    status: fromDepartment.getDeltaStatus(state, `DELTA`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({

})

/* ----------------------------- Export -------------------------------- */
const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
const FormConfiguration = reduxForm(config)
const FormRedux = props => <FormDetherAddSellPoint { ...props} />

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  spinnerWhileLoading(
    (props) => !props ? true : false
  ),
  FormConfiguration,
  QueryLifecycle,
)(FormRedux);
