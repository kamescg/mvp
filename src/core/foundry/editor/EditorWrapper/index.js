/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
/* ------------------------- Internal Dependencies -------------------------- */
import EditorPlugins from 'foundry/editor/EditorPlugins'
import slate from 'ory-editor-plugins-slate'
import spacer from 'ory-editor-plugins-spacer'
import image from 'ory-editor-plugins-image'
import video from 'ory-editor-plugins-video'
import parallax from 'ory-editor-plugins-parallax-background'
import html5video from 'ory-editor-plugins-html5-video'
import divider from 'ory-editor-plugins-divider'
import native from 'ory-editor-plugins-default-native'
// Editor Plugins
import EditorPluginEthereumBlock from 'workshop/plugins/EditorPluginEthereumBlock'
import EditorPluginSection from 'workshop/plugins/EditorPluginSection'
import EditorPluginContainer from 'workshop/plugins/EditorPluginContainer'
import EditorPluginFlex from 'workshop/plugins/EditorPluginFlex'

// IPFS
import IpfsFileAdd from 'workshop/pluginsIpfs/EditorPluginIpfsFileAdd'

// Ethers
import EditorPluginEthereumWalletBrain from 'workshop/editorPlugins/EditorPluginEthereumWalletBrain'
import EditorPluginEthereumWalletMnemonic from 'workshop/editorPlugins/EditorPluginEthereumWalletMnemonic'
import EditorPluginEthereumWalletRandom from 'workshop/editorPlugins/EditorPluginEthereumWalletRandom'

// uPort
import EditorPluginUportAttestmentRequest from 'workshop/editorPlugins/EditorPluginUportAttestmentRequest'
import EditorPluginUportCredentialsRequest from 'workshop/editorPlugins/EditorPluginUportCredentialsRequest'
import EditorPluginUportIdentityCard from 'workshop/editorPlugins/EditorPluginUportIdentityCard'

/* ------------------------ Initialize Dependencies ------------------------- */
const plugins = {
  content: [
    slate(), 
    EditorPluginEthereumBlock,
    IpfsFileAdd,
    EditorPluginEthereumWalletBrain, EditorPluginEthereumWalletMnemonic, EditorPluginEthereumWalletRandom,
    EditorPluginUportAttestmentRequest, EditorPluginUportCredentialsRequest, EditorPluginUportIdentityCard,
    spacer,image, video, divider, html5video,
  ],
  layout: [
    parallax({ defaultPlugin: slate() }),
    EditorPluginFlex({ defaultPlugin: slate() }),
    EditorPluginContainer({ defaultPlugin: slate() }),
    EditorPluginSection({ defaultPlugin: slate() }),
  ],
  native
}
/* ------------------------------- Component -------------------------------- */
const content = createEmptyState()
export default new Editor({
  plugins,
  editables: [
    content
  ],
})
