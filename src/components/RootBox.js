import React from 'react'
import LinksContainer from './LinksContainer'
import Filters from './Filters'

const RootBox = () => {
  return (
    <div className="root-box">
      <Filters/>
      <LinksContainer/>
    </div>
  )
}

export default RootBox
