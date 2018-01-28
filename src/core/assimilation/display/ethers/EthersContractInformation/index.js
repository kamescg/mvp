/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import EthersContractMethods from '../EthersContractMethods'
 const Scroll = styled(Flex)`
  overflow-x: hidden;
 `
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box boxShadow={2} p={15} {...props.styled} >
  <Heading f={[4]} color='blue' >
    {props.ethName || props.delta } ABI
  </Heading>
  <Paragraph fw='300'><strong>network:</strong> {idx(props, _=>_.data.provider.name)}</Paragraph>
  <Paragraph fw='300'> {idx(props, _=>_.data.address)}</Paragraph>
  <HorizontalRule bi='colorWheel' />
  {props.transactions}
  {
    props.data.interface.abi.map(ethInterface => <EthersContractMethods {...ethInterface} /> )
  }
</Box>
