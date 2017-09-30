import React from 'react'
import LinksContainer from './LinksContainer'
import Filters from './Filters'

const RootBox = () => {
  return (
    <div className="container-fluid">
      <Filters/>
      <LinksContainer/>
    </div>
  )
}

export default RootBox
