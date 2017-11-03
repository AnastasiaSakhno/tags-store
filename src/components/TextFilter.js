import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextFilter extends Component {
  static propTypes = {
    text: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }

  onSubmitHandler = () => {
    const text = this.filterInput.value.trim()
    this.props.onSubmit(text)
  }

  render() {
    return (
      <div className='text-filter'>
        <input
          type='text'
          value={ this.text }
          placeholder='Filter by link or tag'
          onChange={ this.onSubmitHandler }
          ref={ el => { this.filterInput = el } }/>
      </div>
    )
  }
}

export default TextFilter
