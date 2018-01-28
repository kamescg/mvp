/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */

/*---*--- Atoms ---*---*/
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container,
  BackgroundImage, BackgroundGradient
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
<Box>
  <EthersGanacheConnect/>
  <Container w={[720]} >
    <EthersWalletCreateRandom/>
    <EthersWalletGenerateMnemonicCard/>
  </Container>
  <Flex>
    <EthersBlockchainBlock blockNumber={1} foundry='block' styled={{w:0.5}} />
    <EthersBlockchainBlock blockNumber={2} foundry='block' styled={{w:0.5}} />
  </Flex>
  <EthersBlockchainBlock blockNumber={3} foundry='tx' />
</Box>