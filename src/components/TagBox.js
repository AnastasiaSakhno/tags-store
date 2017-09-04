import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import TagList from './TagList'
import TagForm from './TagForm'


class TagBox extends PureComponent {
  static propTypes = {
    loadTags: PropTypes.func.isRequired,
    addTag: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.loadTags()
  }

  render() {
    return (
      <div className="tags-box">
        <h1>Tags</h1>
        <TagList data={ this.props.tags }/>
        <TagForm onTagSubmit={ this.props.addTag }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tags: state.tags
})

const mapDispatchToProps = (dispatch) => ({
  loadTags: (tags) => {
    dispatch(actions.tags.load(tags))
  },
  addTag: (tag) => {
    dispatch(actions.tags.add(tag))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TagBox)
