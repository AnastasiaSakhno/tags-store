import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import ArchiveFilter from './ArchiveFilter'
import TextFilter from './TextFilter'

class Filters extends Component {
  static propTypes = {
    toggleArchive: PropTypes.func.isRequired,
    searchByText: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='filters'>
        <fieldset>
          <legend>Filters</legend>
          <ArchiveFilter archive={ this.props.filters.archive } onToggle={ this.props.toggleArchive }/>
          <TextFilter text={ this.props.filters.text } onSubmit={ this.props.searchByText }/>
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
  },
  searchByText: (text) => {
    dispatch(actions.filters.searchByText(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
