/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { exampleAction } from 'store/departments/actions'

function mapStateToProps(state) {
  const { data } = state
  return {}
}

const mapDispatchToProps = dispatch => ({
  example: () => dispatch(exampleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
