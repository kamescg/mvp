/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled.div`

`
/* ------------------------------- Component -------------------------------- */
const Component = props => (
  <Wrapper {...props}>
    {props.children}
  </Wrapper>
)
/* ------------------------- Component Properties --------------------------- */

/* ---------------------------- Export Package ------------------------------ */
export default Component