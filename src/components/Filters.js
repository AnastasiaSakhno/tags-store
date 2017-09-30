import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import ArchiveFilter from './ArchiveFilter'

class Filters extends Component {
  static propTypes = {
    toggleArchive: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='filters'>
        <fieldset>
          <legend>Filters</legend>
          <ArchiveFilter archive={ this.props.filters.archive } onToggle={ this.props.toggleArchive }/>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  toggleArchive: () => {
    dispatch(actions.filters.toggleArchive())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
