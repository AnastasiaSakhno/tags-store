import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LinkForm extends Component {

  static propTypes = {
    onLinkSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const url = this.urlInput.value.trim()
    if(!url) { return }

    this.props.onLinkSubmit({ url: url })

    this.urlInput.value = ''
  }

  render() {
    return (
      <form className='link-form' onSubmit={ this.handleSubmit }>
        <input type='text' placeholder='Your url' ref={ el => { this.urlInput = el } }/>
        <input type='submit' value='Add link'/>
      </form>
    )
  }
}

export default LinkForm
