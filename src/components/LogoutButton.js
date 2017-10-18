import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

const LogoutButton = ({ logout }) => (
  <button onClick={ logout }>Logout</button>
)

LogoutButton.propTypes = ({
  logout: PropTypes.func.isRequired
})

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout())
  }
})

export default connect(null, mapDispatchToProps)(LogoutButton)
