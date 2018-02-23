/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Route } from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import HTMLRender from 'workshop/editor/HTMLRender'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Route
exact
path="/content/:alias"
component={HTMLRender} 
delta='content'
/>