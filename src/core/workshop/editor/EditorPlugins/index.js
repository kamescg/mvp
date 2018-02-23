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

// Dether
import EditorPluginDetherAddSellPoint from 'workshop/plugins/EditorPluginDetherAddSellPoint'
import EditorPluginDetherDeleteSellPoint from 'workshop/plugins/EditorPluginDetherDeleteSellPoint'
import EditorPluginDetherGetAllTellers from 'workshop/plugins/EditorPluginDetherGetAllTellers'
import EditorPluginDetherGetTeller from 'workshop/plugins/EditorPluginDetherGetTeller'
import EditorPluginDetherGetTellerBalance from 'workshop/plugins/EditorPluginDetherGetTellerBalance'
import EditorPluginDetherGetTellersInZone from 'workshop/plugins/EditorPluginDetherGetTellersInZone'
import EditorPluginDetherSendToBuyer from 'workshop/plugins/EditorPluginDetherSendToBuyer'

// uPort
import EditorPluginIdentityLogin from 'workshop/plugins/EditorPluginIdentityLogin'
/* ------------------------ Initialize Dependencies ------------------------- */
export default {
  content: [
    slate(), 
    EditorPluginEthereumBlock,
    EditorPluginDetherAddSellPoint,
    EditorPluginDetherGetAllTellers,
    EditorPluginDetherGetTellerBalance,
    EditorPluginDetherGetTellersInZone,
    EditorPluginDetherSendToBuyer,
    EditorPluginIdentityLogin,
    spacer,image, video, divider, html5video,
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