/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { dataMining } from 'assets/shapes'
/*---*--- Atoms ---*---*/
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, SVG, List,
  BackgroundImage, BackgroundGradient, HorizontalRule,
  Route
} from 'atomic'



import simpleStorage from 'contracts/SimpleStorage.json'
import contracts from 'contracts'

/*---*--- Assimilation ---*---*/
import EthersContractInit from 'assimilation/fetching/ethers/EthersContractInit'

console.log(contracts)
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={20} >
  <Flex align='center'>
    <SVG svg={dataMining} svgColor='blue' width={60} height={60} mr={15} />
    <Heading f={[6,7]} color='blue' >
      Smart Contracts
    </Heading>
  </Flex>
  <HorizontalRule bi='colorWheel'/>
  {
    Object.keys(contracts).map(i=>
    <Route
      path={`/dashboard/smart-contract/${contracts[i].contractName}`}
      component={EthersContractInit}
      delta={contracts[i].contractName}
      ethName={contracts[i].contractName}
      ethAbi={contracts[i].abi}
      ethAddress={'0x345ca3e014aaf5dca488057592ee47305d9b3e10'}
    />
  )}
</Box>