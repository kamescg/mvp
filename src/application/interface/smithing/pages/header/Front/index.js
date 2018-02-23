/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { converge } from 'assets/images'
import { 
  Flex, Box, Absolute,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import UportCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} py={[20, 40]} color='white' textAlign='center' pos='relative' >
  <BackgroundGradient gradient='purple' gradientDir='90deg' />
  <BackgroundImage src={converge} o={0.24} />
  <Flex direction={['column']}  mh={['90vh']}justify={['center']} >
    <Box w={1} color="white" >
      <Heading fontSize={[6,7]} level={3} fontWeight={[300]} mb={10} textShadow='darkHazy' >
        MVP
      </Heading>
      <Heading fontSize={[4,5]} level={3} fontWeight={[500]} mb={10} textShadow='darkHazy' >
        Mesh Viable Platform
      </Heading>
      <Paragraph f={[1]} textShadow='darkHazy'>
        A Drag and Drop Editor for Building Distributed Applications
      </Paragraph>
    </Box>
    <Container w={[200]} >
      <Box mb={15} >
        <UportCredentialsRequest/>
      </Box>
      <Flex direction={'row'} justify='space-evenly' >
        <Link to='/editor/mvp'>
          <Button>
            Live Edit
          </Button> 
        </Link>
        <Link to='/content/mvp'>
          <Button>
            Preview
          </Button> 
        </Link>
      </Flex>
    </Container>
  </Flex>
</Section>
