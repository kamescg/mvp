/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
const { DOM: { input, select, textarea } } = React
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import FieldComponent from 'molecules/Field'
import ReduxField from 'organisms/ReduxField'

const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Field name="_csrf" type="hidden" component="input"/>
      <Field name="exampleField" label="Example Field" component={ReduxField} type="text" />
      <div>
        <Button type="submit">Save</Button>
      </div>
    </FormWrapper>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
