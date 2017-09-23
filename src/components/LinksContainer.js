import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import LinkList from './LinkList'
import LinkForm from './LinkForm'


class LinksContainer extends PureComponent {
  static propTypes = {
    loadLinks: PropTypes.func.isRequired,
    addLink: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.loadLinks()
  }

  render() {
    return (
      <div className="links-container">
        <h3>Link to add</h3>
        <LinkForm onLinkSubmit={ this.props.addLink }/>
        <h3>Links</h3>
        <LinkList data={ this.props.links }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  links: state.links
})

const mapDispatchToProps = (dispatch) => ({
  loadLinks: () => {
    dispatch(actions.links.load())
  },
  addLink: (link) => {
    dispatch(actions.links.add(link))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LinksContainer)
