/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { dataMining, commerceKiosk } from 'assets/shapes'
/*---*--- Atoms ---*---*/
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, SVG,
  BackgroundImage, BackgroundGradient, HorizontalRule
} from 'atomic'

/*---*--- Assimilation ---*---*/
import EnsScan from 'assimilation/fetching/ens/EnsScan'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={20} >
  <Flex align='center'>
    <SVG svg={commerceKiosk} svgColor='blue' width={60} height={60} mr={15} />
    <Heading f={[6]} color='blue' >
      Scan Blockchain
    </Heading>
  <Paragraph f={[1]}>
    Search the Ethereum Blockchain for ENS related transactions.
  </Paragraph>
  </Flex>
  <HorizontalRule bi='colorWheel'/>
  <Flex>
    <EnsScan blockNumber={1} />
  </Flex>
</Box>