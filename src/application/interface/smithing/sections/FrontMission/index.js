/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { punk } from 'assets'
import { immigrantAmerica } from 'assets/images'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, Section, HorizontalRule,
  BackgroundImage, BackgroundGradient
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='blue'
  py={[30,60,120]}
  {...props}
>
<BackgroundImage src={punk} o={0.125} />
  <Container w={[1,1, 920]} >
    <Box ta='center' py={50} ta='center' >
      <Heading level={[3]} f={[4,5]}>
        Integrated Libraries
      </Heading>
      Select from an existing assortment of ready-to-go components specifically built for disitrbuted applications  
    </Box>

    <Flex justify='space-evenly' >
      <Box px={10} w={0.333333} >
        <Heading f={[3,4]}>
          uPort
        </Heading>
        <HorizontalRule bi='crimson' />
        <Paragraph f={[1]}>
          Decentralized Identity Systems
        </Paragraph>
      </Box>
      <Box px={10} w={0.333333} >
        <Heading f={[3,4]}>
          Ethers.js
        </Heading>
        <HorizontalRule bi='crimson' />
        <Paragraph f={[1]}>
          A promised based alternative to Web3
        </Paragraph>
      </Box>
      <Box px={10} w={0.333333} >
        <Heading f={[3,4]}>
          IPFS
        </Heading>
        <HorizontalRule bi='crimson' />
        <Paragraph f={[1]}>
          The of Internet asset management
        </Paragraph>
      </Box>
    </Flex>
  </Container>
  <Heading level={[3]} f={[3]} ta='center' mt={80} >
    Build The Future - Today
  </Heading>
</Section>
