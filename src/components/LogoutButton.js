import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'

const LogoutButton = ({ logout }) => (
  <button onClick={ logout }>Logout</button>
)

LogoutButton.propTypes = ({
  logout: PropTypes.func.isRequired
})

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(actions.auth.logout())
  }
})

export default connect(null, mapDispatchToProps)(LogoutButton)
