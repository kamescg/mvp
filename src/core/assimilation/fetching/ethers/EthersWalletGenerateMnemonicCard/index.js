/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  withStateHandlers,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { fromEthers } from 'assimilation/symbiosis/selectors'
import ethers from 'assimilation/symbiosis/ethers/actions'
import { ethersWalletCreateFromMenemonicRequest } from 'assimilation/symbiosis/actions'
/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  console.log(data)
  dispatch(ethers.walletGenerateMenomonic('REQUEST')(
    data.mnemonicPhrase,
    {
      delta: `wallet|mnemonic`
    },
    
    ))
})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

const StateHandlers = withStateHandlers(
    ({ mnemonic = ''  }) => ({
      mnemonic
    }),
    {
      setMnemonic: () => (value) => ({
        mnemonic:value,
      }),
    }
  )

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})
const config = {
  form: 'EthersWalletGenerateMnemonic',
  fields: [
    'nameEvent',
    'nameEventAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state, 'wallet|mnemonic')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersWalletCreateFromMenemonicRequest: ()=>dispatch(ethers.walletGenerateMenomonic('REQUEST')(
    null,
    {
      delta:  'wallet|mnemonic'
    }
    
    )),
})
const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))

const FormRedux = props => <FormRender { ...props} />
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  spinnerWhileLoading(
    (props) => !props ? true : false
  ),
  FormConfiguration,
  QueryLifecycle,
  StateHandlers,
)(FormRedux);
