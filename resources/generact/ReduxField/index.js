/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { exampleAction } from 'store/departments/actions'
import { fromForm } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(exampleAction(data))
  const { destructureVariables } = data
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  exampleField: [required],
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state) => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state)
  }
})

const mapDispatchToProps = dispatch => ({
  productCreate: () => dispatch(productCreate()),
})

export const config = {
  form: 'ReduxFormTemplate',
  fields: [
    'exampleField',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ReduxFormTemplate))
