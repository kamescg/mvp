/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import FieldComponent from 'molecules/Field'
import ReduxField from 'organisms/ReduxField'

const FieldCollection = styled.div`
`

const FieldCollectionComponent = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FieldCollection method="POST" onSubmit={handleSubmit}>
      <Field name="example" label="Example" component={ReduxField} type="text" />
    </FieldCollection>
  )
}

FieldCollectionComponent.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FieldCollectionComponent
