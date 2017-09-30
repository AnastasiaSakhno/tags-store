import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqId from '../utils/uniq-id'

class LinkForm extends Component {

  static propTypes = {
    onLinkSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const url = this.urlInput.value.trim()
    if(!url) { return }

    const id = uniqId()
    const name = this.nameInput.value.trim()
    const tags = this.tagsInput.value.replace(/ /g, '').split(',').map( (tagName) => {
      return { name: tagName, linkId: id }
    })

    this.props.onLinkSubmit({ id: id, name: name, url: url, tags: tags, archive: false })

    this.urlInput.value = this.nameInput.value = this.tagsInput.value = ''
  }

  render() {
    return (
      <form className='link-form' onSubmit={ this.handleSubmit }>
        <input type='text' placeholder='Link name' ref={ el => { this.nameInput = el } }/>
        <input type='text' placeholder='Your url' ref={ el => { this.urlInput = el } }/>
        <input type='text' placeholder='Tags (separate with ",")' ref={ el => { this.tagsInput = el } }/>
        <input type='submit' value='Add link'/>
      </form>
    )
  }
}

export default LinkForm
