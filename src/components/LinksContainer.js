import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import LinkList from './LinkList'
import LinkForm from './LinkForm'
import selectors from '../selectors'


class LinksContainer extends PureComponent {
  static propTypes = {
    loadLinks: PropTypes.func.isRequired,
    addLink: PropTypes.func.isRequired,
    removeLink: PropTypes.func.isRequired,
    addTag: PropTypes.func.isRequired,
    removeTag: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.loadLinks()
  }

  render() {
    return (
      <div className="links-container">
        <LinkForm onLinkSubmit={ this.props.addLink }/>
        <LinkList data={ this.props.links } onDestroy={ this.props.removeLink } addTag={ this.props.addTag } removeTag= { this.props.removeTag } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  links: selectors.links.filtered(state)
})

const mapDispatchToProps = (dispatch) => ({
  loadLinks: () => {
    dispatch(actions.links.load())
  },
  addLink: (link) => {
    dispatch(actions.links.add(link))
  },
  removeLink: (link) => {
    dispatch(actions.links.remove(link))
  },
  addTag: (tag) => {
    dispatch(actions.links.addTag(tag))
  },
  removeTag: (tag) => {
    dispatch(actions.links.removeTag(tag))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LinksContainer)
