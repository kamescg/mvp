/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { images, svg } from 'assets'
import {
  Absolute, Box, Container, Flex, Fixed,
  Heading, Image, Paragraph, Link, Span, SVG, Shape,
  BackgroundImage, BackgroundGradient
} from 'atomic'

import previewEdit from './previewEdit.gif'
import previewLive from './previewLive.gif'

import Mission from 'smithing/sections/FrontMission'
import Resources from 'smithing/sections/FrontResources'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Flex align='center' justify='center' py={150} >
    <Container w={[620]} ta='center'>
      <Heading level={[3]} f={[5,6]} color='blue' mb={25} ta='center' >
        10x The People
      </Heading>
      <Heading level={[3]} f={[4]} color='blue' mb={25} ta='center' fw='300' >
        Rapid Distributed Application Prototypes
      </Heading>
      <Paragraph f={[0]}>
        Rapidly Prototype new Distrubted Application Ideas without requiring a full team of Engineers
      </Paragraph>
      <Heading level={[3]} f={[5]} mb={40} >
        Edit Preview
      </Heading>
      <Image src={previewEdit}/>
      <Heading level={[3]} f={[5]} my={40} >
        Live Preview
      </Heading>
      <Image src={previewLive}/>
    </Container>
  </Flex>

  <Mission/>
  <Resources/>
</Box>