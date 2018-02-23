/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Route} from 'atomic'
import EditorPage from 'foundry/editor/EditorPage'
import EditorInterface from 'foundry/editor/EditorInterface'

/* ---------------------------- Initialization ------------------------------ */
export default props => !window.store ? null :
<Box 
display='inline-block'
h={'100vh'} w={1}
bg='white' 
>
  <Route
    exact
    path="/editor/:alias"
    component={EditorPage} 
  />
  <Route
    exact
    path="/editor/:alias"
    component={EditorInterface} 
  />
</Box>