/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from 'Component'

/* ------------------------------- Container -------------------------------- */
/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  /*--- Did Mount :: Component ---*/
  componentDidMount()
  {

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

})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
