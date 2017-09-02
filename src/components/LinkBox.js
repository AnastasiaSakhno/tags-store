import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import LinkList from './LinkList'
import LinkForm from './LinkForm'


class LinkBox extends PureComponent {
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
      <div className="link-box">
        <h1>Links</h1>
        <LinkList data={this.props.links}/>
        <LinkForm onLinkSubmit={ this.props.addLink }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  links: state.links
})

const mapDispatchToProps = (dispatch) => ({
  loadLinks: (links) => {
    dispatch(actions.links.loadLinks(links))
  },
  addLink: (link) => {
    dispatch(actions.links.addLink(link))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkBox)
