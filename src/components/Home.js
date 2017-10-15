import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/auth'
import RootBox from './RootBox'
import LogoutButton from './LogoutButton'

const Home = ({ logout, user, authenticated }) => (
  <div>
    <h3>Welcome { user.email }</h3>
    <LogoutButton/>
    <RootBox/>
  </div>
)

const { object, bool } = PropTypes

Home.propTypes = {
  actions: object.isRequired,
  user: object.isRequired,
  authenticated: bool.isRequired
}

const mapStateToProps = (state) => ({
  user: state.session.user,
  authenticated: state.session.authenticated
})

const mapDispatchToProps = (dispatch) => {
  logout: () => {
    dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
