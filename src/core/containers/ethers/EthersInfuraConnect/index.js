/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'

/*---*--- Ethers :: Assimilation ---*---*/
import ethers from 'assimilation/symbiosis/ethers/actions'
/* ------------------------------- Container -------------------------------- */
/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  /*--- Did Mount :: Component ---*/
  componentDidMount()
  {

    const payload = {
      network: 'homestead',
    }

    this.props.ethersNewProviderInfuraRequest({
      payload
    })

  },

  /*--- Did Update :: Component ---*/
  componentDidUpdate(prevProps)
  {

  }

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch, props) => ({
  ethersNewProviderInfuraRequest: settings => dispatch(ethers.providerInfura('REQUEST')(
    {
      network: 'homestead',
    },
    {
      delta: `provider|json`
    }
    )),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
