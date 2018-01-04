/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

/* ------------------------- Internal Dependencies -------------------------- */

/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Child Components ----------------------------- */

/* ---------------------------- Module Package ------------------------------ */
class Container extends Component {

  /*--- Property Types ---*/
  static propTypes = {
    loading: PropTypes.bool
  }

  /*--- Default Properties ---*/
  static defaultProps = {
    loading: true
  }

  /*--- Component Mount ---*/
  componentDidMount() {
    
  }

  /*--- Render ---*/
  render() {
    return (
    <div>
     
    </div>
    )
  }
}
/* ---------------------------- Module Methods ------------------------------ */

/* Map State To Props */
const mapStateToProps = state => ({

})

/* Map Dispatch To Props */
const mapDispatchToProps = (state) => ({

})
/* ---------------------------- Export Package ------------------------------ */
export default connect(mapStateToProps, mapDispatchToProps)(Container)

/* ----------------------------- Documentation ------------------------------ */
