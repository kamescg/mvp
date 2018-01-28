/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
import annyang from 'annyang'

/* ------------------------- Internal Dependencies -------------------------- */
import { 
  // Aside
  themeLayoutDashboardAsideOn,
  themeLayoutDashboardAsideOff,
  themeLayoutDashboardAsideToggle,
  themeLayoutDashboardAsideSmall,
  themeLayoutDashboardAsideNormal,
  themeLayoutDashboardAsideLarge,
  // Footer
  themeLayoutDashboardFooterOn,
  themeLayoutDashboardFooterOff,
  themeLayoutDashboardFooterToggle,
  themeLayoutDashboardFooterSmall,
  themeLayoutDashboardFooterNormal,
  themeLayoutDashboardFooterLarge,  
  // Header
  themeLayoutDashboardHeaderOn,
  themeLayoutDashboardHeaderOff,
  themeLayoutDashboardHeaderToggle,
  themeLayoutDashboardHeaderSmall,
  themeLayoutDashboardHeaderNormal,
  themeLayoutDashboardHeaderLarge,
  
  themeLayoutPanelsOn,
  themeLayoutPanelsOff,
  themeLayoutPanelsToggle,
  themeLayoutPanelLeftToggle,
  themeLayoutPanelRightToggle,

} from 'appStore/departments/actions'

import { history } from 'appStore/configuration';

import { uPortGetCredentialsRequest } from 'assimilation/symbiosis/actions'
import { uPortGetAttestCredentialsRequest } from 'assimilation/symbiosis/actions'
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    const self = this 
    annyang.addCommands({

        /*---*--- Network ---*---*/
        'network *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('test'):
                this.props.store.dispatch(ethers.providerChange({
                  payload: 'json'
                }))
                break;
              case('live'):
                this.props.store.dispatch(ethers.providerChange({
                  payload: 'default'
                }))
              case('infura'):
              console.log(eventVoice)
                this.props.store.dispatch(ethers.providerChange({
                  payload: 'default'
                }))
                break;
            }
        },
        /*---*--- Wallet ---*---*/
        'wallet *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('random'):
                this.props.store.dispatch(ethers.walletGenerateRandom('REQUEST')(
                  null,
                  {
                    delta: `wallet|random`
                  },
                ))
                break;
            }
        },
        /*---*--- Blocks ---*---*/
        'block *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('100'):
                this.props.store.dispatch(ethers.blockchainBlock('REQUEST')(
                  Number(450000),
                  {
                    delta: `block|scan|450000`,
                    network: {
                      provider: 'default'
                    }
                  }
                ))
                break;
                default:
                this.props.store.dispatch(ethers.blockchainBlock('REQUEST')(
                  Number(eventVoice.split(",").join("")),
                  {
                    delta: `block|scan|${eventVoice.split(",").join("")}`,
                    network: {
                      provider: 'default'
                    }
                  }
                ))
                console.log(eventVoice.split(",").join("") )
            }
        },
        'blocks latest *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
                default:
                history.push('/dashboard/blocks')
                const blockEnd = 4154321 - Number(eventVoice.toLowerCase())
                for (var index = 4154321; index != blockEnd; index--) {
                  this.props.store.dispatch(ethers.blockchainBlock('REQUEST')(
                    Number(index),
                    {
                      delta: `block|scan|${index}`,
                      network: {
                        provider: 'default'
                      }
                    }
                  ))
                }
            }
        },
        /*---*--- Login ---*---*/
        'login *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('blockchain'):
                history.push('/dashboard/login')
                this.props.store.dispatch(uPortGetCredentialsRequest({
                  payload: {
                    requested: ['name', 'firebase', 'email', 'phone', 'avatar'],
                    notifications: true
                  },
                  metadata: {
                    delta: 'credentials'
                  }
                }))
                break;
            }
        },
        /*---*--- Identity ---*---*/
        'identity *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('blockchain'):
                this.props.store.dispatch(uPortGetCredentialsRequest({
                  payload: {
                    requested: ['name', 'email', 'phone', 'avatar'],
                    notifications: true
                  },
                  metadata: {
                    delta: 'credentials'
                  }
                }))
                break;
              case('proclaim'):
                this.props.store.dispatch(uPortGetAttestCredentialsRequest({
                  payload: {
                    sub: 'Ox' + '2omEwA8DWf3876sYn5KzfCz2J2rUVy5PuoR',
                    claim: {'eidenai': 'active'}
                  },
                  metadata: {
                    delta: 'attestCredentials'
                  }
                }))
                break;
                default:

                console.log(eventVoice)
            }
        },
        /*---*--- New ---*---*/
        'new *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('deal' || 'deals'):
                history.push('/dashboard/wallet/new')
                break;
            }
        },
        /*---*--- Routing ---*---*/
        'view *command': eventVoice=>{ 
            switch (eventVoice.toLowerCase()) {
              case('home'):
                history.push('/dashboard')
                break;
              case('blocks'):
                history.push('/dashboard/blocks')
                break;
              case('wallet'):
                history.push('/dashboard/wallet')
                break;
            }
        },
        /*---*--- Dashboard ---*---*/
        'dashboard *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              case('focus'):
                self.props.headerOff()
                self.props.asideOff()
                break;
              case('full'):
                self.props.headerOn()
                self.props.asideOn()
                break;
              case('small'):
                self.props.headerSmall()
                self.props.asideSmall()
                break;
              case('large'):
                self.props.headerNormal()
                self.props.asideNormal()
                break;

              /*---* Aside : Theme *---*/
              case('aside on'):
                self.props.headerOn()
                break;
              case('aside off'):
                self.props.asideOff()
                break;
              case('aside small'):
                self.props.asideSmall()
                break;
              case('aside normal'):
                self.props.asideNormal()
                break;
              case('aside large'):
                self.props.asideLarge()
                break;
              /*---* Header : Theme *---*/
              case('header on'):
                self.props.headerOn()
                break;
              case('header off'):
                self.props.headerOff()
                break;
              case('header small'):
                self.props.headerSmall()
                break;
              case('header normal'):
                self.props.headerNormal()
                break;
              case('header large'):
                self.props.headerLarge()
                break;
            }
        },
        /*---*--- Aside : Zone ---*---*/
        'aside *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              /*---* Aside : Theme *---*/
              case('on'):
                self.props.asideOn()
                break;
              case('off'):
                self.props.asideOff()
                break;
              case('small'):
                self.props.asideSmall()
                break;
              case('normal'):
                self.props.asideNormal()
                break;
              case('large'):
                self.props.asideLarge()
                break;
            }
        },
        /*---*--- Footer : Zone ---*---*/
        'footer *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              /*---* Aside : Theme *---*/
              case('on'):
                self.props.footerOn()
                break;
              case('off'):
                self.props.footerOff()
                break;
              case('small'):
                self.props.footerSmall()
                break;
              case('normal'):
                self.props.footerNormal()
                break;
              case('large'):
                self.props.footerLarge()
                break;
            }
        },

          /*---*--- Dashboard ---*---*/
          'panel *command': eventVoice=>{
            switch (eventVoice.toLowerCase()) {
              case('on'):
                self.props.panelsOn()
                break;
              case('off'):
                self.props.panelsOff()
                break;
              case('toggle'):
                self.props.panelsToggle()
                break;
              case('left toggle'):
                self.props.panelLeftToggle()
                break;
              case('right toggle'):
                self.props.panelRightToggle()
                break;
            }
        }
    });

    /*---*--- SpeechKITT ---*---*/
    // TODO : Properly implement SpeechKITT... @kamescg was lazy and ploppped the CDN js file in the HTML file - Boooo!

    if(window.SpeechKITT) {
      // Tell KITT to use annyang 
      window.SpeechKITT.annyang();
    
      // Define a stylesheet for KITT to use 
      window.SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');
    
      // Render KITT's interface 
      window.SpeechKITT.vroom();
      }
    }
  }
)

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> ({

})

