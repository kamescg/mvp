/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
// files
import { ethereum } from 'assets/shapes'
// atoms
import SVG from 'atoms/SVG'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Span from 'atoms/Span'
import Form from 'molecules/Form'
import ReduxField from 'organisms/ReduxField'
import ens from 'logic/forms/normalize/ens'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
  <Form {...styled} w={1}>
  <Box >
    <Field name="ipfsFileAdd" 
      placeholder="Scan Count (Reverse) " 
      component={ReduxField} type="file" 
      {...StyleFieldDefault} h={50}
     />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} py={20} >Upload File</Button>
  </Box>
</Form>