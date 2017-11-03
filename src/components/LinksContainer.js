import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import LinkList from './LinkList'
import LinkForm from './LinkForm'
import selectors from '../selectors'

const { bool, array, func } = PropTypes

class LinksContainer extends PureComponent {
  static propTypes = {
    loadLinks: func.isRequired,
    addLink: func.isRequired,
    removeLink: func.isRequired,
    addTag: func.isRequired,
    removeTag: func.isRequired,
    links: array.isRequired,
    authenticated: bool.isRequired
  }

  componentDidMount() {
    if(this.props.authenticated) {
      this.props.loadLinks()
    }
  }

  render() {
    return (
      <div className="links-container">
        <LinkForm onLinkSubmit={ this.props.addLink }/>
        <LinkList
          data={ this.props.links }
          onDestroy={ this.props.removeLink }
          addTag={ this.props.addTag }
          removeTag= { this.props.removeTag } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  links: selectors.links.filtered(state),
  authenticated: state.session.authenticated
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
