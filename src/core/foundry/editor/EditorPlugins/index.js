// Editor Plugins
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


import EditorPluginEthereumWalletBrain from 'workshop/editorPlugins/EditorPluginEthereumWalletBrain'
import EditorPluginEthereumWalletMnemonic from 'workshop/editorPlugins/EditorPluginEthereumWalletMnemonic'
import EditorPluginEthereumWalletRandom from 'workshop/editorPlugins/EditorPluginEthereumWalletRandom'

import EditorPluginUportAttestmentRequest from 'workshop/editorPlugins/EditorPluginUportAttestmentRequest'
import EditorPluginUportCredentialsRequest from 'workshop/editorPlugins/EditorPluginUportCredentialsRequest'
import EditorPluginUportIdentityCard from 'workshop/editorPlugins/EditorPluginUportIdentityCard'

// uPort
/* ------------------------ Initialize Dependencies ------------------------- */
export default {
  content: [
    slate(), 
    EditorPluginEthereumBlock,
    IpfsFileAdd,
    EditorPluginEthereumWalletBrain, EditorPluginEthereumWalletMnemonic, EditorPluginEthereumWalletRandom,
    EditorPluginUportAttestmentRequest, EditorPluginUportCredentialsRequest, EditorPluginUportIdentityCard
  ],
  defaultPlugin: 'eidenai/content/section',
  layout: [
    parallax({ defaultPlugin: slate() }),
    EditorPluginFlex({ defaultPlugin: slate() }),
    EditorPluginContainer({ defaultPlugin: slate() }),
    EditorPluginSection({ defaultPlugin: slate() }),
  ],
  native
}