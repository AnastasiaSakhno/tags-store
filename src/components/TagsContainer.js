import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import TagList from './TagList'
import TagForm from './TagForm'


class TagsContainer extends Component {
  static propTypes = {
    loadTags: PropTypes.func.isRequired,
    addTag: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.loadTags()
  }

  render() {
    const tags = this.props.tags.filter( (tag) => {
      return tag.linkId === this.props.linkId
    })

    return (
      <div className="tags-box">
        <TagForm onTagSubmit={ this.props.addTag } linkId={ this.props.linkId }/>
        <TagList tags={ tags } onDestroy={ this.props.removeTag }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tags: state.tags
})

const mapDispatchToProps = (dispatch) => ({
  loadTags: () => {
    dispatch(actions.tags.load())
  },
  addTag: (tag) => {
    dispatch(actions.tags.add(tag))
  },
  removeTag: (tag) => {
    dispatch(actions.tags.remove(tag))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer)