const mapDispatchToProps = (dispatch, props) => ({
  asideOn: () => dispatch(themeLayoutDashboardAsideOn()),
  asideOff: () => dispatch(themeLayoutDashboardAsideOff()),
  asideToggle: () => dispatch(themeLayoutDashboardAsideToggle()),
  asideSmall: () => dispatch(themeLayoutDashboardAsideSmall()),
  asideNormal: () => dispatch(themeLayoutDashboardAsideNormal()),
  asideLarge: () => dispatch(themeLayoutDashboardAsideLarge()),

  footerOn: () => dispatch(themeLayoutDashboardFooterOn()),
  footerOff: () => dispatch(themeLayoutDashboardFooterOff()),
  footerToggle: () => dispatch(themeLayoutDashboardFooterToggle()),
  footerSmall: () => dispatch(themeLayoutDashboardFooterSmall()),
  footerNormal: () => dispatch(themeLayoutDashboardFooterNormal()),
  footerLarge: () => dispatch(themeLayoutDashboardFooterLarge()),
  
  headerOn: () => dispatch(themeLayoutDashboardHeaderOn()),
  headerOff: () => dispatch(themeLayoutDashboardHeaderOff()),
  headerToggle: () => dispatch(themeLayoutDashboardHeaderToggle()),
  headerSmall: () => dispatch(themeLayoutDashboardHeaderSmall()),
  headerNormal: () => dispatch(themeLayoutDashboardHeaderNormal()),
  headerLarge: () => dispatch(themeLayoutDashboardHeaderLarge()),
  

  panelsOn: () => dispatch(themeLayoutPanelsOn()),
  panelsOff: () => dispatch(themeLayoutPanelsOff()),
  panelsToggle: () => dispatch(themeLayoutPanelsToggle()),
  panelLeftToggle: () => dispatch(themeLayoutPanelLeftToggle()),
  panelRightToggle: () => dispatch(themeLayoutPanelRightToggle()),
  
})

const Empty = props => props.children
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Empty);
