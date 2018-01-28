/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { abacus, dataAnalytics, management, networkCloud, industrialDesign, flowChartComplex } from 'assets/shapes'
/*---*--- Atoms ---*---*/
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, SVG,
  BackgroundImage, BackgroundGradient, HorizontalRule
} from 'atomic'

/*---*--- Containers ---*---*/
import {
  EthersInfuraConnect,
  EthersGanacheConnect,
} from 'containers'

import EthersBlockchainBlock from 'assimilation/fetching/ethers/EthersBlockchainBlock'
import EthersWalletCreateRandom from 'assimilation/fetching/ethers/EthersWalletCreateRandom'
import EthersWalletGenerateMnemonicCard from 'assimilation/fetching/ethers/EthersWalletGenerateMnemonicCard'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={20} >
  <Flex align='center'>
    <SVG svg={abacus} svgColor='blue' width={60} height={60} mr={15} />
    <Heading f={[6,7]} color='blue' >
      Gas Analysis
    </Heading>
  </Flex>
  <HorizontalRule bi='colorWheel'/>
  <Flex>
    <EthersBlockchainBlock blockNumber={1} foundry='block' styled={{w:0.5}} />
    <EthersBlockchainBlock blockNumber={2} foundry='block' styled={{w:0.5}} />
  </Flex>
  <EthersBlockchainBlock blockNumber={3} foundry='tx' />
</Box>