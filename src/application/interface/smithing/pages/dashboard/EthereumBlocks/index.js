/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { dataMining } from 'assets/shapes'
/*---*--- Atoms ---*---*/
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, SVG,
  BackgroundImage, BackgroundGradient, HorizontalRule
} from 'atomic'


/*---*--- Assimilation ---*---*/
import EthersBlockchainBlock from 'assimilation/fetching/ethers/EthersBlockchainBlock'
import EtherBlockchainBlockScan from 'assimilation/fetching/ethers/EtherBlockchainBlockScan'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={20} >
  <Flex align='center'>
    <SVG svg={dataMining} svgColor='blue' width={60} height={60} mr={15} />
    <Heading f={[6,7]} color='blue' >
      Ethereum Blocks
    </Heading>
  </Flex>
  <HorizontalRule bi='colorWheel'/>
  <EtherBlockchainBlockScan w={1} />
  <Flex>
    <EthersBlockchainBlock blockNumber={1} network='test' foundry='block' styled={{w:0.5}} />
    <EthersBlockchainBlock blockNumber={2} foundry='block' styled={{w:0.5}} />
  </Flex>
</Box>