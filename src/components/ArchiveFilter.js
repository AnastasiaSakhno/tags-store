import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArchiveFilter extends Component {
  static propTypes = {
    archive: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
  }

  onToggleHandler = (e) => {
    this.props.onToggle()
  }

  render() {
    return (
      <div className='archive-filter'>
        <label type='checkbox'>
          <input type='checkbox' checked={ this.archive } onChange={ this.onToggleHandler }/> Show Archive?
        </label>
      </div>
    )
  }
}

export default ArchiveFilter
