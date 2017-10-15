import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as sessionActions from '../actions/auth'

class Login extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleSubmit(history) {
    this.props.actions.login({ email: this.emailInput.value, password: this.passwordInput.value, history: history })
  }

  render() {
    const SubmitButton = withRouter(({ history }) => (
      <input type="submit" value="Login" onClick={ () => this.handleSubmit(history) }/>
    ))
    return (
      <div className="login-box">
        <input type="email" placeholder="Email" ref={ (el) => { this.emailInput = el } }/>
        <input type="password" placeholder="Password" ref={ (el) => { this.passwordInput = el } }/>
        <SubmitButton/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Login)
