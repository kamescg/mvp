/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { ReduxField } from 'atomic'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <Box  {...layout} {...props}>
      <Box className='formProps' >
        <Field name="hidden"component={ReduxField} type="hidden" />
      </Box>
      
      <Box className='form' >
        <Field name="start" label="Start" component={ReduxField} type="text" />
      
        <Box>
          <Button type="submit" onClick={handleSubmit} >Submit</Button>
        </Box>
      </Box>

    </Box>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
